import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../../../styles/layout/header.css'
import Logo from '../../assets/header-logo.png'

export default function Header() {

    const [t, i18n] = useTranslation('global')

    useEffect(() => {
        let es = document.getElementById('esButton')
        let en = document.getElementById('enButton')
        let pt = document.getElementById('ptButton')
        if (i18n.language === 'es') {
            es.classList.add('selectedLanguage')
        } else {
            es.classList.remove('selectedLanguage')
        }
        if (i18n.language === 'en') {
            en.classList.add('selectedLanguage')
        } else {
            en.classList.remove('selectedLanguage')
        }
        if (i18n.language === 'pt') {
            pt.classList.add('selectedLanguage')
        } else {
            pt.classList.remove('selectedLanguage')
        }
    }, [i18n.changeLanguage()])

    return (
        <header>
            <div id="logo">
                <img src={Logo} />
            </div>
            <h1>{t('header.title')}</h1>
            <div id='languages'>
                <button type='button' id='esButton' onClick={() => i18n.changeLanguage('es')}>ES</button>
                <button type='button' id='enButton' onClick={() => i18n.changeLanguage('en')}>EN</button>
                <button type='button' id='ptButton' onClick={() => i18n.changeLanguage('pt')}>PT</button>
            </div>
        </header>
    )
}