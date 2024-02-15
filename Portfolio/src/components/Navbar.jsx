import { useState } from "react";

export default function Navbar({ onSelectPage }) {
    
    const linksArray = ["Über Mich","Lebenslauf","Projekte","Kontakt"];

    const [selectedPage,setSelectedPage] = useState(0);

    const handleClick = (page) => {
        setSelectedPage(page);
        onSelectPage(page);
    }
    
    return (
        <div className="Navbar">
            <h1>Maximilian Bärtel</h1>
            <nav className="NavbarLinks">
                {linksArray.map((link,index)=> (
                    <>
                        <a 
                            key={index} 
                            onClick={() => handleClick(index)} 
                            className={index === selectedPage ? "SelectedNavLink" : ""}>             
                        {link}
                        </a>
                        {index < linksArray.length -1 && <span className="NavlinksDivider">|</span>}
                    </>
                ))}
            </nav>
        </div>        
    )
}