class ListNode{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  // method to add node at the end
  append = (val) =>{
    const node = new ListNode(val);
    
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else{
      this.tail.next = node;
      node.next = null;
      this.tail = node;
    }
    
  }
  // method to add node at the begining 
  prepend = (val) =>{
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
  }
  
  // method to reverse the linked list
  reverseList = () =>{
    let prev = null;
    let curr = this.head;
    while(curr != null){
      let ahead = curr.next;
      curr.next = prev;
      prev = curr;
      curr = ahead;
    }
    this.head = prev;
  }

  // method to delete all nodes with the given value 
  deleteNodesWithValue = (val) =>{
    let pointer = this.head;
    if(pointer.val === val){
          this.head = pointer.next;
        }
        pointer = this.head;
    while(pointer.next != null){
      let prev = pointer;
      pointer = pointer.next;
      if(pointer.val === val){
        prev.next = pointer.next;
      }
    }
  }

  // method to make the list circular
  circular = ()=>{
    let curr = this.head;
    while(curr.next != null){
      curr = curr.next;
    }
    curr.next = this.head;
  }
}

const ll = new LinkedList();
ll.append(5);
ll.append(12);
ll.append(6);
ll.append(2);
ll.reverseList();
ll.prepend(2);
ll.prepend(4);
ll.deleteNodesWithValue(4);
ll.circular();

// printing to test the methods
let printNode = ll.head;
let circleCount = 0;
while (printNode.next != null  && circleCount < 3){
  if (printNode.next == ll.head) circleCount++;
  console.log(printNode.val + "-->");
  printNode = printNode.next;
}


// function to clone a linked list with given head node.

function copyLinkedListWithRandomPointer(printNode) {
      // make a pointer to new list
      let newListPointer = new Node(0);
      // make a pointer which will move with iteration
      let newListNode = newListPointer;

      // create a map to link old node and corresponding new node in duplicate list
      const myMap = new Map();

      // iterate the given list and create duplicate new list without random value in each node, also fill the map with key: new node, value: old node
      let curr = printNode;
      while(curr != null){
            let newNode = new Node(curr.val);
            myMap.set(curr, newNode);
            newListNode.next = newNode;
            newListNode = newListNode.next;
            curr = curr.next;
      }

      // iterate the given list again and fill the newNode random values with the help of map
      let old = printNode;
      let clone = newListPointer.next;
      while(old != null){
            clone.random = myMap.get(old.random);
            old = old.next;
            clone = clone.next;
      }
      return newListPointer.next;
}