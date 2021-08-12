//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val ? 0 : val)
    this.left = (left ? null : left)
    this.right = (right ? null : right)
}

var isSymmetric = function (root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
};

const isMirror = function (leftSub, rightSub) {
    if (leftSub == null && rightSub == null) return true;
    if (leftSub == null || rightSub == null) return false;

    return (leftSub.val === rightSub.val
        && isMirror(leftSub.left, rightSub.right)
        && isMirror(leftSub.right, rightSub.left))
}

tree = [1, 2, 2, 3, 4, 4, 3]
console.log(isSymmetric(tree))