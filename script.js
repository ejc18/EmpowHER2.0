document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var formData = new FormData(this);

    // Convert form data to JSON
    var jsonData = {};
    formData.forEach(function (value, key) {
      jsonData[key] = value;
    });

    // Send form data to server
    fetch("/api/create_account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle server response
        console.log(data);
        alert("Account created successfully!");
        // Redirect to home page
        window.location.href = "home.html";
      })
      .catch((error) => {
        // Handle errors
        console.error("There was a problem with the request:", error);
        alert("Failed to create account. Please try again later.");
      });
  });
