import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [message, setmessage] = React.useState("");

    async function handleContactFormSubmit(event) {
        event.preventDefault();

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                name,
                message
            })
        });
        const result = await response.json();

        console.log(result)
    }

    return (
        <section className={styles.contact}>
            <h1>Entre em contato</h1>
            <form className={styles.form} onSubmit={handleContactFormSubmit}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"
                            value={email}
                            onChange={({target}) => setEmail(target.value)}
                            required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name"
                            value={name}
                            onChange={({target}) => setName(target.value)}
                            required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" rows="5"
                            value={message}
                            onChange={({target}) => setmessage(target.value)}></textarea>
                    </div>
                    <div className={styles.actions}>
                        <button>Enviar Mensagem</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Contact