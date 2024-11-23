import { Nullable } from "./types";

class PointerNode {
  x: number;
  y: number;
  prev: Nullable<PointerNode>;
  next: Nullable<PointerNode>;

  constructor(
    x: number,
    y: number,
    prev: Nullable<PointerNode>,
    next: Nullable<PointerNode>
  ) {
    this.x = x;
    this.y = y;
    this.prev = prev;
    this.next = next;
  }
}

export class PointerTrail {
  start: Nullable<PointerNode>;
  end: Nullable<PointerNode>;

  constructor() {
    this.start = null;
    this.end = null;
  }

  add(node: PointerNode) {
    node.next = this.start;
    this.start = node;
  }

  remove() {
    if (this.end && this.end.prev) {
      this.end.prev.next = null;
      this.end = this.end.prev;
    }
  }
}
