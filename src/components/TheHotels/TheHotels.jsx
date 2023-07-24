import React from 'react'
import style from "./TheHotels.module.css"

import img from "../../img/hotel1.png"
import img2 from "../../img/hotel2.png"
import img3 from "../../img/hotel3.png"

function TheHotels() {
    return (
        <div className='mt-5'>
            <h2 className={style.title}>hotels</h2>
            <p className={style.subTitle}>Event venue location info and gallery</p>

            <div className="container my-5">
                <div className="row w-100 m-0 p-md-5 gx-4">
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <div className={style.card}>
                            <div >
                                <img className='h-100 w-100' src={img} alt="img" />
                            </div>
                            <div className='p-3'>
                                <h4 className='mt-3 '>Hotel</h4>
                                <p>0.5 Mile from the Venue</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <div className={style.card}>
                            <div >
                                <img className='h-100 w-100' src={img2} alt="img" />
                            </div>
                            <div className='p-3'>
                                <h4 className='mt-3 '>Hotel</h4>
                                <p>0.5 Mile from the Venue</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3">
                        <div className={style.card}>
                            <div >
                                <img className='h-100 w-100' src={img3} alt="img" />
                            </div>
                            <div className='p-3'>
                                <h4 className='mt-3 '>Hotel</h4>
                                <p>0.5 Mile from the Venue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TheHotels
