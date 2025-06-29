document.getElementById('resume-form').addEventListener('input', () => {
  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;

  document.getElementById('preview').innerHTML = `
    <h2>${name}</h2>
    <p>Email: ${email} | Phone: ${phone}</p>
    <h3>Education</h3><p>${education}</p>
    <h3>Experience</h3><p>${experience}</p>
    <h3>Skills</h3><p>${skills}</p>
  `;
});

document.getElementById('resume-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let content = document.getElementById('preview').innerText;
  doc.text(content, 10, 10);
  doc.save("resume.pdf");
});
