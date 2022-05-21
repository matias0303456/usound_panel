import { useContext } from 'react'
import { CgSun } from 'react-icons/cg'
import { FaRegMoon } from 'react-icons/fa'
import ThemeContext from '../contexts/ThemeContext'
import '../styles/theme_switcher.css'

export default function ThemeSwitcher() {

    const {
        setTheme
    } = useContext(ThemeContext)

    const handleClick = e => {
        if (e.target.checked) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div id='themeSwitch'>
            <FaRegMoon />
            <label className="switch">
                <input type="checkbox" onClick={e => handleClick(e)} />
                <span className="slider round">
                </span>
            </label>
            <CgSun />
        </div>
    )
};
