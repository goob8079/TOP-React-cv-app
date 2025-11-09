import { useState } from "react";
import { FormEditor } from "./FormEditor";
import { CVDisplay } from "./CVDisplay";

export function Form() {
    const [formData, setFormData] = useState({
        generalInfo: { name: '', email: '', phoneNum: ''},
        educationList: [],
        experienceList: []
    });
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    function handleEdit() {
        setSubmitted(false);
    }

    return (
        <>
            {/* hide form after submission */}
            {!submitted ? (
                <FormEditor 
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                />
            ) : (
                <CVDisplay formData={formData} onEdit={handleEdit}/>
            )}
        </>
    );
}