document.addEventListener("DOMContentLoaded", function () {
  // Profiles data
  const profiles = {
      user1: {
          name: "Er. Pankaj Gupta",
          role: "CEO & Founder",
          email: "mrmacky143@gmail.com",
          phone: "+91 82359 10315",
          address: "Bhopal, Madhya Pradesh, 462022",
          profilePic: "img/ceomac.png",
          project: ["Stock Management System", "NGO Porfolio", "Meeting Web Application", "Quiz Web Application", "and more 20+"],
          projectDeadline: "Completed All",
          joinDate: "7 December 2022",
          workDuration: "2 years 3 Months",
          totalLeaves: false,
          remainingLeaves: false,
          team: ["Priya Dubey (HR)", "Riya Tiwari (Managing Director)", "Khushi Gupta (Co-Fonder)"],
          onboardingStatus: "In Progress (79%)",
          onboardingProgress: 79,
          onboardingChecklist: [
            { task: "Submit Documents", completed: true },
            { task: "Attend Orientation", completed: true },
            { task: "Complete Training", completed: true },
            { task: "Office Tour", completed: true },
            { task: "Management Introduction", completed: true },
            { task: "Work Tools Setup", completed: true },
            { task: "Meet Your Colleagues", completed: true },
            { task: "Duties Journal", completed: true },
            { task: "Requests Handling", completed: true },
            { task: "Activity Tracking", completed: true },
          ],
          certificate: "certificates/Completion Certificate.pdf",
          idCard: "idcard/Pankaj .pdf"
      },
      user2: {
          name: "Riya Tiwari",
          role: "Managing Director",
          email: "riya888828@gmail.com",
          phone: "+91 74470 56576",
          address: "Vidisha, Madhya Pradesh, ",
          profilePic: "img/riya.png",
          project: "None",
          projectDeadline: "None",
          joinDate: "30th May 2024",
          workDuration: "1 year",
          totalLeaves: 25,
          remainingLeaves: 10,
          team: ["Priya Dubey (HR Manager)", "Pam Beesly (HR)", "Jim Halpert (Lead)"],
          onboardingStatus: "In Progress",
          onboardingProgress: 60,
          onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: false },
                { task: "Complete Training", completed: false },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
          ],
          certificate: "certificates/.pdf",
          idCard: "idcard/Riya.pdf"
      },
      user3: {
          name: "Priya Dubey",
          role: "HR Manager",
          email: "alice@mycompany.com",
          phone: "+91 91743 06366",
          address: "Bhopal, Madhya Pradesh, 462022",
          profilePic: "img/priya.png",
          project: "None",
          projectDeadline: "None",
          joinDate: "6th June 2023",
          workDuration: "2 years",
          totalLeaves: 18,
          remainingLeaves: 6,
          team: ["John Doe (Manager)", "Eve Johnson (HR)", "Tom Smith (Lead)"],
          onboardingStatus: "In Progress (49)",
          onboardingProgress: 49,
          onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: false },
                { task: "Complete Training", completed: false },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
          ],
          certificate: "certificates/.pdf",
          idCard: "idcard/Priya .pdf"
      },
        user4: {
            name: "Naman Kumar",
            role: "Frontend Developer",
            email: "namankumar0727@gmail.com",
            phone: "+91 89207 57601",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/naman.jpg",
            project: "NGO Helper",
            projectDeadline: "Completed",
            joinDate: "06th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Anuj Raj (Backend)", "Pankaj Gupta (CEO)", "Saud Ansari (Frontend)", "Riya Mathur (Documentation)", "Shalu & Suhani (Designing)"],
            onboardingStatus: "In Progress (94)",
            onboardingProgress: 94,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/.pdf",
            idCard: "idcard/naman kumar.pdf"
        },

        user5: {
            name: "Anuj Raj",
            role: "Backend Developer",
            email: "akgupta.anuj@gmail.com",
            phone: "+91 76540 73412",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/anuj.jpg",
            project: "NGO Helper",
            projectDeadline: "Completed",
            joinDate: "26th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Saud Ansari (Frontend)", "Riya Mathur (Documentation)", "Shalu & Suhani (Designing)"],
            onboardingStatus: "In Progress (94)",
            onboardingProgress: 94,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user5.pdf",
            idCard: "idcard/Anuj rajkumar.pdf"
        },

        user6: {
            name: "Riya Mathur",
            role: "Documentation",
            email: "mathurshalini708@gmail.com",
            phone: "+91 93015 87562",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/IMG_20240509_122848 - Riya Mathur.jpg",
            project: ["NGO Helper", "Meeting Web Application"],
            projectDeadline: ["Completed", "In Progress"],
            joinDate: "06th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Saud Ansari (Frontend)", "Anuj Raj (Backend)", "Shalu & Suhani (Designing)"],
            onboardingStatus: "In Progress (76)",
            onboardingProgress: 76,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user6.pdf",
            idCard: "idcard/riyamathur.pdf"
        },

        user7: {
            name: "Suhani Tiwari",
            role: "Designing",
            email: "suhanitiwari247@gmail.com",
            phone: "+91 88172 36794",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/suhani.png",
            project: ["NGO Helper", "Meeting Web Application"],
            projectDeadline: ["Completed", "In Progress"],
            joinDate: "23th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Saud Ansari (Frontend)", "Anuj Raj (Backend)", "Riya Mathur (Documentation)"],
            onboardingStatus: "In Progress (59)",
            onboardingProgress: 59,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user7.pdf",
            idCard: "idcard/SUHAni tiwari (1).pdf"
        },

        user9: {
            name: "Shalu Tiwari",
            role: "Designing",
            email: "shalutiwari842@gmail.com",
            phone: "+91 81039 79874",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/shalu.png",
            project: ["NGO Helper", "Meeting Web Application"],
            projectDeadline: ["Completed", "In Progress"],
            joinDate: "23th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Saud Ansari (Frontend)", "Anuj Raj (Backend)", "Riya Mathur (Documentation)"],
            onboardingStatus: "In Progress (59)",
            onboardingProgress: 59,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user9.pdf",
            idCard: "idcard/shalu Tiwari tiwari.pdf"
        },

        user10: {
            name: "Saud Ansari",
            role: "Frontend Developer",
            email: "saud31253@gmail.com",
            phone: "+91 7667961227",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/saud.png",
            project: ["NGO Helper"],
            projectDeadline: ["Completed"],
            joinDate: "25th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Anuj Raj (Backend)", "Riya Mathur (Documentation)", "Shalu & Suhani (Designing)"],
            onboardingStatus: "In Progress (72)",
            onboardingProgress: 72,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user10.pdf",
            idCard: "idcard/Saud Ansarirajkumar.pdf"
        },

        user11: {
            name: "Asif Khan",
            role: "Frontend Developer",
            email: "khanashif6265@gmail.com",
            phone: "+91 6265 004 582",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/asif.png",
            project: ["None"],
            projectDeadline: ["None"],
            joinDate: "25th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Anuj Raj (Backend)", "Riya Mathur (Documentation)", "Shalu & Suhani (Designing)"],
            onboardingStatus: "In Progress (36)",
            onboardingProgress: 36,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user11.pdf",
            idCard: "idcard/ASIF KHAN.pdf"
        },

        user12: {
            name: "Abhinav Kumar",
            role: "AI & ML Developer",
            email: "abhinavroy9625@gmail.com",
            phone: "+91 96255 08655",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/abhi.jpg",
            project: ["None"],
            projectDeadline: ["None"],
            joinDate: "25th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Anuj Raj (Backend)", "Riya Mathur (Documentation)", "Shalu & Suhani (Designing)"],
            onboardingStatus: "In Progress (22)",
            onboardingProgress: 22,
            onboardingChecklist: [
                { task: "Submit Documents", completed: true },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: true },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: true },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user12.pdf",
            idCard: "idcard/Abhinav Kumartiwari.pdf"   
        },

        user13: {
            name: "Nitish Kumar Tiwari",
            role: "Frontend Developer",
            email: "tiwarinitishkumar23@gmail.com",
            phone: "+91 7979769962",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/nitish.png",
            project: ["None"],
            projectDeadline: ["None"],
            joinDate: "25th December 2024",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Naman Kumar (Developer)", "Pankaj Gupta (CEO)", "Anuj Raj (Backend)", "Riya Mathur (Documentation)", "Shalu & Suhani (Designing)"],
            onboardingStatus: "In Progress (11)",
            onboardingProgress: 11,
            onboardingChecklist: [
                { task: "Submit Documents", completed: false },
                { task: "Attend Orientation", completed: false },
                { task: "Complete Training", completed: false },
                { task: "Office Tour", completed: false },
                { task: "Management Introduction", completed: false },
                { task: "Work Tools Setup", completed: false },
                { task: "Meet Your Colleagues", completed: false },
                { task: "Duties Journal", completed: false },
                { task: "Requests Handling", completed: false },
                { task: "Activity Tracking", completed: false },
            ],
            certificate: "certificates/user13.pdf",
            idCard: "certificates/Completion Certificate.pdf"
        },

        user14: {
            name: "Premchand Mahto",
            role: "Fontend Developer",
            email: "mahtopremchand@gmail.com",
            phone: "+91 7979769963",
            address: "Bhopal, Madhya Pradesh, 462022",
            profilePic: "img/prem.jpg",
            project: ["Meeting Web Application"],
            projectDeadline: ["In Progress"],
            joinDate: "21th January 2025",
            workDuration: "3 Months(Interenship)",
            totalLeaves: 10,
            remainingLeaves: 0,
            team: ["Premchand Mahto (Frontend)", "Pankaj Gupta (CEO)", "Anuj Raj (Backend)", "Riya Mathur (Documentation)"],
            onboardingStatus: "In Progress (46)",
            onboardingProgress: 46,
            onboardingChecklist: [
                { task: "Submit Documents", completed: false },
                { task: "Attend Orientation", completed: true },
                { task: "Complete Training", completed: true },
                { task: "Office Tour", completed: false },
                { task: "Management Introduction", completed: true },
                { task: "Work Tools Setup", completed: true },
                { task: "Meet Your Colleagues", completed: false },
                { task: "Duties Journal", completed: true },
                { task: "Requests Handling", completed: true },
                { task: "Activity Tracking", completed: true },
            ],
            certificate: "certificates/user14.pdf",
            idCard: "idcard/premchand mahto.pdf"
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
