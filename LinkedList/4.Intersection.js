var getIntersectionNode = function (headA, headB) {
	if (!headA || !headB) {
		return null
	}

	if (headA === headB) {
		return headA
	}

	const set = new Set()
	let found = 0

	let nodeA = headA
	let nodeB = headB

	while (nodeA) {
		set.add(nodeA)
		nodeA = nodeA.next
	}

	while (nodeB) {
		if (set.has(nodeB)) {
			found = 1
			return nodeB
		}
		nodeB = nodeB.next
	}

	if (found === 0) {
		return null
	}
}
