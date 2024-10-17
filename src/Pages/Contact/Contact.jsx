import React, { useState } from "react";
import './Contact.css'
import { Header, Footer } from "../../Components";

const Contact = () => {
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        zona: "",
        "Numero de envio": "",
        Consulta: "",
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleInputChange = (field, e) => {
        const value = e.target.value;
        setForm({
            ...form,
            [field]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!form.nombre) newErrors.nombre = "El nombre es obligatorio";
        if (!form.apellido) newErrors.apellido = "El apellido es obligatorio";
        if (!form.zona) newErrors.zona = "La zona es obligatoria";
        if (!form["Numero de envio"]) newErrors["Numero de envio"] = "El número de envío es obligatorio";
        if (!form.Consulta) newErrors.Consulta = "La consulta es obligatoria";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Add your form submission logic here
            console.log(form);
            setSubmissionStatus("Enviado correctamente!");
            setForm({
                nombre: "",
                apellido: "",
                zona: "",
                "Numero de envio": "",
                Consulta: "",
            });
        }
    };

    return (
        <>
            <div className="header"><Header /></div>

            <div className="contact-container">
                <form className="ContactForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" placeholder="" value={form.nombre}
                        onChange={(e) => handleInputChange("nombre", e)} />
                    {errors.nombre && <div className="error">{errors.nombre}</div>}
                    <br /><br />

                    <label htmlFor="lastName">Apellido:</label>
                    <input type="text" id="lastName" name="lastName"
                        value={form.apellido} onChange={(e) => handleInputChange("apellido", e)} />
                    {errors.apellido && <div className="error">{errors.apellido}</div>}
                    <br /><br />

                    <label htmlFor="zone">Zona:</label>
                    <input type="text" id="zone" name="zone"
                        value={form.zona} onChange={(e) => handleInputChange("zona", e)} />
                    {errors.zona && <div className="error">{errors.zona}</div>}
                    <br /><br />

                    <label htmlFor="nro">Numero de envio:</label>
                    <input type="number" id="nro" name="nro"
                        value={form["Numero de envio"]} onChange={(e) => handleInputChange("Numero de envio", e)} />
                    {errors["Numero de envio"] && <div className="error">{errors["Numero de envio"]}</div>}
                    <br /><br />

                    <label htmlFor="Consultation">Desarrolle su consulta:</label>
                    <textarea id="Consultation" name="Consultation"
                        value={form.Consulta} onChange={(e) => handleInputChange("Consulta", e)}></textarea>
                    {errors.Consulta && <div className="error">{errors.Consulta}</div>}
                    <br /><br />

                    <input type="submit" value="Enviar" />
                    {submissionStatus && (
                        <div className="submission-status">
                            {submissionStatus}
                        </div>
                    )}
                </form>
            </div>
            <div className="footer"><Footer /> </div>
        </>
    );
};

export default Contact;