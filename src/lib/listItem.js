export default class ListItem {
  static ID = 0;

  constructor(itemName, description, dueDatetime, listID) {
    this.id = ListItem.getID();
    this.listID = listID;
    this.itemName = itemName;
    this.description = description;
    this.dueDatetime = dueDatetime;
    this.isDone = false;
  }

  static getID() {
    return ListItem.ID++;
  }
}
