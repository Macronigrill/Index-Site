import AboutMe from "./AboutMe"
import Resume from "./Resume"
import Projects from "./Projects"
import Contact from "./Contact"

export default function MainContainer(props) {

    return (
        <section className="ContentSection">
            <div style={{translate:`${-100*props.page}%`}} className="MainContainer">
                <AboutMe></AboutMe>
                <Resume></Resume>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </section>
    )
}