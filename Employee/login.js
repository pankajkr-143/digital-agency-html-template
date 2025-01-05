// Sample user credentials and profiles
const users = {
    user1: { 
      userId: "user1", 
      password: "password1", 
      profile: "user1"
    },
    user2: { 
      userId: "user2", 
      password: "password2", 
      profile: "user2"
    },
    user3: { 
      userId: "user3", 
      password: "password3", 
      profile: "user3"
    }
  };
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Validate credentials
    const user = Object.values(users).find(
      (u) => u.userId === userId && u.password === password
    );
  
    if (user) {
      // Store profile identifier in sessionStorage for later use
      sessionStorage.setItem("currentProfile", user.profile);
      // Redirect to profile page
      window.location.href = "profile.html";
    } else {
      // Show error message
      document.getElementById("errorMessage").textContent =
        "Invalid User ID or Password. Please try again.";
    }
  });
  