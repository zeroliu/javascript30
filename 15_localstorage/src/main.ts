interface Item {
  name: string;
  done: boolean;
}

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items: Item[] = JSON.parse(localStorage.getItem('items') || '[]');
renderItemsList();

function addItem(this: HTMLFormElement, e: Event) {
  e.preventDefault();
  const itemEl = this.querySelector('input[name=item]') as HTMLInputElement;
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

function toggleDone(e: Event) {
  const index = Number((e.target as HTMLInputElement).dataset['index']);
  items[index].done = !items[index].done;
  saveToLocalStorage();
}

itemsList?.addEventListener('input', toggleDone);

function renderItemsList() {
  itemsList!.innerHTML = items
    .map(
      (item, i) =>
        `
        <li>
          <input type="checkbox" id="item${i}" data-index=${i} ${
          item.done ? 'checked' : ''
        } />
          <label for="item${i}">${item.name}</label>
        </li>`,
    )
    .join('');
}

addItems?.addEventListener('submit', addItem);
