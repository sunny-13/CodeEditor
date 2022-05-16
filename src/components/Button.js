import React from 'react'

function Button({change,lang,openedSection}) {
    function changeSection(){
        change(lang);
    }
    return (
    <button className={lang==openedSection?'active-button':'inactive-button'} onClick={changeSection}>{lang}</button>
    )
}

export default Button