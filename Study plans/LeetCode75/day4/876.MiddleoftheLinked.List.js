function findMiddle(head){
    let fast = head
    let slow = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

