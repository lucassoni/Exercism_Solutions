//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.size = 0
    this.head = this.tail = null
  }
  push(value) {
    let node = new Node(value)
    if (!this.size){
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }

  pop() {
    let value = this.tail.value
    this.tail = this.tail.prev
    if (this.tail)
      this.tail.next = null
    else this.head = null
    this.size--
    return value
  }

  shift() {
    let value = this.head.value
    this.head = this.head.next
    if (this.head)
      this.head.prev = null
    else this.tail = null
    this.size--
    return value
  }

  unshift(value) {
    let node = new Node(value)
    if (!this.size){
      this.head = node
      this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  delete(element) {
    let node = this.head
    while (node.value !== element) {
      node = node.next
      if (!node)
        return
    }
    if (node === this.head)
      this.shift()
    else if (node === this.tail)
      this.pop()
    else {
      node.next.prev = node.prev
      node.prev.next = node.next
      this.size--
    }
  }

  count() {
    console.log(this.size)
    return this.size
  }
}
