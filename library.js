// Step 1: Create Book factory function
function createBook(title, author) {
    return {
      title: title,
      author: author,
      details: function () {
        console.log(` Title: "${this.title}", Author: ${this.author}`);
      }
    };
  }
  
  // Step 2: Create Library factory function
  function createLibrary() {
    let books = [];
  
    return {
      addBook: function (book) {
        books.push(book);
        console.log(` Title:"${book.title}" Author: ${book.author}`);
      },
  
      removeBook: function (title) {
        const index = books.findIndex(book => book.title === title);
        if (index !== -1) {
          console.log(` Book removed: "${books[index].title}"`);
          books.splice(index, 1);
        } else {
          console.log(` Book titled "${title}" not found.`);
        }
      },
  
      listBooks: function () {
        if (books.length === 0) {
          console.log(" No books in the library.");
        } else {
          console.log(" Available Books:");
          books.forEach(book => book.details());
        }
      }
    };
  }
  
  // Step 3: Create library instance
  let library = createLibrary();
  
  // Step 4: Create book objects using createBook()
    const book1 = createBook("To Kill a Mockingbird", "Harper Lee");
     const book2 = createBook("1984", "George Orwell");
 
  
  // Step 5: Use library methods properly
  library.addBook(book1);
  library.addBook(book2);
 
  
  library.listBooks();
  
  library.removeBook("1984");
  
  library.listBooks();
  