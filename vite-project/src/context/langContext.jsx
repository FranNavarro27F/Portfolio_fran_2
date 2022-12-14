import React, {useState} from "react";
import MessagesSpanish from '../languages/es-MX.json';
import MessagesEnglish from '../languages/en-US.json';
import { IntlProvider } from 'react-intl';

const langContext= React.createContext();

const LangProvider= ({children})=> {
    let [message, setMessage]= useState(MessagesEnglish);
    let [locale, setlocale]= useState('en-US');

    const establecerLenguaje= (lenguaje)=> {
        switch (lenguaje){
            case 'es-MX':
                setMessage(MessagesSpanish)
                setlocale('es-MX')
                break;
            case 'en-US':
                setMessage(MessagesEnglish)
                setlocale('en-US')
                break;
            default:
                setMessage(MessagesEnglish)
                setlocale('en-US')
                break;
        }
    };

    return (
        <langContext.Provider value={{establecerLenguaje: establecerLenguaje}}>
           <IntlProvider locale={locale} messages={message}>
            {children}
           </IntlProvider>
        </langContext.Provider>
    )
}

export { LangProvider, langContext };