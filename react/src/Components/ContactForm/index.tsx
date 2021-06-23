import React, {useState, useContext, useEffect} from 'react';
import Style from './formulario.css';
import { useSeguros } from '../../index';
import { ToastContext } from 'vtex.styleguide';
import { useMutation } from 'react-apollo';
import NEWLEAD from './newLead.gql';
import NEWLEADSURA from './newLeadSURA.gql';
import ContactFormMessage from '../ContactFormMessage';


const ContactForm = (props:any) => {

    const { formcontact, setRegisterCorrectLead, currentSeguros } = useSeguros();
    const { showToast } = useContext(ToastContext);
    let timeOut = formcontact.timeOutMessage;
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [department, setDepartment] = useState("");
    const sponsor = "Celsia";
    const typeTel = "Celular";
    const [terms, setTerms] = useState(false);


    
    const [showMessage, setShowMessage] = useState(false);
    const [newLead, {loading, data:data, error:error}] = useMutation(NEWLEAD);
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
                    seguro:currentSeguros?.__editorItemTitle || ''
                }
            })
           
            setShowMessage(true);
            setName("");
            setPhone("");
            setEmail("");
            setDepartment("");
            setRegisterCorrectLead(true);

            setTimeout(() => {
                if(props.mobile===undefined){
                    setShowMessage(false);
                    setRegisterCorrectLead(false);

                }

                let element: HTMLElement = document.getElementById('triggerClose') as HTMLElement;
                element.click();

                
            
                
                
            }, timeOut)
            

        }

    },[data])


    useEffect(() => {
        //console.log("error", error);
    },[error])


    const handleInputChange = (e:any) => {
      
        switch(e.target.name) { 

            case "nombre": {
                setName(e.target.value)
                break; 

            }
            case "celular": { 
                setPhone(e.target.value);
                break; 
            }
            
            case "email":{
                setEmail(e.target.value);
                break;
            }  
            
            case "departamento": { 
                setDepartment(e.target.value);
                break; 

            }
            case "terms": { 

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

        const regex = /^[0-9]*$/;
        const phoneOnlyNumbers = regex.test(phone);

        let validPhone = phone.charAt(0);
        let expresion = /[^@]+@[^@]+\.[a-zA-Z]{2,}/g;
        let validarExpresion = expresion.exec(email);

        if(name === "" || phone === "" || email === "" || department === ""){
            showToast("Todos los campos son obligatorios");
            
        }
        else if(terms===false){
            showToast("Debes aceptar los términos y condiciones");
             
        }
        else if(phoneOnlyNumbers === false){
            showToast("El número de celular debe ser un campo númerico");
        }
        else if(validPhone != '3' || phone.length!=10){
            showToast("El número de celular es incorrecto");
            
        }
        else if(!validarExpresion){
            showToast("El correo electronico no es valido");
           
        }
        else{
            let dateInsertion = new Date();
            newLead({
                variables: {
                    name, 
                    phone,
                    email,
                    department,
                    seguro: currentSeguros?.__editorItemTitle || '',
                    sponsor,
                    typeTel,
                    dateInsertion
                }
            })
            
        }
    }

    return (
        <div className={Style.formContactContainer}>
              
            <div className={Style.formTitleContact} > {formcontact.title} </div>
            <div className={Style.formTextContact}> {formcontact.text} </div>
            <form className={Style.formContainerInputs}>
 
                <input className={Style.formInputContact} type="text" autoComplete="off" value ={name} required placeholder={ formcontact.placeHolderName}   name="nombre" onChange={ handleInputChange }></input>
                <input className={Style.formInputContact} type="text" autoComplete="off" value= {phone} required placeholder={ formcontact.placeHolderPhone} name="celular" onChange={ handleInputChange }></input>
                <input className={Style.formInputContact} type="text" autoComplete="off" value= {email} required placeholder={ formcontact.placeHolderEmail} name="email" onChange={ handleInputChange }></input>

                <select className={Style.formInputContact} required  value={department} name="departamento" onChange={ handleInputChange }>
                    <option value="">{formcontact.placeHolderDepartment}</option>
                    <option value="Valle Del Cauca">Valle Del Cauca</option>
                    <option value="Tolima">Tolima</option>
                
                </select><br></br>
                <div className={Style.formContainerCheck}>
                     <input className={Style.formInputCheck} type="checkbox" name="terms" required onChange={ handleInputChange }></input> <label className={Style.formTextCheck} ><div dangerouslySetInnerHTML={{__html: formcontact.terms}}></div> </label><br></br>
                </div>
                
                <button type="submit" className={Style.formButtonContact} onClick={showVariables} >{formcontact.textButton}</button>
                
            </form>
            {loading && <div className={Style.sendInfo}>Enviando ...</div>}

            <div>{showMessage && <div className={Style.containerMessage}>
                <ContactFormMessage/>
            </div> }</div>  
        </div>
    )
}

export default ContactForm;
