import resumeImage from "../images/Lebenslauf.png"
import resume from "../pdf/Lebenslauf, Maximilian Bärtel.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"


export default function Resume() {

    return (
        <div className="MainContent Resume">
            <div className="MainContentText">
                <h2>Lebenslauf</h2>
                <p>Hier sehen sie meinen Lebenslauf. Sie können ihn auch gerne über den Download-Knopf herunterladen oder über den Datei-Knopf direkt im Browser anzeigen lassen!</p>
            </div>
            <div className="MainContentImage">
                <img src={resumeImage} alt="" />
            </div> 
            <div className="MainContentLinks">
                <a href={resume} download={resume}> Lebenslauf Herunterladen <FontAwesomeIcon icon={faDownload} className="downloadIcon"/></a>
                <a href={resume} target="_blank"><FontAwesomeIcon icon={faFilePdf} className="githubIcon" /></a>
            </div>
        </div>
    )
}