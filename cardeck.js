(function(exports) {
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
    }

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
    };

    /**
     * Gets the type of the card.
     *
     * @this {Card}
     * @return {string} The type of the card.
     */
    Card.prototype.getType = function () {
        return this.type;
    };

    /**
     * Sets the path to the image which represents a card.
     *
     * @this {Card}
     * @param {string} i The path to the image which represents the card.
     */
    Card.prototype.setImgPath = function (i) {
        this.imgPath = i;
    };

    /**
     * Gets the path to the image which represents a card.
     *
     * @this {Card}
     * @return {string} The path to the image which represents the card.
     */
    Card.prototype.getImgPath = function () {
        return this.imgPath;
    };

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
    }

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
    };

    /**
     * Gets the size of the deck.
     *
     * @this {Deck}
     * @return {number} The size of the deck.
     */
    Deck.prototype.getSize = function () {
        return this.size;
    };

    /**
     * Adds a new card at the top of the deck.
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
    };

    /**
     * Adds a new card at the end of the deck.
     *
     * @this {Deck}
     * @param {Object} c The object or card to insert on the deck.
     */
    Deck.prototype.addCardToBottom = function (c) {
        if (c instanceof Card)
            this.cards.push(c);
        else
            this.cards.push(new Card(c.value,c.type,c.imgPath));
        this.size++;
    };

    /**
     * Draws a card from the top of the deck.
     * 
     * @this {Deck}
     * @return {Card} The card at the top of the deck.
     */
    Deck.prototype.drawCardFromTop = function () {
        if (this.size > 0) {
            var pickedCard = this.cards.shift();
            this.size--;
            return pickedCard;
        }
    };

    /**
     * Draws a card from the bottom of the deck.
     * 
     * @this {Deck}
     * @return {Card} The card at the bottom of the deck.
     */
    Deck.prototype.drawCardFromBottom = function () {
        if (this.size > 0) {
            var pickedCard = this.cards.pop();
            this.size--;
            return pickedCard;
        }
    };

    /**
     * Adds a new card at a random position of the deck.
     * 
     * @this {Deck}
     * @return {Card} The card to add to the deck.
     */
    Deck.prototype.addCardToRandom = function (c) {
        var position = Math.floor(Math.random() * (this.size + 1));
        
        if (c instanceof Card)
            this.cards.splice(position, 0, c);
        else
            this.cards.splice(position, 0, new Card(c.value,c.type,c.imgPath));
        this.size++;
    };

    /**
     * Draws a card from a random position of the deck.
     * 
     * @this {Deck}
     * @return {Card} The card at a random position of the deck.
     */
    Deck.prototype.drawCardFromRandom = function () {
        if (this.size > 0) {
            var position = Math.floor(Math.random() * this.size);
            var pickedCard = this.cards.splice(position, 1);
            this.size--;
            return pickedCard[0];
        }
    };

    /**
     * Shuffles the order of the cards in a deck.
     * 
     * @this {Deck}
     */
    Deck.prototype.shuffle = function () {
        var currentIndex = this.cards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    };

    /**
     * Exchange the order of the first half of cards of the deck with the second one.
     * 
     * @this {Deck}
     */
    Deck.prototype.cut = function () {
        var halfIndex = this.size / 2;

        var firstHalf = this.cards.splice(0, halfIndex);

        this.cards = this.cards.concat(firstHalf);
    };

    /**
     * Deal cards by turns for each player, drawing from the top
     * 
     * @this {Deck}
     * @returns {Object<Array<Card>>} An object with as many array of Cards as players specified
     */
    Deck.prototype.deal = function (c, p) {
        var result = {};

        for (var player = 0; player < p; player++) {
            var cardsPerPlayer = [];
            
            for (var card = 0; card < c; card++) {
                var currentCard = this.drawCardFromTop();
                if (currentCard) {
                    cardsPerPlayer.push(currentCard);
                }
                else {
                    break;
                }
            }

            result[player] = cardsPerPlayer;
        }

        return result;
    };

    exports.Deck = Deck;
    exports.Card = Card;
    
})(typeof exports === 'undefined' ? this['cardeck'] = {} : exports);
