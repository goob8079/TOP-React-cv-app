import { EducationInfo, GeneralInfo, PracticalExperience } from "./information";

export function FormEditor({ formData, setFormData, onSubmit }) {
    const { generalInfo = {}, educationInfo = [], experienceInfo = [] } = formData;

    function updateGeneralInfo(data) {
        setFormData({ ...formData, generalInfo: data});
    }

    function addEducation() {
        const newEdu = { school: '', degree: '', dateFrom: '', dataTo: '', id: crypto.randomUUID() };
        setFormData({...formData, educationInfo: [...educationInfo, newEdu]});
    }

    function updateEducation(i, updated) {
        const newList = [...educationInfo];
        newList[i] = updated;
        setFormData({ ...formData, educationInfo: newList});
    }

    function removeEducation(index) {
        // the underscore is just an unused value,
        // removes the element (li) at the index
        const newList = educationInfo.filter((_, i) => i !== index);
        setFormData({ ...formData, educationInfo: newList});
    }

    function addExperience() {
        const newExp = { company: '', positionTitle: '', responsibilities: '', dateFrom: '', dateTo: '', id: crypto.randomUUID() }
        setFormData({ ...formData, experienceInfo: [...experienceInfo, newExp] });
    }

    function updateExperience(i, updated) {
        const newList = [...experienceInfo];
        newList[i] = updated;
        setFormData({ ...formData, experienceInfo: newList});
    }

    function removeExperience(index) {
        const newList = experienceInfo.filter((_, i) => i !== index);
        setFormData({ ...formData, experienceInfo: newList});
    }

    return (
        <form onSubmit={onSubmit}>
            <section className="information-section">
                <GeneralInfo information={generalInfo} onChange={updateGeneralInfo}/>
                
                <ul className={`education-list ${educationInfo.length > 0 ? 'visible' : 'hidden'}`}>
                    {/* loop through the educationList and
                    add the new edu object to the ul element as an li element */}
                    {educationInfo.map((edu, index) => (
                        <li key={edu.id}>
                            <EducationInfo 
                                education={edu} 
                                onChange={(updatedEdu) => updateEducation(index, updatedEdu)}  
                            />
                            <button className="btns-container" type="button" onClick={() => removeEducation(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <button className="btns-container" type="button" onClick={(e) => addEducation(e)}>Add Education</button>

                <ul className={`experience-list ${experienceInfo.length > 0 ? 'visibile' : 'hidden'}`}>
                    {/* loop through the experienceList and
                    add the new exp object to the ul element as an li element */}
                    {experienceInfo.map((exp, index) => (
                        <li key={exp.id}>
                            <PracticalExperience
                                experience={exp}
                                onChange={(updatedExperience) => updateExperience(index, updatedExperience)}
                            />
                            <button className="btns-container" type="button" onClick={() => removeExperience(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <button className="btns-container" type="button" onClick={(e) => addExperience(e)}>Add Experience</button>
            </section>

            <div className="btns-container">
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
}