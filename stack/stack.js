export class Stack {
	constructor () {
		this.items = []
		this.topIndex = 0
	}
	
	// TODO: push a item into stack that returns the item
	push(item) {
		this.items.push(item)
		this.topIndex++
	}
	
	// TODO: pop an item that we pushed it latest
	pop() {
		if (this.topIndex === 0) {
			return null
		}
		this.topIndex--
		return this.items.pop()
	}
	
	// TODO: peek the top element of stack, will return the top element
	peek() {
		if (this.topIndex === 0) {
			return null
		}
		return this.items[this.topIndex - 1]
	}
	
	// TODO: return the amount of elements in the stack
	getSize () {
		return this.topIndex
	}
	
	// TODO: return the false if stack is not empty, returns true is stack is empty
	isEmpty () {
		return this.topIndex === 0
	}
	
}