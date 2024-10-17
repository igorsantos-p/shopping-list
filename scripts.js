const form = document.querySelector('form');
const inputNewItem = document.getElementById('input-item');
const shoppingList = document.getElementById('list');
const popup = document.getElementById('popup');
const btnClosePopup = document.querySelector('.close-popup');
let btnDelete;

let itemsList = [];

btnClosePopup.onclick = () => {
  closePopUp();
};

function showPopup() {
  popup.style.display = 'flex';

  setTimeout(() => {
    closePopUp();
  }, 3000);
}

function closePopUp() {
  popup.style.display = 'none';
}

function addNewItem(item) {
  if (itemsList.includes(item)) {
    alert('Item já cadastrado!');
    inputNewItem.value = '';

    return;
  }

  itemsList = [String(item), ...itemsList];
  inputNewItem.value = '';
  showShoppingList(itemsList);
}

function deleteItem(item) {
  itemsList = itemsList.filter((i) => i != item);
  showShoppingList(itemsList);
  showPopup();
}

function showShoppingList(list) {
  shoppingList.innerHTML = '';
  list.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
          <input type="checkbox" />
          <span>${item}<button class="delete"><img src="./assets/icons/trash.svg" alt="" /></button></span>`;
    shoppingList.appendChild(div);
  });
  btnDelete = document.querySelectorAll('.delete');
  btnDelete.forEach((button) => {
    button.onclick = (event) => {
      const text = event.target.parentElement.parentElement.innerText;
      deleteItem(text);
    };
  });
}

form.onsubmit = (event) => {
  event.preventDefault();
  addNewItem(inputNewItem.value);
};
