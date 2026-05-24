class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;

  constructor(public value: T) {}
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;
  private length: number = 0;

  public append(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;

      this.tail = newNode;
    }

    this.length++;
  }

  public prepend(value: T): void {
    const newNode = new LinkedListNode(value);
    newNode.next = this.head;

    if (!this.head) this.tail = newNode;

    this.head = newNode;

    this.length++;
  }

  public size(): number {
    return this.length;
  }

  public getHead(): LinkedListNode<T> | null {
    return this.head;
  }

  public getTail(): LinkedListNode<T> | null {
    return this.tail;
  }

  public at(index: number): LinkedListNode<T> | null {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      if (!currentNode) throw new Error('List is shorter than its length property indicates');

      currentNode = currentNode.next;
    }

    return currentNode;
  }

  public pop(): void {
    if (!this.head) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let currentNode: LinkedListNode<T> | null = this.head;

    while (currentNode && currentNode.next !== this.tail) currentNode = currentNode.next;

    if (currentNode) {
      currentNode.next = null;
      this.tail = currentNode;
    }

    this.length--;
  }

  public contains(value: T): boolean {
    for (let currentNode = this.head; currentNode !== null; currentNode = currentNode.next)
      if (currentNode.value === value) return true;

    return false;
  }

  public find(value: T): number | null {
    let index = 0;

    for (let currentNode = this.head; currentNode !== null; currentNode = currentNode.next) {
      if (currentNode.value === value) return index;

      index++;
    }

    return null;
  }

  public toString(): string {
    const parts: string[] = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      parts.push(`( ${currentNode.value} )`);
      currentNode = currentNode.next;
    }

    parts.push('null');

    return parts.join(' -> ');
  }

  public insertAt(value: T, index: number): void {
    if (index < 0 || index > this.length) throw new Error('Index out of bounds');

    const newNode = new LinkedListNode(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;

      if (this.length === 0) this.tail = newNode;
    } else {
      let current = this.head;
      let previous: LinkedListNode<T> | null = null;

      for (let i = 0; i < index; i++) {
        if (current === null) throw new Error('Unexpected null value encountered in the list');

        previous = current;
        current = current.next;
      }

      newNode.next = current;

      if (previous) previous.next = newNode;

      if (index === this.length) this.tail = newNode;
    }

    this.length++;
  }

  public removeAt(index: number): void {
    if (index < 0 || index >= this.length) throw new Error('Index out of bounds');

    if (index === 0) {
      this.head = this.head?.next ?? null;

      if (this.length === 1) this.tail = null;
    } else {
      let current: LinkedListNode<T> | null = this.head;
      let previous: LinkedListNode<T> | null = null;

      for (let i = 0; i < index; i++) {
        if (current === null) throw new Error('Unexpected null value encountered in the list');

        previous = current;
        current = current.next;
      }

      if (previous) previous.next = current?.next ?? null;

      if (index === this.length - 1) this.tail = previous;
    }

    this.length--;
  }
}
