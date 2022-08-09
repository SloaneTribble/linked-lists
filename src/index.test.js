import { linkedList, node } from "./index";

test("A null node can be created", () => {
  const nullNode = node();

  expect(nullNode.value).toBe(null);
  expect(nullNode.next).toBe(null);
});

test("A linked list with a single node can be created", () => {
  const houses = linkedList();

  houses.append("bungalo");

  expect(houses.head.value).toBe("bungalo");
  expect(houses.tail.value).toBe("bungalo");
});

test("A linked list with two nodes can be created", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  expect(houses.head.value).toBe("bungalo");
  expect(houses.tail.value).toBe("casita");
});

test("A linked list with three nodes can be created", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  expect(houses.head.value).toBe("bungalo");

  expect(houses.tail.value).toBe("hutch");

  expect(houses.size).toBe(3);
});
