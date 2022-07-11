var detectCycle = function (head) {
	let set = new Set()
    while(head && head.next){
        if(set.has(head)) return head
        set.add(head)
        head = head.next
    }
	return null
}
