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
    const obj = myLibrary[i];
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    //Remove the book from the library
    deleteButton.addEventListener("click", (event) => {
      const row = event.target.closest("tr"); // Find the closest <tr> parent
      if (row) {
        row.remove(); // Remove the row from the table
        myLibrary.shift(); //Remove the book from the array
      }
    });
    // Create a new table row (tr element)
    const tableRow = document.createElement("tr");

    // Create and populate the cells (td elements) with item data
    const titleCell = document.createElement("td");
    titleCell.textContent = obj.Author;

    const authorCell = document.createElement("td");
    authorCell.textContent = obj.Title;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = obj.Pages;

    const readCell = document.createElement("td");
    readCell.textContent = obj.Read;

    // Append cells to the row
    tableRow.appendChild(titleCell);
    tableRow.appendChild(authorCell);
    tableRow.appendChild(pagesCell);
    tableRow.appendChild(readCell);
    tableRow.appendChild(deleteButton);

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

  const isRead = () => {
    if (readCheckbox.checked) {
      return "Read";
    } else {
      return "Not read";
    }
  };

  // Do something with the form data (e.g., send it to the server)
  let bookObject = {
    Author: author,
    Title: title,
    Pages: pages,
    Read: isRead(),
  };

  myLibrary.push(bookObject);

  // Get the tbody element by its id
  var tbody = document.getElementById("tableBody");

  // Check if the tbody has content
  if (tbody && tbody.childElementCount > 0) {
    // Remove all rows from the tbody
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }
  // // Call the function to display the table
  displayTable();

  // Reset the form
  userForm.reset();

  // Hide the form and show the "Show Form" button again
  formContainer.style.display = "none";
  showFormBtn.style.display = "block";
});
