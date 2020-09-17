export default class List {
  static ID = 0;

  constructor(listName) {
    this.id = List.getID();
    this.listName = listName;
  }

  static getID() {
    return List.ID++;
  }
}
