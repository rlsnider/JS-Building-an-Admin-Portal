
// retrieve a list of books from the server. 
 async function main(){
   let response = await fetch('http://localhost:3001/listBooks')
   let books = await response.json()
   books.forEach(renderBook)
    //get list of books 
  
 }

function renderBook(book){
  let root = document.querySelector('#root')
  let li = document.createElement('li')
  li.textContent = book.title

  let quantityInput = document.createElement('input')
  quantityInput.value = book.quantity

  let saveButton = document.createElement('button')
  saveButton.textContent ='Save'

  saveButton.addEventListener('click', () => { 
    fetch('http://localhost:3001/updateBook', { 
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: book.id,
        quantity: quantityInput.value
      })
    })
})

li.append(quantityInput, saveButton)

root.append(li)
}

main();

//2. Display a list of book titles to the admin. How do we name this array so we can iterate over it?
//if the array has no assigned var, how do we go into it? Everything I try seems to come back as "undefined". 

//I've looked in stack Overflow, no help, in Mdn, no help W3schools, not in depth enough, watched several videos, all are either way over the top, not what I'm looking for or not in depth enough.
//I feel like I've tried everything. How do we define what we are iterating over?



  //display titles in "listOfBooks" ul in admin.html

