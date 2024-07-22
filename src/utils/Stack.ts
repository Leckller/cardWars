export default class Stack <T> {
  stack: T[] = [];

  enqueue(card: T): void {
    this.stack.push(card);
  }

  dequeue(): T | undefined {
    return this.stack.shift();
  }
}
