// Listen for the form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Hardcoded credentials (you can replace this with a dynamic solution later)
    const mentorCredentials = {
        email: "mentor@example.com",
        password: "mentor123"
    };
    const menteeCredentials = {
        email: "mentee@example.com",
        password: "mentee123"
    };

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check credentials for mentor
    if (email === mentorCredentials.email && password === mentorCredentials.password) {
        localStorage.setItem('userRole', 'mentor'); // Save mentor role
        window.location.href = "mentor_dashboard.html"; // Redirect to mentor dashboard
    } 
    // Check credentials for mentee
    else if (email === menteeCredentials.email && password === menteeCredentials.password) {
        localStorage.setItem('userRole', 'mentee'); // Save mentee role
        window.location.href = "mentee_dashboard.html"; // Redirect to mentee dashboard
    } 
    // Invalid credentials
    else {
        document.getElementById('errorMessage').style.display = "block"; // Show error message
    }
});

// Function to open chat with a selected user (mentee or mentor)
// Function to open chat with a selected mentor
function openChatBox(mentorName) {
    document.getElementById('chatBox').style.display = 'block';
    document.getElementById('mentorName').innerText = mentorName;
}

// Send message function
function sendMessage() {
    const message = document.getElementById('chatInput').value;
    const chatMessages = document.getElementById('chatMessages');
    
    if (message.trim() !== '') { // Check if message is not empty
        const newMessage = document.createElement('p');
        newMessage.textContent = "You: " + message;
        chatMessages.appendChild(newMessage);
        
        document.getElementById('chatInput').value = ''; // Clear input field
    }
}


// Function to view mentor profile
function viewProfile(mentorId) {
    window.location.href = `mentor_profile.html?mentor=${mentorId}`; // Redirect to the profile page
}

// Logout functionality
function logout() {
    localStorage.removeItem('userRole'); // Clear the login state
    window.location.href = "login.html"; // Redirect to login page
}
