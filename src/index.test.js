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

  expect(houses.toString()).toBe("( bungalo ) -> ( casita ) -> null ");
});

test("A value's presence in list can be detected", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  expect(houses.contains("casita")).toBe(true);

  expect(houses.contains("duplex")).toBe(false);
});

test("A value's location, if present, can be detected", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  expect(houses.find("casita")).toBe(1);
  expect(houses.find("hutch")).toBe(2);

  expect(houses.find("flophouse")).toBe(null);
});

test("Node can be specifically inserted at head or tail", () => {
  const houses = linkedList();

  houses.append("casita");

  houses.append("hutch");

  houses.insertAt("bungalo", 0);

  expect(houses.head.value).toBe("bungalo");

  expect(houses.size).toBe(3);

  houses.insertAt("tent", 3);

  expect(houses.toString()).toBe(
    "( bungalo ) -> ( casita ) -> ( hutch ) -> ( tent ) -> null "
  );

  expect(houses.tail.value).toBe("tent");
});

test("Node can be inserted at specific index of list", () => {
  const houses = linkedList();

  houses.append("casita");

  houses.append("hutch");

  expect(houses.size).toBe(2);

  houses.insertAt("bungalo", 1);

  expect(houses.head.value).toBe("casita");

  expect(houses.tail.value).toBe("hutch");

  expect(houses.toString()).toBe(
    "( casita ) -> ( bungalo ) -> ( hutch ) -> null "
  );

  houses.insertAt("whippledip", 2);

  expect(houses.toString()).toBe(
    "( casita ) -> ( bungalo ) -> ( whippledip ) -> ( hutch ) -> null "
  );
});

test("Node can be specifically removed from head or tail of list", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  houses.removeAt(0);

  expect(houses.head.value).toBe("casita");

  houses.removeAt(1);

  expect(houses.tail.value).toBe("casita");
});

test.only("Node can be removed from specific index of list", () => {
  const houses = linkedList();

  houses.append("bungalo");

  houses.append("casita");

  houses.append("hutch");

  houses.removeAt(1);

  expect(houses.toString()).toBe("( bungalo ) -> ( hutch ) -> null ");

  houses.prepend("tent");
  houses.append("basket");

  expect(houses.head.value).toBe("tent");
  expect(houses.tail.value).toBe("basket");

  expect(houses.toString()).toBe("( tent ) -> ( bungalo ) -> ( hutch ) -> ( basket ) -> null ");

  houses.removeAt(2);

  expect(houses.toString()).toBe("( tent ) -> ( bungalo ) -> ( basket ) -> null ");
});
