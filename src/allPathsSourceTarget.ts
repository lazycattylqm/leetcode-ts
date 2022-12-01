function allPathsSourceTarget(graph: number[][]): number[][] {
    let result: number[][] = [];
    let path: number[] = [0];
    const gLen = graph.length;
    const dfs = (node: number): void => {
        if (node == gLen - 1) {
            result = [...result, [...path]];
            return
        }
        for (const ele of graph[node]) {
            path.push(ele)
            dfs(ele)
            path.pop()
        }
    }
    dfs(0)
    return result;
}

export default allPathsSourceTarget;