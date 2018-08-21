// Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
//  For example, you may serialize the following 3-ary tree
//              1
//            / | \
//           3  2  4
//          / \
//         5   6
// Return its postorder traversal as: [5,6,3,2,4,1].
// Note:
//
// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public List<Integer> postorder(Node root) {
      List<Integer> result = new ArrayList<>();
      if (root == null) {
        return result;
      }

      Stack<Node> stack = new Stack<>();
      stack.push(root);

      while (!stack.isEmpty()) {
        Node node = stack.pop();
        result.add(node.val);

        for(Node child : node.children) {
          stack.push(child);
        }
      }

      Collections.reverse(result);
      return result;
    }
}
