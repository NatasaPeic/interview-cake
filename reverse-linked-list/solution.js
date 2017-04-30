(() => {
    'use strict';

    class LinkedListNode {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    let mutableReverse = (head) => {
        let last = null,
            curr = head;
        while (curr) {
            let next = curr.next;
            curr.next = last;
            last = curr;
            curr = next;
        }
        return last;
    };

    let immutableReverse = (head) => {
        let last = null,
            curr = head;
        while (curr) {
            let newNode = new LinkedListNode(curr.value);
            newNode.next = last;
            last = newNode;
            curr = curr.next;
        }
        return last;
    };

    module.exports = {
        immutableReverse: immutableReverse,
        LinkedListNode: LinkedListNode,
        mutableReverse: mutableReverse
    };
})();
