class Node {
  constructor(data) {
    this.keys = new Map();
    this.end = false;
    this.setEnd = () => {
      this.end = true;
    };
    this.isEnd = () => {
      return this.end;
    };
  };
};

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(input, node = this.root) {
    if (input.length === 0) {
      //if we reached the end of the word, we will put a end to the word.
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      //if there's no character that starts with input's first letter, set the character into the map
      node.keys.set(input[0], new Node()); 
      // recur the method starting from the 2nd letter
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      // if there is a word already like "ball" and we want to add "bat" to the trie, add method will put the letter "t" in the separate branch and continue with recursion.
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  isWord(word) {
    let node = this.root;

    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        // if there is no word that starts with the passed word's first letter, return false
        return false;
      } else {
        // if there is matching letter, we are in a loop so we will keep going until word's length is less than 0
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    };
    // if there is the last letter from the passed parameter and that letter is the end of the word, we return true and if not, return false
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
  };

  print() {
    const words = new Array();
    const search = (node, string) => {
      if (node.keys.size !== 0) {
        // if there is still letters to look through
        // run a for loop starting from each of letters in the first children nodes
        for (let letter of node.keys.keys()) {
          // recur until the there is no letters to look through.
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          // if there is word in the middle of the word tree, we count that in as well.
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };

    search(this.root, new String());
    return words.length > 0 ? words : null;
  }
};

const myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("send");
myTrie.add("sense");
myTrie.add("dorm");

//console.log(myTrie.isWord("doll"));
//console.log(myTrie.isWord("do"));
// console.log(myTrie.isWord("kill"));
 console.log(myTrie.print());

 //              null root node
//            /         
//          d            
//         /            
//        o   
//       / \ \ 
//      l  *  r
//     /     /
//    l     k
//    \      \
//    *        *