import { IList } from '../../utils/interface';
import Style from './SegurosTabItem.css';
import className from 'classnames';

const SegurosTabItem = ({ __editorItemTitle, imageHorizontalDesktop, isActive, setIndex, index }: IList) => {
    const classes = className(Style.segurostabItemContainer,isActive ? Style.active : null);
    return <div className={classes} style={{ backgroundImage: 'url(' + imageHorizontalDesktop + ')' }} onClick={() => setIndex(index)}>
        <div className={Style.segurostabItemName}>{__editorItemTitle}</div>
    </div>
}

export default SegurosTabItem; 