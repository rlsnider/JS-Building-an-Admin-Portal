
// Your Code Here
//OK, redownloaded, restarted and seems to be running fine.

const { response } = require("express");

// retrieve a list of books from the server.
async function getMyBookList(){
 await fetch('http://localhost:3001/listBooks')
 .then((response)=> response.json())
 .then((books)=> console.log(books));
  
}
getMyBookList()


//add admin.js to index.html script files, Console.log to make sure admin.js is showing up

//2. Display a list of book titles to the admin. ??What admin? Maybe they are asking for a list of titles to be displayed on the page with the cards just as a "list of books"
//if the array has no assigned var, how do we go into it? Everything I try seems to come back as "undefined". return all titles and put them into list in index.html
//I've looked in stack Overflow, no help, in Mdn, no help W3schools, not in depth enough, watched several videos, all are either way over the top, not what I'm looking for or not in depth enough.
async function getMyTitles(){
await fetch('http://localhost:3001/listBooks')
.then((response)=> response.json())

}

}
getMyTitles()
  //map over array and return titles;
  //error undefined is not a funtion at Array.map

  //display titles in "listOfBooks" ul in index.html
  



//3.
