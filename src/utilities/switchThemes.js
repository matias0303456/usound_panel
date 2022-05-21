export const switchThemes = theme => {
    let table = document.getElementById('tableParent')
    if (theme === 'light') {
        document.getElementById('body').style.background = 'var(--light-gradient)'
        if (table !== null) {
            table.style.boxShadow = '2px 2px 2px white'
        }
    }
    if (theme === 'dark') {
        document.getElementById('body').style.background = 'var(--dark-gradient)'
        if (table !== null) {
            table.style.boxShadow = '2px 2px 2px #1BE6BA'
        }
    }
}