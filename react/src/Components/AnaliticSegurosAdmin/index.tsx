import { useState, useEffect }from 'react'; 
import { Layout, PageBlock, PageHeader, Input, Alert, Card } from 'vtex.styleguide';
import { FormattedMessage } from 'react-intl';
import Style from './AnaliticSegurosAdmin.css';
import { useQuery, useLazyQuery } from 'react-apollo';
import LEADS from './leads.gql';
import SEGUROS from './seguros.gql';
import { pathOr } from 'ramda';

const AnaliticSegurosAdminWrapper = () => {

    const [initialDate, setInitialDate] = useState("");
    const [finalDate, setFinalDate] = useState("");
    const [errorFecha, setErrorFecha] = useState<boolean>(false);
    const [errorFechaVacio, setErrorFechaVacio] = useState<boolean>(false);
    const [where, setWhere] = useState("");

    const infoSeguros = useQuery(SEGUROS);
    const info = pathOr('{}', ['data', 'listContentWithSchema', 'content', 0 , 'contentJSON'], infoSeguros);
    const infojson = JSON.parse(info);
    const array = infojson.products?.list;
 
    const formulario = [];
    const llamame = [];
    const uniqueLeads = [];

    const acronym = 'LS';
    const fields = ['name', "phone", "seguro"];
    const pageSize = 200;


    const handleInputChange = (e:any) => {
      
        switch(e.target.name) { 

            case "initial": {
                setInitialDate(e.target.value)
                break; 

            }
            case "final": { 
                setFinalDate(e.target.value);
                break; 
            }  
        }    
    }

    const [getLeads, {data}] = useLazyQuery(LEADS, {
        fetchPolicy: 'network-only',
        variables: { acronym, 
            fields,
            pageSize,
            where
            }
    });

    useEffect(() => {

        if((initialDate != "" && finalDate == "" ) || (initialDate == "" && finalDate != "" )){
            setErrorFechaVacio(true);
          
        }
        else {
            setErrorFechaVacio(false);
        }


        if((initialDate != "" && finalDate != "") && initialDate > finalDate ){
            setErrorFecha(true);  
        }
        else {
            setErrorFecha(false);
        }


        if(initialDate=="" && finalDate =="" ){
            setWhere("");
        }
        else{
            setWhere("dateInsertion between " +  initialDate + " AND " + finalDate + "");
        }
  
    }, [initialDate, finalDate])


    useEffect(() => {
        getLeads() 
    }, []);

 
    if(data?.documents != undefined){
        for (var i = 0; i < data?.documents.length; i++) {
            let nameiteration = data?.documents[i].fields[0].value;
            let phoneiteration = data?.documents[i].fields[1].value;
        
            if(nameiteration != "Sin información"){
                formulario.push(nameiteration);
            }
            else{
                llamame.push(nameiteration);
            }

            if(uniqueLeads.includes(phoneiteration)===false){
                uniqueLeads.push(phoneiteration);
            }
    
        }

    }
   

    let lista = [];

    if(data?.documents != undefined && array != undefined){
        for (let j = 0; j < array.length; j++) {
            let contador = 0;
            let name =  array[j].__editorItemTitle;
        
            for (let k = 0; k < data?.documents.length; k++){
                if((data?.documents[k].fields[2].value) === name ){
                    
                    contador ++;
                }
            }
   
            lista.push({name, contador});
    
       }
    }
        

    return(
        <Layout
            pageHeader={
                <PageHeader title={<FormattedMessage id="react.hello-world.title" />}/>
            }
        >    

            <PageBlock variation="full">
                
                {errorFecha &&  <Alert type="error" onClose={() => setErrorFecha(false)}>
                    La fecha "Leads enviados desde" no puede ser superior a "Leads enviados hasta"
                </Alert>}

                {errorFechaVacio &&  <Alert type="error" onClose={() => setErrorFechaVacio(false)}>
                    Ambos campos son obligatorios
                </Alert>}

                <br></br>
        
                <div className={Style.containerForm}>
                    <Input placeholder="Placeholder" type="date" value={initialDate} size="large" label="Leads enviados desde:" name="initial" onChange={ handleInputChange }/>
                    <Input placeholder="Placeholder" type="date" value={finalDate} size="large" label="Leads enviados hasta:" name="final" onChange={ handleInputChange } />
                </div>
                
                <br></br>
                <h1 style={{textAlign:"center"}}>Información general</h1>
                <div style={{ padding: '20px', color: '#585959', display:'flex'}} >

                   
                    <Card>
                        <p className={Style.titleCard}>Formulario</p>
                        <h1 className={Style.numberInfo}>{formulario.length}</h1>
                    </Card>
                    <Card>
                        <p className={Style.titleCard}>Llamame</p>
                        <h1 className={Style.numberInfo}>{llamame.length}</h1>
                    </Card>
                    <Card>
                        <p className={Style.titleCard}>Leads unicos</p>
                        <h1 className={Style.numberInfo}>{uniqueLeads.length}</h1>
                    </Card>
                </div>
                <hr></hr>

                
                <h1 style={{textAlign:"center"}}>Leads por producto</h1>
                <Card style={{marginTop:"10px"}}>
                    <div style={{display:"flex"}}>
                        <div className={Style.titleItemProduct}>Nombre del seguro</div>
                        <div className={Style.titleItemProduct}>Cantidad de Leads</div>
                    </div>
                </Card>

            
               {
                   lista.map((item:any, i:any) => {
                   return (
                   <>
                
                    <Card style={{marginTop:"10px"}}>
                        <div style={{display:"flex"}}>
                            <div className={Style.itemName}>{item.name}</div>
                            <div className={Style.itemCount}>{ item.contador}</div>
                        </div>
                   
                    </Card>
                    </>
                   )
                })
               }

                
                
            </PageBlock>
        </Layout>
    )
} 

export default AnaliticSegurosAdminWrapper;

