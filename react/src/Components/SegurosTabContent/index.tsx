import { useSeguros } from '../../index';
import Style from './SegurosTabContent.css';
import { cloneElement, useEffect, useMemo, useState } from 'react';
import { Icon } from 'vtex.store-icons';

const SegurosTabContent = ( props: any)  => {

    const { seguros, index, setIndex, textSegurosTabs } = useSeguros();
    const { itemsPerPage: { desktop } }  = props;
    const [localIndex, setLocalIndex]  = useState(0);

    useEffect(() => {
        if(index + 1 < desktop) setLocalIndex(0);
        else setLocalIndex( (index + 1) - desktop );
      }, [index]);
    
      const segurosCount = useMemo<number>(() => seguros.length || 0, [seguros]);

      const styleSlider = useMemo(() => {
        const width = segurosCount * (100 / desktop) + '%';
        const marginLeft = -100 * (localIndex/desktop) + '%'
        return {
          width,
          marginLeft
        };
      }, [localIndex]);
      
    
    const upSlide = ()  => {
        setIndex(index + 1);
    }

    const downSlide = ()  => {
        setIndex(index - 1);
    }

    return (
    
    <div className= { Style.segurosTabContent}>
             <div className= {Style.titleTabContent} >{ textSegurosTabs }</div>
             
            { index > 0 && <div className= { Style.segurosArrowLeft}  onClick={ downSlide }> <Icon id="nav-thin-caret--left" size={12} ></Icon></div> }
            <div className= { Style.segurosSliderContainer} >
                <div className= { Style.segurosSliderSubContainer}  style={ styleSlider } >
                    {seguros.map ( (seguro, j)  => {
                        
                        return <div key={j} className= { Style.segurosSliderItem} > { cloneElement(props.children[0], { ...seguro, isActive : index===j, setIndex, index:j } ) } </div>

                    }  )  }
                </div>
            </div>
            { ( ( index + 1 <  segurosCount   )) &&  <div className= { Style.segurosArrowRight}  onClick={ upSlide }> <Icon id="nav-thin-caret--right" size={12}></Icon></div> }
        
         </div>

    )

}

SegurosTabContent.defaultProps = {

    itemsPerPage : {
        desktop : 1
    }
}

export default SegurosTabContent;