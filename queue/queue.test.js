// Queue TDD test practices
import {Queue} from "./queue";

describe('Queue testing', () => {
	test('Initial an empty queue', () => {
		const myQueue = new Queue()
		// call dequeue will return null as nothing inside
		expect(myQueue.isEmpty()).toBe(true)
		// call the size() will be 0
		expect(myQueue.getSize()).toBe(0)
		// call the peek() will return null
		expect(myQueue.peek()).toBe(null)
		// cant dequeue
		expect(myQueue.dequeue()).toBe(null)
	})
	
	test('push an element into a empty queue', () => {
		const randomElement = 'Benz'
		const myQueue = new Queue()
		myQueue.enqueue(randomElement)
		// Size would be 1
		expect(myQueue.getSize()).toBe(1)
		// peek would be the element you added
		expect(myQueue.peek()).toBe(randomElement)
		// call the isEmpty will return false
		expect(myQueue.isEmpty()).toBe(false)
	})
	
	test('push two more elements into a empty queue', () => {
		const myQueue = new Queue()
		const randomElement = 'Benz'
		myQueue.enqueue(randomElement)
		// Size would be 1
		expect(myQueue.getSize()).toBe(1)
		// peek would be the element you added
		expect(myQueue.peek()).toBe(randomElement)
		// call the isEmpty will return false
		expect(myQueue.isEmpty()).toBe(false)
	})
})

	test('push two more elements into a empty queue', () => {
		const myQueue = new Queue()
		const randomElement = 'Benz'
		const randomElement2 = 'BMW'
		const randomElement3 = 'Cooper'
		myQueue.enqueue(randomElement)
		myQueue.enqueue(randomElement2)
		myQueue.enqueue(randomElement3)
		// Size would be 3
		expect(myQueue.getSize()).toBe(3)
		// peek would be the element you added
		expect(myQueue.peek()).toBe(randomElement)
	// call the isEmpty will return false
		expect(myQueue.isEmpty()).toBe(false)
		// dequeue
		expect(myQueue.dequeue()).toBe(randomElement)
		// get size
		expect(myQueue.getSize()).toBe(2)
})


test('push two more elements into a empty queue', () => {
	const myQueue = new Queue()
	const randomElement = 'Benz'
	const randomElement2 = 'BMW'
	myQueue.enqueue(randomElement)
	myQueue.enqueue(randomElement2)
	// Size would be 3
	expect(myQueue.getSize()).toBe(2)
	// peek would be the element you added
	expect(myQueue.peek()).toBe(randomElement)
	// call the isEmpty will return false
	expect(myQueue.isEmpty()).toBe(false)
	// dequeue
	expect(myQueue.dequeue()).toBe(randomElement)
	// peek again
	expect(myQueue.peek()).toBe(randomElement2)
	// get size
	expect(myQueue.getSize()).toBe(1)
	// clean queue
	myQueue.clear()
	// size = 0?
	expect(myQueue.getSize()).toBe(0)
	expect(myQueue.isEmpty()).toBe(true)
})


