import pp from '../images/dummy.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info() {
    return (
        <div className="info">
            <img src={pp} className="pp"></img>
            {/* <h3>ovo je Info: : photo, name, title, website, buttons</h3> */}
            <h4 className="name">Laura Smith</h4>
            <p className="title">Frontend Developer</p>
            <p className='website'>mywebsite.com</p>
            <div className='buttons'>
                <button type='button' className='email'>
                <FontAwesomeIcon icon={faEnvelope} className="icon"/>Email</button>
                <button type='button' className='linkedin'>
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>LinkedIn</button>
            </div>
        </div>
    )
}

// div.buttons ima padding koji se ne zeli maknuti