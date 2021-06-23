import { Schema } from './utils/schema';
import { SegurosWrapperProps, SegurosContext, IList } from './utils/interface';
import { createContext, useContext, useEffect, useMemo, useState }  from 'react';


const segurosContext = createContext<SegurosContext>(null);
const SegurosProvider = segurosContext.Provider;

export const useSeguros = () => useContext(segurosContext);

const SegurosWrapper = (props: SegurosWrapperProps) => {

    const { breadcrumb, logo, callMe, products, formcontact, textSegurosTabs }  = props;
    
    const seguros = useMemo<IList[]>(() => {
        const { list } = products;
        return list.filter(item => item.state);

    },[products]);

   
    const [index, setIndex] = useState<number>(0);
    const [currentSeguros, setCurrentSeguros] = useState<IList>(null);
    const [registerCorrectLead, setRegisterCorrectLead] = useState<boolean>(false);

    useEffect(() => {
        if (seguros && seguros.length) {
            setCurrentSeguros(seguros[index]);
        }
    }, [index, seguros]);


    useEffect(() => {
        //console.log("currentSeguros", currentSeguros);
    }, [currentSeguros])

    const context:SegurosContext = useMemo(() => ({
        breadcrumb,
        logo,
        callMe,
        seguros,
        index,
        setIndex,
        formcontact,
        currentSeguros,
        textSegurosTabs,
        registerCorrectLead,
        setRegisterCorrectLead
        
        
    }), [
        breadcrumb,
        logo,
        callMe,
        seguros,
        setIndex,
        index,
        formcontact,
        currentSeguros,
        textSegurosTabs,
        registerCorrectLead,
        setRegisterCorrectLead
        
    ])

    return <SegurosProvider value={context}>
                {props.children}
            </SegurosProvider>
}

SegurosWrapper.defaultProps = {
    breadcrumb: [],
    logo: '',
    callMe: {
        title:"",
        description:"",
        image:"",
        form:{
            button:"",
            placeholder:"",
            terms:""
        }
       
    },
    products: { list: [{
        __editorItemTitle:"",
        price:"",
        periodicity:""
    }] },
    formcontact:{

    },
    textSegurosTabs:''
   
}

SegurosWrapper.getSchema = () => {
    return Schema
}

export default SegurosWrapper;
