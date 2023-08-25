import TreeNode from "./treeNode";

function goodNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    return goodNodesHelper(root, root.val);
}

function goodNodesHelper(root: TreeNode | null, max: number): number {
    if (root === null) {
        return 0;
    }
    let count = 0;
    if (root.val >= max) {
        count++;
        max = root.val;
    }
    return count + goodNodesHelper(root.left, max) + goodNodesHelper(root.right, max);
}