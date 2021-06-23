import ModalTrigger from 'vtex.modal-layout/ModalTrigger';
import Modal from 'vtex.modal-layout/Modal';
import ModalHeader from 'vtex.modal-layout/ModalHeader';
import ModalContent from 'vtex.modal-layout/ModalContent';
import Style from './ModalInformative.css';
import { Fragment } from 'react';


const ModalInformative = (props:any) => {

    const { title, content, showComponent } = props;

    if (!showComponent) return <Fragment />
    return (
        
            <ModalTrigger  trigger="load-session">
                <Modal>
                    <ModalHeader>
                        <div className={Style.titleModalInformative}>{title}</div>
                    </ModalHeader>
                    <ModalContent>
                        <div className={Style.contentModalInformative}>{content}</div>
                    </ModalContent>
                    
                </Modal>

            </ModalTrigger>     
    )
}


ModalInformative.defaultProps = {
    title:"Titulo",
    content:"Chocolate bar chocolate apple pie dragée tootsie roll sugar plum cheesecake I love. Sugar plum muffin bonbon lemon drops jelly. Bonbon marzipan jelly beans biscuit sesame snaps toffee. Wafer apple pie halvah jelly-o.",
    showComponent:true
}

ModalInformative.schema = {
    "title": "Modal informativa",
    "type":"object",
    "properties":{
        "title":{
            "title": "Titulo",
            "type": "string"
        },
        "content":{
            "title":"Contenido",
            "type":"string",
            widget: {
                'ui:widget': 'textarea'
            }
        },
        "showComponent":{
            "title":"Mostrar/Ocultar componente",
            "type":"boolean",
            "default":true
        }
    }
}

export default ModalInformative;
