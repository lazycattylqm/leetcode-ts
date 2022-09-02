import TreeNode from "./treeNode";
import { NodePath } from "@babel/core";

export default function longestUnivaluePath(root: TreeNode | null): number {

    let result: number = 0;

    const calculatePath = (node: TreeNode | null): number => {
        if (node === null) {
            return 0;
        }
        const left = calculatePath(node.left);
        const right = calculatePath(node.right);
        let arrowLeft = 0;
        let arrowRight = 0;
        if (node.left !== null && node.left.val === node.val) {
            arrowLeft += left + 1;
        }
        if (node.right !== null && node.right.val === node.val) {
            arrowRight += right + 1;
        }
        result = Math.max(result, arrowLeft + arrowRight);
        return Math.max(arrowLeft, arrowRight);
    }

    const number = calculatePath(root);

    return Math.max(result, number);
};