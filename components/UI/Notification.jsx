import styles from "./Notification.module.css";

const Notification = ({ title, message, status }) => {
    let statusClass = "";

    switch (status) {
        case "success":
            statusClass = styles.success;
            break;

        case "error":
            statusClass = styles.error;
            break;

        default:
            statusClass = "";
            break
    }

    const classes = `${styles.notification} ${statusClass}`;

    return (
        <div className={classes}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default Notification