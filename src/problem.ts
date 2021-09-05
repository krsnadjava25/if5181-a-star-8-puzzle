import { HeuristicFunction } from "./a-star";

export class SolutionNode {
    public expandedNodes: Array<SolutionNode> = [];

    constructor (
        public readonly depth: number,
        public readonly state: string,
        public readonly fn: number,
        public readonly parent: SolutionNode | null
    ) {}

    static make(node: SolutionNode, newState: any, goalState: any, hn: HeuristicFunction, parent: SolutionNode | null): SolutionNode {
        const newNode = new SolutionNode(node.depth + 1, JSON.stringify(newState), node.depth + 1 + hn(newState, goalState), parent);
        return newNode;
    }

    static copy(node: SolutionNode) {
        const newNode = new SolutionNode(node.depth, node.state, node.fn, node.parent);
        newNode.expandedNodes = [...node.expandedNodes];
        return newNode;
    }
}

export class AStarProblem {
    public nodes: Array<SolutionNode> = [];
    protected currentIdx: number = 0;

    constructor(
        protected readonly initialState: string,
        protected readonly goalState: string,
        protected readonly hn: HeuristicFunction
    ) {
        const rootNode = new SolutionNode(0, this.initialState, this.hn(this.initialState, this.goalState), null);
        this.nodes.push(rootNode);
        this.currentIdx = 0;
    }

    traverse(): void {
        throw Error('This method is not yet implemented');
    }

    expandNode(node: SolutionNode): Array<SolutionNode> {
        throw Error('This method is not yet implemented');
    }

    isSolved(): boolean {
        return this.nodes[this.currentIdx].state === this.goalState;
    }
}