import { useState } from "react";

export function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    function handleNameInput(e) {
        setName(e.target.value);
        console.log(name);
    }

    function handleEmailInput(e) {
        setEmail(e.target.value);
        console.log(email);
    }

    function handlePhoneNumInput(e) {
        setPhoneNum(e.target.value);
        console.log(phoneNum);
    }

    return (
        <section className="general-info">
            <label>
                Name:{''}
                <input 
                    value={name}
                    onInput={handleNameInput}
                />
            </label>
            <label>
                Email:{''}
                <input 
                    value={email}
                    onInput={handleEmailInput}
                />
            </label>
            <label>
                Phone Number:{''}
                <input 
                    value={phoneNum}
                    onChange={handlePhoneNumInput}
                />
            </label>
        </section>
    );
}

export function EducationInfo({ education, onChange }) {
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
                Date:{''}
                <input
                    value={education.dates}
                    onInput={(e) => handleChange('dates', e.target.value)}
                />
            </label>
        </section>
    );
}

export function PracticalExperience({ experience, onChange }) {
    function handleChange(field, val) {
        onChange({ ...experience, [field]: val });
    }

    return (
        <section className="practical-experience">
            <label>
                Company={''}
                <input 
                    value={experience.company}
                    onInput={(e) => handleChange('company', e.target.value)}
                />
            </label>
            <label>
                Position Title={''}
                <input 
                    value={experience.positionTitle}
                    onInput={(e) => handleChange('positionTitle', e.target.value)}
                />
            </label>
            <label>
                Responsibilities={''}
                <textarea 
                    value={experience.responsibilities}
                    onInput={(e) => handleChange('resposibilities', e.target.value)}
                />
            </label>
            <label>
                Dates Worked={''}
                <input 
                    value={experience.datesWorked}
                    onInput={(e) => handleChange('datesWorked', e.target.value)}
                />
            </label>
        </section>
    );
}