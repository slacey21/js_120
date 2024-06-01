/* eslint-disable max-lines-per-function */
const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  test("todolist toArray returns array", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("todolist first value is Buy milk", () => {
    expect(list.first()).toEqual(todo1);
  });

  test("todolist last value is Buy milk", () => {
    expect(list.last()).toEqual(todo3);
  });

  test("shift removes and returns first item", () => {
    let itemRemoved = list.shift();
    expect(itemRemoved).toEqual(todo1);
    expect(list.size()).toEqual(2);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test("pop removes and returns last item", () => {
    let itemRemoved = list.pop();
    expect(itemRemoved).toEqual(todo3);
    expect(list.size()).toEqual(2);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("isDone method works correctly", () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test("add raises TypeError if object added is not a todo", () => {
    expect(() => list.add(179)).toThrow(TypeError);
    expect(() => list.add("hi")).toThrow(TypeError);
  });

  test("itemAt returns item at index or ReferenceError", () => {
    expect(() => list.itemAt(179)).toThrow(ReferenceError);
    expect(list.itemAt(0)).toEqual(todo1);
  });

  test("markDoneAt marks todo done at specified index", () => {
    expect(() => list.markDoneAt(179)).toThrow(ReferenceError);
    list.markDoneAt(0);
    list.markDoneAt(2);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(true);
  });

  test("markUndoneAt marks todo undone at specified index", () => {
    expect(() => list.markUndoneAt(179)).toThrow(ReferenceError);
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.markDoneAt(2);
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test("markAllDone marks all todos as done", () => {
    list.markAllDone();
    expect(list.isDone()).toEqual(true);
    expect(todo1.isDone()).toEqual(true);
    expect(todo2.isDone()).toEqual(true);
    expect(todo3.isDone()).toEqual(true);
  });

  test("removeAt removes todo at specified position", () => {
    expect(() => list.removeAt(5)).toThrow(ReferenceError);
    list.removeAt(0);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
    list.markDoneAt(0);

    string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);

    list.markAllDone();

    string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test("forEach iterates over all todos in todolist", () => {
    let arr = [];
    list.forEach(todo => arr.push(todo));

    expect(arr).toEqual(list.toArray());
  });

  test("filter returns new TodoList object", () => {
    let newList = list.filter(todo => !todo.isDone());
    expect(newList).toEqual(list);
  });
});