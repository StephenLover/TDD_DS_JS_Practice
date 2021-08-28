export class Queue {
  private items: Record<string, any>
  private head: number
  private tail: number

  constructor() {
    this.items = {}
    this.head = 0
    this.tail = 0
  }

  enqueue(item: any) : void {

  }

  dequeue() : any {

  }

  peek(): any {

  }

  size(): number {
    return -1
  }

  isEmpty(): void {

  }

  clear(): void {
    this.items = {}
    this.head = 0
    this.tail = 0
  }
}