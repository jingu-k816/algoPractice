class MinHeap{
  constructor(){
      this.storage = [];
      this.size = 0;
  }

  getLeftChildIndex(index){
      return 2 * index + 1;
  }

  getRightChildIndex(index){
      return 2 * index + 2;
  }
  
  getParentIndex(index){
      return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index){
      return this.getLeftChildIndex(index) < this.size;
  }

  hasRightChild(index){
      return this.getRightChildIndex(index) < this.size;
  }

  hasParent(index){
      return this.getParentIndex(index) >= 0;
  }

  leftChild(index){
      return this.storage[this.getLeftChildIndex(index)];
  }

  rightChild(index){
      return this.storage[this.getRightChildIndex(index)];
  }

  parent(index){
      return this.storage[this.getParentIndex(index)];
  }

  swap(index1,index2){
      let temp = this.storage[index1];
      this.storage[index1] = this.storage[index2];
      this.storage[index2] = temp;
  }

  removeMin(){
      if(this.size == 0) {
        throw new Error("Empty Heap");
      }
      let data = this.storage[0];
      this.storage[0] = this.storage[this.size - 1];
      this.size -= 1;
      this.heapifyDown(0);
      this.storage.pop();
      return data;
  }

  /*                5
                /       \
               7         14
            /    \      /   \
          10      9    25   20
         /  \    /       
        23  21  31     
*/             
//                  ||
//                  VV

  /*                7
                /       \
               9         14
            /    \      /   \
          10      31    25   20
         /  \          
        23  21       
*/            
  heapifyDown(index){
      let smallest = index;
      console.log("----------------------------------------Start---------------------------------------");
      console.log(`index of ${smallest}'s value in the array is `,this.storage[smallest]);
      console.log("left child value of the above's value is ", this.leftChild(index));
      console.log("right child value of the above's value is ", this.rightChild(index));
      console.log("-------------------------------------------------------------------------------");
      if(this.hasLeftChild(index) && this.storage[smallest] > this.leftChild(index)){
        smallest = this.getLeftChildIndex(index);
        console.log(`inside the first condition, smallest has changed to ${smallest} and it's value is ${this.storage[smallest]}`);
      }
      if(this.hasRightChild(index) && this.storage[smallest] > this.rightChild(index)) {
        smallest = this.getRightChildIndex(index);
        console.log(`inside the second condition, smallest changed again, swapping values with ${this.storage[index]} and ${this.storage[smallest]}`);
      }
      if(smallest !== index){
        this.swap(index,smallest);
        console.log("value swapped");
        console.log("-----------------------------------END-------------------------------------------");
        this.heapifyDown(smallest);
      }
  }   

  insert(data){
      this.storage[this.size] = data; 
      this.size += 1;
      this.heapifyUp(this.size - 1);
  }

  heapifyUp(index){
      if(this.hasParent(index) && this.parent(index) > this.storage[index]) { 
          this.swap(index,this.getParentIndex(index));
          this.heapifyUp(this.getParentIndex(index));
      }
  }
}

const MH = new MinHeap();

MH.insert(5);
MH.insert(10);
MH.insert(25);
MH.insert(7);
MH.insert(9);
MH.insert(14);
MH.insert(20);
MH.insert(23);
MH.insert(21);
MH.insert(31);

/*                  5
                /       \
               7         14
            /    \      /   \
          10      9    25   20
         /  \    /       
        23  21 31       
*/              
//console.log("Min heap after insertion \n",MH.storage);
MH.removeMin();
// console.log("after removing once\n", MH.storage);

/*                  7
                /       \
              9          14
            /  \        /   \
          10   31      25   20
         /  \            
        23  21          
*/              

MH.removeMin();
MH.removeMin();
MH.removeMin();
console.log("after removing 3 more times \n", MH);
/*                  14
                /       \
              21         20
            /  \        /   
          23   31      25   
         
*/              