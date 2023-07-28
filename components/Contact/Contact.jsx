import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section className={styles.contact}>
            <h1>Entre em contato</h1>
            <form className={styles.form}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="nome" required />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" rows="5"></textarea>
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