import { Node, Tree } from "./bst.js";

const tree = new Tree([4,2,6,4,1,7,6,4,3,8,9]);

// console.log("Sorted Array: ", tree.sortedArr);


tree.prettyPrint();
console.log("Includes 0: ", tree.includes(0));
console.log("Includes 4: ", tree.includes(4));
console.log("Insert 10! ");
tree.insert(10)
console.log("New Tree");
console.log("========================================");
tree.prettyPrint();
console.log("Insert 5! ");
tree.insert(5)
console.log("New Tree");
console.log("========================================");
tree.prettyPrint();
console.log("Delete 10!");
tree.deleteItem(10);
console.log("New Tree");
console.log("========================================");
tree.prettyPrint();
console.log("Delete 3!");
tree.deleteItem(3);
console.log("New Tree");
console.log("========================================");
tree.prettyPrint();
console.log("Delete 6!");
tree.deleteItem(6);
console.log("New Tree");
console.log("========================================");
tree.prettyPrint();
console.log("========================================");
tree.levelOrderForEach((value) => {
    console.log("Visited value: ", value);
})