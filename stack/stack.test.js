import { Stack } from './stack'

describe('Stack testing practices sets', () => {
	test('Initial an empty stack', () => {
		const stack = new Stack()
		expect(stack.isEmpty()).toBe(true)
		expect(stack.getSize()).toBe(0)
		expect(stack.pop()).toBe(null)
		expect(stack.peek()).toBe(null)
	})
	
	test('push an item', () => {
		const stack = new Stack()
		expect(stack.isEmpty()).toBe(true)
		expect(stack.getSize()).toBe(0)
		expect(stack.pop()).toBe(null)
		expect(stack.peek()).toBe(null)
		
		// push an item
		const item = 'BMW'
		expect(stack.push(item))
		expect(stack.isEmpty()).toBe(false)
		expect(stack.getSize()).toBe(1)
		expect(stack.peek()).toBe(item)
		expect(stack.pop()).toBe(item)
		expect(stack.isEmpty()).toBe(true)
		expect(stack.getSize()).toBe(0)
		expect(stack.peek()).toBe(null)
	})
	
	test('push 2 more items, and pop the top items', () => {
		const stack = new Stack()
		const item1 = 'Benz'
		const item2 = 'Toyota'
		const item3 = 'Honda'
		expect(stack.push(item1))
		expect(stack.push(item2))
		expect(stack.push(item3))
		expect(stack.isEmpty()).toBe(false)
		expect(stack.getSize()).toBe(3)
		expect(stack.peek()).toBe(item3)
		expect(stack.pop()).toBe(item3)
		expect(stack.peek()).toBe(item2)
		expect(stack.getSize()).toBe(2)
		expect(stack.pop()).toBe(item2)
		expect(stack.peek()).toBe(item1)
		expect(stack.getSize()).toBe(1)
		expect(stack.pop()).toBe(item1)
		expect(stack.peek()).toBe(null)
		expect(stack.isEmpty()).toBe(true)
		expect(stack.getSize()).toBe(0)
		expect(stack.pop()).toBe(null)
	})
	
})