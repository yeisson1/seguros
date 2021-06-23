import { ReactChildren } from 'react';

export interface IBreadcrumb {
    __editorItemTitle: string;
    url: string;
}

export interface IForm {
    button: string;
    placeholder: string;
    terms: string;
}

export interface ICallMe {
    title: string;
    description: string;
    image: string;
    form: IForm;
}

export interface IList {
    __editorItemTitle: string;
    price: number;
    periodicity: string;
    description: string;
    benefit: string;
    requirement: string;
    tableRequirement:string;
    imageHorizontalDesktop: string;
    imagenVerticalDesktop: string;
    imageHorizontalMobile: string;
    imageVerticalMobile: string;
    state: boolean;
    isActive?: boolean;
    setIndex?: (index: any) => void;
    index?: number;
    children:any
}

export interface IFormContact {
    title: string;
    text: string;
    placeHolderName: string;
    placeHolderPhone: string;
    placeHolderEmail: string;
    placeHolderDepartment: string;
    textButton: string;
    terms: string;
    titleMessageConfirm:string;
    descriptionMessageConfirm:string;
    timeOutMessage:number;
    
}

export interface IProduct {
    list: IList[];
}

export interface BaseComponent {
    breadcrumb: IBreadcrumb[];
    logo: string;
    textSegurosTabs:string;
    callMe: ICallMe;
    products?: IProduct;
    formcontact:IFormContact;

}

export interface SegurosContext extends BaseComponent {
    seguros: IList[];
    index: number;
    registerCorrectLead:boolean;
    setIndex: (index: any) => void;
    setRegisterCorrectLead: (registerCorrectLead: any) => void;
    currentSeguros:IList;
    

}

export interface SegurosWrapperProps extends SegurosContext {
    children: ReactChildren;
}

export interface IitemsPerPage {
    desktop: number;
}

export interface SeguroTabsProps {
    itemsPerPage: IitemsPerPage
}

export interface SegurosTabContent {
    seguros: IList[];
    index: number;
    setIndex: (index: any) => void;
    children:any;
}

