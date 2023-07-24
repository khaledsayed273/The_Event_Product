import React from 'react'
import style from "./EventVenue.module.css"
import img1 from "../../img/after3.png"
import img2 from "../../img/land_bg.jpg"
import img3 from "../../img/speaker1.jpg"
import img4 from "../../img/speaker2.jpg"
import img5 from "../../img/speaker3.png"
import img6 from "../../img/speaker4.png"
import img7 from "../../img/speaker5.png"
import img8 from "../../img/speaker6.png"
import img9 from "../../img/speaker7.png"

function EventVenue() {
    return (
        <div id='venue' className='mt-5'>
            <h2 className={style.title}>event venue</h2>
            <p className={style.subTitle}>Event venue location info and gallery</p>

            <div className='d-flex flex-column mt-5'>

                <div className='row w-100 m-0 p-0'>
                    <div className='col-12 col-sm-6 p-0'>
                        <div className={`${style.card} w-100  p-0  `}>
                            <img className='w-100 h-100' src={img4} alt="img" />
                            <div className={style.over}>
                                <h2>
                                    Card Title
                                </h2>
                                <p className='mt-3 pe-0 pe-md-3 pe-lg-5'>
                                    This is a wider card with supporting text below
                                    as a natural lead-in to
                                    additional content. This content is a
                                    little bit longer.
                                </p>
                                <p className='mt-2'>Last updated 3 mins ago </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 p-0'>
                        <div className={`${style.card} w-100  p-0  `}>
                            <img className='w-100 h-100' src={img3} alt="img" />
                            <div className={style.over}>
                                <h2>
                                    Downtown Conference Center, New York
                                </h2>
                                <p className='mt-3 pe-0 pe-md-3 pe-lg-5'>
                                    This is a wider card with supporting text below
                                    as a natural lead-in to
                                    additional content. This content is a
                                    little bit longer.
                                </p>
                                <p className='mt-2'>Last updated 3 mins ago </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`row m-0 p-0 w-100 d-flex`}>
                    
                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100  p-0  `}>
                            <img className='w-100 h-100' src={img2} alt="img1" />
                        </div>
                    </div>
                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100 p-0  `}>
                            <img className='w-100 h-100' src={img8} alt="img2" />
                        </div>
                    </div>
                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100  p-0  `}>
                            <img className='w-100 h-100' src={img1} alt="img3" />
                        </div>
                    </div>
                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100  p-0  `}>
                            <img className='w-100 h-100' src={img9} alt="img4" />
                        </div>
                    </div>

                </div>

                <div className="row w-100 m-0 p-0">

                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100  p-0  `}>
                            <img className='w-100 h-100' src={img4} alt="img5" />
                            
                        </div>
                    </div>
                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100 p-0  `}>
                            <img className='w-100 h-100' src={img5} alt="img6" />
                            
                        </div>
                    </div>
                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100  p-0  `}>
                            <img className='w-100 h-100' src={img6} alt="img7" />
                            
                        </div>
                    </div>
                    <div className='p-0 col-12 col-sm-6 col-md-3 '>
                        <div className={`${style.card} w-100 h-100  p-0  `}>
                            <img className='w-100 h-100' src={img7} alt="img8" />
                            
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default EventVenue
