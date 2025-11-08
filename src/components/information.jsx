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

export function EducationInfo() {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [dates, setDates] = useState('');

    function handleSchoolInput(e) {
        setSchool(e.target.value);
    }

    function handleDegreeInput(e) {
        setDegree(e.target.value);
    }

    function handleDateInput(e) {
        setDates(e.target.value);
    }

    return (
        <section className="education-info">
            <label>
                School:{''}
                <input
                    value={school}
                    onInput={handleSchoolInput}
                />
            </label>
            <label>
                Degree:{''}
                <input
                    value={degree}
                    onInput={handleDegreeInput}
                />
            </label>
            <label>
                Date:{''}
                <input
                    value={dates}
                    onInput={handleDateInput}
                />
            </label>
        </section>
    );
}

export function PracticalExperience() {
    const [company, setCompany] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibilities, setResposibilities] = useState('');
    const [datesWorked, setDatesWorked] = useState('Ex. March 15, 2018 - July 20, 2021');

    function handleCompanyInput(e) {
        setCompany(e.target.value);
    }

    function handlePositionInput(e) {
        setPositionTitle(e.target.value);
    }

    function handleResponsibilitiesInput(e) {
        setResposibilities(e.target.value);
    }
    
    function handleDatesWorkedInput(e) {
        setDatesWorked(e.target.value);
    }

    return (
        <section className="practical-experience">
            <label>
                Company={''}
                <input 
                    value={company}
                    onInput={handleCompanyInput}
                />
            </label>
            <label>
                Position Title={''}
                <input 
                    value={positionTitle}
                    onInput={handlePositionInput}
                />
            </label>
            <label>
                Responsibilities={''}
                <textarea 
                    value={responsibilities}
                    onInput={handleResponsibilitiesInput}
                />
            </label>
            <label>
                Dates Worked={''}
                <input 
                    value={datesWorked}
                    onInput={handleDatesWorkedInput}
                />
            </label>
        </section>
    );
}