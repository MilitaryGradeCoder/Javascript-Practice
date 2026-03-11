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
  
  prepend = (val) =>{
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
  }
  
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
}

const ll = new LinkedList();
ll.append(5);
ll.append(12);
ll.append(6);
ll.prepend(2);
ll.prepend(4);
ll.append(2);
ll.deleteNodesWithValue(4);
let printNode = ll.head;
while (printNode != null){
  console.log(printNode.val + "-->");
  printNode = printNode.next;
}