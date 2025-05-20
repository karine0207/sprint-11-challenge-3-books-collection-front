const BASE_URL = 'http://localhost:3000';
const resultsContainer = document.getElementById('results');

document.getElementById('get-users').addEventListener('click', async () => {
  resultsContainer.innerHTML = '<p>Cargando usuarios...</p>';
  try {
    const res = await fetch(`${BASE_URL}/users`);
    const users = await res.json();
    showUsers(users);
  } catch (err) {
    resultsContainer.innerHTML = '<p>Error al cargar usuarios</p>';
    console.error(err);
  }
});

document.getElementById('get-books').addEventListener('click', async () => {
  resultsContainer.innerHTML = '<p>Cargando libros...</p>';
  try {
    const res = await fetch(`${BASE_URL}/books`);
    const books = await res.json();
    showBooks(books);
  } catch (err) {
    resultsContainer.innerHTML = '<p>Error al cargar libros</p>';
    console.error(err);
  }
});

function showUsers(users) {
  resultsContainer.innerHTML = '';
  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${user.name} ${user.surname}</h3>
      <p>📧 ${user.email}</p>
      <p><strong>📚 Colección:</strong> ${user.collection?.join(', ') || 'Ninguna'}</p>
      <p><strong>⭐ Wishlist:</strong> ${user.wishlist?.join(', ') || 'Ninguna'}</p>
    `;
    resultsContainer.appendChild(div);
  });
}

function showBooks(books) {
  resultsContainer.innerHTML = '';
  books.forEach(book => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${book.image}" alt="Portada de ${book.title}" />
      <h3>${book.title}</h3>
      <p>✍️ ${book.author}</p>
      <p>📅 ${book.published}</p>
    `;
    resultsContainer.appendChild(div);
  });
}
