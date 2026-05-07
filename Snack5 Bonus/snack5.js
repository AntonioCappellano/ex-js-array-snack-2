
// Usando la l'API http://localhost:3333/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids)
// ritorna una promise che risolve un array di libri (books).

const API_URL = "http://localhost:3333";

const getBooks = async (ids) => {
  const responses = await Promise.all(
    ids.map((id) => fetch(`${API_URL}/books/${id}`)),
  );
  const books = await Promise.all(responses.map((response) => response.json()));
  return books;
};

(async () => {
  const books = await getBooks([2, 13, 7, 21, 19]);
  console.log(books);
})();
