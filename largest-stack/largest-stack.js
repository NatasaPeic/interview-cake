(() => {
    'use strict';

    class Stack {
        constructor() {
            // initialize an empty array
            this.items = [];
        }

        // push a new item to the last index
        push(item) {
            this.items.push(item);
        }

        // remove the last item
        pop() {
            // if the stack is empty, return null
            // (it would also be reasonable to throw an exception)
            if (!this.items.length) {
                return null;
            }
            return this.items.pop();
        }

        // see what the last item is
        peek() {
            if (!this.items.length) {
                return null;
            }
            return this.items[this.items.length - 1];
        }
    }

    class LargestStack {
        constructor() {
            this._stack = new Stack();
            this._maxStack = new Stack();
        }

        push(item) {
            if (typeof (item) !== 'number') {
                throw new Error('Attempted to push item that was not a number.');
            }
            let max = this._maxStack.peek();
            if (!max || item >= max) {
                this._maxStack.push(item);
            }
            this._stack.push(item);
        }

        pop() {
            if (!this._stack.items.length) {
                throw new Error('Attempted to pop from empty stack.');
            }
            if (this._stack.peek() === this._maxStack.peek()) {
                this._maxStack.pop();
            }
            return this._stack.pop();
        }

        getMax() {
            if (!this._maxStack.items.length) {
                throw new Error('Attempted to get maximum value from empty stack.');
            }
            return this._maxStack.peek();
        }
    }

    module.exports = LargestStack;
})();
