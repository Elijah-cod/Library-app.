// Sample array of objects (you can modify this array as per your data structure)
let myLibrary = [];

// function addBookToLibrary() {
//   const book = prompt("Enter book details: ");
//   myLibrary.push(book);
// }

// Function to display the content in the table
function displayTable() {
  const tableBody = document.getElementById("tableBody");

  // Loop through the array
  for (let i = 0; i < myLibrary.length; i++) {
    const obj = myLibrary[i]
    // Create a new table row (tr element)
    const tableRow = document.createElement("tr");

    // Create and populate the cells (td elements) with item data
    const titleCell = document.createElement("td");
    titleCell.textContent = obj.author;

    const contentCell = document.createElement("td");
    contentCell.textContent = obj.title;

    // Append cells to the row
    tableRow.appendChild(titleCell);
    tableRow.appendChild(contentCell);

    // Append the row to the table body
    tableBody.appendChild(tableRow);
  }
}


const showFormBtn = document.getElementById("showFormBtn");
const formContainer = document.getElementById("formContainer");
const userForm = document.getElementById("userForm");

showFormBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
  showFormBtn.style.display = "none";
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form data
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const pages = document.getElementById("pages").value;
  const readCheckbox = document.getElementById("read");

  const isRead = ()=> {
    if (readCheckbox.checked) {
      return "Read";
    } else {
      return "Not read";
    }
  }


  // Do something with the form data (e.g., send it to the server)
  let bookObject = {
    Author: author,
    Title: title,
    Pages: pages,
    Read: isRead()
  }

myLibrary.push(bookObject);
// // Call the function to display the table
displayTable();

  // Reset the form
  userForm.reset();

  // Hide the form and show the "Show Form" button again
  formContainer.style.display = "none";
  showFormBtn.style.display = "block";
});
