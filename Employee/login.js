// Sample user credentials and profiles
const users = {
    user1: { 
      userId: "ceo", 
      password: "khushi@989", 
      profile: "user1"
    },
    user2: { 
      userId: "mdRiya", 
      password: "mdriya@123", 
      profile: "user2"
    },
    user3: { 
      userId: "hrPriya", 
      password: "hrpriya@123", 
      profile: "user3"
    },
    user4: { 
      userId: "devNaman",
      password: "devnaman@123",
      profile: "user4"
    },
    user5: { 
      userId: "devAnuj",
      password: "devanuj@234",
      profile: "user5"
    },
    user6: {
      userId: "devRiya",
      password: "devriya@345",
      profile: "user6"
    },
    user7: {
      userId: "devSuhani",
      password: "devsuhani@456",
      profile: "user7",
    },
    user9: {
      userId: "devShalu",
      password: "devshalu@678",
      profile: "user9",
    },
    user10: {
      userId: "devSahud",
      password: "devsahud@789",
      profile: "user10",
    },
    user11: {
      userId: "devAsif",
      password: "devasif@890",
      profile: "user11",
    },
    user12: {
      userId: "devAbhinav",
      password: "devabhinav@901",
      profile: "user12",
    },
    user13: {
      userId: "devNitish",
      password: "devnitish@012",
      profile: "user13",
    },
    user14: {
      userId: "devPrem",
      password: "devprem@205",
      profile: "user14",
    },
    user15: {
      userId: "devDivya",
      password: "devdivya@306",
      profile: "user15",
    },
    user16: {
      userId: "devSatyam",
      password: "devsatyam@407",
      profile: "user16",
    },
    user17: {
      userId: "devSaurabh",
      password: "devsaurabh@508",
      profile: "user17",
    },
    user18: {
      userId: "devShivam",
      password: "devshivam@609",
      profile: "user18",
    },
    user19: {
      userId: "devSujit",
      password: "devsujit@710",
      profile: "user19",
    },
    user20: {
      userId: "devPiyush",
      password: "devpiyush@811",
      profile: "user20",
    },
    user21: {
      userId: "devKamlesh",
      password: "devrahul@912",
      profile: "user21",
    },
    user22: {
      userId: "devVikram",
      password: "devvikram@013",
      profile: "user22",
    },
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
  