'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // Create the internal storage for the stack.
    this.items = [];
  }

  push(element) {
    // Add an element to the top of the stack.
    this.items.push(element);
  }

  pop() {
    // Remove and return the top element.
    return this.items.pop();
  }

  peek() {
    // Return the top element without removing it.
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // Return true when the stack has no elements.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements in the stack.
    return this.items.length;
  }

  toString() {
    // Return all stack elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the current top action.
console.log('Top Action:', actionHistory.peek());

// Undo the most recent action.
console.log('Undo Action:', actionHistory.pop());

// Display the remaining actions.
console.log('Remaining Actions:', actionHistory.toString());

// Display the current stack size.
console.log('Stack Size:', actionHistory.size());


// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // Create the internal storage for the queue.
    this.items = [];
  }

  enqueue(element) {
    // Add an element at the back of the queue.
    this.items.push(element);
  }

  dequeue() {
    // Remove and return the front element.
    return this.items.shift();
  }

  front() {
    // Return the front element without removing it.
    return this.items[0];
  }

  isEmpty() {
    // Return true when the queue has no elements.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements in the queue.
    return this.items.length;
  }

  toString() {
    // Return all queue elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the request at the front.
console.log('Next Request:', waitingRequests.front());

// Process two requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining queue and its size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());


// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // Create the internal storage for the priority queue.
    this.items = [];
  }

  enqueue(request, priority) {
    // Create an item containing the request and priority.
    const item = {
      request: request,
      priority: priority
    };

    // Find the correct insertion position.
    let inserted = false;

    for (let i = 0; i < this.items.length; i++) {
      // Insert before an item with a lower priority number.
      // Using < instead of <= preserves arrival order
      // when two requests have the same priority.
      if (item.priority < this.items[i].priority) {
        this.items.splice(i, 0, item);
        inserted = true;
        break;
      }
    }

    // If no earlier position was found, add it at the end.
    if (!inserted) {
      this.items.push(item);
    }
  }

  dequeue() {
    // Remove and return the highest-priority request.
    return this.items.shift();
  }

  size() {
    // Return the number of items in the priority queue.
    return this.items.length;
  }

  print() {
    // Display every request and its priority.
    for (const item of this.items) {
      console.log(`${item.request}, Priority ${item.priority}`);
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Print the initial priority order.
console.log('Initial Priority Queue:');
urgentRequests.print();

// Process the first request.
const processedUrgent = urgentRequests.dequeue();

console.log('Processed:', 
  `${processedUrgent.request}, Priority ${processedUrgent.priority}`
);

console.log('Remaining Priority Queue:');
urgentRequests.print();


class Node {
  constructor(element) {

    this.element = element;

   
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    
    this.length = 0;

    
    this.head = null;
  }

  append(element) {
    
    const node = new Node(element);

    
    if (this.head === null) {
      this.head = node;
    } else {
      
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      
      current.next = node;
    }

    
    this.length++;
  }

  insert(position, element) {
    
    if (position < 0 || position > this.length) {
      return false;
    }

   
    const node = new Node(element);

    
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      
      node.next = previous.next;
      previous.next = node;
    }

   
    this.length++;

    return true;
  }

  removeAt(position) {
    
    if (position < 0 || position >= this.length) {
      return undefined;
    }

    let current = this.head;

    
    if (position === 0) {
      this.head = current.next;
    } else {
      
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      current = previous.next;

     
      previous.next = current.next;
    }

    
    this.length--;

    return current.element;
  }

  indexOf(element) {
    
    let current = this.head;
    let index = 0;

    
    while (current !== null) {
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    
    return -1;
  }

  remove(element) {
    
    const index = this.indexOf(element);

    
    if (index !== -1) {
      return this.removeAt(index);
    }

    return undefined;
  }

  isEmpty() {
    
    return this.length === 0;
  }

  size() {
    
    return this.length;
  }

  toString() {
  
    const elements = [];
    let current = this.head;

    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }

  
    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

completedRequests.insert(
  completedRequests.size(),
  'Ticket #405 - Browser Updated'
);


console.log('Complete List:');
console.log(completedRequests.toString());

console.log(
  'Index of Ticket #402 - Printer Connected:',
  completedRequests.indexOf('Ticket #402 - Printer Connected')
);

console.log(
  'Removed at position 1:',
  completedRequests.removeAt(1)
);

console.log(
  'Removed by value:',
  completedRequests.remove('Ticket #403 - Antivirus Updated')
);

console.log('Final List:');
console.log(completedRequests.toString());

console.log('Final Size:', completedRequests.size());