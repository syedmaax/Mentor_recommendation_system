// Listen for the form submission (only in login page)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
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
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

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
function openChatBox(userName) {
    document.getElementById('chatBox').style.display = 'block';
    if (localStorage.getItem('userRole') === 'mentee') {
        document.getElementById('mentorName').innerText = userName; // For mentee chat
    } else {
        document.getElementById('menteeName').innerText = userName; // For mentor chat
    }
}

// Send message (placeholder for now)
function sendMessage() {
    const message = document.getElementById('chatInput').value;
    const chatMessages = document.getElementById('chatMessages');
    
    const newMessage = document.createElement('p');
    newMessage.textContent = "You: " + message;
    chatMessages.appendChild(newMessage);
    
    document.getElementById('chatInput').value = ''; // Clear input field
}

// Logout functionality
function logout() {
    localStorage.removeItem('userRole'); // Clear the login state
    window.location.href = "login.html"; // Redirect to login page
}

// Function to view mentor profile
function viewProfile(mentorId) {
    window.location.href = `mentor_profile.html?mentor=${mentorId}`; // Redirect to the profile page
}

// If you also want to allow viewing mentee profiles, you can similarly create a function:
function viewMenteeProfile(menteeId) {
    window.location.href = `mentee_profile.html?mentee=${menteeId}`; // Redirect to the mentee profile page
}
