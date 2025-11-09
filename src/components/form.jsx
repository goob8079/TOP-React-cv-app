import React, { useState } from "react";
import { EducationInfo, GeneralInfo, PracticalExperience } from "./information";

export function Form() {
    const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phoneNum: ''});
    const [educationList, setEducationList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    function addEducation(e) {
        e.preventDefault();
        setEducationList([...educationList, { school: '', degree: '', dates: '', id: crypto.randomUUID() }]);
    }

    function removeEducation(index) {
        // the underscore is just an unused value
        // removes the element (li) at the index
        setEducationList(prevList => prevList.filter((_, i) => i !== index));
    }

    function addExperience(e) {
        e.preventDefault()
        setExperienceList([...experienceList, { company: '', positionTitle: '', responsibilities: '', datesWorked: '', id: crypto.randomUUID() }]);
    }

    function removeExperience(index) {
        setExperienceList(prevList => prevList.filter((_, i) => i !== index));
    }

    function displayCV(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <>
            <form onSubmit={displayCV}>
                <section className="information-section">
                    <GeneralInfo information={generalInfo} onChange={setGeneralInfo}/>
                    <ul className="education-list">
                        {/* loop through the educationList and
                        add the new edu object to the ul element as an li element */}
                        {educationList.map((edu, index) => (
                            <li key={edu.id}>
                                <EducationInfo 
                                    education={edu} 
                                    onChange={(updatedEdu) => {
                                        const newList = [...educationList];
                                        newList[index] = updatedEdu;
                                        setEducationList(newList);
                                    }}  
                                />
                                <button type="button" onClick={() => removeEducation(index)}>Remove Education</button>
                            </li>
                        ))}
                        <button type="button" onClick={addEducation}>Add Education</button>
                    </ul>
                    <ul className="experience-list">
                        {/* loop through the experienceList and
                        add the new exp object to the ul element as an li element */}
                        {experienceList.map((exp, index) => (
                            <li key={exp.id}>
                                <PracticalExperience
                                    experience={exp}
                                    onChange={(updatedExperience) => {
                                        const newList = [...experienceList];
                                        newList[index] = updatedExperience;
                                        setExperienceList(newList);
                                    }}
                                />
                                <button type="button" onClick={() => removeExperience(index)}>Remove Experience</button>
                            </li>
                        ))}
                        <button type="button" onClick={addExperience}>Add Experience</button>
                    </ul>
                </section>
                <button type='submit'>Submit</button>
            </form>
            {/* hide form after submission */}
            {!submitted ? (
                <form onSubmit={displayCV}>...</form>
            ) : (
                <>
                    <div className="cv-general-info">
                        <h2>General Information</h2>
                        <p>Name: {generalInfo.name}</p>
                        <p>Email: {generalInfo.email}</p>
                        <p>Phone: {generalInfo.phoneNum}</p>
                    </div>
                    <div className="cv-education-info">
                        <h2>Education</h2>
                        {educationList.map((el) => (
                            <ul key={el.id}>
                                <li>School: {el.school}</li>
                                <ul>
                                    <li>Degree: {el.degree}</li>
                                    <li>Dates Attended: {el.dates}</li>
                                </ul>
                            </ul>
                        ))}
                    </div>
                    <div className="cv-experience-info">
                        <h2>Experience</h2>
                        {experienceList.map((el) => (
                            <ul key={el.id}>
                                <li>Company: {el.company}</li>
                                <ul>
                                    <li>Position: {el.positionTitle}</li>
                                    <li>Responsibilities: {el.responsibilities}</li>
                                    <li>Dates Worked: {el.datesWorked}</li>
                                </ul>
                            </ul>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}