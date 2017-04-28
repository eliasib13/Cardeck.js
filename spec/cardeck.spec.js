var Cardeck = require('../index.js');
var Deck = Cardeck.Deck;
var Card = Cardeck.Card;

describe('Testing Jasmine is well installed and configured', function() {
    it('True is true :)', function() {
        expect(true).toBeTrue();
    });
});

describe('Testing Card constructor', function() {
    it('Card default constructor (no parameters)', function() {
        var testCard = new Card();

        expect(testCard).toHaveNumber('value');
        expect(testCard).toHaveString('type');
        expect(testCard).toHaveString('imgPath');

        expect(testCard.value).toBe(0);
        expect(testCard.type).toBe('default');
        expect(testCard.imgPath).toBe('./card.png');
    });

    it('Card constructor, only value specified', function() {
        var value = 5;
        var testCard = new Card(value);

        expect(testCard).toHaveNumber('value');
        expect(testCard).toHaveString('type');
        expect(testCard).toHaveString('imgPath');

        expect(testCard.value).toBe(value);
        expect(testCard.type).toBe('default');
        expect(testCard.imgPath).toBe('./card.png');
    });

    it('Card constructor, only value and type specified', function() {
        var value = 5,
            type = 'Hearts';
        var testCard = new Card(value, type);

        expect(testCard).toHaveNumber('value');
        expect(testCard).toHaveString('type');
        expect(testCard).toHaveString('imgPath');

        expect(testCard.value).toBe(value);
        expect(testCard.type).toBe(type);
        expect(testCard.imgPath).toBe('./card.png');
    });

    it('Card constructor with all parameters specified', function() {
        var value = 5,
            type = 'Hearts',
            imgPath = './img/my-img.jpg';
        var testCard = new Card(value, type, imgPath);

        expect(testCard).toHaveNumber('value');
        expect(testCard).toHaveString('type');
        expect(testCard).toHaveString('imgPath');

        expect(testCard.value).toBe(value);
        expect(testCard.type).toBe(type);
        expect(testCard.imgPath).toBe(imgPath);
    });
});