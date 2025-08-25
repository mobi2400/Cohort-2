# DOM (Document Object Model)
- DOM (Document Object Model) API is a programming interface for web documents.
- It represents the structure of a document as a tree of objects.
- Each node in the tree corresponds to a part of the document (e.g., elements, attributes, text).
- The DOM allows programming languages to manipulate the structure, style, and content of web pages.

# Key Concepts
- DOM can be accessed and modified using JavaScript.
- Some basic tasks that can be performed using the DOM include:
  - Selecting elements
  - Modifying element content and attributes
  - Adding and removing elements
  - Handling events
- We use selectors to target specific elements in the DOM.
- Example:
  - `document.getElementById("myElement")` selects an element by its ID.
  - `document.getElementsByClassName("myClass")` selects elements by their class name.
  - `document.querySelector("div > p")` selects the first <p> element inside a <div>.

# Concept of dynamic website
- Rendering content dynamically based on user interactions or other factors.
- Updating the DOM in response to events (e.g., button clicks, form submissions).
- Fetching data from APIs and displaying it on the page without reloading.
- React is a JavaScript library for building user interfaces, allowing for the creation of dynamic and interactive web applications.

- To render a normal hello world message in a div, you can use the following JavaScript code:

  ```javascript 
    function populateDiv() {
    const div = document.getElementById("myDiv");
    div.innerHTML = "Hello, World!";
  }
  ```
  - where myDiv is the ID of the div element you want to populate with content.

- To extract values from input box of id say num1 and num2
  ```js
  function getInputValues() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    console.log(num1, num2);
  }
  ```
  - .value() is used to get the current value of an input element.
  - Further we can use `parseInt()` to convert the string values to integers.

- The above logic still runs in front-end JavaScript, meaning it executes in the user's browser rather than on a server.

- If you want to perform calculations on the server-side, you would need to use a server-side language (e.g., Node.js, Python, PHP) and send the data to the server for processing.

- Refer `02_backendWay` to know how server side processing looks like

## Backend way to hit request
- We can use fetch to hit backend endpoints.
- What we have done is
  1. Created a backend server using Express.js which has the route `/sum` to calculate the sum of two numbers under which we are simply accepting the value of a and b from query parameters and calulating the sum in backend.
  ```js
    app.get("/sum", (req, res) => {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      res.status(200).send(`The sum of ${a} and ${b} is ${a + b}`);
    });
  ```
  2. Now in `script.js` we will use fetch to call this endpoint and get the result and also we are accepting the value from frontend.
    So inside a function populateDiv(), we have this code:
    ```js
      function populateDiv(){
        const a = document.getElementById("num1").value;
        const b = document.getElementById("num2").value;

      // Now to send value of a and b in backend,
        async function getData() {
          const response = await fetch(`http://localhost:3000/sum?a=${a}&b=${b}`); 
          // This sends the request to the backend server with values of a and b
          const result = await response.text(); 
          // The .text() method reads the response body as text
          // Now lastly rendering the result
          document.getElementById("result").innerText = result;
        }
        getData();
      }
    ```

## Debouncing and Throttling
- Debouncing and throttling are techniques used to optimize performance and improve user experience in web applications, especially when dealing with events that fire frequently (e.g., scrolling, resizing, keypresses).

### Debouncing
- Debouncing ensures that a function is only executed after a certain period of inactivity. It prevents a function from being called multiple times in quick succession.
- Common use case: Validating user input in a search box after the user stops typing.

### Throttling
- Throttling limits the number of times a function can be called over a specific period. It ensures that a function is executed at most once in a given time frame.
- Common use case: Handling scroll events to improve performance by reducing the number of times a function is called while scrolling.

### Our usecase
- So till now in `02_backendWay/script.js`, we have implemented a basic backend call to fetch the sum of two numbers.
- Now, we can enhance the user experience by implementing debouncing or throttling when the user interacts with the input fields.
- The implementation includes: It should automatically fetch the sum when the user stops typing for a certain period (debouncing) or limit the number of requests sent to the server while the user is typing (throttling). In simple words, user should not have to click on calulate sum button to calulate the sum, this can be done by listening to the input events and applying the debouncing or throttling logic.
- The button part can be done as follows by introducing the oninput attribute in which we call the populateDiv function:
  ```js
    <div class="calculator">
      <input oninput="populateDiv()" type="text" id="num1" placeholder="Enter first number" required>
      <input oninput="populateDiv()" type="text" id="num2" placeholder="Enter second number" required>
    </div>
  ```
- The only problem is it will generate multiple requests to the server as the user types, which can be inefficient and may overwhelm the server with too many requests. It can be further optimized using debouncing or throttling techniques.
- We can apply debouncing logic which says: Dont send out request immediately, wait for the user to stop typing for a certain period (e.g., 300ms) before sending the request.
- Simple debounce function which displays result when we stop typing.
- Make sure to change the oninput attribute to call the debounce function.
  ```js
  let timeout;
  function debouncePopulateDiv() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      populateDiv();
    }, 1000);
  }
  ```