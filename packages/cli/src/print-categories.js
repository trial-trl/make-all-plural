import { identifier } from 'safe-identifier'
import * as common from './common'
import umd from './print-umd'

export default function printCategoriesModule(MakePlural, { es6 }) {
  const { categories: cc } = MakePlural.ordinals
    ? common.combined
    : common.cardinals
  const categories = Object.keys(MakePlural.rules.cardinal).map(lc => {
    const mpc = new MakePlural(lc)
    mpc.compile()
    mpc.test()
    const cat = JSON.stringify(mpc.categories).replace(/"(\w+)":/g, '$1:')
    const i = cc.indexOf(cat)
    return [lc, i === -1 ? cat : `_${i}`]
  })

  let str
  if (es6) {
    str = cc.map((c, i) => `const _${i} = ${c};`).join('\n') + '\n\n'
    for (const [lc, cat] of categories) {
      const id = identifier(lc)
      str += `export const ${id} = ${cat};\n`
    }
  } else {
    str = cc.map((c, i) => `var _${i} = ${c};`).join('\n') + '\n\n'
    const cm = categories.map(([lc, cat]) => `${identifier(lc)}: ${cat}`)
    str += umd('pluralCategories', cm.join(',\n')) + '\n'
  }
  return str
}

