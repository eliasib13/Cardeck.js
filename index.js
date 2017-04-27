/**
 *
 * Creates an instance of Card
 *
 * @constructor
 * @this {Card}
 * @param {number} numVal Numeric value of the card.
 * @param {string} type Type of the card.
 * @param {string} imgPath Path to the image which represents the card.
 */
function Card(numVal, type, imgPath) {
    /** @private */ this.value = numVal || 0;
    /** @private */ this.type = type || 'default';
    /** @private */ this.imgPath = imgPath || './card.png';
};

/**
 * Sets the value of a card.
 *
 * @this {Card}
 * @param {number} v The numeric value of the card.
 */
Card.prototype.setValue = function (v) {
    this.value = v;
};

/**
 * Gets the value of the card.
 *
 * @this {Card}
 * @return {number} The numeric value of the card.
 */
Card.prototype.getValue = function () {
    return this.value;
};

/**
 * Sets the type of a card.
 *
 * @this {Card}
 * @param {string} t The type of the card.
 */
Card.prototype.setType = function (t) {
    this.type = t;
}

/**
 * Gets the type of the card.
 *
 * @this {Card}
 * @return {string} The type of the card.
 */
Card.prototype.getType = function () {
    return this.type;
}

/**
 * Sets the path to the image which represents a card.
 *
 * @this {Card}
 * @param {string} i The path to the image which represents the card.
 */
Card.prototype.setImgPath = function (i) {
    this.imgPath = i;
}

/**
 * Gets the path to the image which represents a card.
 *
 * @this {Card}
 * @return {string} The path to the image which represents the card.
 */
Card.prototype.getImgPath = function () {
    return this.imgPath;
}

/**
 *
 * Creates an instance of Deck
 *
 * @constructor
 * @this {Deck}
 * @param {string} name Name of the deck.
 */
function Deck(name) {
    /** @private */ this.name = name || 'default';
    /** @private */ this.cards = [];
    /** @private */ this.size = 0;
};

/**
 * Gets the name of the deck.
 *
 * @this {Deck}
 * @return {string} The name of the deck.
 */
Deck.prototype.getName = function () {
    return this.name;
};

/**
 * Sets the name of the deck.
 *
 * @this {Deck}
 * @param {string} n The name of the deck.
 */
Deck.prototype.setName = function (n) {
    this.name = n;
}

/**
 * Adds a new card to the deck.
 *
 * @this {Deck}
 * @param {number} numVal Numeric value of the card.
 * @param {string} type Type of the card.
 * @param {string} imgPath Path to the image which represents the card.
 */
Deck.prototype.addCardToTop = function (numVal, type, imgPath) {
    this.cards.unshift(new Card(numVal,type,imgPath));
    this.size++;
}

/**
 * Adds a new card to the deck.
 *
 * @this {Deck}
 * @param {Object} c The object or card to insert on the deck.
 */
Deck.prototype.addCardToTop = function (c) {
    if (c instanceof Card)
        this.cards.unshift(c);
    else
        this.cards.unshift(new Card(c.value,c.type,c.imgPath));
    this.size++;
}

/**
 * Draws a card from the top of the deck.
 * 
 * @this {Deck}
 * @return {Card} The card at the top of the deck.
 */
Deck.prototype.drawCardFromTop() {
    if (this.size > 0) {
        var pickedCard = this.cards.shift();
        this.size--;
        return pickedCard;
    }
}

module.exports = {
    Deck: Deck,
    Card: Card
};
