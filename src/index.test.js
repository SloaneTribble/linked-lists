import { linkedList, node } from "./index";

test("A null node can be created", () => {
  const nullNode = node();

  expect(nullNode.value).toBe(null);
  expect(nullNode.next).toBe(null);
});
