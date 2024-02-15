import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import jwtImage from "../images/JWT.jpg"
import galleryImage from "../images/Gallery.jpg"


export default function Projects() {
    return(
        <div className="MainContent Projects">
            <div className="ProjectsHeader">
                <h2>Projekte</h2>
                <p>Auf dieser Seite finden sie einige meiner Beispiel Projekte, an denen sie sehen können welche Kompetenzen ich mir bereits angeignet habe. Alle Projekte verlinken zu einem Server wo sie das Programm in Aktion sehen! Alternativ können sie sich auch die Github Repository des jeweiligen Projekts ansehen. Beachten sie dabei dass sicherheitsrelevante Daten nicht enthalten sind.</p>
            </div>
            <div className="Project JwtAuth">
                <div className="MainContentText">
                    <h3>JWT Auth Test</h3>
                    <p>Eine Website auf der User einfache Text-posts erstellen können. Die User müssen sich zunächst mit einem Nutzernamen und einem Passwort registrieren, und können sich dann mit diesen Daten einloggen. Nutzen können Texte Posten und ihre eigenen Posts löschen.</p>
                    <p>Die Authentifikation und Authorisation von Nutzern erfolgt hier durch einen JSON web token, der beim einloggen vom Server vergeben wird. 
                        Dieser enthält die Nutzerdaten in verschlüsselter Form und kann nur vom Server entschlüsselt werden. Somit ist dies eine Sichere Methode der Authentifikation. Da dieser Token leider immernoch gestohlen werden kann wenn man zugriff zum Browser erlangt wird dieser automatisch nach 24 Stunden zurückgesetzt.</p> 
                    <p className="down">Genutzte Programme:</p>
                    <ul>
                        <li>Node.js (Darunter Express und bcrypt)</li>
                        <li>MySQL</li>
                    </ul> 
                </div>
                <div className="MainContentLinks down">
                    <a href="/JwtAuthTest">Website Besuchen <FontAwesomeIcon icon={faLink} className="downloadIcon"></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faGithub} className="githubIcon"></FontAwesomeIcon></a>
                </div>
                <div className="MainContentImage">
                    <img src={jwtImage} alt="" />
                </div>
            </div>
            <div className="Project PexelsGallery">
                <div className="MainContentText">
                    <h3>Stock Foto API Gallerie</h3>
                    <p>Diese Gallerie zeigt Fotos von einer Stock-Fotografie API an (spezifisch <a className="underline" href="https://www.pexels.com/">pexels.com</a>). Fotos können von einer kurierten Liste, oder in Kategorien angezeigt werden.</p>
                    <p>Die Website sendet hierbei eine anfrage an den Server, welcher diese verarbeitet und and die Foto-API weiter sendet. Somit sind hier eigentlich 2 APIs am Werk! Der Grund hierfür ist, dass die pexels API einen Schlüssel benötigt, welcher auf dem Server gesichert abgelegt ist.<br/> Zu beachten: Die API hat ein stündliches Limit von 200 Bildern. Nach mehr als 200 Anfragen werden nur Platzhalter bilder angezeigt.</p>
                    <p>Genutzte Programme:</p>
                    <ul>
                        <li>Python</li>
                        <li>Fastapi</li>
                    </ul>
                </div>
                <div className="MainContentLinks down">
                    <a href="/PhotoGallery">Website Besuchen <FontAwesomeIcon icon={faLink} className="downloadIcon"></FontAwesomeIcon></a>
                    <a href=""><FontAwesomeIcon icon={faGithub} className="githubIcon"></FontAwesomeIcon></a>
                </div>
                <div className="MainContentImage">
                    <img src={galleryImage} alt="" />
                </div>
            </div>
        </div>
    )
}