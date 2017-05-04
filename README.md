# Cardeck.js

[![npm](https://img.shields.io/npm/v/cardeck.svg)](https://www.npmjs.com/package/cardeck)
[![Build Status](https://travis-ci.org/eliasib13/Cardeck.js.svg?branch=master)](https://travis-ci.org/eliasib13/Cardeck.js)
[![npm](https://img.shields.io/npm/dt/cardeck.svg)](https://www.npmjs.com/package/cardeck)
[![npm](https://img.shields.io/npm/l/cardeck.svg)](https://www.npmjs.com/package/cardeck)

>A simple JavaScript library to manage "generic" decks of cards.

----------------------


## Contents

* [Installation](#installation)
* [Usage](#usage)
* [Methods](#methods)
    * [Card class methods](#card-class-methods)
    * [Deck class methods](#deck-class-methods)


## Installation

To download Cardeck.js, you can do it via npm, using the following command:

`npm install cardeck`

If you want to save the dependency into the `package.json` file of your project, use:

`npm install --save cardeck`

when you download the package via npm, by default, it will be saved under the `node_modules` folder.

## Usage

Cardeck.js works in both Node.js and browser JavaScript.

#### If you want to use Cardeck.js on Node.js:

```javascript
var cardeck = require('cardeck');

var Card = cardeck.Card;
var Deck = cardeck.Deck;

// Now you can use both Card and Deck classes
```

#### If you want to use Cardeck.js on the browser:

```html
<html>
    <head>...</head>
    <body>
        ...
        <script src="path_to_node_modules_folder/cardeck.js"></script>
        <script>
            var Card = cardeck.Card;
            var Deck = cardeck.Deck;

            // Now you can use both Card and Deck classes
        </script>
</html>
```

## Methods

### _Card_ class methods

#### `Card(value=0, type='default', imgPath='./card.png')`
> **Constructor.** Creates an instance of Card.
>
> |Parameter|Description|
> |-------|-------------------|
> |`value`| Value of the card. _(Optional, default value: `0`)_|
> |`type` | Type of the card. _(Optional, default value: `'default'`)_|
> |`imgPath`| Path to the image which represents the card. _(Optional, default value: `'./card.png'`)_|
>
> _Example:_
> ```javascript
> var myFirstCard = new Card('A', 'Aces', 'img/aces/A.png');
> 
> // myFirstCard = Card { value: 'A', type: 'Aces', imgPath: 'img/aces/A.png' }
> ```

#### `Card.setValue(v)`
> Sets the value of a card.
>
> |Parameter|Description|
> |-------|-------------------|
> |`v`| Value of the card. |
> 
>
> _Example:_
> ```javascript
> var myFirstCard = new Card();
> // myFirstCard = Card { value: 0, type: 'default', imgPath: './card.png' }
>
> myFirstCard.setValue(4);
> // myFirstCard = Card { value: 4, type: 'default', imgPath: './card.png' }
> ```

#### `Card.getValue()`
> Gets the value of the card.
>
> _Example:_
> ```javascript
> var myFirstCard = new Card(6);
> // myFirstCard = Card { value: 6, type: 'default', imgPath: './card.png' }
>
> myFirstCard.getValue();
> // 6
> ```

#### `Card.setType(t)`
> Sets the type of a card.
>
> |Parameter|Description|
> |-------|-------------------|
> |`t`| Type of the card. |
> 
>
> _Example:_
> ```javascript
> var myFirstCard = new Card();
> // myFirstCard = Card { value: 0, type: 'default', imgPath: './card.png' }
>
> myFirstCard.setType('Diamonds');
> // myFirstCard = Card { value: 0, type: 'Diamonds', imgPath: './card.png' }
> ```

#### `Card.getType()`
> Gets the type of the card.
>
> _Example:_
> ```javascript
> var myFirstCard = new Card(6, 'Clubs');
> // myFirstCard = Card { value: 6, type: 'Clubs', imgPath: './card.png' }
>
> myFirstCard.getType();
> // 'Clubs'
> ```

#### `Card.setImgPath(i)`
> Sets the path to the image which represents a card.
>
> |Parameter|Description|
> |-------|-------------------|
> |`i`| The path to the image which represents the card. |
> 
>
> _Example:_
> ```javascript
> var myFirstCard = new Card();
> // myFirstCard = Card { value: 0, type: 'default', imgPath: './card.png' }
>
> myFirstCard.setImgPath('./img/my-card.png');
> // myFirstCard = Card { value: 0, type: 'Diamonds', imgPath: './img/my-card.png' }
> ```

#### `Card.getType()`
> Gets the path to the image which represents a card.
>
> _Example:_
> ```javascript
> var myFirstCard = new Card(6, 'Clubs', './img/my-card.png');
> // myFirstCard = Card { value: 6, type: 'Clubs', imgPath: './img/my-card.png' }
>
> myFirstCard.getImgPath();
> // './img/my-card.png'
> ```

### _Deck_ class methods

#### `Deck(name='default')`
> **Constructor.** Creates an instance of Deck.
>
> |Parameter|Description|
> |-------|-------------------|
> |`name`| Name of the deck. _(Optional, default value: `'default'`)_|
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck('The best deck');
> 
> // myFirstDeck = Deck { name: 'The best deck', cards: [], size: 0 }
> ```

#### `Deck.setName(n)`
> Sets the name of a deck.
>
> |Parameter|Description|
> |-------|-------------------|
> |`n`| Name of the deck. |
> 
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.setName('The very best deck');
> // myFirstDeck = Deck { name: 'The very best deck', cards: [], size: 0 }
> ```

#### `Deck.getName()`
> Gets the name of the deck.
>
> _Example:_
> ```javascript
> var myFirstDeck = new Card('Just a normal deck');
> // myFirstDeck = Deck { name: 'Just a normal deck', cards: [], size: 0 }
>
> myFirstDeck.getName();
> // 'Just a normal deck'
> ```

#### `Deck.getSize()`
> Gets the size (number of cards) of the deck.
>
> _Example:_
> ```javascript
> var myFirstDeck = new Card('Just another deck');
> // myFirstDeck = Deck { name: 'Just another deck', cards: [], size: 0 }
>
> myFirstDeck.getSize();
> // 0
> ```

#### `Deck.addCardToTop(c)`
>  Adds a new card at the top of the deck.
>
> |Parameter|Description|
> |-------|-------------------|
> |`c`| The object or `Card` to insert on the deck. |
> 
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToTop(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToTop(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' }, Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 2 }
> ```

#### `Deck.addCardToBottom(c)`
>  Adds a new card at the end of the deck.
>
> |Parameter|Description|
> |-------|-------------------|
> |`c`| The object or `Card` to insert on the deck. |
> 
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToBottom(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToBottom(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 2 }
> ```

#### `Deck.drawCardFromTop()`
>  Draws a card from the top of the deck.
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToTop(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToTop(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' }, Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 2 }
>
> myFirstDeck.drawCardFromTop();
> // Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' }
> ```

#### `Deck.drawCardFromBottom()`
>  Draws a card from the bottom of the deck.
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToTop(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToTop(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' }, Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 2 }
>
> myFirstDeck.drawCardFromBottom();
> // Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }
> ```

#### `Deck.addCardToRandom(c)`
>  Adds a new card at a random position of the deck.
>
> |Parameter|Description|
> |-------|-------------------|
> |`c`| The object or `Card` to insert on the deck. |
> 
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToRandom(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToRandom(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 2 }
>
> myFirstDeck.addCardToRandom(new Card('J', 'Diamonds', 'img/thetroll.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'J', type: 'Diamonds', imgPath: 'img/thetroll.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 3 }
> ```

#### `Deck.drawCardFromRandom()`
>  Draws a card from a random position of the deck.
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToRandom(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToRandom(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 2 }
>
> myFirstDeck.addCardToRandom(new Card('J', 'Diamonds', 'img/thetroll.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'J', type: 'Diamonds', imgPath: 'img/thetroll.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 3 }
>
> myFirstDeck.drawCardFromRandom();
> // Card { value: 'J', type: 'Diamonds', imgPath: 'img/thetroll.jpg' }
> ```

#### `Deck.shuffle()`
>  Shuffles the order of the cards in a deck.
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToRandom(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToRandom(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 2 }
>
> myFirstDeck.addCardToRandom(new Card('J', 'Diamonds', 'img/thetroll.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'J', type: 'Diamonds', imgPath: 'img/thetroll.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 3 }
>
> myFirstDeck.shuffle();
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' }, Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'J', type: 'Diamonds', imgPath: 'img/thetroll.jpg' } ], size: 3 }
> ```

#### `Deck.cut()`
>  xchange the order of the first half of cards of the deck with the second one.
>
> _Example:_
> ```javascript
> var myFirstDeck = new Deck();
> // myFirstDeck = Deck { name: 'default', cards: [], size: 0 }
>
> myFirstDeck.addCardToRandom(new Card('K', 'Clubs', 'img/theking.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 1 }
>
> myFirstDeck.addCardToRandom(new Card('Q', 'Hearts', 'img/thequeen.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 2 }
>
> myFirstDeck.addCardToRandom(new Card('J', 'Diamonds', 'img/thetroll.jpg'));
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' }, Card { value: 'J', type: 'Diamonds', imgPath: 'img/thetroll.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' } ], size: 3 }
>
> myFirstDeck.cut();
> // myFirstDeck = Deck { name: 'default', cards: [ Card { value: 'J', type: 'Diamonds', imgPath: 'img/thetroll.jpg' }, Card { value: 'Q', type: 'Hearts', imgPath: 'img/thequeen.jpg' }, Card { value: 'K', type: 'Clubs', imgPath: 'img/theking.jpg' } ], size: 3 }
> ```

---------------------------
[Eliasib García](https://github.com/eliasib13), 2017