const addBookBtn = document.getElementById("addBookBtn");
const popUp = document.getElementById("popUp");
const popUpShadow = document.getElementById("bg-shadow");
const closeBtn = document.getElementById("closeBtn");
const closeBtn2 = document.getElementById("closeBtn2");
const addBtn = document.getElementById("addBtn");
const bookname = document.getElementById("bookname");
const bookauthor = document.getElementById("bookauthor");
const bookpages = document.getElementById("bookpages");
const seeYourBooks = document.getElementById("mailbox-title");
const bookContainer = document.getElementById("bookContainer");
const statusNone1 = document.getElementById("statusNone1");
const statusNone2 = document.getElementById("statusNone2");
const statusNone3 = document.getElementById("statusNone3");
const myLibrary = [];
let bookStatus = false; //if there's any books
let books = 0;

addBookBtn.onclick = () => {
    popUp.style.display = "block";
    popUpShadow.style.display = "block";
}

closeBtn.onclick = () => {
    popUp.style.display = "none";
    popUpShadow.style.display = "none";
    bookname.value = "";
    bookauthor.value = "";
    bookpages.value = "";
}

closeBtn2.onclick = () => {
    bookContainer.style.display = "none";
    popUpShadow.style.display = "none";
}

//adds book into the library array
addBtn.onclick = () => {
    let name = bookname.value;
    let author = bookauthor.value;
    let pages = bookpages.value;
    let regEx = /[^0-9]/gi;
    bookpages.value = bookpages.value.replace(regEx, "");
    if(name !== "" && author !== "" && pages !== "")
    {
        myLibrary.push({name, author, pages});
        bookname.value = "";
        bookauthor.value = "";
        bookpages.value = "";
        books++;
    }   
    if(books > 0)
    {
        statusNone1.style.display = "none";
    }
    if(books > 5)
    {
        statusNone2.style.display = "none";
    }
    if(books > 15)
    {
        statusNone3.style.display = "none";
    }
    addBook();
}

//display library
seeYourBooks.onclick = () => {
    bookContainer.style.display = "block";
    popUpShadow.style.display = "block";
}

function addBook() 
{
    const newBook = document.createElement("div");
    const newBookContent = document.createElement("p");
    newBook.classList.add("book");
    newBook.style.backgroundColor = `hsl(${Math.random() * 360} ,50% , 50%)`;
    newBook.appendChild(newBookContent);
    newBookContent.classList.add("newBookContent");
    newBookContent.innerText = `Title:\n ${myLibrary[books-1].name}\nAuthor:\n ${myLibrary[books-1].author}\nPages:\n ${myLibrary[books-1].pages}`;
    if(books <= 5 && books !== 0)
    {
        bookDisplay1.appendChild(newBook);
    }
    else if (books <= 10)
    {
        bookDisplay2.appendChild(newBook);
    }
    else if (books <= 15)
    {
        bookDisplay3.appendChild(newBook);
    }
}
