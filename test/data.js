MakePlural.load(plurals, ordinals);

function testPluralData(type, lc) {
    var opt = { ordinals: (type == 'ordinal') };

    it('has autogenerated tests', function(){
        var mp;
        expect(mp = new MakePlural(lc, opt)).to.not.throwException();
        expect(mp.obj.tests[type]).to.not.be.empty();
    });

    var mp = new MakePlural(lc, opt);
    for (var cat in mp.obj.tests[type]) {
        (function (cat) {
            it(cat + ': ' + MakePlural.rules[type][lc]['pluralRule-count-' + cat], function() {
                var test = mp.obj.tests.testCat.bind(mp.obj.tests);
                expect(test).withArgs(type, cat).to.not.throwException();
            });
        })(cat);
    }
}

describe('MakePlural data self-test', function(){
    describe('Cardinal rules', function(){
        for (var lc in plurals.supplemental['plurals-type-cardinal']) {
            describe(lc, function(){
                testPluralData('cardinal', lc);
            });
        }
    });

    describe('Ordinal rules', function(){
        for (var lc in ordinals.supplemental['plurals-type-ordinal']) {
            describe(lc, function(){
                testPluralData('ordinal', lc);
            });
        }
    });
});