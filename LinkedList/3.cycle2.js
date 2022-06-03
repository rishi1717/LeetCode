var detectCycle = function (head) {
    if(!head || !head.next) {
        return null
    }

    let slow = head.next;
    let fast = head.next.next;

    while(fast && fast.next && slow != fast){
        slow = slow.next;
        fast = fast.next.next;
    }

    if(!fast || !fast.next){
        return null
    }

    slow = head;

    while(slow != fast){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}
