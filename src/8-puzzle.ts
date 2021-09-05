import { HeuristicFunction } from "./a-star";
import { AStarProblem, SolutionNode } from "./problem";

export class EightPuzzle extends AStarProblem {
    constructor(
        initialTilesSet: Array<Array<number>>,
        goalTilesSet: Array<Array<number>>,
        hn: HeuristicFunction
    ) {
        super(JSON.stringify(initialTilesSet), JSON.stringify(goalTilesSet), hn);
    }

    traverse() {
        if (!this.isSolved() && this.currentIdx < this.nodes.length - 1) {
            const currentNode = this.nodes[this.currentIdx];
            const expandedNodes = this.expandNode(currentNode);
            expandedNodes.sort((a, b) => {
                if (a.fn === b.fn) return 1;
                return a.fn - b.fn;
            });
            const newNodes: Array<SolutionNode> = [];
            for (let i = 0; i < this.nodes.length; i++) {
                if (i === this.currentIdx) {
                    const newNode = SolutionNode.copy(this.nodes[i]);
                    newNode.expandedNodes = [...expandedNodes];
                    newNodes.push(newNode);
                } else {
                    newNodes.push(this.nodes[i]);
                }
            }
            for (let j = 0; j < expandedNodes.length; j++) {
                if (!newNodes.find((n) => n.state === expandedNodes[j].state)) {
                    newNodes.push(expandedNodes[j]);
                }
            }
            newNodes.sort((a, b) => {
                if (a.fn === b.fn) return 1;
                return a.fn - b.fn;
            });
            this.nodes = [...newNodes];
            this.currentIdx++;
        }
    }

    expandNode(node: SolutionNode): Array<SolutionNode> {
        const currentTilesSet: ReadonlyArray<ReadonlyArray<number>> = Array.from(JSON.parse(node.state));
        for (let i = 0; i < currentTilesSet.length; i++) {
            for (let j = 0; j < currentTilesSet[i].length; j++) {
                if (currentTilesSet[i][j] === -999) {
                    if (i === 0) {
                        if (j === 0) {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[0][1] = -999;
                            newTilesSet1[0][0] = currentTilesSet[0][1];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[1][0] = -999;
                            newTilesSet2[0][0] = currentTilesSet[1][0];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            return expandedNodes;
                        } else if (j === 1) {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[0][2] = -999;
                            newTilesSet1[0][1] = currentTilesSet[0][2];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[0][0] = -999;
                            newTilesSet2[0][1] = currentTilesSet[0][0];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            const newTilesSet3 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[1][1] = -999;
                            newTilesSet2[0][1] = currentTilesSet[1][1];
                            const newNode3 = SolutionNode.make(node, newTilesSet3, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode3);
                            return expandedNodes;
                        } else {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[1][2] = -999;
                            newTilesSet1[0][2] = currentTilesSet[1][2];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[0][1] = -999;
                            newTilesSet2[0][2] = currentTilesSet[0][1];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            return expandedNodes;
                        }
                    } else if (i === 1) {
                        if (j === 0) {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[0][0] = -999;
                            newTilesSet1[1][0] = currentTilesSet[0][0];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[0][2] = -999;
                            newTilesSet2[1][0] = currentTilesSet[0][2];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            const newTilesSet3 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet3[1][1] = -999;
                            newTilesSet3[1][0] = currentTilesSet[1][1];
                            const newNode3 = SolutionNode.make(node, newTilesSet3, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode3);
                            return expandedNodes;
                        } else if (j === 1) {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[0][1] = -999;
                            newTilesSet1[1][1] = currentTilesSet[0][1];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[1][2] = -999;
                            newTilesSet2[1][1] = currentTilesSet[1][2];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            const newTilesSet3 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet3[2][1] = -999;
                            newTilesSet3[1][1] = currentTilesSet[2][1];
                            const newNode3 = SolutionNode.make(node, newTilesSet3, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode3);
                            const newTilesSet4 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet4[1][0] = -999;
                            newTilesSet4[1][1] = currentTilesSet[1][0];
                            const newNode4 = SolutionNode.make(node, newTilesSet4, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode4);
                            return expandedNodes;
                        } else {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[0][2] = -999;
                            newTilesSet1[1][2] = currentTilesSet[0][2];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[2][2] = -999;
                            newTilesSet2[1][2] = currentTilesSet[2][2];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            const newTilesSet3 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet3[1][1] = -999;
                            newTilesSet3[1][2] = currentTilesSet[1][1];
                            const newNode3 = SolutionNode.make(node, newTilesSet3, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode3);
                            return expandedNodes;
                        }
                    } else {
                        if (j === 0) {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[2][1] = -999;
                            newTilesSet1[2][0] = currentTilesSet[2][1];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[1][0] = -999;
                            newTilesSet2[2][0] = currentTilesSet[1][0];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            return expandedNodes;
                        } else if (j === 1) {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[2][2] = -999;
                            newTilesSet1[2][1] = currentTilesSet[2][2];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[2][0] = -999;
                            newTilesSet2[2][1] = currentTilesSet[2][0];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            const newTilesSet3 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet3[1][1] = -999;
                            newTilesSet3[2][1] = currentTilesSet[1][1];
                            const newNode3 = SolutionNode.make(node, newTilesSet3, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode3);
                            return expandedNodes;
                        } else {
                            const expandedNodes: Array<SolutionNode> = [];
                            const newTilesSet1 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet1[2][1] = -999;
                            newTilesSet1[2][2] = currentTilesSet[2][1];
                            const newNode1 = SolutionNode.make(node, newTilesSet1, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode1);
                            const newTilesSet2 = JSON.parse(JSON.stringify(Object.assign([], currentTilesSet)));
                            newTilesSet2[1][2] = -999;
                            newTilesSet2[2][2] = currentTilesSet[1][2];
                            const newNode2 = SolutionNode.make(node, newTilesSet2, JSON.parse(this.goalState), this.hn, node);
                            expandedNodes.push(newNode2);
                            return expandedNodes;
                        }
                    }
                }
            }
        }
        return [];
    }

    static MismatchTilesHeuristicFn: HeuristicFunction = (
        currentState: Array<Array<number>>,
        goalState: Array<Array<number>>
    ): number => {
        let mismatchTiles = 0;
        if (currentState.length !== goalState.length) {
            throw Error('Tiles set size is mismatch')
        }
        for (let i = 0; i < currentState.length; i++) {
            if (currentState[i].length !== goalState[i].length) {
                throw Error('Tiles set size is mismatch')
            }
            for (let j = 0; j < currentState[i].length; j++) {
                if (currentState[i][j] !== goalState[i][j]) {
                    mismatchTiles++;
                }
            }
        }
        return mismatchTiles;
    }

    static ManhattanDistanceHeuristicFn: HeuristicFunction = (
        currentState: Array<Array<number>>,
        goalState: Array<Array<number>>
    ): number => {
        let manhattanDistance = 0;
        if (currentState.length !== goalState.length) {
            throw Error('Tiles set size is mismatch')
        }
        for (let i = 0; i < currentState.length; i++) {
            if (currentState[i].length !== goalState[i].length) {
                throw Error('Tiles set size is mismatch')
            }
            for (let j = 0; j < currentState[i].length; j++) {
                for (let k = 0; k < goalState.length; k++) {
                    for (let l = 0; l < goalState[k].length; l++) {
                        if (currentState[i][j] === goalState[k][l]) {
                            console.log({
                                i, k, j, l
                            })
                            manhattanDistance += Math.abs(i - k) + Math.abs(j - l);
                        }
                    }
                }
            }
        }
        return manhattanDistance;
    }
}