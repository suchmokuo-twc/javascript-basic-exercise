class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) {
    throw new Error('Creating list from undefined array');
  }

  if (!array.length) {
    throw new Error('Creating list from empty array');
  }

  const head = new Node(array[0], null);
  let currentNode = head;

  for (let i = 1; i < array.length; i += 1) {
    const nextNode = new Node(array[i], null);
    currentNode.next = nextNode;
    currentNode = nextNode;
  }

  return head;
}
