import profilePicture from "../images/ProfilePicture.jpg";
import resume from "../pdf/Lebenslauf, Maximilian Bärtel.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function() {
    return (
        <div className="MainContent AboutMe Contact">
            <div className="MainContentText">
               <h2>Kontakt</h2>
               <p>Vielen Dank, dass sie sich meine Website angesehen haben!</p>
               <p>Sollten sie Kontakt mit mir aufnehmen wollen, erreichen sie mich auf folgenden Wegen:</p>
               <ul>
                    <li>Telefon: +49(0) 157 77033157</li>
                    <li>Email: maximilianbaertel@gmail.com</li>
                    <li>Post: Borknerstrasse 185, 46284 Dorsten</li>
               </ul>
            </div>
            <div className="MainContentLinks">
                <a href={resume} download> Lebenslauf Herunterladen <FontAwesomeIcon icon={faDownload} className="downloadIcon"/></a>
                <a href="https://github.com/Macronigrill" target="_blank" title="Github"><FontAwesomeIcon icon={faGithub} className="githubIcon" /></a>
            </div>
            <div className="MainContentImage">
                <a href={profilePicture}><img src={profilePicture} alt="" /></a>
            </div>
        </div>
    )
}