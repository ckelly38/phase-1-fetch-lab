function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  let marr = null;
  let books = fetch("https://anapioficeandfire.com/api/books")
  .then(function(response)
  {
    marr = response.json()
    return marr;
  })
  .then(function(marr){
    console.log("1st marr = " + marr);
    console.log("marr.length = " + marr.length);
    //for (let n = 0; n < marr.length; n++)
    //{
      //console.log("keys = " + Object.keys(marr[n]));
      //console.log("bookname = " + marr[n].name);
    //}
    renderBooks(marr);
    return marr;
  });
  return books.then(books => books);
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
