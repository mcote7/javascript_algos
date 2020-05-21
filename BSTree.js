class BSNode {
    // each node in a binary search tree contains a value, a pointer to the node to the left, and a pointer to the node to the right
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor(){
        this.root = null;
    }
//<--------------------------------------------------------------------------<<<<<
printTree() {
    if(this.root == null) {
        console.log("Tree is empty.");
        return this;
    }
    this.printHelper();
}
printHelper(toPrint = "", runner = this.root) {
    if(runner == null) {
        return this;
    }
    toPrint += "\t";
    this.printHelper(toPrint, runner.right);
    console.log(`${toPrint}${runner.value}`);
    this.printHelper(toPrint, runner.left);
}
//<-------------------------------------------------------------------------<<<<<

    // write an algorithm that can determine whether or not a binary search tree is empty.
    isEmpty() {
        if(this.root == null) {
            return true;
        }
        return false;
    }


    // write an algorithm that will find the smallest number in a binary search tree
    min(){
        if(this.isEmpty()) {
            return false;
        }
        let runner = this.root;
        while(runner.left != null) {
            runner = runner.left;
        }
        return runner.value;
    }

    // write an algorithm that will find the largest number in a binary search tree
    max() {
        if(this.isEmpty()) {
            return false;
        }
        let runner = this.root;
        while(runner.right != null) {
            runner = runner.right;
        }
        return runner.value;
    }

    // 4/28 BONUS: Write an algorithm that can determine whether or not the binary search tree
    // contains a node with a given value
    contains(value, runner = this.root) {
        if(runner == null)
            return false;
        else if(value == runner.value)
            return true;
        else if(value < runner.value)
            return this.contains(value, runner.left);
        else 
            return this.contains(value, runner.right);
    }

    // Write an algorithm that will add a new node to a Binary Search Tree
    add(value) {
        if(this.root == null) {
            this.root = new BSNode(value);
            return this;
        }
        return this.addHelper(value, this.root);
    }

    addHelper(value, runner) {
        if(value >= runner.value) {
            if(runner.right == null) {
                runner.right = new BSNode(value);
                return this;
            }
            return this.addHelper(value, runner.right);
        }
        else {
            if(runner.left == null) {
                runner.left = new BSNode(value);
                return this;
            }
            return this.addHelper(value, runner.left);
        }
    }


    // Write an algorithm that will find the minimum value of the right subtree
    minRight(node = this.root) {
        if(node == null || node.right == null) {
            return false;
        }
        return this.min(node.right);
    }


    // Write an algorithm that will find the maximum value of the left subtree
    maxLeft(node = this.root) {
        if(node == null || node.left == null) {
            return false;
        }
        return this.max(node.left);

    }

    //Write an algorithm that finds the height of the Binary Search Tree
    height(runner = this.root, height = 0) {
        if(runner == null) {
            return height;
        }
        let rightHeight = this.height(runner.right, height+1);
        let leftHeight = this.height(runner.left, height+1);
        if(leftHeight >= rightHeight)
            return leftHeight;
        return rightHeight;
    }

    //Write an algorithm that finds whether or not the Binary Search Tree is balanced
    isBalanced() {
        if(this.root == null || (this.root.right == null && this.root.left == null)) {
            return true;
        }
        else if(Math.abs(this.height(this.root.right) - this.height(this.root.left)) <= 1) {
            return true;
        }
        else {
            return false;
        }
    }


    // Write an algorithm that determines if a BST is full
    isFull(runner = this.root) {
        
    }

}

let testBST = new BSTree();

testBST.add(25);
testBST.add(6);
testBST.add(5);
testBST.add(15);
testBST.add(100);
testBST.add(21);


testBST.printTree();
// console.log(testBST.contains(15));
// console.log(testBST.max());
// console.log(testBST.maxLeft());
// console.log(testBST.min());
// console.log(testBST.minRight());





