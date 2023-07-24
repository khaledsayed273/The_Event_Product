import React from 'react'
import style from "./Section.module.css"

function Section() {
    return (
        <>
            <section className={style.section}>

                <h1>
                    the annual
                    <br />
                    <span>marketing </span>
                    conference
                </h1>

                <p>10-12 december, downtown conference center, new york</p>
                <div className={style.play} style={{
                    background: "#f82249",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    cursor: "pointer",
                    marginTop: "20px"
                }}>
                    <i className='fas fa-play text-white'></i>
                </div>
                <button className={style.btnAbout}>about the event</button>
            </section>

            <div id='about' className={`${style.end} py-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 px-md-4 text-center text-md-start">
                            <h2>about the event</h2>
                            <p style={{fontSize: "15px"}} className='text-white mt-4'>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore
                                eveniet accusamus error amet eius aut accusantium et. Non odit
                                consequatur repudiandae sequi ea odio molestiae. Enim possimus
                                sunt inventore in est ut optio sequi unde.
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-3 mt-sm-4 text-center text-md-start">
                            <h5>where</h5>
                            <p style={{fontSize: "15px"}} className='text-white mt-4'>Downtown Conference Center, New York</p>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-3 mt-sm-4 text-center text-md-start">
                            <h5 >when</h5>
                            <p style={{fontSize: "15px"}} className='text-white mt-4'>Monday to Wednesday 10-12 December</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section
