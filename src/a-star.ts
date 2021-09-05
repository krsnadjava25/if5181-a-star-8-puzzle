import { AStarProblem } from "./problem";

export type HeuristicFunction = (currentState: any, goalState: any) => number;

export class AStarSearch {
    private execution: number = 0;

    constructor(public readonly problem: AStarProblem, private readonly maxExecution: number = 300) {}

    execute() {
        while(!this.problem.isSolved() && this.execution <= this.maxExecution) {
            this.problem.traverse();
            this.execution++;
        }
        if (this.execution > this.maxExecution) {
            console.log(`${this.problem.nodes.length} Nodes`)
            console.error('Maximum execution is exceeded');
        }
        if (this.problem.isSolved()) {
            console.log('SOLVED!');
        }
    }
}