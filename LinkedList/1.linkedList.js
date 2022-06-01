class Node {
	constructor(data, next) {
		this.data = data
		this.next = next
	}
}

class MyLinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}
	get(index) {
		if (index < 0 || index >= this.size) {
			return
		}
		let current = this.head
		let count = 0
		while (count < index) {
			current = current.next
			count++
		}
		return current.data
	}
	addAtHead(val) {
		this.head = new Node(val, this.head)
		this.size++
	}
	addAtTail(val) {
		let node = new Node(val)
		let current

		if (!this.head) {
			this.head = node
		} else {
			current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = node
		}
		this.size++
	}
	addAtIndex(index, val) {
		if (index > 0 && index > this.size) {
			return
		}
		if (index === 0) {
			this.addAtHead(val)
		} else if (index === this.size) {
			this.addAtTail(val)
		} else {
			const node = new Node(val)
			let current, previous
			current = this.head
			let count = 0
			while (count < index) {
				previous = current
				current = current.next
				count++
			}
			node.next = current
			previous.next = node
			this.size++
		}
	}
	deleteAtIndex(index) {
		if (index > 0 && index >= this.size) {
			return
		}
		if (index === 0) {
			this.head = this.head.next
		} else {
			let current = this.head
			let previous
			let count = 0
			while (count < index) {
				previous = current
				current = current.next
				count++
			}
			previous.next = current.next
		}
		this.size--
	}
}






let ll = new MyLinkedList()
ll.addAtHead(null)
ll.addAtHead(null)
ll.addAtHead(-1)
// ll.deleteAtIndex(1)

for (let i = 0; i < ll.size; i++) {
	console.log(ll.get(i))
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
