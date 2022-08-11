# Book Store Admin Portal

This is an activity for FSWD Lesson 5.7.3- Fetch Practice.

Please refer to the Activity Guide in Canvas for directions.
 

// Your Code Here 

//First I had to fix my ENOENT problem, I looked up documentation on it and found a possible solution was to move the index.js to root directory of JS-Building-An-ADmin... 

// Npm started, but I couldn't get a list of books. So I moved db.json to root directory as well. I can get a list of books but not pics, and cards.  

 
 

//Lets start by debugging why the pictures/cards are not showing up on the page to begin with. 

 
 

//looks like the books are called and rendered in index.js. 

// in server.js express is used to called. books and render them on the page, but they are not showing up on the page 

//Index.html should path back to where the pictures are being loaded. 

//Index.js is no longer on the same level of files as index.html so on line  19 of index.html changed index.js to ./index.js 

//Still get the error message, "getBooks is not defined. in index. But which index? index.html line 21. Did a search and it is called on line 21 of index.html but it is not defined anywhere in the project. went to console and did a getBooks().not defined, so I'm assuming I need to write that function here in admin.js. 

 
 

// There's obviously a file patch problem. Starting at entry point and working my way up. 

//inserting console.log's in the different files. 

//server.js (OK) 

//index.js console.log not showing up  

//index.html, added a p tag and it is showing. 

//admin.html no 

//admin.js no 

//BAD FILE CONFIGURATION PROBLEM 

 
 

//Index.js has main function which "fetches" books and renderBook to format containers for book images. The console log on this file is not showing up. 

//Seems like my "fix" for the npm start messed up the file configuration. moving files back to original positions and looking for another solution. 

//Live server stopped working as soon as I moved the files back to the original position. 

//moved index.js back to root dir and looked for anywhere the index.js was called and changed the file path to "../index.js" Console.log from server.js now showing. 

//Commented out line with "getBooks()" in index.html to get rid of error message. 

//still getting the error message ENOENT no such file or directory, for db.json. 

//The only file that seems to be looking for the db.json is server.js, but the file paths for these have not changed. Went into server.js and twicked the file path and it didn't make a difference' I'm going to put console.logs in all of the functions to see which are running. 

 
 

//Server.js  main() ok, coming through, The rest of the functions app....() can't really test with console.log unless it is doing its function.  

//Using Postman. Tested a get request and worked fine, except that pics picture cards were not rendered. 

 
 

//Tried moving files to C:/JavaScript folder so file path would not be so long. 

//Still the same. 

// Looked up ENOENT: no such file or directory, open "filepath". Looks like a common problem with json files, config.json, is the example in stackoverflow.The Guru's there seem to think this is a filepath problem, or a missing file in the json files. 

//I have done this assignment before with not problems. I'm going to delete the files, delete the Repo in GitHub and start again. Keeping this file in my ReadMe to remind me what all I have done to try to fix the problem so I don't keep repeating the same fixes. 