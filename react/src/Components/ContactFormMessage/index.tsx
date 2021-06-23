import Style from './ContactFormMessage.css';
import { useSeguros } from '../../index';

const ContactFormMessage = () => {

    const { formcontact } = useSeguros();

    return (
        <div className={Style.containerMessage}>
           
           <div className={Style.titleMessage}>{formcontact.titleMessageConfirm}<img src="https://celsia.vteximg.com.br/arquivos/iconconfirmmessage.svg" className={Style.iconMessageConfirm}/></div>
                <div className={Style.descriptionMessage}>{formcontact.descriptionMessageConfirm}</div>
           </div>
     
    )
}

export default ContactFormMessage;
