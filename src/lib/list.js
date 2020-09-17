export default class List {
  static ID = 0;

  constructor(listName) {
    this.id = List.getID();
    this.listName = listName;
    this.hasItems = false;
  }

  static getID() {
    return List.ID++;
  }
}
