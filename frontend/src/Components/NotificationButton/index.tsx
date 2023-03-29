import icon from '../../assets/img/notification-icon.svg';
import './styles.css';


function NotificarionButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notification" />
        </div>
    )
}

export default NotificarionButton;
