
console.log('JS Loaded!');

// NET NINJA - DOM MANIPULATION 

// var titles = document.getElementsByClassName('title');

// For Each - can only be used for cycling through arrays

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//   console.log(item);
// })

// Query Selector
// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

// Query Selector All
// let books = document.querySelectorAll('#book-list li .name');
//console.log(books);

// Array.from(books).forEach(function(book){
//   console.log(book);
// });

// let books = document.querySelectorAll('#book-list li .name');

// books.forEach(function(book){
//   book.textContent += ' (book title)';
// });

// Inner HTML Elements
// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';


// Node manipulation - Node Type, Node Name, Has Child Nodes
// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());


// DOM Traversal - Parent & Children
// const bookList = document.querySelector('#book-list');

// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent node is:', bookList.parentElement.parentElement);

// console.log(bookList.children);


// DOM Traversal - Siblings
// const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is: ', bookList.nextSibling);
// console.log('book-list next sibling is: ', bookList.nextElementSibling);

// console.log('book-list previous sibling is: ', bookList.previousSibling);
// console.log('book-list previous sibling is: ', bookList.previousElementSibling);

// Combining finding sibling elements to add element to the DOM
// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for everyone else!'



// DOM EVENTS 
let buttons = document.querySelectorAll('#book-list .delete');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){

    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
  });
});
