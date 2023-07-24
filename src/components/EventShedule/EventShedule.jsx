import React, { useState } from 'react'
import style from './EventShedule.module.css'
import img1 from "../../img/speaker1.jpg"
import img2 from "../../img/speaker2.jpg"
import img3 from "../../img/speaker3.png"
import img4 from "../../img/speaker4.png"

function EventShedule() {

    const [activeDay, setActiveDay] = useState("day1")


    const handleClick = (day) => {
        setActiveDay(day);
    };


    const data = [
        {
            id: 1,
            time: "9:30 AM",
            name: "Et voluptatem iusto dicta nobis",
            subName: "matt Hyder",
            description: "Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia",
            img: img1
        },
        {
            id: 2,
            time: "9:30 AM",
            name: "Et voluptatem iusto dicta nobis",
            subName: "matt Hyder",
            description: "Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia",
            img: img2
        },
        {
            id: 3,
            time: "9:30 AM",
            name: "Et voluptatem iusto dicta nobis",
            subName: "matt Hyder",
            description: "Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia",
            img: img3
        },
        {
            id: 4,
            time: "9:30 AM",
            name: "Et voluptatem iusto dicta nobis",
            subName: "matt Hyder",
            description: "Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia",
            img: img4
        },
    ]

    return (
        <div id='schedule' style={{
            background: "rgb(235 235 235)",
            padding: "20px 0"
        }}>
            <div className="container">
                <h2 className={style.title}>event schedule</h2>
                <p className={style.subTitle}>Here are some of our speakers</p>

                <section className='mt-5'>
                    <ul className={`${style.days} list-unstyled w-100 m-auto d-flex flex-column flex-sm-row align-items-center justify-content-between flex-wrap`}>
                        <li className={`text-white text-center font-weight-bold py-2 my-2 my-sm-0 rounded-pill ${activeDay === "day1" ? style.activeDay : ""}`}
                            onClick={() => handleClick("day1")}

                        >
                            day1
                        </li>
                        <li className={`text-white text-center font-weight-bold py-2 my-2 my-sm-0 rounded-pill ${activeDay === "day2" ? style.activeDay : ""}`}
                            onClick={() => handleClick("day2")}

                        >
                            day2
                        </li>
                        <li className={`text-white text-center font-weight-bold py-2 my-2 my-sm-0 rounded-pill ${activeDay === "day3" ? style.activeDay : ""}`}
                            onClick={() => handleClick("day3")}

                        >
                            day3
                        </li>
                    </ul>

                    <p className='text-center pr-5 pl-5 mt-4'>
                        Voluptatem nulla veniam soluta et corrupti consequatur neque
                        eveniet officia. Eius necessitatibus voluptatem quis
                        labore perspiciatis quia.
                    </p>

                    <div className={`position-relative overflow-hidden ${style.forHeight}`}>
                        <ul className={`list-unstyled position-absolute w-100 m-auto ${style.dayUl} ${activeDay === "day1" ? "top-0" : "top-100"}    `}>

                            <li className='d-flex p-3'>
                                <span className='fw-bold ps-3'>
                                    9:30 AM
                                </span>
                                <article className='ps-sm-3 ps-md-5 d-flex mt-3 mt-sm-0'>
                                    <div className={style.contant}>
                                        <h5 className='text-center text-sm-start my-2 my-sm-1' style={{ color: "#0e1b4d", fontWeight: "400", margin: "0" }}>Registration</h5>
                                        <p>Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia
                                        </p>
                                    </div>
                                </article>
                            </li>

                            {data.map((item) => (
                                <li key={item.id} className='d-flex p-3'>
                                    <span className='fw-bold ps-3'>
                                        {item.time}
                                    </span>
                                    <article className='ps-sm-3 ps-md-5 d-flex mt-3 mt-sm-0'>
                                        <div className={style.parantImg} style={{
                                            width: "70px",
                                            height: "70px",
                                            borderRadius: "50%",
                                            overflow: "hidden",

                                        }}>
                                            <img style={{ objectFit: "cover" }} className='w-100 h-100' src={item.img} alt="img" />

                                        </div>
                                        <div className={style.contant}>
                                            <div className='d-flex flex-wrap my-2 my-md-0'>
                                                <h5 style={{ color: "#0e1b4d", fontWeight: "400", margin: "0" }}>{item.name}</h5>
                                                <span style={{
                                                    marginLeft: "7px",
                                                    fontSize: "14px",
                                                    fontWeight: "400"
                                                }}>({item.subName})</span>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                </li>
                            ))}

                        </ul>
                        <ul className={`list-unstyled position-absolute w-100 m-auto ${style.dayUl} ${activeDay === "day2" ? "top-0" : "top-100"}`}>

                            <li className='d-flex p-3'>
                                <span className='fw-bold ps-3'>
                                    9:30 AM
                                </span>
                                <article className='ps-sm-3 ps-md-5 d-flex mt-3 mt-sm-0'>
                                    <div className={style.contant}>
                                        <h5 className='text-center text-sm-start my-2 my-sm-1' style={{ color: "#0e1b4d", fontWeight: "400", margin: "0" }}>Registration</h5>
                                        <p>Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia
                                        </p>
                                    </div>
                                </article>
                            </li>

                            {data.map((item) => (
                                <li key={item.id} className='d-flex p-3'>
                                    <span className='fw-bold ps-3'>
                                        {item.time}
                                    </span>
                                    <article className='ps-sm-3 ps-md-5 d-flex mt-3 mt-sm-0'>
                                        <div className={style.parantImg} style={{
                                            width: "70px",
                                            height: "70px",
                                            borderRadius: "50%",
                                            overflow: "hidden",

                                        }}>
                                            <img style={{ objectFit: "cover" }} className='w-100 h-100' src={item.img} alt="img" />

                                        </div>
                                        <div className={style.contant}>
                                            <div className='d-flex flex-wrap my-2 my-md-0'>
                                                <h5 style={{ color: "#0e1b4d", fontWeight: "400", margin: "0" }}>{item.name}</h5>
                                                <span style={{
                                                    marginLeft: "7px",
                                                    fontSize: "14px",
                                                    fontWeight: "400"
                                                }}>({item.subName})</span>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                </li>
                            ))}

                        </ul>
                        <ul className={`list-unstyled position-absolute w-100 m-auto ${style.dayUl} ${activeDay === "day3" ? "top-0" : "top-100"}`}>

                            <li className='d-flex p-3'>
                                <span className='fw-bold ps-3'>
                                    9:30 AM
                                </span>
                                <article className='ps-sm-3 ps-md-5 d-flex mt-3 mt-sm-0'>
                                    <div className={style.contant}>
                                        <h5 className='text-center text-sm-start my-2 my-sm-1' style={{ color: "#0e1b4d", fontWeight: "400", margin: "0" }}>Registration</h5>
                                        <p>Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia
                                        </p>
                                    </div>
                                </article>
                            </li>

                            {data.map((item) => (
                                <li key={item.id} className='d-flex p-3'>
                                    <span className='fw-bold ps-3'>
                                        {item.time}
                                    </span>
                                    <article className='ps-sm-3 ps-md-5 d-flex mt-3 mt-sm-0'>
                                        <div className={style.parantImg} style={{
                                            width: "70px",
                                            height: "70px",
                                            borderRadius: "50%",
                                            overflow: "hidden",

                                        }}>
                                            <img style={{ objectFit: "cover" }} className='w-100 h-100' src={item.img} alt="img" />

                                        </div>
                                        <div className={style.contant}>
                                            <div className='d-flex flex-wrap my-2 my-md-0'>
                                                <h5 style={{ color: "#0e1b4d", fontWeight: "400", margin: "0" }}>{item.name}</h5>
                                                <span style={{
                                                    marginLeft: "7px",
                                                    fontSize: "14px",
                                                    fontWeight: "400"
                                                }}>({item.subName})</span>
                                            </div>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                </li>
                            ))}

                        </ul>
                    </div>

                </section>

            </div>
        </div>
    )
}

export default EventShedule
