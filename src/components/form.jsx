import { useState } from "react";
import { EducationInfo, PracticalExperience } from "./information";

export function Form() {
    const [educationList, setEducationList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);
    let educationKey = EducationInfo.school + '-' + EducationInfo.degree;
    let experienceKey = PracticalExperience.company + '-' + PracticalExperience.positionTitle;

    function addEducation(e) {
        e.preventDefault();
        setEducationList([...educationList, { school: '', degree: '', dates: '' }]);
    }

    function addExperience(e) {
        e.preventDefault()
        setExperienceList([...experienceList, { company: '', positionTitle: '', responsibilities: '', datesWorked: '' }]);
    }

    return (
        <form>
            <section>
                <ul className="education-list">
                    {/* loop through the educationList and
                    add the new edu object to the ul element as an li element */}
                    {educationList.map((edu, index) => (
                        <li key={educationKey}>
                            <EducationInfo 
                                education={edu} 
                                onChange={(updatedEdu) => {
                                    const newList = [...educationList];
                                    newList[index] = updatedEdu;
                                    setEducationList(newList);
                                }}  
                            />
                        </li>
                    ))}
                    <button type="button" onClick={addEducation}>Add Education</button>
                </ul>
                <ul className="experience-list">
                    {/* loop through the experienceList and
                    add the new exp object to the ul element as an li element */}
                    {experienceList.map((exp, index) => (
                        <li key={experienceKey}>
                            <PracticalExperience
                                experience={exp}
                                onChange={(updatedExperience) => {
                                    const newList = [...experienceList];
                                    newList[index] = updatedExperience;
                                    setExperienceList(newList);
                                }}
                            />
                        </li>
                    ))}
                    <button type="button" onClick={addExperience}>Add Experience</button>
                </ul>
            </section>
            <button type='submit'>Submit</button>
        </form>
    )
}