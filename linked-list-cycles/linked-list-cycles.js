(() => {
    'use strict';

    let containsCycle = (head) => {
        if (!head || !head.next) {
            return false;
        }
        let slowRunner = head,
            fastRunner = head.next;
        while (fastRunner) {
            if (slowRunner === fastRunner) {
                return true;
            }
            fastRunner = fastRunner.next ?
                fastRunner.next.next : fastRunner.next;
            slowRunner = slowRunner.next;
        }
        return false;
    };

    module.exports = {
        containsCycle: containsCycle
    };
})();
