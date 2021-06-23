export const Schema = {
    title: 'Seguros',
    type: 'object',
    properties: {
        breadcrumb: {
            minItems: 2,
            title: 'Breadcrumb',
            type: 'array',
            items: {
                title: 'Breadcrumb',
                type: 'object',
                properties: {
                    __editorItemTitle: {
                        title: 'Nombre',
                        type: 'string'
                    },
                    url: {
                        title: 'Url',
                        type: 'string'
                    }
                }
            }
        },
        logo: {
            title: 'logo',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader'
            }
        },
        callMe: {
            title: 'llámame',
            type: 'object',
            properties: {
                title: {
                    title: 'Título Banner',
                    type: 'string'
                },
                description: {
                    title: 'Descripción Banner',
                    type: 'string',
                    widget: {
                        'ui:widget': 'textarea'
                    }
                },
                image: {
                    title: 'Imagen Banner',
                    type: 'string',
                    widget: {
                        'ui:widget': 'image-uploader'
                    }
                },
                form: {
                    title: 'Formulario Bannner',
                    type: 'object',
                    properties: {
                        button: {
                            title: 'Texto del botón Banner',
                            type: 'string'
                        },
                        placeholder: {
                            title: 'Placeholder Banner',
                            type: 'string'
                        },
                        terms: {
                            title: 'Términos y condiciones Banner',
                            type: 'string',
                            widget: {
                                'ui:widget': 'textarea'
                            }
                        }
                    }
                }
            }
        },
        textSegurosTabs: {
            title: 'Titulo seguros tabs',
            type: 'string',
           
        },
        products: {
            title: "Productos seguros",
            type: "object",
            properties: {
                list: {
                    minItems: 0,
                    title: "Creación de nuevo seguro",
                    type: "array",
                    items: {
                        title: "Creación de nuevo seguro",
                        type: "object",
                        properties: {
                            __editorItemTitle: {
                                "title": "Nombre del seguro",
                                "type": "string"
                            },
                            price: {
                                title: "Precio",
                                type: "number"
                            },
                            periodicity: {
                                title: "Perioricidad de pago",
                                type: "string"
                            },
                            description: {
                                title: "Descripción",
                                type: "string",
                                widget: {
                                    'ui:widget': 'textarea'
                                }
                            },
                            benefit: {
                                title: "Beneficios",
                                type: "string",
                                widget: {
                                    'ui:widget': 'textarea'
                                }
                            },
                            requirement: {
                                title: "Requisitos",
                                type: "string",
                                widget: {
                                    'ui:widget': 'textarea'
                                }
                            },
                            tableRequirement: {
                                "title": "Tabla de requisitos",
                                "type": "string",
                                "widget": {
                                    'ui:widget': 'image-uploader'
                                }
                            },
                            imageHorizontalDesktop: {
                                "title": "Imagen portada slider desktop",
                                "type": "string",
                                "widget": {
                                    'ui:widget': 'image-uploader'
                                }
                            },
                            imagenVerticalDesktop: {
                                "title": "Imagen detalle seguro desktop",
                                "type": "string",
                                "widget": {
                                    'ui:widget': 'image-uploader'
                                }
                            },
                            imageHorizontalMobile: {
                                "title": "Imagen modal mobile",
                                "type": "string",
                                "widget": {
                                    'ui:widget': 'image-uploader'
                                }
                            },
                            imageVerticalMobile: {
                                "title": "Imagen detalle mobile",
                                "type": "string",
                                "widget": {
                                    'ui:widget': 'image-uploader'
                                }
                            },
                            state: {
                                "title": "Estado",
                                "type": "boolean",
                                default: true
                            }
                        }

                    }
                }

            }
        },
        formcontact:{
            title: 'Formulario de contacto',
            type: 'object',
            properties: {
                title:{
                    title: "Titulo del formulario de contacto",
                    type: "string"
                },
                text:{
                    title:"Texto inicial formulario de contacto",
                    type:"string",
                    widget: {
                        'ui:widget': 'textarea'
                    }
                },
                placeHolderName:{
                    title:"Texto placeholder input nombre",
                    type:"string"
                },
                placeHolderPhone:{
                    title:"Texto placeholder input celular",
                    type:"string"

                },
                placeHolderEmail:{
                    title:"Texto placeholder input correo electrónico",
                    type:"string"

                },
                placeHolderDepartment:{
                    title:"Texto placeholder input departamento",
                    type:"string"

                },
                textButton:{
                    title:"Texto del boton",
                    type:"string"
                },
                terms: {
                    title: 'Términos y condiciones formulario',
                    type: 'string',
                    widget: {
                        'ui:widget': 'textarea'
                    }
                },
                titleMessageConfirm:{
                    title:"Titulo mensaje de confirmación",
                    type:"string"
                },
                descriptionMessageConfirm:{
                    title:"Texto mensaje de confirmación",
                    type:"string"
                },
                timeOutMessage:{
                    title:"Tiempo para ocultar el mensaje de confimación",
                    type:"number"
                }


            }
        /** */
        }
    }
}