import React, {useState} from "react";
import MessagesSpanish from '../languages/es-MX.json';
import MessagesEnglish from '../languages/en-US.json';
import { IntlProvider } from 'react-intl';

const langContext= React.createContext();

const LangProvider= ({children})=> {

    let localeDefault;
    let messagesDefault;
    const lang= localStorage.getItem('lang');

    if(lang){
        localeDefault= lang

        if(lang === 'es-MX'){
            messagesDefault= MessagesSpanish;
        }else if(lang === 'en-US'){
            messagesDefault= MessagesEnglish;
        }else{
            localeDefault= 'en-US';
            messagesDefault= MessagesEnglish;
        }
    }

    let [message, setMessage]= useState(messagesDefault);
    let [locale, setlocale]= useState(localeDefault);

    const establecerLenguaje= (lenguaje)=> {
        switch (lenguaje){
            case 'es-MX':
                setMessage(MessagesSpanish)
                setlocale('es-MX')
                localStorage.setItem('lang', 'es-MX')
                break;
            case 'en-US':
                setMessage(MessagesEnglish)
                setlocale('en-US')
                localStorage.setItem('lang', 'en-US')
                break;
            default:
                setMessage(MessagesEnglish)
                setlocale('en-US')
                localStorage.setItem('lang', 'en-US')
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