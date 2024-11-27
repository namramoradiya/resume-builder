// import React, { useState } from 'react';
// import ResumeForm from './components/ResumeForm';
// import ResumePreview from './components/ResumePreview';
// import jsPDF from 'jspdf';
// import './App.css'; // Import custom styles
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

// function downloadResume(resumeData) {
//   const doc = new jsPDF();
//   // Add resume content to the PDF with proper formatting
//   doc.text(`Name: ${resumeData.name}`, 10, 10);
//   doc.text(`Contact: ${resumeData.contact}`, 10, 20);
//   doc.text(`Email: ${resumeData.email}`, 10, 30);
//   doc.text(`Skills: ${resumeData.skills}`, 10, 40);
//   doc.text(`Experience: ${resumeData.experience.map(exp => `${exp.position} (${exp.startYear} - ${exp.endYear}) at ${exp.company}`).join(', ')}`, 10, 50);
//   doc.text(`Education: ${resumeData.education.map(edu => `${edu.degree} (${edu.startYear} - ${edu.endYear}) at ${edu.college}`).join(', ')}`, 10, 60);
//   doc.text(`Projects: ${resumeData.projects.map(proj => `${proj.name}: ${proj.description}`).join(', ')}`, 10, 70);
//   doc.text(`GitHub: ${resumeData.github}`, 10, 80);
//   doc.text(`LinkedIn: ${resumeData.linkedin}`, 10, 90);
//   doc.save('resume.pdf');
// }

// function App() {
//   const [resumeData, setResumeData] = useState({
//     name: '',
//     contact: '',
//     email: '',
//     skills: '',
//     experience: [{ position: '', company: '', startYear: '', endYear: '', description: '' }],
//     education: [{ degree: '', startYear: '', endYear: '', college: '' }],
//     projects: [{ name: '', description: '', link: '' }],
//     github: '',
//     linkedin: ''
//   });

//   return (
//     <div className="container mt-4" style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
//       {/* Left Section for Form */}
//       <div className="col-md-6 p-3" style={{ border: '2px solid black', borderRadius: '10px', marginRight: '20px' }}>
//         <h2 className="text-center">Enter Your Details</h2>
//         <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
//       </div>
      
//       {/* Right Section for Resume Preview */}
//       <div className="col-md-6 p-3" style={{ border: '2px solid black', borderRadius: '10px', paddingLeft: '20px' }}>
//         <h2 className="text-center">Resume Preview</h2>
//         <ResumePreview resumeData={resumeData} />
//         <div className="text-center mt-3">
//           <button className="btn btn-dark w-100" onClick={() => downloadResume(resumeData)}>Download PDF</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import ResumeForm from './components/ResumeForm';
// import ResumePreview from './components/ResumePreview';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import './App.css'; // Import custom styles
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

// // function downloadResume(resumeData) {
// //   const doc = new jsPDF();
// //   // Add resume content to the PDF with proper formatting
// //   doc.text(`Name: ${resumeData.name}`, 10, 10);
// //   doc.text(`Contact: ${resumeData.contact}`, 10, 20);
// //   doc.text(`Email: ${resumeData.email}`, 10, 30);
// //   doc.text(`Skills: ${resumeData.skills}`, 10, 40);
// //   doc.text(`Experience: ${resumeData.experience.map(exp => `${exp.position} (${exp.startYear} - ${exp.endYear}) at ${exp.company}`).join(', ')}`, 10, 50);
// //   doc.text(`Education: ${resumeData.education.map(edu => `${edu.degree} (${edu.startYear} - ${edu.endYear}) at ${edu.college}`).join(', ')}`, 10, 60);
// //   doc.text(`Projects: ${resumeData.projects.map(proj => `${proj.name}: ${proj.description}`).join(', ')}`, 10, 70);
// //   doc.text(`GitHub: ${resumeData.github}`, 10, 80);
// //   doc.text(`LinkedIn: ${resumeData.linkedin}`, 10, 90);
// //   doc.save('resume.pdf');
// // }
// function downloadResume() {
//   const input = document.getElementById('resume-preview'); // This ID should match your preview div

//   html2canvas(input).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     const imgWidth = 210; // A4 page width
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
//     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//     pdf.save('resume.pdf');
//   });
// }


// function App() {
//   const [resumeData, setResumeData] = useState({
//     name: '',
//     contact: '',
//     email: '',
//     skills: '',
//     experience: [{ position: '', company: '', startYear: '', endYear: '', description: '' }],
//     education: [{ degree: '', college: '', startYear: '', endYear: '', cgpa: '' }],
//     projects: [{ name: '', description: '', link: '' }],
//     github: '',
//     linkedin: ''
//   });

//   return (
//     <div className="container mt-4" style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
//       {/* Left Section for Form */}
//       <div className="col-md-6 p-3" style={{ border: '2px solid black', borderRadius: '10px', marginRight: '20px' }}>
//         <h2 className="text-center">Enter Your Details</h2>
//         <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
//       </div>
      
//       {/* Right Section for Resume Preview */}
//       <div className="col-md-6 p-3" style={{ border: '2px solid black', borderRadius: '10px', paddingLeft: '20px' }}>
//         <h2 className="text-center">Resume Preview</h2>
//         <ResumePreview resumeData={resumeData} />
//         <div className="text-center mt-3">
//           {/* <button className="btn btn-dark w-100" onClick={() => downloadResume(resumeData)}>Download PDF</button> */}
//           <button className="btn btn-dark w-100" onClick={downloadResume}>Download PDF</button>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './App.css'; // Import custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function downloadResume() {
  const input = document.getElementById('resume-preview'); // Capture the resume preview section

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgWidth = 210; // A4 page width
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('resume.pdf');
  });
}

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    contact: '',
    email: '',
    skills: '',
    experience: [{ position: '', company: '', startYear: '', endYear: '', description: '' }],
    education: [{ degree: '', college: '', startYear: '', endYear: '', cgpa: '' }],
    projects: [{ name: '', description: '', link: '' }],
    github: '',
    linkedin: ''
  });

  return (
    <div className="container mt-4" style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
      {/* Left Section for Form */}
      <div className="col-md-6 p-3" style={{ border: '2px solid black', borderRadius: '10px', marginRight: '20px' }}>
        <h2 className="text-center">Enter Your Details</h2>
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      </div>

      {/* Right Section for Resume Preview */}
      <div id="resume-preview" className="col-md-6 p-3" style={{ border: '2px solid black', borderRadius: '10px', paddingLeft: '20px' }}>
        <h2 className="text-center">Resume Preview</h2>
        <ResumePreview resumeData={resumeData} />
        <div className="text-center mt-3">
          <button className="btn btn-dark w-100" onClick={downloadResume}>Download PDF</button>
        </div>
      </div>
    </div>
  );
}

export default App;
