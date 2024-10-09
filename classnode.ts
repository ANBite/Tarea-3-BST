export class NodeTree {
    private data: number;
    private leftChild?: NodeTree;
    private rightChild?: NodeTree;
    private father?: NodeTree;

    constructor(data: number) {
        this.data = data;
        // No es necesario inicializar los hijos a null explícitamente, ya que TypeScript usa "undefined" por defecto.
    }

    public getData(): number {
        return this.data;
    }

    public getLeftChild(): NodeTree | undefined {
        return this.leftChild;
    }

    public setLeftChild(child: NodeTree): void {
        this.leftChild = child;
    }

    public getRightChild(): NodeTree | undefined {
        return this.rightChild;
    }

    public setRightChild(child: NodeTree): void {
        this.rightChild = child;
    }

    public getFather(): NodeTree | undefined {
        return this.father;
    }

    public setFather(father: NodeTree | undefined): void {
        this.father = father;
    }
}