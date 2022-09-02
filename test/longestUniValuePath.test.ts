import TreeNode from "../src/treeNode";
import longestUnivaluePath from "../src/TreeNodePath";

describe('uni value path ', function () {
    test('longest uni value path', function () {
        var root = new TreeNode(5);
        root.left = new TreeNode(4);
        root.right = new TreeNode(5);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(1);
        root.right.right = new TreeNode(5);
        expect(longestUnivaluePath(root)).toBe(2);
    })
});