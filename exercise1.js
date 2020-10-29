const cards = document.getElementById("cards");
let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tokien',
        pages: '295 pages',
        read: 'Not read',
    },
    {
        title: 'For whom the bell tolls',
        author: 'Ernest Hemingway',
        pages: '465 pages',
        read: 'Read',
    }
];
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
//RESET BOOKS FUNCTION
function resetContainer(){
    var container = document.getElementById("container");
    container.remove();
    var container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
    display();
};
//HELPER FUNCTIONS
function addBookToLibrary() {
    var title = prompt("Please enter the title");
    var author = prompt("Please enter the author");
    var pages = prompt("Please enter the number of pages");
    var read = prompt("Read or Not read?");
    while(read !=("Read"||"Not read")){
        read = prompt("Please enter valid input: Read or Not read")
    }
    let Element = new Book(title,author,pages,read);
    myLibrary.push(Element);
    resetContainer();
};

function deleteBook(element){
    myLibrary.splice(element.target.value, 1);
    resetContainer();
};

function toggleRead(element){
    if(myLibrary[element.target.value]["read"]==="Read"){
        myLibrary[element.target.value]["read"] = "Not read";
    }else{
        myLibrary[element.target.value]["read"]="Read";
    }
    resetContainer();
};
//
//TWO DISPLAY FUNCTIONS
function displayElement(element){
    var title = document.createElement("h3");
    var author = document.createElement("h4");
    var pages = document.createElement("h4");
    var read = document.createElement("h4");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    title.innerHTML = element["title"];
    author.innerHTML = element["author"];
    pages.innerHTML = element["pages"];
    read.innerHTML = element["read"];
    button1.innerHTML = "Delete Book";
    button2.innerHTML = "Toggle Read";
    button1.id = button2.id = "btn";
    button1.value = button2.value = myLibrary.indexOf(element);
    button1.onclick = deleteBook;
    button2.onclick = toggleRead;
    document.getElementById("container").appendChild(title);
    document.getElementById("container").appendChild(author);
    document.getElementById("container").appendChild(pages);
    document.getElementById("container").appendChild(read);
    document.getElementById("container").appendChild(button1);
    document.getElementById("container").appendChild(button2);
};
function display(){
    myLibrary.forEach(element => displayElement(element));
};
display();
//
