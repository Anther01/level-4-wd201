const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const completeMarked = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const dateNew = (d) => {
        return d.toISOString().split("T")[0];
      };
  
      const todayDate = new Date();
      const today = dateNew(todayDate);
  
      return all.filter((todo) => {
        if (todo.dueDate < today) return true;
        else return false;
      });
    };
  
    const todayDue = () => {
      const dateNew = (d) => {
        return d.toISOString().split("T")[0];
      };
  
      const todayDate = new Date();
      const today = dateNew(todayDate);
  
      let arr = all.filter((todo) => {
        if (todo.dueDate === today) return true;
        else return false;
      });
      return arr;
    };
  
    const laterDue = () => {
      const dateNew = (d) => {
        return d.toISOString().split("T")[0];
      };
  
      const todayDate = new Date();
      const today = dateNew(todayDate);
  
      return all.filter((todo) => {
        if (todo.dueDate > today) return true;
        else return false;
      });
    };
  
    const toListDisplay = (list) => {
      const dateNew = (d) => {
        return d.toISOString().split("T")[0];
      };
  
      const todayDate = new Date();
      const today = dateNew(todayDate);
  
      let flag = list[0].dueDate == today ? true : false;
      const arrStr = list.map((todo) => {
        if (flag == true) {
          if (todo.completed == true) return "[x] " + todo.title;
          else return "[ ] " + todo.title;
        } else {
          if (todo.completed == true)
            return "[x] " + todo.title + " " + todo.dueDate;
          else return "[ ] " + todo.title + " " + todo.dueDate;
        }
      });
  
      let str = arrStr.join("\n");
  
      return str;
    };
  
    return {
      all,
      add,
      completeMarked,
      overdue,
      todayDue,
      laterDue,
      toListDisplay,
    };
  };
  
  module.exports = todoList;
