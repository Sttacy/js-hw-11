class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    console.log(this.items);
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(newItem) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === newItem) {
        this.items.splice(i, 1);
      }
      ("Цього товару немає");
    }
    return;
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроїд");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
