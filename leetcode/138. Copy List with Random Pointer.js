// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
//
// Return a deep copy of the list.
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  const map = new Map();

  let curr = head;
  while (curr !== null) {
    map.set(curr, new RandomListNode(curr.label));
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    let newListNode = map.get(curr);
    newListNode.next = map.get(curr.next);
    // newListNode.random = map.get(curr.random);
    curr = curr.next
  }

  curr = head;
  while (curr !== null) {
    let newListNode = map.get(curr);
    newListNode.random = map.get(curr.random);
    curr = curr.next
  }

  return map.get(head);
};

var copyRandomList = function(head) {
  let curr = head;
  while (curr !== null) {
    let copy = new RandomListNode(curr.label);
    copy.next = curr.next;
    curr.next = copy;
    curr = copy.next;
  }

  curr = head;
  while (curr !== null) {
    let copy = new RandomListNode(curr.label);
    if (curr.random !== null) {
      copy.random = curr.random.next;
    }
    curr = copy.next;
  }

  curr = head;
  const dummy = new RandomListNode(0);
  let currCopy = dummy;
  while (curr !== null) {
    let copy = curr.next;
    currCopy.next = copy;
    currCopy = copy;
    curr.next = copy.next;
    curr = copy.next;
  }

  return dummy.next;
}

var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    copyNext(head);
    copyRandom(head);
    return splitList(head);
};

function copyNext(node) {
    while (node !== null) {
        const newNode = new RandomListNode(node.label);
        newNode.random = node.random;
        newNode.next = node.next;
        node.next = newNode;

        node = node.next.next;
    }
}

function copyRandom(node) {
    while (node !== null) {
        if (node.next.random !== null) {
            node.next.random = node.random.next;
        }
        node = node.next.next;
    }
}

function splitList(head) {
    const newHead = head.next;

    while (head !== null) {
        let tmp = head.next;
        head.next = tmp.next;
        if (tmp.next !== null) {
            tmp.next = tmp.next.next;
        }
        head = head.next;
    }
    return newHead;
}
