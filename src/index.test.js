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

test("A linked list can append a node", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  expect(houses.head.value).toBe("bungalo");
  expect(houses.tail.value).toBe("casita");
});

test("A linked list can append two nodes, keeps track of size", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  expect(houses.head.value).toBe("bungalo");

  expect(houses.tail.value).toBe("hutch");

  expect(houses.size).toBe(3);
});

test("Linked lists can prepend nodes", () => {
  const houses = linkedList();

  houses.prepend("bungalo");

  expect(houses.head.value).toBe("bungalo");

  houses.prepend("casita");

  houses.prepend("hutch");

  expect(houses.head.value).toBe("hutch");

  expect(houses.tail.value).toBe("bungalo");
});

test("Linked lists are correctly represented", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  expect(houses.toString()).toBe(
    "( bungalo ) -> ( casita ) -> ( hutch ) -> null "
  );

  houses.prepend("villa");

  expect(houses.toString()).toBe(
    "( villa ) -> ( bungalo ) -> ( casita ) -> ( hutch ) -> null "
  );
});

test("Value of node at a given index can be accessed", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  expect(houses.at(3)).toBe("hutch");
});

test("Values can be popped from list", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  expect(houses.pop().value).toBe("hutch");

  expect(houses.size).toBe(2);

  expect(houses.tail.value).toBe("casita");
});
