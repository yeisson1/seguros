import { IList } from '../../utils/interface';
import Style from './segurosDescription.css';
import {useState} from 'react';


const SegurosDescription = ( { __editorItemTitle, description, price, benefit, periodicity, requirement, imagenVerticalDesktop, tableRequirement }: IList )  => {

    const [index, setIndex] = useState<number>(0);
      return  (

        <>
            <div className={ Style.containerDetailSeguro }>
                <div className={Style.containerTabs}>
                <div className={Style.contentDetailSeguro}>
                
                    <div className={Style.tabHeader}>
                        <div className={Style.tabHeaderItem} style={{background: index===0 ? '#CF7039':'rgba(207, 112, 57, .3)', color: index===0 ? '#ffffff':'#CF7039' }} onClick={() => setIndex(0)}>  {index === 0 ? <img src="https://celsia.vteximg.com.br/arquivos/description-white.svg"  className={Style.iconDescriptionMobileWhite}/>: <img src="https://celsia.vteximg.com.br/arquivos/description-orange.svg"  className={Style.iconDescriptionMobileOrange}/>} Descripción</div>
                        <div className={Style.tabHeaderItem} style={{background: index===1 ? '#CF7039':'rgba(207, 112, 57, .3)', color: index===1 ? '#ffffff':'#CF7039'}} onClick={() => setIndex(1)}>   {index === 1 ? <img src="https://celsia.vteximg.com.br/arquivos/benefit-white.png"  className={Style.iconBenefitMobileWhite}/>:<img src="https://celsia.vteximg.com.br/arquivos/benefit.svg"  className={Style.iconDescriptionMobileOrange}/>}Beneficios</div>
                        <div className={Style.tabHeaderItem} style={{background: index===2 ? '#CF7039':'rgba(207, 112, 57, .3)', color: index===2 ? '#ffffff':'#CF7039'}} onClick={() => setIndex(2)}>    {index === 2 ? <img src="https://celsia.vteximg.com.br/arquivos/requirement-white.svg"  className={Style.iconRequirementMobileWhite}/>:<img src="https://celsia.vteximg.com.br/arquivos/requirement.svg"  className={Style.iconDescriptionMobileOrange}/>}Requisitos</div>
                </div>
                    
                    
                {index === 0 && <div>
                                        <div className={Style.containerDescription} >{description }</div>
                                            
                                        <div className={Style.containerName}>{__editorItemTitle}</div>
                                        <div className={Style.containerPrice}>
                                            <div className={Style.SeguroPrice}> $ {price} </div>
                                            <div className={Style.frecuenciaPago}>  Pesos {periodicity}*</div>
                                        </div>
                                    </div>}


                            
                    {index === 1 && <div>
                                    <div className={Style.containerDescription} >{benefit}</div>
                                </div>}
                        

                            
                    {index === 2 && <div className={Style.infoRequirement}>
                                        <div className={Style.containerDescription} >{requirement}</div>
                                        <img src={tableRequirement} className={Style.imgTableRequirement}/>
                                    </div>}
                        
                </div>   
                <div className={Style.containerImgdetailSeguro}>
                    <div style={{ backgroundImage: 'url(' + imagenVerticalDesktop + ')' }} className={Style.imgSeguro}  />
                </div>
            </div>
            
            </div>
        </>
    

    )

}

export default SegurosDescription;
