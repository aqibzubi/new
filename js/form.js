// Get the form element by ID
const form = document.getElementById('contact-form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Create an object to store the form data
  const data = {};

  // Loop through the form data and add it to the data object
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Save the form data to local storage
  localStorage.setItem('contactForm', JSON.stringify(data));

  // Reset the form
  form.reset();

  // Show a success message
  alert('You are successfully registered.');
});

// form js validation
function analyzeFeedback() {
  var comments = document.getElementById("feedback-comments").value;
  // Perform content analysis and assessment on the comments using a third-party library or API
  var score = getFeedbackScore(comments);
  alert("Your feedback score is: " + score);
}










