class Node{
    constructor(data = null, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor(arr = []){
        this.cleanArr = [...new Set(arr)];
        this.sortedArr = mergeSort(this.cleanArr);
        this.root = this.buildTree(this.sortedArr);
    }

    buildTree(arr) {
        if (arr.length === 0) return null;

        const mid = Math.floor(arr.length / 2);
        const root = new Node(arr[mid]);
        const leftArr = arr.slice(0, mid);
        const rightArr = arr.slice(mid + 1);

        root.left = this.buildTree(leftArr);
        root.right = this.buildTree(rightArr);

        return root;
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    includes(value, node = this.root){
        // base cases
        if(node === null) return false;
        if(node.data === value) return true;

        if(value < node.data){
            return this.includes(value, node.left);
        }
        else if(value > node.data){
            return this.includes(value, node.right);
        }
        else{
            return false;
        }        
    }

    insert(value, node = this.root){
        if (node === null){
            return new Node(value);
        }

        if(value === node.data){
            return node;
        }

        if(value < node.data){
            node.left = this.insert(value, node.left);
        }

        else{
            node.right = this.insert(value, node.right);
        }

        return node;
    }

    deleteItem(value, node = this.root){
        if (node === null) return null;

        if(value < node.data){
            node.left = this.deleteItem(value, node.left);
            return node;
        }

        if(value > node.data){
            node.right = this.deleteItem(value, node.right);
            return node;
        }

        if(value === node.data){
            if(node.left === null) {
                return node.right;
            }
            else if(node.right === null) {
                return node.left;
            }
            else{
                let successor = node.right; // placeholder

                while(successor.left !== null){
                    successor = successor.left;
                }
                node.data = successor.data;
                node.right = this.deleteItem(successor.data, node.right);
            }
        }
        return node;
    }

    levelOrderForEach(callback){
        // Since JavaScript doesn't include a queue data structure, I made a custom queue for O(1) time.
        if(!callback){
            throw new Error('Callback function required.');
        }
        if(this.root === null) return;

        const queue = new Queue();
        queue.enqueue(this.root);

        while(!queue.isEmpty()){
            let current = queue.dequeue();
            callback(current.data);

            if(current.left !== null){
                queue.enqueue(current.left);
            }
            if(current.right !== null){
                queue.enqueue(current.right);
            }
        }
    }

    inOrderForEach(callback){

    }

    preOrderForEach(callback){

    }

    postOrderForEach(callback){

    }

    height(value){

    }

    depth(value){

    }

    isBalanced(){

    }

    rebalance(){

    }
}

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex]; 
    this.headIndex++;
    return item;
  }

  isEmpty() {
    return this.headIndex === this.tailIndex;
  }
}

function mergeSort(arr){
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    
    return merge(mergeSort(leftArr), mergeSort(rightArr));
    
}

function merge(leftArr, rightArr){
    const sortedArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }
        else{
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}


export { Node, Tree, mergeSort, merge };