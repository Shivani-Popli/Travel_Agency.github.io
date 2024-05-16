

// Function to calculate trip cost
function calculateCost(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const destination = document.getElementById('destination').value;
    const duration = parseInt(document.getElementById('duration').value);
    const travelers = parseInt(document.getElementById('travelers').value);
    
    // Calculate cost (you can replace this with your actual calculation logic)
    const costPerDay = 100; // Placeholder cost per day
    const totalCost = duration * costPerDay * travelers;

    // Display the result
    const costResult = document.getElementById('costResult');
    costResult.innerHTML = `Total Cost for ${travelers} travelers to ${destination} for ${duration} days: $${totalCost}`;
}

// Function to simulate sending email
function sendEmail(formData) {
    console.log('Sending email...', formData);
    // Simulated email sending logic
    alert('Your inquiry has been submitted! We will get back to you soon.');
}

// Function to handle form submission for trip cost calculator
function handleCostCalculation(event) {
    event.preventDefault(); // Prevent form submission
    calculateCost(event); // Call calculateCost function
}

// Function to handle form submission for contact form
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a FormData object to store form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Simulate sending email
    sendEmail(formData);
}


// Event listeners for form submissions
const costCalculatorForm = document.getElementById('costCalculatorForm');
if (costCalculatorForm) {
    costCalculatorForm.addEventListener('submit', handleCostCalculation);
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
}
