(() => {
    'use strict';

    class Queue {
        constructor() {
            this._enqueueStack = [];
            this._dequeueStack = [];
        }

        enqueue(item) {
            this._enqueueStack.push(item);
        }

        dequeue() {
            if (!this._enqueueStack.length && !this._dequeueStack.length) {
                throw new Error('Attempted to dequeue from empty queue.');
            }

            if (this._dequeueStack.length === 0) {
                // Move all items to dequeue stack
                while (this._enqueueStack.length > 0) {
                    this._dequeueStack.push(this._enqueueStack.pop());
                }
            }

            return this._dequeueStack.pop();
        }

        toString() {
            return `Dequque stack: ${this._dequeueStack}\n` +
                `Enqueue stack: ${this._enqueueStack}`;
        }
    }

    module.exports = Queue;
})();
