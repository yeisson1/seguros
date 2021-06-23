import { useSeguros } from '../../index';
import Style from './breadcrumb.css';
import { useMemo } from 'react';
import { Icon } from 'vtex.store-icons';

 const Breadcrumb = () => {

    const { breadcrumb } = useSeguros();
    
    return useMemo(() =>  <div className={Style.breadcrumbContainer}>{breadcrumb.map((bread, index) => {
                return <>
                {index !== 0 && <Icon id="nav-caret--right" size="10" activeClassName={Style.BreadcrumbArrowIcon}/>}
                
                <a className={Style.breadcrumdItem} key={index} href={bread?.url} style={{color: index===breadcrumb.length -1 ? '#CF7039':'#808080' }}> {bread?.__editorItemTitle} </a>
                </>
            })}</div>, [breadcrumb])

    }
       
 

export default Breadcrumb;