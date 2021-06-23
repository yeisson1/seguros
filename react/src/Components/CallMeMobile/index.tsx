import CallMe from '../CallMe';
import Style from './CallMeMobile.css';


const CallMeMobile = () => {
   
    return (
        <div>
            <div className={Style.CallMeMobileContainer}>
                <CallMe mobile={true}/>
            </div>
            <div className={Style.downCallMeMobile}></div>
        </div>
    )
}

export default CallMeMobile;
