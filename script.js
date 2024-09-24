document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Update resume section with user data
    document.getElementById("resumeName").innerText = name;
    document.getElementById("resumeEmail").innerText = email;
    document.getElementById("resumePhone").innerText = phone;
    document.getElementById("resumeEducation").innerText = education;
    document.getElementById("resumeExperience").innerText = experience;
    document.getElementById("resumeSkills").innerText = skills;

    // Show the resume
    document.getElementById("resume").style.display = "block";
});

// Change theme based on selection
document.getElementById("themeSelect").addEventListener("change", function(event) {
    const theme = event.target.value;
    document.getElementById("themeStylesheet").setAttribute("href", `themes/${theme}`);
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Capture the resume content
    const resumeContent = document.getElementById("resume").innerText;

    // Add content to PDF
    doc.text(resumeContent, 10, 10);
    doc.save("resume.pdf");
});
