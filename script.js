// Listen for the form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Hardcoded credentials
    const credentials = {
        mentor: {
            email: "mentor@example.com",
            password: "mentor123"
        },
        mentee: {
            email: "mentee@example.com",
            password: "mentee123"
        }
    };

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (email === credentials.mentor.email && password === credentials.mentor.password) {
        localStorage.setItem('userRole', 'mentor'); // Save mentor role
        window.location.href = "mentor_dashboard.html"; // Redirect to mentor dashboard
    } else if (email === credentials.mentee.email && password === credentials.mentee.password) {
        localStorage.setItem('userRole', 'mentee'); // Save mentee role
        window.location.href = "mentee_dashboard.html"; // Redirect to mentee dashboard
    } else {
        showErrorMessage(); // Show error message
    }
});

// Function to show error message
function showErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.classList.remove("hidden"); // Show error message
}

// Function to open chat with a selected user
function openChatBox(userName) {
    const chatBox = document.getElementById('chatBox');
    chatBox.classList.remove('hidden');
    
    if (localStorage.getItem('userRole') === 'mentor') {
        document.getElementById('menteeName').innerText = userName;
    } else {
        document.getElementById('mentorName').innerText = userName;
    }
}

// Send message
function sendMessage() {
    const message = document.getElementById('chatInput').value;
    const chatMessages = document.getElementById('chatMessages');
    
    if (message.trim() === '') return; // Prevent sending empty messages

    const newMessage = document.createElement('p');
    newMessage.textContent = "You: " + message;
    chatMessages.appendChild(newMessage);
    
    document.getElementById('chatInput').value = ''; // Clear input field
}

// View mentor profile
function viewProfile(mentorId) {
    window.location.href = `mentor_profile.html?mentor=${mentorId}`; // Redirect to the profile page
}

// Logout functionality
function logout() {
    localStorage.removeItem('userRole'); // Clear the login state
    window.location.href = "login.html"; // Redirect to login
}
