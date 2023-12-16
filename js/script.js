// Function to handle user registration
function register() {

  const { fullname, username, email, contact, password, confirmPassword } = fetchRegisterPageData()

  // Check if passwords match
  if (password !== confirmPassword) {
    document.getElementById("message").textContent = "Passwords do not match!";
    return;
  }

  // Create user object with registration details
  const user = { fullname, username, email, contact, password };
  localStorage.setItem("user", JSON.stringify(user));

  // Redirect to signin page after successful registration
  loadSignInPage();
}


function fetchRegisterPageData() {
  // Fetch form values
  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  return { fullname, username, email, contact, password, confirmPassword }
}

// Function to handle user login
function signIn() {

  const { username, password, messageElement } = fetchSignInPageData()

  // Write code for task1 here
  // Use try-catch block

    // In the try block, fetch userInfo from the local storage
    
    // Check if the entered username or password is empty
    
  
      // Check if the username and password of the userInfo from local storage matches the entered username and password
      
        // Set the session storage with the login key set to true
        
        // Redirect to index.html page
       
     

        // If the username or password does not match, display error message
       
        // Set the login info in the session storage as false
        
 
    // In the catch block, if the user is not registered, display appropriate error message
    // Use paragraph with id 'message' to display all the error messages
    
}

function fetchSignInPageData() {
  // Fetch data from the signin form 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  return { username, password, messageElement };
}

// Function to load content on the index.html page
function loadContent() {
  // Fetch the login info from the session storage
  const userLogin = sessionStorage.getItem("login");

  // Check whether the login status is true
  if (userLogin) {

    fetchAndLoadData()

  }
  else {
    // If login status is false, redirect to signin.html page
    loadSignInPage();
  }

}

function fetchURLs() {
  const cuisineUrl = "https://foodorder-api-elti.onrender.com/v1/cuisines";
  const categoryUrl = "https://foodorder-api-elti.onrender.com/v1/categories";
  const restaurantUrl = "https://foodorder-api-elti.onrender.com/v1/restaurants";

  return { cuisineUrl, categoryUrl, restaurantUrl }
}

function loadListElements() {
  const cuisineList = document.getElementById("cuisine-list");
  const categoryList = document.getElementById("category-list");
  const restaurantList = document.getElementById("restaurant-list");

  return { cuisineList, categoryList, restaurantList }
}

function fetchAndLoadData() {
  const { cuisineUrl, categoryUrl, restaurantUrl } = fetchURLs()

  // Fetch the list elements from index.html which will store cuisines, categories and restaurants data
  const { cuisineList, categoryList, restaurantList } = loadListElements()

  // Call the fetchData function to fetch the data from the above-mentioned endpoints
  fetchData(cuisineUrl, cuisineList);
  fetchData(categoryUrl, categoryList);
  fetchData(restaurantUrl, restaurantList);
}

function loadSignInPage() {
  window.location.href = "../html/signin.html";
}

// Function to fetch data from an external URL endpoint
async function fetchData(url, listElement) {

  // Write your code for task2 here
  // Use try-catch to hanle errors
  // fetch the data from the external API
  // If data is present, call the displayData() function
  // If there's error in fetching data. log it in the console
  
}


// Display data which is fetched from an external API
function displayData(data, listElement) {

  const dataObjects = Object.values(data)[0];
  console.log(dataObjects);

  let dataText = "";
  for (let item of dataObjects) {
    dataText += `<div class="card"><img src=${item.image} width="100px" height="100px"/><p><b>${item.name}</b></p></div>`;
  }

  listElement.innerHTML += dataText;
}

// Logging out when clicked on the logout button
function logout() {
  // Write your code for task3 here
  // Set the login key in the session storage to false
  // Redirect to the signin page
 
}
