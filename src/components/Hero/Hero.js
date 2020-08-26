import React from 'react'

const Hero = (props) =>{
    
    let headerClass = 'defaultHero'
    if(props.hero){
        headerClass = props.hero
    }
    
    
    return(
        <header className={headerClass}>
            {props.children}
        </header>
    )
}

export default Hero