// Define Node class for BST.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data){
    const newNode = new Node(data);

    if (this.root === null) {
      // if no root, make the newNode as a root node.
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // if newnode's value is less than the root value
    if (newNode.data < node.data) {
      // if there's no left node in the tree, make the left node as the newNode.
      if (node.left === null) {
        node.left = newNode;
      } else {
        // use recursion to call the function again until the left node does not have a child node.
        this.insertNode(node.left, newNode);
      }
    } else {
      // if there's no right node, we will insert the value of the node as a right node.
      if (node.right === null) {
        node.right = newNode;
      } else {
        // use recursion to find until the right node becomes a leaf node.
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  getRootNode() {
    //return the root value in the tree.
    return this.root;
  }

}

// create an object for the BinarySearchTree
const BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//                    15
//                  /    \
//                10       9
//               /  \     / \
//              7   13   22  27
//             / \      /      
//            5   9    17

const root = BST.getRootNode();

console.log("in-order traversal");
BST.inorder(root);
console.log("--------------------------------------------");
console.log("post-order traversal");
BST.postorder(root);
console.log("--------------------------------------------");
console.log("preorder traversal");
BST.preorder(root);