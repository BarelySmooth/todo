function renameSubList(todo_data, parentListID, subListID, newName) {
  if (newName === "") {
    newName = "Untitled List";
  }

  todo_data[parentListID].sub_lists.filter(
    (list) => list.id == subListID
  )[0].name = newName;

  return todo_data;
}

export default { renameSubList };
