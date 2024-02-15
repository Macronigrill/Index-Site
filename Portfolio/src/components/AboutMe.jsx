import profilePicture from "../images/ProfilePicture.jpg";
import resume from "../pdf/Lebenslauf, Maximilian Bärtel.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function() {
    return (
        <div className="MainContent AboutMe">
            <div className="MainContentText">
               <h2>Über Mich</h2>
               <p>Hallo, mein Name ist Maximilian Bärtel. Ich war schon immer an Technik und Programmierung interessiert und würde gerne eine Karriere in diesem Bereich einschlagen. Ich bin interessiert an Web- und Application-Development sowie der Entwicklung von Videospielen. Meine Leidenschaft hierbei ist die Grafikprogrammierung, da diese eine Brücke zwischen Logik und Kreativität schafft. Auch die Programmierung von Algorithmen ist interessant für mich.</p>
               <p>Abseits vom technischen Feld, tauche ich in meiner Freizeit gerne in die Welt des Modellbaus ein, wo ich meine gründlich und akkurat mit Geduld meine Kreativität zur Schau stelle.</p>
               <p>Mit meiner Palette an Interessen und Engagement würde ich mich freuen meine Fähigkeiten in ihrem Unternehmen einzubringen und auszubauen!</p>
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