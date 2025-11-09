import { useState } from "react";
import { EducationInfo, PracticalExperience } from "./information";

export function Form() {
    const [educationList, setEducationList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);

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

    return (
        <form>
            <section className="information-section">
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
    )
}