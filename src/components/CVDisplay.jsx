export function CVDisplay({ formData, onEdit }) {
    const { generalInfo, educationInfo = [], experienceInfo = [] } = formData;

    return (
        <div className="cv-container">
            <div className="cv-general-info">
                <p id="gen-name"><b>{generalInfo.name}</b></p>
                <p id="gen-email">Email: {generalInfo.email}</p>
                <p id="gen-phone">Phone: {generalInfo.phoneNum}</p>
            </div>
            <div className="cv-education-info">
                <h2>Education</h2>
                {educationInfo.length > 0 ? 
                    educationInfo.map((el) => (
                        <ul key={el.id}>
                            <li>School: {el.school}</li>
                            <ul>
                                <li>Degree: {el.degree}</li>
                                <li>Dates Attended: {el.dateFrom} to {el.dateTo}</li>

                            </ul>
                        </ul>
                    )) : 
                        <p>No Education</p>
                }
            </div>
            <div className="cv-experience-info">
                <h2>Experience</h2>
                {experienceInfo.length > 0 ?
                    experienceInfo.map((el) => (
                        <ul key={el.id}>
                            <li>Company: {el.company}</li>
                            <ul>
                                <li>Position: {el.positionTitle}</li>
                                <li>Responsibilities: {el.responsibilities}</li>
                                <li>Dates Worked: {el.dateFrom} to {el.dateTo}</li>
                            </ul>
                        </ul>
                    )) :
                        <p>No Experience</p>
                }
            </div>

            <div className="btns-container">
                <button type="button" onClick={onEdit}>Edit</button>
            </div>
        </div>
    );
}