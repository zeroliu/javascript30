"use strict";
var _a, _b;
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items') || '[]');
renderItemsList();
function addItem(e) {
    e.preventDefault();
    const itemEl = this.querySelector('input[name=item]');
    const item = {
        name: itemEl.value,
        done: false,
    };
    items.push(item);
    this.reset();
    renderItemsList();
    saveToLocalStorage();
}
function saveToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}
function toggleDone(e) {
    const index = Number(e.target.dataset['index']);
    items[index].done = !items[index].done;
    saveToLocalStorage();
}
(_a = itemsList) === null || _a === void 0 ? void 0 : _a.addEventListener('input', toggleDone);
function renderItemsList() {
    itemsList.innerHTML = items
        .map((item, i) => `
        <li>
          <input type="checkbox" id="item${i}" data-index=${i} ${item.done ? 'checked' : ''} />
          <label for="item${i}">${item.name}</label>
        </li>`)
        .join('');
}
(_b = addItems) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', addItem);
//# sourceMappingURL=main.js.map