//Allan Francisco Moisés Chaclán Guinea
//Miguel Alfonzo Macario Velasquez 1597421


import { NodeTree } from "./classnode";

class BST {
    private root?: NodeTree;

    constructor() {
        this.root = undefined;  // No es necesario establecer explícitamente null
    }

    public getRoot(): NodeTree | undefined {
        return this.root;
    }

    public insert(data: number): void {
        let newNode: NodeTree = new NodeTree(data);
        let parent: NodeTree | undefined = undefined;
        let current: NodeTree | undefined = this.root;

        while (current != undefined) {
            parent = current;
            if (newNode.getData() < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }

        newNode.setFather(parent);
        if (!parent) {
            this.root = newNode;
        } else if (newNode.getData() < parent.getData()) {
            parent.setLeftChild(newNode);
        } else {
            parent.setRightChild(newNode);
        }
    }

    public search(dataToSearch: number): number {
        let data: number = -1;
        let current: NodeTree | undefined = this.root;

        while (current) {
            if (current.getData() === dataToSearch) {
                data = current.getData();
                break;
            } else if (dataToSearch < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }
        return data;
    }

    private printNode(node: NodeTree | undefined): void {
        if (node?.getLeftChild()) this.printNode(node.getLeftChild());
        if (node) console.log(node.getData());
        if (node?.getRightChild()) this.printNode(node.getRightChild());
    }

    public printAll(): void {
        this.printNode(this.root);
    }
}

// main
let myBinarySearchTree: BST = new BST();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(100);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(38);
if (myBinarySearchTree.search(10) != -1) {
    console.log("Dato encontrado");
} else {
    console.log("El dato no existe");
}
myBinarySearchTree.printAll();
