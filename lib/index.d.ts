import {NodeName, nodeName} from 'dependency-graph';

declare module 'dependency-graph' {
  export type NodeName = number | string;

  export class DepGraph<T> {
    clear(): void;

    /**
     * The number of nodes in the graph.
     */
    size(): number;

    /**
     * Add a node in the graph with optional data. If data is not given, name will be used as data.
     * @param {string} name
     * @param data
     */
    addNode(name: NodeName, data?: T): void;

    /**
     * Remove a node from the graph.
     * @param {string} name
     */
    removeNode(name: NodeName): void;

    /**
     * Check if a node exists in the graph.
     * @param {string} name
     */
    hasNode(name: NodeName): boolean;

    /**
     * Get the data associated with a node (will throw an Error if the node does not exist).
     * @param {string} name
     */
    getNodeData(name: NodeName): T;

    /**
     * Set the data for an existing node (will throw an Error if the node does not exist).
     * @param {string} name
     * @param data
     */
    setNodeData(name: NodeName, data?: T): void;

    /**
     * Add a dependency between two nodes (will throw an Error if one of the nodes does not exist).
     * @param {string} from
     * @param {string} to
     */
    addDependency(from: string, to: string): void;

    /**
     * Remove a dependency between two nodes.
     * @param {string} from
     * @param {string} to
     */
    removeDependency(from: string, to: string): void;

    /**
     * Return a clone of the dependency graph (If any custom data is attached
     * to the nodes, it will only be shallow copied).
     */
    clone(): DepGraph<T>;

    /**
     * Get an array containing the nodes that the specified node depends on (transitively). If leavesOnly is true, only nodes that do not depend on any other nodes will be returned in the array.
     * @param {string} name
     * @param {boolean} leavesOnly
     */
    dependenciesOf(name: NodeName, leavesOnly?: boolean): NodeName[];

		directDependenciesOf(name: NodeName): NodeName[];

    /**
     * Get an array containing the nodes that depend on the specified node (transitively). If leavesOnly is true, only nodes that do not have any dependants will be returned in the array.
     * @param {string} name
     * @param {boolean} leavesOnly
     */
    dependantsOf(name: NodeName, leavesOnly?: boolean): NodeName[];

		directDependantsOf(name: NodeName): NodeName[];

    /**
     * Construct the overall processing order for the dependency graph. If leavesOnly is true, only nodes that do not depend on any other nodes will be returned.
     * @param {boolean} leavesOnly
     */
    overallOrder(leavesOnly?: boolean): NodeName[];
  }
}
