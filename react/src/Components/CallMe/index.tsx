import Style from './CallMe.css';
import { useState, useContext, useEffect } from 'react';
import { ToastContext } from 'vtex.styleguide';
import NEWLEAD from './newLead.gql';
import { useMutation } from 'react-apollo';
import { useSeguros } from '../../index';
import { Icon } from 'vtex.store-icons';
import ContactFormMessage from '../ContactFormMessage';
import NEWLEADSURA from './newLeadSURA.gql';

const CallMe = (props:any) => {

    const { showToast } = useContext(ToastContext);
    const { formcontact, registerCorrectLead, setRegisterCorrectLead, callMe } = useSeguros();

    let timeOut = formcontact.timeOutMessage;

    const name="Sin información";
    const email="Sin información";
    const department="Sin información";
    const seguro="Sin información";
    const sponsor="Celsia";
    const typeTel="Celular";
    const [phone, setPhone] = useState("Sin información"); 
    const [terms, setTerms] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const [newLead, {loading, data, error}] = useMutation(NEWLEAD);
    const [newLeadSURA] = useMutation(NEWLEADSURA);


    useEffect(() => {

        if((data?.newLead?.id) != undefined ){

            newLeadSURA({
                variables:{
                    name,
                    email,
                    department,
                    typeTel,
                    phone,
                    sponsor,
                    seguro
                }
            })
           
            setShowMessage(true);
            setRegisterCorrectLead(true);
           
            setTimeout(() => {
                let element2: HTMLElement = document.getElementById('triggerMessageConfirm') as HTMLElement;
                element2.click();

            }, 1000);
            
            setPhone("");
            
            setTimeout(() => {
                setShowMessage(false);
                setRegisterCorrectLead(false);

            }, timeOut)
        }
 
    },[data])


    useEffect(() => {
        //console.log("error", error);
    },[error])


    const HandlerInput = (e:any) => {

        switch(e.target.name) { 

            case "phone": { 
                setPhone(e.target.value);
                break;
            }

            case "terms":{
                if(terms===false){
                    setTerms(true);
                }
                if(terms===true){
                    setTerms(false);
                }
                
                break; 
            }
        }
    }

    const showVariables = (e:any) => {
        e.preventDefault();
        e.stopPropagation();

        let validPhone = phone.charAt(0);

        if(phone === '') {
            showToast("El número de celular es un campo obligatorio");
        }
        else if(validPhone != '3' || phone.length!=10){
            showToast("El número de celular es incorrecto");    
        }
        else if(terms===false){
            showToast("Debes aceptar los terminos y condiciones"); 

        }
        else{
            let dateInsertion = new Date();
            newLead({
                variables: {
                    name, 
                    phone,
                    email,
                    department,
                    seguro,
                    sponsor,
                    typeTel,
                    dateInsertion

                }
            })
        }
    }

    return (
        <div className={Style.CallMeContainer}> 
            <div className={Style.callMeFormContainer}>
                <div className={Style.callMeFormTitle}>{callMe.title}</div>
                <div className={Style.callMeFormDescription}>{callMe.description}</div>

                <div className={Style.callMeInputContainer}>
                    <div className={Style.callMeInputButton}>
                        
                        <input type="number"  autoComplete="off"  onChange={HandlerInput} className={Style.callMeInput} placeholder={callMe.form.placeholder} name="phone" value={phone}></input>
                        <button className={Style.callMeButton} onClick={showVariables}><img src="https://celsia.vteximg.com.br/arquivos/Tel%C3%A9fono.png" className={Style.iconPhone}/> {callMe.form.button} </button><br></br>
                        <img src='https://celsia.vteximg.com.br/arquivos/Tel%C3%A9fono.png' width="16px" height="16px"/>
                    </div>
                    <div className={Style.AutorizationContainer}>
                        <input className={Style.callMeCheck} type="checkbox" onChange={HandlerInput}  name="terms" required ></input>
                        <label className={Style.callMetextCheck} ><div dangerouslySetInnerHTML={{__html: callMe.form.terms}}></div></label>
                        
                    </div>
                    {loading && <div className={Style.sendInfo}>Enviando ...</div>}
                </div>
                


                <a id="triggerMessageConfirm" href={'#'+ Style.modalConfirm} className={Style.linkModalMessage}></a>

                {props.mobile === undefined && <div>{showMessage && <div className={Style.containerMessage}>
                    <ContactFormMessage/>
                </div> }</div>}

                {props.mobile === true && <div>{registerCorrectLead=== true && <div>
                    
                    <div id={Style.modalConfirm} className={Style.modal2}>
                                <div className={Style.modalDetail2}>
                                    <div className={Style.containerLine}><div className={Style.lineModalCallMe}></div></div>
                                    <div className={Style.linkCloseMessage}><a href="#"  className={Style.closeModalCallMe} onClick={() => setRegisterCorrectLead(false) }><Icon id ="nav-thin-caret--left" size={7} /> Cerrar</a></div>
                                    <ContactFormMessage/>
                                </div>
                                    
                    </div>
                </div>}</div>}
                

            </div>
            <div className={Style.callMeImageContainer}>
                <img className={Style.callMeImage} src={callMe.image} alt={callMe.title} />
            </div>
            
        </div>
    )
}

export default CallMe;
