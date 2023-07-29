import React from "react";
import Notification from "../UI/Notification";
import styles from "./Contact.module.css";

const Contact = () => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [message, setmessage] = React.useState("");
    const [notification, setNotification] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    function hideNotification() {
        const timer = setTimeout(() => setNotification(null), 3000);

        return () => clearTimeout(timer);   
    }

    async function handleContactFormSubmit(event) {
        event.preventDefault();

        setLoading(true);
        setNotification({
            status: "pending",
            title: "Enviando",
            message: "Mensagem sendo enviada..."
        });

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

        if (response.ok) {
            setLoading(false);
            setNotification({
                status: "success",
                title: "Sucesso",
                message: "Mensagem enviada com sucesso."
            });

            setEmail("");
            setName("");
            setmessage("");
            hideNotification();
        }

        else {
            setLoading(false);
            setNotification({
                status: "error",
                title: "Erro",
                message: "Erro ao enviar mensagem."
            });
            hideNotification();
        }
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
                        {loading ?
                            (
                                <button disabled>Enviando...</button>
                            ) : (
                                <button>Enviar Mensagem</button>
                            )
                        }
                    </div>
                </div>
            </form>

            {notification && (
                <Notification title={notification.title}
                    message={notification.message}
                    status={notification.status} />
            )}
        </section>
    )
}

export default Contact