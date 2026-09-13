import { Node, Tree } from "./bst.js";


function makeArr() {
    let genArr = [];

    for (let i = 0; i < 16; i++) {
      genArr[i] = Math.floor(Math.random() * 100);
    }
    return genArr;
}

function makeImbalanced() {
    for (let i = 0; i < 6; i++){
        const value = Math.floor(Math.random() * (200 - 101 + 1)) + 101;
        tree.insert(value);
        console.log(`Value ${value} added.`);
    }
}

const tree = new Tree(makeArr());

tree.prettyPrint();
console.log("Is tree balanced?: ", tree.isBalanced());

tree.levelOrderForEach(val => console.log("Level Order: ", val));
tree.preOrderForEach(val => console.log("preOrder: ", val));
tree.postOrderForEach(val => console.log("postOrder: ", val));
tree.inOrderForEach(val => console.log("inOrder: ", val));

makeImbalanced();
tree.prettyPrint();
console.log("Is tree balanced?: ", tree.isBalanced());

tree.rebalance();
tree.prettyPrint();
console.log("Is tree balanced?: ", tree.isBalanced());
tree.levelOrderForEach(val => console.log("Level Order: ", val));
tree.preOrderForEach(val => console.log("preOrder: ", val));
tree.postOrderForEach(val => console.log("postOrder: ", val));
tree.inOrderForEach(val => console.log("inOrder: ", val));