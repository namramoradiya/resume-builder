// import React from 'react';

// function ResumeForm({ resumeData, setResumeData }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResumeData({
//       ...resumeData,
//       [name]: value,
//     });
//   };

//   const handleExperienceChange = (index, e) => {
//     const newExperience = [...resumeData.experience];
//     newExperience[index][e.target.name] = e.target.value;
//     setResumeData({ ...resumeData, experience: newExperience });
//   };

//   const addExperienceField = () => {
//     setResumeData({
//       ...resumeData,
//       experience: [...resumeData.experience, { position: '', company: '', startYear: '', endYear: '', description: '' }]
//     });
//   };

//   const handleProjectChange = (index, e) => {
//     const newProjects = [...resumeData.projects];
//     newProjects[index][e.target.name] = e.target.value;
//     setResumeData({ ...resumeData, projects: newProjects });
//   };

//   const addProjectField = () => {
//     setResumeData({
//       ...resumeData,
//       projects: [...resumeData.projects, { name: '', description: '', link: '' }]
//     });
//   };

//   return (
//     <div>
//       <h3>Enter Your Details</h3>
//       <input type="text" name="name" placeholder="Name" value={resumeData.name} onChange={handleChange} /><br />
//       <input type="text" name="contact" placeholder="Contact" value={resumeData.contact} onChange={handleChange} /><br />
//       <input type="email" name="email" placeholder="Email" value={resumeData.email} onChange={handleChange} /><br />
//       <textarea name="summary" placeholder="Personal Summary" value={resumeData.summary} onChange={handleChange}></textarea><br />

//       <h3>Skills</h3>
//       <textarea name="programmingSkills" placeholder="Programming Skills" value={resumeData.programmingSkills} onChange={handleChange}></textarea><br />
//       <textarea name="frameworks" placeholder="Frameworks" value={resumeData.frameworks} onChange={handleChange}></textarea><br />
//       <textarea name="softwareSkills" placeholder="Software Skills" value={resumeData.softwareSkills} onChange={handleChange}></textarea><br />

//       <h3>Experience</h3>
//       {resumeData.experience.map((job, index) => (
//         <div key={index}>
//           <input type="text" name="position" placeholder="Position" value={job.position} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <input type="text" name="company" placeholder="Company" value={job.company} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <input type="text" name="startYear" placeholder="Start Year" value={job.startYear} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <input type="text" name="endYear" placeholder="End Year" value={job.endYear} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <textarea name="description" placeholder="Job Description" value={job.description} onChange={(e) => handleExperienceChange(index, e)}></textarea><br />
//         </div>
//       ))}
//       <button type="button" className="btn btn-dark" onClick={addExperienceField}>Add Experience</button><br />

//       <h3>Projects</h3>
//       {resumeData.projects.map((project, index) => (
//         <div key={index}>
//           <input type="text" name="name" placeholder="Project Name" value={project.name} onChange={(e) => handleProjectChange(index, e)} /><br />
//           <textarea name="description" placeholder="Project Description" value={project.description} onChange={(e) => handleProjectChange(index, e)}></textarea><br />
//           <input type="url" name="link" placeholder="Project Link" value={project.link} onChange={(e) => handleProjectChange(index, e)} /><br />
//         </div>
//       ))}
//       <button type="button" className="btn btn-dark" onClick={addProjectField}>Add Project</button><br />

//       <h3>Education</h3>
//       <input type="text" name="degree" placeholder="Degree" value={resumeData.education.degree} onChange={handleChange} /><br />
//       <input type="text" name="college" placeholder="College" value={resumeData.education.college} onChange={handleChange} /><br />
//       <input type="text" name="startYear" placeholder="Start Year" value={resumeData.education.startYear} onChange={handleChange} /><br />
//       <input type="text" name="endYear" placeholder="End Year" value={resumeData.education.endYear} onChange={handleChange} /><br />
//       <input type="text" name="cgpa" placeholder="CGPA" value={resumeData.education.cgpa} onChange={handleChange} /><br />
//     </div>
//   );
// }

// export default ResumeForm;

// import React from 'react';

// function ResumeForm({ resumeData, setResumeData }) {
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResumeData({
//       ...resumeData,
//       [name]: value,
//     });
//   };

//   const handleExperienceChange = (index, e) => {
//     const newExperience = [...resumeData.experience];
//     newExperience[index][e.target.name] = e.target.value;
//     setResumeData({ ...resumeData, experience: newExperience });
//   };

//   const addExperienceField = () => {
//     setResumeData({
//       ...resumeData,
//       experience: [...resumeData.experience, { position: '', company: '', startYear: '', endYear: '', description: '' }]
//     });
//   };

//   const handleProjectChange = (index, e) => {
//     const newProjects = [...resumeData.projects];
//     newProjects[index][e.target.name] = e.target.value;
//     setResumeData({ ...resumeData, projects: newProjects });
//   };

//   const addProjectField = () => {
//     setResumeData({
//       ...resumeData,
//       projects: [...resumeData.projects, { name: '', description: '', link: '' }]
//     });
//   };

//   const handleEducationChange = (index, e) => {
//     const newEducation = [...resumeData.education];
//     newEducation[index][e.target.name] = e.target.value;
//     setResumeData({
//       ...resumeData,
//       education: newEducation
//     });
//   };

//   const addEducationField = () => {
//     setResumeData({
//       ...resumeData,
//       education: [...resumeData.education, { degree: '', college: '', startYear: '', endYear: '', cgpa: '' }]
//     });
//   };

//   return (
//     <div>
//       <h3>Enter Your Details</h3>
//       <input type="text" name="name" placeholder="Name" value={resumeData.name} onChange={handleChange} /><br />
//       <input type="text" name="contact" placeholder="Contact" value={resumeData.contact} onChange={handleChange} /><br />
//       <input type="email" name="email" placeholder="Email" value={resumeData.email} onChange={handleChange} /><br />
//       <textarea name="summary" placeholder="Personal Summary" value={resumeData.summary} onChange={handleChange}></textarea><br />

//       <h3>Skills</h3>
//       <textarea name="programmingSkills" placeholder="Programming Skills" value={resumeData.programmingSkills} onChange={handleChange}></textarea><br />
//       <textarea name="frameworks" placeholder="Frameworks" value={resumeData.frameworks} onChange={handleChange}></textarea><br />
//       <textarea name="softwareSkills" placeholder="Software Skills" value={resumeData.softwareSkills} onChange={handleChange}></textarea><br />

//       <h3>Experience</h3>
//       {resumeData.experience.map((job, index) => (
//         <div key={index}>
//           <input type="text" name="position" placeholder="Position" value={job.position} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <input type="text" name="company" placeholder="Company" value={job.company} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <input type="text" name="startYear" placeholder="Start Year" value={job.startYear} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <input type="text" name="endYear" placeholder="End Year" value={job.endYear} onChange={(e) => handleExperienceChange(index, e)} /><br />
//           <textarea name="description" placeholder="Job Description" value={job.description} onChange={(e) => handleExperienceChange(index, e)}></textarea><br />
//         </div>
//       ))}
//       <button type="button" className="btn btn-dark" onClick={addExperienceField}>Add Experience</button><br />

//       <h3>Projects</h3>
//       {resumeData.projects.map((project, index) => (
//         <div key={index}>
//           <input type="text" name="name" placeholder="Project Name" value={project.name} onChange={(e) => handleProjectChange(index, e)} /><br />
//           <textarea name="description" placeholder="Project Description" value={project.description} onChange={(e) => handleProjectChange(index, e)}></textarea><br />
//           <input type="url" name="link" placeholder="Project Link" value={project.link} onChange={(e) => handleProjectChange(index, e)} /><br />
//         </div>
//       ))}
//       <button type="button" className="btn btn-dark" onClick={addProjectField}>Add Project</button><br />

//       <h3>Education</h3>
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} /><br />
//           <input type="text" name="college" placeholder="College" value={edu.college} onChange={(e) => handleEducationChange(index, e)} /><br />
//           <input type="text" name="startYear" placeholder="Start Year" value={edu.startYear} onChange={(e) => handleEducationChange(index, e)} /><br />
//           <input type="text" name="endYear" placeholder="End Year" value={edu.endYear} onChange={(e) => handleEducationChange(index, e)} /><br />
//           <input type="text" name="cgpa" placeholder="CGPA" value={edu.cgpa} onChange={(e) => handleEducationChange(index, e)} /><br />
//         </div>
//       ))}
//       <button type="button" className="btn btn-dark" onClick={addEducationField}>Add Education</button><br />
//     </div>
//   );
// }

// export default ResumeForm;

import React from 'react';

function ResumeForm({ resumeData, setResumeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      [name]: value,
    });
  };

  const handleExperienceChange = (index, e) => {
    const newExperience = [...resumeData.experience];
    newExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, experience: newExperience });
  };

  const addExperienceField = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { position: '', company: '', startYear: '', endYear: '', description: '' }]
    });
  };

  const handleProjectChange = (index, e) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjectField = () => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, { name: '', description: '', link: '' }]
    });
  };

  const handleEducationChange = (index, e) => {
    const newEducation = [...resumeData.education];
    newEducation[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addEducationField = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: '', college: '', startYear: '', endYear: '', cgpa: '' }]
    });
  };

  return (
    <div>
      <h3>Enter Your Details</h3>
      <input type="text" name="name" placeholder="Name" value={resumeData.name} onChange={handleChange} /><br />
      <input type="text" name="city" placeholder="City" value={resumeData.city} onChange={handleChange} /><br />
      <input type="text" name="country" placeholder="Country" value="India" readOnly /><br />
      <input type="text" name="contact" placeholder="Contact" value={resumeData.contact} onChange={handleChange} /><br />
      <input type="email" name="email" placeholder="Email" value={resumeData.email} onChange={handleChange} /><br />
      <textarea name="summary" placeholder="Personal Summary" value={resumeData.summary} onChange={handleChange}></textarea><br />

      <h3>Skills</h3>
      <textarea name="programmingSkills" placeholder="Programming Skills" value={resumeData.programmingSkills} onChange={handleChange}></textarea><br />
      <textarea name="frameworks" placeholder="Frameworks" value={resumeData.frameworks} onChange={handleChange}></textarea><br />
      <textarea name="softwareSkills" placeholder="Software Skills" value={resumeData.softwareSkills} onChange={handleChange}></textarea><br />

      <h3>Experience</h3>
      {resumeData.experience.map((job, index) => (
        <div key={index}>
          <input type="text" name="position" placeholder="Position" value={job.position} onChange={(e) => handleExperienceChange(index, e)} style={{ fontSize: '0.9rem' }} /><br />
          <input type="text" name="company" placeholder="Company" value={job.company} onChange={(e) => handleExperienceChange(index, e)} style={{ fontSize: '0.9rem' }} /><br />
          <input type="text" name="startYear" placeholder="Start Year" value={job.startYear} onChange={(e) => handleExperienceChange(index, e)} style={{ fontSize: '0.9rem' }} /><br />
          <input type="text" name="endYear" placeholder="End Year" value={job.endYear} onChange={(e) => handleExperienceChange(index, e)} style={{ fontSize: '0.9rem' }} /><br />
          <textarea name="description" placeholder="Job Description" value={job.description} onChange={(e) => handleExperienceChange(index, e)}></textarea><br />
        </div>
      ))}
      <button type="button" className="btn btn-dark" onClick={addExperienceField}>Add Experience</button><br />

      <h3>Projects</h3>
      {resumeData.projects.map((project, index) => (
        <div key={index}>
          <input type="text" name="name" placeholder="Project Name" value={project.name} onChange={(e) => handleProjectChange(index, e)} style={{ fontSize: '0.9rem' }} /><br />
          <textarea name="description" placeholder="Project Description" value={project.description} onChange={(e) => handleProjectChange(index, e)}></textarea><br />
          <input type="url" name="link" placeholder="Project Link" value={project.link} onChange={(e) => handleProjectChange(index, e)} /><br />
        </div>
      ))}
      <button type="button" className="btn btn-dark" onClick={addProjectField}>Add Project</button><br />

      <h3>Education</h3>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <input type="text" name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} /><br />
          <input type="text" name="college" placeholder="College" value={edu.college} onChange={(e) => handleEducationChange(index, e)} /><br />
          <input type="text" name="startYear" placeholder="Start Year" value={edu.startYear} onChange={(e) => handleEducationChange(index, e)} /><br />
          <input type="text" name="endYear" placeholder="End Year" value={edu.endYear} onChange={(e) => handleEducationChange(index, e)} /><br />
          <input type="text" name="cgpa" placeholder="CGPA" value={edu.cgpa} onChange={(e) => handleEducationChange(index, e)} /><br />
        </div>
      ))}
      <button type="button" className="btn btn-dark" onClick={addEducationField}>Add Education</button><br />
    </div>
  );
}

export default ResumeForm;

