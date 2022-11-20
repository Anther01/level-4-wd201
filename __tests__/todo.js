const todoList = require("../todo");
const {
  all,
  add,
  completeMarked,
  overdue,
  todayDue,
  laterDue,
  toDisplayableList,
} = todoList();
const todayDate = new Date();
const dateNew = (d) => {
  return d.toISOString().split("T")[0];
};
const today = dateNew(todayDate);

describe("Todo Application Test Suite", () => {
  beforeAll(() => {
    const dateNew = (d) => {
      return d.toISOString().split("T")[0];
    };

    var todayDate = new Date();
    const today = dateNew(todayDate);
    const yesterday = dateNew(
      new Date(new Date().setDate(todayDate.getDate() - 1))
    );
    const tomorrow = dateNew(
      new Date(new Date().setDate(todayDate.getDate() + 1))
    );

    add({
      title: "Todo Application Test",
      dueDate: new Date("2022-10-20"),
      completed: false,
    });
    add({
      title: "Submit assignment",
      dueDate: new Date("2021-12-21"),
      completed: false,
    });
    add({
      title: "Pay rent",
      dueDate: today,
      completed: true,
    });
    add({
      title: "Service your vehicle",
      dueDate: today,
      completed: false,
    });
    add({
      title: "File your taxes",
      dueDate: new Date("2022-12-09"),
      completed: false,
    });
    add({
      title: "Pay your electricity bill",
      dueDate: new Date("2022-11-21"),
      completed: false,
    });
  });

  test("Add a new item", () => {
    const todosCounts = all.length;
    add({
      title: "Need to submit a book in the library",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todosCounts + 1);
  });

  test("Mark given item as read (mark as read)", () => {
    expect(all[0].completed).toBe(false);
    completeMarked(0);
    expect(all[0].completed).toBe(true);
  });

  test("Retrieve an overdue item", () => {
    overDueItems = overdue();
    expect(
      overDueItems.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("Retrieve an item due today", () => {
    todayDueItems = todayDue();
    expect(
      todayDueItems.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("Retrieve an item due later", () => {
    laterDueItems = laterDue();
    expect(
      laterDueItems.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
