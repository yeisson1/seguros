import { useSeguros } from '../../index';
import Style from './SegurosItemMobile.css';
import  SegurosDetailMobile  from '../SegurosDetailMobile';
import { Icon } from 'vtex.store-icons';

const SegurosItemMobile = () => {

    const { seguros, setIndex, registerCorrectLead } = useSeguros();
    return (
        <div className={Style.containerSegurosMobile}>
            
            {seguros.map((seguro, index) => {
                        return (
                        <div key={index} className={Style.itemSegurosMobile} >
                            <div className={Style.colInfoSeguro}>
                                <a href={'#'+ Style.miModal} onClick={() => setIndex(index)} className={Style.infoLinkModal}>
                                    <div className={Style.titleSeguroMobile}>{seguro.__editorItemTitle}</div>
                                    <div className={Style.descriptionSeguroMobile}>{seguro.description}</div>
                                    <div className={Style.priceSeguroMobile}>
                                        <div className={Style.priceText}>$ {seguro.price}</div>
                                        <div className={Style.periodicityText}>Pesos {seguro.periodicity} *</div>
                                    </div>
                                </a>

                                <a href={'#'+ Style.miModal} className={Style.textLinkModal} onClick={() => setIndex(index)} >Ver más <Icon id ="nav-thin-caret--right" size={7} /></a>
                                
                                <div id={Style.miModal} className={Style.modal}>
                                    {registerCorrectLead === false && <div className={Style.modalDetail}>
                                        <SegurosDetailMobile/>   
                                    </div>}
                                    {registerCorrectLead === true && <div className={Style.modalDetailMessage}>
                                        <SegurosDetailMobile/>   
                                    </div>}
                                </div>
   
                            </div>
                            <div className={Style.colImageSeguro}>
                            <a href={'#'+ Style.miModal} onClick={() => setIndex(index)} className={Style.infoLinkModal}>
                                <img src={seguro.imageVerticalMobile}  className={Style.imgSeguroMobile} />
                            </a>
                            </div> 

                        </div>
                        )
                    })}
        </div>
    )
}

export default SegurosItemMobile;
