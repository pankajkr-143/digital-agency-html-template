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
          project: "AI Development",
          projectDeadline: "31st Dec 2025",
          joinDate: "1st Jan 2023",
          workDuration: "2 years",
          totalLeaves: 20,
          remainingLeaves: 5,
          team: ["Kate Middleton (HR)", "Kirk Mitrohin (Manager)", "Eugene Hummel (Lead)"],
          onboardingStatus: "In Progress (84%)",
          onboardingProgress: 84,
          onboardingChecklist: [
              { task: "Submit Documents", completed: true },
              { task: "Attend Orientation", completed: false },
              { task: "Complete Training", completed: false }
          ],
          certificate: "certificates/Completion Certificate.pdf",
          idCard: "certificates/Completion Certificate.pdf"
      },
      user2: {
          name: "Jane Doe",
          role: "Backend Developer",
          email: "jane@mycompany.com",
          phone: "+1 987 654 3210",
          address: "456 Maple Street, Cityville",
          profilePic: "img/janedoe.png",
          project: "Cloud Security System",
          projectDeadline: "30th June 2025",
          joinDate: "10th Mar 2022",
          workDuration: "3 years",
          totalLeaves: 25,
          remainingLeaves: 10,
          team: ["Michael Scott (Manager)", "Pam Beesly (HR)", "Jim Halpert (Lead)"],
          onboardingStatus: "In Progress",
          onboardingProgress: 60,
          onboardingChecklist: [
              { task: "Submit Documents", completed: true },
              { task: "Attend Orientation", completed: false },
              { task: "Complete Training", completed: false }
          ],
          certificate: "certificates/user2.pdf"
      },
      user3: {
          name: "Alice Brown",
          role: "Frontend Developer",
          email: "alice@mycompany.com",
          phone: "+1 123 456 7890",
          address: "789 Elm Street, Townsville",
          profilePic: "img/alicebrown.png",
          project: "UI/UX Redesign",
          projectDeadline: "15th Aug 2025",
          joinDate: "5th July 2021",
          workDuration: "4 years",
          totalLeaves: 18,
          remainingLeaves: 6,
          team: ["John Doe (Manager)", "Eve Johnson (HR)", "Tom Smith (Lead)"],
          onboardingStatus: "Pending",
          onboardingProgress: 30,
          onboardingChecklist: [
              { task: "Submit Documents", completed: false },
              { task: "Attend Orientation", completed: false },
              { task: "Complete Training", completed: false }
          ],
          certificate: "certificates/user3.pdf",
          idCard: "idcards/user3-idcard.pdf"
      }
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

  // Populate project details
  document.getElementById("projectName").textContent = profileData.project;
  document.getElementById("projectDeadline").textContent = profileData.projectDeadline;

  // Populate time duration details
  document.getElementById("joinDate").textContent = profileData.joinDate;
  document.getElementById("workDuration").textContent = profileData.workDuration;

  // Populate leave details
  document.getElementById("totalLeaves").textContent = profileData.totalLeaves;
  document.getElementById("remainingLeaves").textContent = profileData.remainingLeaves;

  // Populate onboarding details
  document.getElementById("onboardingStatus").textContent = profileData.onboardingStatus;
  document.getElementById("progressBar").value = profileData.onboardingProgress;

  const checklistContainer = document.querySelector(".onboarding-details ul");
  checklistContainer.innerHTML = "";
  profileData.onboardingChecklist.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.completed ? "✔️" : "❌"} ${item.task}`;
      checklistContainer.appendChild(li);
  });

  // Populate team members
  const teamList = document.getElementById("teamList");
  teamList.innerHTML = "";
  profileData.team.forEach((member) => {
      const li = document.createElement("li");
      li.textContent = member;
      teamList.appendChild(li);
  });

  // Download certificate

  document.getElementById("downloadProfile").addEventListener("click", function () {
    if (!profileData.certificate) {
        alert("Certificate not available for this user.");
        return;
    }

    const a = document.createElement("a");
    a.href = profileData.certificate; // Set the certificate file path
    a.download = profileData.name + "_certificate.pdf"; // Set download filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// Download ID Card Button
  document.getElementById("downloadIdCard").addEventListener("click", function () {
    if (!profileData.idCard) {
        alert("ID Card not available for this user.");
        return;
    }
    const a = document.createElement("a");
    a.href = profileData.idCard; // Set the ID Card file path
    a.download = profileData.name + "_idcard.pdf"; // Set download filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
});

// Logout function
function logout() {
  sessionStorage.clear(); // Clear sessionStorage on logout
  window.location.href = "index.html"; // Redirect to login page
}
