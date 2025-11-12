export function CVDisplay({ formData, onEdit }) {
    const { generalInfo, educationInfo = [], experienceInfo = [] } = formData;

    return (
        <div className="cv-container">
            <div className="btns-container">
                <button type="button" onClick={onEdit}>Edit</button>
            </div>
            
            <div className="cv-general-info">
                <p id="gen-name"><b>{generalInfo.name}</b></p>
                <p id="gen-email">Email: {generalInfo.email}</p>
                <p id="gen-phone">Phone: {generalInfo.phoneNum}</p>
            </div>
            <div className="cv-education-info">
                <h2 id="education-title">Education</h2>
                {/* if educationInfo list has nothing then display 'No Education' */}
                {educationInfo.length > 0 ? 
                    educationInfo.map((el) => (
                        <ul className="education-ul" key={el.id}>
                            <li><b>{el.school}</b></li>
                            <li>{el.degree}</li>
                            <li>Dates Attended: {el.dateFrom} to {el.dateTo}</li>
                        </ul>
                    )) : 
                        <p>No Education</p>
                }
            </div>
            <div className="cv-experience-info">
                <h2 id="experience-title">Experience</h2>
                {/* if experienceInfo list has nothing then display 'No Experience' */}
                {experienceInfo.length > 0 ?
                    experienceInfo.map((el) => (
                        <ul className="experience-ul" key={el.id}>
                            <li><b>Company: {el.company}</b></li>
                            <ul>
                                <li>Position: {el.positionTitle}</li>
                                <li>Dates Worked: {el.dateFrom} to {el.dateTo}</li>
                                <li>Responsibilities: {el.responsibilities}</li>
                            </ul>
                        </ul>
                    )) :
                        <p>No Experience</p>
                }
            </div>
        </div>
    );
}