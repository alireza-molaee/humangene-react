import React, { createContext, useState, useEffect } from 'react'
import fa from './fa.json';
import en from './en.json';

function findLang(langKey) {
    switch (langKey) {
        case 'fa':
            return fa;
        case 'en':
            return en;
        default:
            return fa;
    }
}

export const I18nContext = createContext(fa);

export default function I18n(props) {
    const langKey = props.lang;
    const [lang, setLang] = useState(fa)
    useEffect(() => {
        setLang(findLang(langKey));
    }, [langKey])
    return (
        <I18nContext.Provider value={lang}>
            {props.children}
        </I18nContext.Provider>
    )
}
