import ReactDom from "react-dom";
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

    return ReactDom.createPortal((
        <div className={classes}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    ), document.querySelector("#notification"));
}

export default Notification