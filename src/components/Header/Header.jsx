import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./Header.module.css"

function Header() {

    const data = [
        {
            id: 1,
            name: "home"
        },
        {
            id: 2,
            name: "about"
        },
        {
            id: 3,
            name: "speakers"
        },
        {
            id: 4,
            name: "schedule"
        },
        {
            id: 5,
            name: "venue"
        },
        {
            id: 6,
            name: "hotels"
        },
        {
            id: 7,
            name: "sponsors"
        },
        {
            id: 8,
            name: "contact"
        },
    ]

    const [active , setActive] = useState("home")


    const handleRef = (e) => {

        setActive(e.target.innerHTML);

    }

    const handleScrollToSection = (hash) => {
        const section = document.querySelector(hash);
        if (section) {
            
            section.scrollIntoView({ behavior: "smooth" });
        }

        console.log(section);
    };

    return (
        <>
            <nav id='home' className='navbar navbar-expand-lg d-flex justify-content-between align-items-center text-white'
                style={{
                    background: "rgba(6, 12, 34, 0.98)",
                    padding: "10px 30px",
                }}
            >
                <Link style={{
                    fontSize: "2rem",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "600"
                }}>
                    TheEvent
                </Link>
                <button className={`navbar-toggler ${style.bar}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className='navbar-nav d-flex justify-content-center align-items-center'
                        style={{
                            listStyle: "none",
                            padding: "0",
                            margin: "0"
                        }}
                    >
                        {data.map((item) => (
                            <li onClick={() => handleScrollToSection(`#${item.name}`)} className='d-flex align-items-center' key={item.id}>
                                <Link to={`#${item.name}`} onClick={handleRef} className={`${style.link} ${active === item.name ? style.active : ""} `}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className={`btn ${style.theBtn} `}>
                        <Link to="">buy tickets</Link>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
