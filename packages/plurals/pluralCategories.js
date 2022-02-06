var z = "zero", o = "one", t = "two", f = "few", m = "many", x = "other";
var a = {cardinal:[o,x],ordinal:[x]};
var b = {cardinal:[o,x],ordinal:[o,x]};
var c = {cardinal:[x],ordinal:[x]};
var d = {cardinal:[o,f,m,x],ordinal:[x]};
var e = {cardinal:[o,t,x],ordinal:[x]};

(function (root, pluralCategories) {
  Object.defineProperty(pluralCategories, '__esModule', { value: true });
  if (typeof define === 'function' && define.amd) define(pluralCategories);
  else if (typeof exports === 'object') module.exports = pluralCategories;
  else root.pluralCategories = pluralCategories;
}(this, {
af: a,
ak: a,
am: a,
an: a,
ar: {cardinal:[z,o,t,f,m,x],ordinal:[x]},
ars: {cardinal:[z,o,t,f,m,x],ordinal:[x]},
as: {cardinal:[o,x],ordinal:[o,t,f,m,x]},
asa: a,
ast: a,
az: {cardinal:[o,x],ordinal:[o,f,m,x]},
bal: b,
be: {cardinal:[o,f,m,x],ordinal:[f,x]},
bem: a,
bez: a,
bg: a,
bho: a,
bm: c,
bn: {cardinal:[o,x],ordinal:[o,t,f,m,x]},
bo: c,
br: {cardinal:[o,t,f,m,x],ordinal:[x]},
brx: a,
bs: {cardinal:[o,f,x],ordinal:[x]},
ca: {cardinal:[o,x],ordinal:[o,t,f,x]},
ce: a,
ceb: a,
cgg: a,
chr: a,
ckb: a,
cs: d,
cy: {cardinal:[z,o,t,f,m,x],ordinal:[z,o,t,f,m,x]},
da: a,
de: a,
doi: a,
dsb: {cardinal:[o,t,f,x],ordinal:[x]},
dv: a,
dz: c,
ee: a,
el: a,
en: {cardinal:[o,x],ordinal:[o,t,f,x]},
eo: a,
es: {cardinal:[o,m,x],ordinal:[x]},
et: a,
eu: a,
fa: a,
ff: a,
fi: a,
fil: b,
fo: a,
fr: {cardinal:[o,m,x],ordinal:[o,x]},
fur: a,
fy: a,
ga: {cardinal:[o,t,f,m,x],ordinal:[o,x]},
gd: {cardinal:[o,t,f,x],ordinal:[o,t,f,x]},
gl: a,
gsw: a,
gu: {cardinal:[o,x],ordinal:[o,t,f,m,x]},
guw: a,
gv: {cardinal:[o,t,f,m,x],ordinal:[x]},
ha: a,
haw: a,
he: {cardinal:[o,t,m,x],ordinal:[x]},
hi: {cardinal:[o,x],ordinal:[o,t,f,m,x]},
hnj: c,
hr: {cardinal:[o,f,x],ordinal:[x]},
hsb: {cardinal:[o,t,f,x],ordinal:[x]},
hu: b,
hy: b,
ia: a,
id: c,
ig: c,
ii: c,
io: a,
is: a,
it: {cardinal:[o,m,x],ordinal:[m,x]},
iu: e,
ja: c,
jbo: c,
jgo: a,
jmc: a,
jv: c,
jw: c,
ka: {cardinal:[o,x],ordinal:[o,m,x]},
kab: a,
kaj: a,
kcg: a,
kde: c,
kea: c,
kk: {cardinal:[o,x],ordinal:[m,x]},
kkj: a,
kl: a,
km: c,
kn: a,
ko: c,
ks: a,
ksb: a,
ksh: {cardinal:[z,o,x],ordinal:[x]},
ku: a,
kw: {cardinal:[z,o,t,f,m,x],ordinal:[o,m,x]},
ky: a,
lag: {cardinal:[z,o,x],ordinal:[x]},
lb: a,
lg: a,
lij: {cardinal:[o,x],ordinal:[m,x]},
lkt: c,
ln: a,
lo: {cardinal:[x],ordinal:[o,x]},
lt: d,
lv: {cardinal:[z,o,x],ordinal:[x]},
mas: a,
mg: a,
mgo: a,
mk: {cardinal:[o,x],ordinal:[o,t,m,x]},
ml: a,
mn: a,
mo: {cardinal:[o,f,x],ordinal:[o,x]},
mr: {cardinal:[o,x],ordinal:[o,t,f,x]},
ms: {cardinal:[x],ordinal:[o,x]},
mt: d,
my: c,
nah: a,
naq: e,
nb: a,
nd: a,
ne: b,
nl: a,
nn: a,
nnh: a,
no: a,
nqo: c,
nr: a,
nso: a,
ny: a,
nyn: a,
om: a,
or: {cardinal:[o,x],ordinal:[o,t,f,m,x]},
os: a,
osa: c,
pa: a,
pap: a,
pcm: a,
pl: d,
prg: {cardinal:[z,o,x],ordinal:[x]},
ps: a,
pt: {cardinal:[o,m,x],ordinal:[x]},
pt_PT: {cardinal:[o,m,x],ordinal:[x]},
rm: a,
ro: {cardinal:[o,f,x],ordinal:[o,x]},
rof: a,
ru: d,
rwk: a,
sah: c,
saq: a,
sat: e,
sc: {cardinal:[o,x],ordinal:[m,x]},
scn: {cardinal:[o,x],ordinal:[m,x]},
sd: a,
sdh: a,
se: e,
seh: a,
ses: c,
sg: c,
sh: {cardinal:[o,f,x],ordinal:[x]},
shi: {cardinal:[o,f,x],ordinal:[x]},
si: a,
sk: d,
sl: {cardinal:[o,t,f,x],ordinal:[x]},
sma: e,
smi: e,
smj: e,
smn: e,
sms: e,
sn: a,
so: a,
sq: {cardinal:[o,x],ordinal:[o,m,x]},
sr: {cardinal:[o,f,x],ordinal:[x]},
ss: a,
ssy: a,
st: a,
su: c,
sv: b,
sw: a,
syr: a,
ta: a,
te: a,
teo: a,
th: c,
ti: a,
tig: a,
tk: {cardinal:[o,x],ordinal:[f,x]},
tl: b,
tn: a,
to: c,
tpi: c,
tr: a,
ts: a,
tzm: a,
ug: a,
uk: {cardinal:[o,f,m,x],ordinal:[f,x]},
und: c,
ur: a,
uz: a,
ve: a,
vi: {cardinal:[x],ordinal:[o,x]},
vo: a,
vun: a,
wa: a,
wae: a,
wo: c,
xh: a,
xog: a,
yi: a,
yo: c,
yue: c,
zh: c,
zu: a
}));
