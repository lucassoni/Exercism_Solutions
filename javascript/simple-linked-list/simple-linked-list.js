//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  #value;
  next = null;
  constructor(i = undefined) {
    this.#value = i;
  }

  get value() {
    return this.#value;
  }

  get next() {
    return this.next;
  }
}

export class List {
  #length;
  #head;
  constructor(array = undefined) {
    if (!array) {
      this.#length = 0;
      this.#head = null;
    }
    else {
      this.#length = 0;
      while (array.length > 0) {
        this.add(new Element(array.splice(0, 1)[0]))
      }
    }
  }

  add(nextValue) {
    if (!this.#head) {
      this.#head = nextValue;
    }
    else {
      nextValue.next = this.#head;
      this.#head = nextValue;
    }
    this.#length++;
  }

  get length() {
    return this.#length;
  }

  get head() {
    return this.#head;
  }

  toArray() {
    let p = this.#head;
    let array = []
    for (let i = 0; i < this.#length; i++) {
      array.push(p.value);
      p = p.next;
    }
    return array;
  }

  reverse() {
    return new List(this.toArray());
  }
}
