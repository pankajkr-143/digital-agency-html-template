document.addEventListener("DOMContentLoaded", function () {
    // Profiles data
    const profiles = {
      user1: {
        name: "Russel Sims",
        role: "iOS Developer",
        email: "russel@mycompany.com",
        phone: "+1 255 29345690",
        address: "123 Main St, Cityville",
        profilePic: "img/ceomac.png",
        team: ["Kate Middleton (HR)", "Kirk Mitrohin (Manager)", "Eugene Hummel (Lead)"],
        onboarding: {
          status: "Onboarding (35%)",
          progress: 35,
          checklist: [
            { task: "Office Tour", completed: true },
            { task: "Management Introduction", completed: false },
            { task: "Work Tools Setup", completed: false },
            { task: "Meet Your Colleagues", completed: false },
            { task: "Duties Journal", completed: false },
            { task: "Requests Handling", completed: false },
            { task: "Activity Tracking", completed: false },
          ],
        },
      },
      user2: {
        name: "Jane Doe",
        role: "Backend Developer",
        email: "jane@mycompany.com",
        phone: "+1 987 654 3210",
        address: "456 Maple Street, Cityville",
        profilePic: "img/janedoe.png",
        team: ["Michael Scott (Manager)", "Pam Beesly (HR)", "Jim Halpert (Lead)"],
        onboarding: {
          status: "Onboarding (60%)",
          progress: 60,
          checklist: [
            { task: "Office Tour", completed: true },
            { task: "Management Introduction", completed: true },
            { task: "Work Tools Setup", completed: true },
            { task: "Meet Your Colleagues", completed: true },
            { task: "Duties Journal", completed: false },
            { task: "Requests Handling", completed: false },
            { task: "Activity Tracking", completed: false },
          ],
        },
      },
      user3: {
        name: "Alice Brown",
        role: "Frontend Developer",
        email: "alice@mycompany.com",
        phone: "+1 123 456 7890",
        address: "789 Elm Street, Townsville",
        profilePic: "img/alicebrown.png",
        team: ["John Doe (Manager)", "Eve Johnson (HR)", "Tom Smith (Lead)"],
        onboarding: {
          status: "Onboarding (90%)",
          progress: 90,
          checklist: [
            { task: "Office Tour", completed: true },
            { task: "Management Introduction", completed: true },
            { task: "Work Tools Setup", completed: true },
            { task: "Meet Your Colleagues", completed: true },
            { task: "Duties Journal", completed: true },
            { task: "Requests Handling", completed: true },
            { task: "Activity Tracking", completed: false },
          ],
        },
      },
    };
  
    // Retrieve current profile identifier from sessionStorage
    const currentProfile = sessionStorage.getItem("currentProfile");
  
    if (!currentProfile || !profiles[currentProfile]) {
      alert("Unauthorized access. Please log in first.");
      window.location.href = "index.html";
      return;
    }
  
    const profileData = profiles[currentProfile];
  
    // Populate profile data dynamically
    document.getElementById("nameHeader").textContent = profileData.name;
    document.getElementById("name").textContent = profileData.name;
    document.getElementById("role").textContent = profileData.role;
    document.getElementById("email").textContent = profileData.email;
    document.getElementById("phone").textContent = profileData.phone;
    document.getElementById("address").textContent = profileData.address;
    document.getElementById("profilePic").src = profileData.profilePic;
  
    // Populate team members
    const teamList = document.getElementById("teamList");
    teamList.innerHTML = "";
    profileData.team.forEach((member) => {
      const li = document.createElement("li");
      li.textContent = member;
      teamList.appendChild(li);
    });
  
    // Populate onboarding details
    document.getElementById("onboardingStatus").textContent =
      profileData.onboarding.status;
    document.getElementById("progressBar").value = profileData.onboarding.progress;
  
    const onboardingChecklist = profileData.onboarding.checklist;
    const checklistContainer = document.querySelector(".onboarding-details ul");
    checklistContainer.innerHTML = "";
    onboardingChecklist.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.completed ? "✔️" : "❌"} ${item.task}`;
      checklistContainer.appendChild(li);
    });
  });
  
  // Logout function
  function logout() {
    sessionStorage.clear(); // Clear sessionStorage on logout
    window.location.href = "index.html"; // Redirect to login page
  }
  