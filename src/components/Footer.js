import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
{/* <FontAwesomeIcon icon="fa-brands fa-twitter-square" /> */}

export default function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faTwitterSquare} className="icon"/>
            <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
            <FontAwesomeIcon icon={faInstagramSquare} className="icon"/>
            <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
        </div>
    )
}