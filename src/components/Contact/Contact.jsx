import classes from './Contact.module.css';
import github from '../../assets/images/github.svg';
import mail from '../../assets/images/mail.svg';
import linkedin from '../../assets/images/linkedin.svg';
const Contact = () => {
    return (
        <div className={`${classes.contact} bg-darkGreen text-3xl lg:text-6xl hover:cursor-pointer`}>
            <h2 className={`me-3 overflow-hidden ${classes.heading} bg-darkGreen text-lime`}>Contact</h2>
            <div className={`${classes.icons} bg-darkGreen`}>
                <img className={`w-8 lg:w-10 ${classes.icon}`} src={github} alt="icon" />
                <img className={`w-8 lg:w-10 ${classes.icon}`} src={mail} alt="icon" />
                <img className={`w-8 lg:w-10 ${classes.icon}`} src={linkedin} alt="icon" />
            </div>
        </div>
    )
};

export default Contact;