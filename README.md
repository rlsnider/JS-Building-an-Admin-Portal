# Book Store Admin Portal

This is an activity for FSWD Lesson 5.7.3- Fetch Practice.

Please refer to the Activity Guide in Canvas for directions.
 

// Your Code Here 

//First I had to fix my ENOENT problem, I looked up documentation on it and found a possible solution was to move the index.js to root directory of JS-Building-An-ADmin... 

// Npm started, but I couldn't get a list of books. So I moved db.json to root directory as well. I can get a list of books but not pics, and cards.  

 
 

//Lets start by debugging why the pictures/cards are not showing up on the page to begin with. 

 
 

//looks like the books are called and rendered in index.js. 

// in server.js express is used to called. books and render them on the page, but they are not showing up on the page 


 
 





//server.js (OK) 

//index.js console.log not showing up  

//index.html, added a p tag and it is showing. 

//admin.html no 

//admin.js no 

 
 

//Index.js has main function which "fetches" books and renderBook to format containers for book images. The console log on this file is not showing up. 

//Seems like my "fix" for the npm start messed up the file configuration. moving files back to original positions and looking for another solution. 

//Live server stopped working as soon as I moved the files back to the original position. 

//moved index.js back to root dir and looked for anywhere the index.js was called and changed the file path to "../index.js" Console.log from server.js now showing.

finally got the whole thing working. 