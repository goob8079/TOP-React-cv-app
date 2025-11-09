export function GeneralInfo({ information, onChange }) {
    function handleChange(field, val) {
        onChange({ ...information, [field]: val });
    }

    return (
        <section className="general-info">
            <label>
                Name:{''}
                <input 
                    value={information.name}
                    onInput={(e) => handleChange('name', e.target.value)}
                />
            </label>
            <label>
                Email:{''}
                <input 
                    value={information.email}
                    onInput={(e) => handleChange('email', e.target.value)}
                />
            </label>
            <label>
                Phone Number:{''}
                <input 
                    value={information.phoneNum}
                    onInput={(e) => handleChange('phoneNum', e.target.value)}
                />
            </label>
        </section>
    );
}

export function EducationInfo({ education, onChange }) {
    // lifted the state up to the Form component 
    function handleChange(field, val) {
        onChange({ ...education, [field]: val });
    }
    
    return (
        <section className="education-info">
            <label>
                School:{''}
                <input
                    value={education.school}
                    onInput={(e) => handleChange('school', e.target.value)}
                />
            </label>
            <label>
                Degree:{''}
                <input
                    value={education.degree}
                    onInput={(e) => handleChange('degree', e.target.value)}
                />
            </label>
            <label>
                From:{''}
                <input
                    value={education.dateFrom}
                    onInput={(e) => handleChange('dateFrom', e.target.value)}
                />
            </label>
            <label>
                To:{''}
                <input
                    value={education.dateTo}
                    onInput={(e) => handleChange('dateTo', e.target.value)}
                />
            </label>
        </section>
    );
}

export function PracticalExperience({ experience, onChange }) {
    // lifted the state up to the Form component 
    function handleChange(field, val) {
        onChange({ ...experience, [field]: val });
    }

    return (
        <section className="practical-experience">
            <label>
                Company:{''}
                <input 
                    value={experience.company}
                    onInput={(e) => handleChange('company', e.target.value)}
                />
            </label>
            <label>
                Position Title:{''}
                <input 
                    value={experience.positionTitle}
                    onInput={(e) => handleChange('positionTitle', e.target.value)}
                />
            </label>
            <label>
                Responsibilities:{''}
                <textarea 
                    value={experience.responsibilities}
                    onInput={(e) => handleChange('resposibilities', e.target.value)}
                />
            </label>
            <label>
                From:{''}
                <input
                    value={experience.dateFrom}
                    onInput={(e) => handleChange('dateFrom', e.target.value)}
                />
            </label>
            <label>
                To:{''}
                <input
                    value={experience.dateTo}
                    onInput={(e) => handleChange('dateTo', e.target.value)}
                />
            </label>
        </section>
    );
}