var Cardeck = require('../cardeck.js');
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

describe('Testing Deck methods', function () {
    it('Deck default constructor', function () {
        var testDeck = new Deck();

        expect(testDeck).toHaveString('name');
        expect(testDeck).toHaveArray('cards');
        expect(testDeck).toHaveNumber('size');

        expect(testDeck.name).toBe('default');
        expect(testDeck.cards).toBeEmptyArray();
        expect(testDeck.size).toBe(0);
    });

    it('Deck constructor with parameter', function () {
        var name = 'My First Deck';
        var testDeck = new Deck(name);

        expect(testDeck).toHaveString('name');
        expect(testDeck).toHaveArray('cards');
        expect(testDeck).toHaveNumber('size');

        expect(testDeck.name).toBe(name);
        expect(testDeck.cards).toBeEmptyArray();
        expect(testDeck.size).toBe(0);
    });

    it('Method getName', function() {
        var name = 'This is my deck';
        var testDeck = new Deck(name);

        expect(testDeck.getName()).toBe(name);
    });

    it('Method setName', function() {
        var name = 'The deck';
        var testDeck = new Deck();

        testDeck.setName(name);

        expect(testDeck.name).toBe(name);
    });

    it('Method addCardToTop', function() {
        var testDeck = new Deck();
        var cardsObjs = [
            {
                value: 3,
                type: 'Hearts',
                imgPath: 'img/card1.jpg'
            },
            {
                value: 2,
                type: 'Aces',
                imgPath: 'img/card2.jpg'
            },
            {
                value: 7,
                type: 'Diamonds',
                imgPath: 'img/card3.jpg'
            }
        ];

        cardsObjs.forEach(function(card) {
            testDeck.addCardToTop(card);
        }, this);

        var objsAsCard = [
            new Card(cardsObjs[0].value, cardsObjs[0].type, cardsObjs[0].imgPath),
            new Card(cardsObjs[1].value, cardsObjs[1].type, cardsObjs[1].imgPath),
            new Card(cardsObjs[2].value, cardsObjs[2].type, cardsObjs[2].imgPath)            
        ];

        expect(testDeck.size).toEqual(objsAsCard.length);
        expect(testDeck.cards[0]).toEqual(objsAsCard[2]);
        expect(testDeck.cards[1]).toEqual(objsAsCard[1]);
        expect(testDeck.cards[2]).toEqual(objsAsCard[0]);
    });

    it('Method addCardToBottom', function() {
        var testDeck = new Deck();
        var cardsObjs = [
            {
                value: 'A',
                type: 'Clubs',
                imgPath: 'img/card1.jpg'
            },
            {
                value: 'J',
                type: 'Hearts',
                imgPath: 'img/card2.jpg'
            },
            {
                value: 4,
                type: 'Clubs',
                imgPath: 'img/card3.jpg'
            }
        ];

        cardsObjs.forEach(function(card) {
            testDeck.addCardToBottom(card);
        }, this);

        var objsAsCard = [
            new Card(cardsObjs[0].value, cardsObjs[0].type, cardsObjs[0].imgPath),
            new Card(cardsObjs[1].value, cardsObjs[1].type, cardsObjs[1].imgPath),
            new Card(cardsObjs[2].value, cardsObjs[2].type, cardsObjs[2].imgPath)            
        ];

        expect(testDeck.size).toEqual(objsAsCard.length);        
        expect(testDeck.cards[0]).toEqual(objsAsCard[0]);
        expect(testDeck.cards[1]).toEqual(objsAsCard[1]);
        expect(testDeck.cards[2]).toEqual(objsAsCard[2]);
    });

    it('Method getSize', function() {
        var name = 'This is the one deck';
        var testDeck = new Deck(name);

        expect(testDeck.getSize()).toBe(0);

        testDeck.addCardToBottom(new Card(4, 'Clubs', 'my-img.png'));

        expect(testDeck.getSize()).toBe(1);

        testDeck.drawCardFromTop();

        expect(testDeck.getSize()).toBe(0);          
    });

    it('Method drawCardFromTop', function() {
        var testDeck = new Deck();
        var cardsObjs = [
            {
                value: 6,
                type: 'Hearts',
                imgPath: 'img/card1.jpg'
            },
            {
                value: 9,
                type: 'Clubs',
                imgPath: 'img/card2.jpg'
            },
            {
                value: 10,
                type: 'Aces',
                imgPath: 'img/card3.jpg'
            }
        ];

        cardsObjs.forEach(function(card) {
            testDeck.addCardToBottom(card);
        }, this);

        var objsAsCard = [
            new Card(cardsObjs[0].value, cardsObjs[0].type, cardsObjs[0].imgPath),
            new Card(cardsObjs[1].value, cardsObjs[1].type, cardsObjs[1].imgPath),
            new Card(cardsObjs[2].value, cardsObjs[2].type, cardsObjs[2].imgPath)            
        ];

        expect(testDeck.size).toEqual(objsAsCard.length);        
        expect(testDeck.drawCardFromTop()).toEqual(objsAsCard[0]);
        expect(testDeck.drawCardFromTop()).toEqual(objsAsCard[1]);
        expect(testDeck.drawCardFromTop()).toEqual(objsAsCard[2]);
        expect(testDeck.size).toEqual(0);
    });

    it('Method drawCardFromBottom', function() {
        var testDeck = new Deck();
        var cardsObjs = [
            {
                value: 6,
                type: 'Hearts',
                imgPath: 'img/card1.jpg'
            },
            {
                value: 9,
                type: 'Clubs',
                imgPath: 'img/card2.jpg'
            },
            {
                value: 10,
                type: 'Aces',
                imgPath: 'img/card3.jpg'
            }
        ];

        cardsObjs.forEach(function(card) {
            testDeck.addCardToBottom(card);
        }, this);

        var objsAsCard = [
            new Card(cardsObjs[0].value, cardsObjs[0].type, cardsObjs[0].imgPath),
            new Card(cardsObjs[1].value, cardsObjs[1].type, cardsObjs[1].imgPath),
            new Card(cardsObjs[2].value, cardsObjs[2].type, cardsObjs[2].imgPath)            
        ];

        expect(testDeck.size).toEqual(objsAsCard.length);        
        expect(testDeck.drawCardFromBottom()).toEqual(objsAsCard[2]);
        expect(testDeck.drawCardFromBottom()).toEqual(objsAsCard[1]);
        expect(testDeck.drawCardFromBottom()).toEqual(objsAsCard[0]);
        expect(testDeck.size).toEqual(0);
    });

    it('Method cut (with even size)', function() {
        var testDeck = new Deck();
        var cardsObjs = [
            {
                value: 6,
                type: 'Hearts',
                imgPath: 'img/card1.jpg'
            },
            {
                value: 9,
                type: 'Clubs',
                imgPath: 'img/card2.jpg'
            },
            {
                value: 10,
                type: 'Aces',
                imgPath: 'img/card3.jpg'
            },
            {
                value: 'K',
                type: 'Clubs',
                imgPath: 'img/card4.jpg'
            }
        ];

        cardsObjs.forEach(function(card) {
            testDeck.addCardToBottom(card);
        }, this);

        var objsAsCard = [
            new Card(cardsObjs[0].value, cardsObjs[0].type, cardsObjs[0].imgPath),
            new Card(cardsObjs[1].value, cardsObjs[1].type, cardsObjs[1].imgPath),
            new Card(cardsObjs[2].value, cardsObjs[2].type, cardsObjs[2].imgPath),            
            new Card(cardsObjs[3].value, cardsObjs[3].type, cardsObjs[3].imgPath)            
        ];

        expect(testDeck.size).toBe(cardsObjs.length);
        
        testDeck.cut();        

        expect(testDeck.cards[0]).toEqual(objsAsCard[2]);
        expect(testDeck.cards[1]).toEqual(objsAsCard[3]);
        expect(testDeck.cards[2]).toEqual(objsAsCard[0]);
        expect(testDeck.cards[3]).toEqual(objsAsCard[1]);
        expect(testDeck.size).toBe(cardsObjs.length);      
        
    });

    it('Method cut (with odd size)', function() {
        var testDeck = new Deck();
        var cardsObjs = [
            {
                value: 6,
                type: 'Hearts',
                imgPath: 'img/card1.jpg'
            },
            {
                value: 9,
                type: 'Clubs',
                imgPath: 'img/card2.jpg'
            },
            {
                value: 10,
                type: 'Aces',
                imgPath: 'img/card3.jpg'
            },
            {
                value: 'K',
                type: 'Clubs',
                imgPath: 'img/card4.jpg'
            },
            {
                value: 'Q',
                type: 'Hearts',
                imgPath: 'img/card5.jpg'
            }
        ];

        cardsObjs.forEach(function(card) {
            testDeck.addCardToBottom(card);
        }, this);

        var objsAsCard = [
            new Card(cardsObjs[0].value, cardsObjs[0].type, cardsObjs[0].imgPath),
            new Card(cardsObjs[1].value, cardsObjs[1].type, cardsObjs[1].imgPath),
            new Card(cardsObjs[2].value, cardsObjs[2].type, cardsObjs[2].imgPath),
            new Card(cardsObjs[3].value, cardsObjs[3].type, cardsObjs[3].imgPath),
            new Card(cardsObjs[4].value, cardsObjs[4].type, cardsObjs[4].imgPath)
        ];

        expect(testDeck.size).toBe(cardsObjs.length);
        
        testDeck.cut();        

        expect(testDeck.cards[0]).toEqual(objsAsCard[2]);
        expect(testDeck.cards[1]).toEqual(objsAsCard[3]);
        expect(testDeck.cards[2]).toEqual(objsAsCard[4]);
        expect(testDeck.cards[3]).toEqual(objsAsCard[0]);
        expect(testDeck.cards[4]).toEqual(objsAsCard[1]);
        expect(testDeck.size).toBe(cardsObjs.length);      
        
    });

    it('Method deal', function() {
        var testDeck = new Deck();
        var cardsObjs = [
            {
                value: 6,
                type: 'Hearts',
                imgPath: 'img/card1.jpg'
            },
            {
                value: 9,
                type: 'Clubs',
                imgPath: 'img/card2.jpg'
            },
            {
                value: 10,
                type: 'Aces',
                imgPath: 'img/card3.jpg'
            },
            {
                value: 'K',
                type: 'Clubs',
                imgPath: 'img/card4.jpg'
            },
            {
                value: 'Q',
                type: 'Hearts',
                imgPath: 'img/card5.jpg'
            }
        ];

        cardsObjs.forEach(function(card) {
            testDeck.addCardToBottom(card);
        }, this);

        var objsAsCard = [
            new Card(cardsObjs[0].value, cardsObjs[0].type, cardsObjs[0].imgPath),
            new Card(cardsObjs[1].value, cardsObjs[1].type, cardsObjs[1].imgPath),
            new Card(cardsObjs[2].value, cardsObjs[2].type, cardsObjs[2].imgPath),
            new Card(cardsObjs[3].value, cardsObjs[3].type, cardsObjs[3].imgPath),
            new Card(cardsObjs[4].value, cardsObjs[4].type, cardsObjs[4].imgPath)
        ];

        var dealing = testDeck.deal(3, 2);

        expect(dealing[0].length).toEqual(3);
        expect(dealing[1].length).toEqual(2);

        expect(dealing[0][0]).toEqual(objsAsCard[0]);
        expect(dealing[0][1]).toEqual(objsAsCard[1]);
        expect(dealing[0][2]).toEqual(objsAsCard[2]);
        expect(dealing[1][0]).toEqual(objsAsCard[3]);
        expect(dealing[1][1]).toEqual(objsAsCard[4]);
    });
});