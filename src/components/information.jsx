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