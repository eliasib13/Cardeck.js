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

describe('Testing Card methods', function() {
    it('Method setValue', function() {
        var testCard = new Card();
        var value = 8;

        testCard.setValue(value);

        expect(testCard.value).toBe(value);
    });

    it('Method getValue', function() {
        var value = 10;
        var testCard = new Card(value);

        expect(testCard.getValue()).toBe(value);
    });

    it('Method setType', function() {
        var testCard = new Card();
        var type = 'Aces';

        testCard.setType(type);

        expect(testCard.type).toBe(type);
    });

    it('Method getType', function() {
        var type = 'Diamonds';
        var testCard = new Card(null, type);

        expect(testCard.getType()).toBe(type);
    });

    it('Method setImgPath', function() {
        var testCard = new Card();
        var imgPath = './img/card-img.png';

        testCard.setImgPath(imgPath);

        expect(testCard.imgPath).toBe(imgPath);
    });

    it('Method getImgPath', function() {
        var imgPath = './assets/3-hearts.png';
        var testCard = new Card(null, null, imgPath);

        expect(testCard.getImgPath()).toBe(imgPath);
    });
});