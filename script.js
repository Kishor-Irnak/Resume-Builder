document.getElementById('resume-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Personal Information
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Education
  const school = document.getElementById('school').value;
  const degree = document.getElementById('degree').value;
  const eduStartDate = document.getElementById('edu-start-date').value;
  const eduEndDate = document.getElementById('edu-end-date').value;

  // Work Experience
  const company = document.getElementById('company').value;
  const title = document.getElementById('title').value;
  const workStartDate = document.getElementById('work-start-date').value;
  const workEndDate = document.getElementById('work-end-date').value;
  const responsibilities = document.getElementById('responsibilities').value;

  // Skills
  const skills = document.getElementById('skills').value.split(',');

  // Certifications
  const certifications = document
    .getElementById('certifications')
    .value.split(',');

  // Displaying the information in the resume preview section
  document.getElementById('personal-info').innerHTML = `
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
  `;

  document.getElementById('education').innerHTML = `
      <h3>Education</h3>
      <p><strong>School:</strong> ${school}</p>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Start Date:</strong> ${eduStartDate}</p>
      <p><strong>End Date:</strong> ${eduEndDate}</p>
  `;

  document.getElementById('work-experience').innerHTML = `
      <h3>Work Experience</h3>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Start Date:</strong> ${workStartDate}</p>
      <p><strong>End Date:</strong> ${workEndDate}</p>
      <p><strong>Responsibilities:</strong> ${responsibilities}</p>
  `;

  document.getElementById('skills-section').innerHTML = `
      <h3>Skills</h3>
      <ul>${skills.map((skill) => `<li>${skill.trim()}</li>`).join('')}</ul>
  `;

  document.getElementById('certifications-section').innerHTML = `
      <h3>Certifications</h3>
      <ul>${certifications
        .map((cert) => `<li>${cert.trim()}</li>`)
        .join('')}</ul>
  `;
});

document.getElementById('download-pdf').addEventListener('click', function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Collecting the resume data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const school = document.getElementById('school').value;
  const degree = document.getElementById('degree').value;
  const eduStartDate = document.getElementById('edu-start-date').value;
  const eduEndDate = document.getElementById('edu-end-date').value;

  const company = document.getElementById('company').value;
  const title = document.getElementById('title').value;
  const workStartDate = document.getElementById('work-start-date').value;
  const workEndDate = document.getElementById('work-end-date').value;
  const responsibilities = document.getElementById('responsibilities').value;

  const skills = document.getElementById('skills').value.split(',');
  const certifications = document
    .getElementById('certifications')
    .value.split(',');

  // Adding the content to the PDF
  doc.text('Resume', 105, 10, { align: 'center', color: 'red' });
  doc.text('Personal Information', 10, 20);
  doc.text(`Name: ${name}`, 10, 30);
  doc.text(`Email: ${email}`, 10, 40);
  doc.text(`Phone: ${phone}`, 10, 50);

  doc.text('Education', 10, 60);
  doc.text(`School: ${school}`, 10, 70);
  doc.text(`Degree: ${degree}`, 10, 80);
  doc.text(`Start Date: ${eduStartDate}`, 10, 90);
  doc.text(`End Date: ${eduEndDate}`, 10, 100);

  doc.text('Work Experience', 10, 110);
  doc.text(`Company: ${company}`, 10, 120);
  doc.text(`Title: ${title}`, 10, 130);
  doc.text(`Start Date: ${workStartDate}`, 10, 140);
  doc.text(`End Date: ${workEndDate}`, 10, 150);
  doc.text(`Responsibilities: ${responsibilities}`, 10, 160);

  doc.text('Skills', 10, 170);
  skills.forEach((skill, index) => {
    doc.text(`${index + 1}. ${skill.trim()}`, 10, 180 + index * 10);
  });

  doc.text('Certifications', 10, 200 + skills.length * 10);
  certifications.forEach((cert, index) => {
    doc.text(
      `${index + 1}. ${cert.trim()}`,
      10,
      210 + skills.length * 10 + index * 10
    );
  });

  // Save the PDF
  doc.save('resume.pdf');
});
