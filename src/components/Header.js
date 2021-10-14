import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'


const element = <FontAwesomeIcon icon={faMoon} />

const Header = () => {
    return (
        <>
            <section className="header">
                <div>
                     <h1>Where in the world ?</h1>
                </div>
                <div>
                    <i className="fas fa-moon">{element}</i>
                </div>
            </section>
        </>
    )
}

export default Header
