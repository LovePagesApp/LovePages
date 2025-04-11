
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'library') toggleBooks('read');
}

function toggleBooks(type) {
  const list = document.getElementById('bookList');
  const books = {
    read: [
      { title: '1984', author: 'George Orwell' },
      { title: 'Dune', author: 'Frank Herbert' },
    ],
    tbr: [
      { title: 'The Alchemist', author: 'Paulo Coelho' },
      { title: 'Sapiens', author: 'Yuval Noah Harari' },
    ]
  };
  list.innerHTML = '';
  books[type].forEach(book => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${book.title}</strong><br/><small>${book.author}</small>`;
    list.appendChild(li);
  });

  document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(\`.tabs button[onclick*="${type}"]\`).classList.add('active');
}

showScreen('welcome');
