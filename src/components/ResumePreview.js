// import React from 'react';

// function ResumePreview({ resumeData }) {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h1>{resumeData.name}</h1>
//       <p>
//         <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> | {resumeData.contact} | {resumeData.location} <br />
//         <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
//         <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
//       </p>
//       <hr />
      
//       <h2>Personal Summary</h2>
//       <p>{resumeData.summary}</p>
//       <hr />

//       <h2>Skills</h2>
//       <p><strong>Programming Skills:</strong> {resumeData.programmingSkills}</p>
//       <p><strong>Frameworks:</strong> {resumeData.frameworks}</p>
//       <p><strong>Software Skills:</strong> {resumeData.softwareSkills}</p>
//       <hr />

//       <h2>Professional Experience</h2>
//       {resumeData.experience.map((job, index) => (
//         <div key={index}>
//           <h3>{job.position} at {job.company} ({job.startYear} - {job.endYear})</h3>
//           <ul>
//             {job.description.split('\n').map((line, idx) => (
//               <li key={idx}>{line}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <hr />

//       <h2>Projects</h2>
//       {resumeData.projects.map((project, index) => (
//         <div key={index}>
//           <h3>{project.name}</h3>
//           <p>{project.description}</p>
//           <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
//         </div>
//       ))}
//       <hr />

//       <h2>Education</h2>
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <p>{edu.degree} ({edu.startYear} - {edu.endYear})</p>
//           <p>{edu.college}, CGPA: {edu.cgpa}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ResumePreview;

// import React from 'react';

// function ResumePreview({ resumeData }) {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h1>{resumeData.name}</h1>
//       <p>
//         <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> | {resumeData.contact} | {resumeData.location} <br />
//         <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
//         <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
//       </p>
//       <hr />
      
//       <h2>Personal Summary</h2>
//       <p>{resumeData.summary}</p>
//       <hr />

//       <h2>Skills</h2>
//       <p><strong>Programming Skills:</strong> {resumeData.programmingSkills}</p>
//       <p><strong>Frameworks:</strong> {resumeData.frameworks}</p>
//       <p><strong>Software Skills:</strong> {resumeData.softwareSkills}</p>
//       <hr />

//       <h2>Professional Experience</h2>
//       {resumeData.experience.map((job, index) => (
//         <div key={index}>
//           <h3>{job.position} at {job.company} ({job.startYear} - {job.endYear})</h3>
//           <ul>
//             {job.description.split('\n').map((line, idx) => (
//               <li key={idx}>{line}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       <hr />

//       <h2>Projects</h2>
//       {resumeData.projects.map((project, index) => (
//         <div key={index}>
//           <h3>{project.name}</h3>
//           <p>{project.description}</p>
//           <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
//         </div>
//       ))}
//       <hr />

//       <h2>Education</h2>
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <p>{edu.degree} ({edu.startYear} - {edu.endYear})</p>
//           <p>{edu.college}, CGPA: {edu.cgpa}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ResumePreview;
import React from 'react';

function ResumePreview({ resumeData }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', border: '2px solid black', borderRadius: '10px' }}>
      <h1>{resumeData.name}</h1>
      <p>
        {resumeData.city}, India <br />
        <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a> | {resumeData.contact} <br />
        <a href={resumeData.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
      <hr style={{ borderTop: '2px solid black' }} />
      
      <h2>Personal Summary</h2>
      <p>{resumeData.summary}</p>
      <hr style={{ borderTop: '2px solid black' }} />

      <h2>Skills</h2>
      <p><strong>Programming Skills:</strong> {resumeData.programmingSkills}</p>
      <p><strong>Frameworks:</strong> {resumeData.frameworks}</p>
      <p><strong>Software Skills:</strong> {resumeData.softwareSkills}</p>
      <hr style={{ borderTop: '2px solid black' }} />

      <h2>Professional Experience</h2>
      {resumeData.experience.map((job, index) => (
        <div key={index}>
          <h3 style={{ fontSize: '1rem' }}>{job.position} at {job.company} ({job.startYear} - {job.endYear})</h3>
          <ul>
            {job.description.split('\n').map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
      <hr style={{ borderTop: '2px solid black' }} />

      <h2>Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index}>
          <h3 style={{ fontSize: '1rem' }}>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
        </div>
      ))}
      <hr style={{ borderTop: '2px solid black' }} />

      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <h3 style={{ fontSize: '1rem' }}>{edu.degree} ({edu.startYear} - {edu.endYear})</h3>
          <p>{edu.college}, CGPA: {edu.cgpa}</p>
        </div>
      ))}
    </div>
  );
}

export default ResumePreview;

