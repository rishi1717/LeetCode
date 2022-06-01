class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	// Insert first node
	insertFirst(data) {
		this.head = new Node(data, this.head)
		this.size++
	}

	// Insert last node

	insertLast(data) {
		let node = new Node(data)
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

	// Insert at index

	insertAt(data, index) {
		if (index > 0 && index > this.size) {
			return
		}
		if (index === 0) {
			this.insertFirst(data)
		} else if (index === this.size) {
			this.insertLast(data)
		} else {
			const node = new Node(data)
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

	// Get at index

	getAt(index) {
		if (index < 0 || index > this.size) {
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

	// Remove at index

	removeAt(index) {
		if (index > 0 && index > this.size) {
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

	// clear list

	clearList() {
		this.head = null
		this.size = 0
	}

	// print list

	printList() {
		let current = this.head
		while (current) {
			console.log(current.data)
			current = current.next
		}
		console.log(this.size)
	}
}

const LL = new LinkedList()
LL.insertFirst(100)
LL.insertFirst(200)
LL.insertFirst(300)
LL.insertLast(400)
LL.insertAt(500, 2)
LL.insertAt(600, 0)
LL.insertAt(700, 6)
LL.printList()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
