export class Queue {
  constructor() {
    this.items = [];
    this.tail = 0;
  }

  enqueue(item)  {
    this.items[this.tail] = item
    this.tail ++
  }

  dequeue()  {
    if (this.isEmpty()){
      return null
    }
    this.tail --
    return this.items.shift()
  }

  // get the front element
  peek() {
    if (this.isEmpty()){
      return null
    }
    return this.items[0]
  }

  getSize() {
    return this.items.length
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = []
    this.tail = 0
  }
}