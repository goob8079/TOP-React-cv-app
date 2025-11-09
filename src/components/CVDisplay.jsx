export function CVDisplay({ formData, onEdit }) {
    const { generalInfo, educationInfo, experienceInfo } = formData;

    return (
        <div className="cv-container">
            <div className="cv-general-info">
                <h2>General Information</h2>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone: {generalInfo.phoneNum}</p>
            </div>
            <div className="cv-education-info">
                <h2>Education</h2>
                {educationInfo.map((el) => (
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
                {experienceInfo.map((el) => (
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

            <div className="btns-container">
                <button type="button" onClick={onEdit}>Edit</button>
            </div>
        </div>
    );
}