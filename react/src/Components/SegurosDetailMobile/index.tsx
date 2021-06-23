import { useSeguros } from '../../index';
import Style from './SegurosDetailMobile.css';
import { useState } from 'react';
import { Icon } from 'vtex.store-icons';
import  ContactForm  from '../ContactForm';
import ContactFormMessage from '../ContactFormMessage';

const SegurosDetailMobile = () => {

    const { seguros, index, logo, registerCorrectLead, setRegisterCorrectLead} = useSeguros();
    const [showForm, setShowForm] = useState(false);
    const [changeArrowBenefit, setChangeArrowBenefit] = useState(false);
    const [changeArrowRequirement, setChangeArrowRequirement] = useState(false);


    const arrowBenefit = () => {
            setChangeArrowBenefit(true);
            setChangeArrowRequirement(false); 
    }

    const arrowRequirement = () => {
        setChangeArrowBenefit(false);
        setChangeArrowRequirement(true); 
}

    return (
     <>
            {(showForm === false && registerCorrectLead ===false) && <div>

                <div className={Style.headerModalDetail}>
                    <a className={Style.lineModal} href="#"></a>
                </div>
                <a href="#" className={Style.closeModal}><Icon id ="nav-thin-caret--left" size={7} /> Cerrar</a>

                <div className={Style.contentUp}>
                    <img src={seguros[index].imageHorizontalMobile} className={Style.imageDetailSeguroMobile}/>
                    <div className={Style.logoDetailMobile}>
                        <img src={logo} className={Style.logoDetailSeguroMobile}/>
                    </div>

                    <div className={Style.contentNameSeguroDetailMobile}>
                        <div className={Style.nameSeguroDetailMobile}>{seguros[index].__editorItemTitle}</div>
                        <div className={Style.contentPriceSeguroDetailMobile}>
                            <div className={Style.priceSeguroDetailMobile}>$ {seguros[index].price}</div>
                            <div className={Style.periodicitySeguroDetailMobile}>Pesos {seguros[index].periodicity}*</div>
                        </div>
                    </div>
                    <div className={Style.descriptionSeguroDetailMobile}>{seguros[index].description}</div>
                </div>
                
                <div className={Style.acordeon}>

                    <div className={Style.acordeonItem}>
                        <input type="radio" name="acordeon" id="item1"></input>
                        <label htmlFor="item1" className={Style.acordeonTitulo}  onClick={arrowBenefit}>
                            <img src="https://celsia.vteximg.com.br/arquivos/benefit.svg" className={Style.iconBenefitMobile}/>Beneficios
                            {changeArrowBenefit == true && <div className={Style.triangulo2}></div> }
                            {changeArrowBenefit == false &&  <div className={Style.triangulo}></div>}
                        </label>
                        <p className={Style.acordeonContenido}>{seguros[index].benefit}</p>
                    </div>

                    <div className={Style.acordeonItem}>
                        <input type="radio" name="acordeon" id="item2"></input>
                        <label htmlFor="item2" className={Style.acordeonTitulo} onClick={arrowRequirement}>
                            <img src="https://celsia.vteximg.com.br/arquivos/requirement.svg" className={Style.iconRequirementMobile} />Requisitos 
                            {changeArrowRequirement == true && <div className={Style.triangulo2}></div> }
                            {changeArrowRequirement == false &&  <div className={Style.triangulo}></div>}
                        </label>

                        <p className={Style.acordeonContenido}>
                            {seguros[index].requirement}
                            <img src={seguros[index].tableRequirement} className={Style.tableRequirementMobile}/>
                        </p>
                        
                    </div>
                </div>

                <div className={Style.containerButtonContactForm}>
                    <a className={Style.buttonContactMobile} onClick={ () => setShowForm(true)} >Contactarme</a> 
                </div>
                    
            </div>}  
            
            {(showForm === true && registerCorrectLead ===false )  && 
                <div>
                    <div className={Style.headerModalDetail}>
                        <a className={Style.lineModal} href="#"></a>
                    </div>
                    <a className={Style.closeModal} onClick={() => setShowForm(false)} ><Icon id ="nav-thin-caret--left" size={7} /> Regresar</a>
                    <div className={Style.containerModalFormMobile}>
                        <div className={Style.formContactModal}>
                            <ContactForm mobile={true}/>
                        </div>
                    </div>
            </div>}

            {registerCorrectLead === true  && <div>
                <div className={Style.containerLine}><div className={Style.lineModalCallMe}></div></div>
                <a href="#" id="triggerClose" className={Style.closeModal} onClick={() => setRegisterCorrectLead(false) }><Icon id ="nav-thin-caret--left" size={7} /> Cerrar</a>
                    <div className={Style.containerMessageModal}>
                        <ContactFormMessage/>
                    </div>
            </div>}

     </>
     
    )
}
export default SegurosDetailMobile;
