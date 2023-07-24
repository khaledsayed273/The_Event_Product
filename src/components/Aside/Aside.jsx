/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import style from "./Aside.module.css"

import speaker1 from '../../img/speaker1.jpg'
import speaker2 from '../../img/speaker2.jpg'
import speaker3 from '../../img/speaker3.png'
import speaker4 from '../../img/speaker4.png'
import speaker5 from '../../img/speaker5.png'
import speaker6 from '../../img/speaker6.png'

function Aside() {

    const data = [
        {
            id: 1,
            img: speaker1,
            name: "brenden legros",
            job: "ques alias incidunt",
            alt: "speaker1"
        },
        {
            id: 2,
            img: speaker2,
            name: "hubert hirthe",
            job: "consequuntur odio aut",
            alt: "speaker2"
        },
        {
            id: 3,
            img: speaker3,
            name: "maly lee",
            job: "ques alias incidunt",
            alt: "speaker3"
        },
        {
            id: 4,
            img: speaker4,
            name: "cole emmerich",
            job: "fugiat laborum et",
            alt: "speaker4"
        },
        {
            id: 5,
            img: speaker5,
            name: "alejandrin littel",
            job: "ques alias incidunt",
            alt: "speaker5"
        },
        {
            id: 6,
            img: speaker6,
            name: "jack christiansen",
            job: "debitis iure vero",
            alt: "speaker6"
        },
    ]


    return (
        <aside id='speakers'>
            <div className='py-5'>

                <h2 className={style.title}>event speakers</h2>
                <p className={style.subTitle}>Here are some of our speakers</p>


                <div className="row w-100 px-2 mx-0 my-5">

                    {data.map((item) => (
                        <div key={item.id} className={`overflow-hidden col-sm-6 col-lg-4 ${style.box}`}>

                        <div className='position-relative h-100'>
                            <img className='w-100 h-100' src={item.img} alt={item.alt} />
                            <article className={style.article}>
                                <h4 className=''>Maily Lee</h4>
                                <p className=''>Quas alias incidunt</p>
                                <ul className='list-unstyled d-flex justify-content-center align-items-center'>
                                    <li>
                                        <a href="#" className='text-white'>
                                            <i className='fab fa-facebook-f'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-white'>
                                            <i className='fab fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-white'>
                                            <i className='fab fa-google-plus-g'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-white'>
                                            <i className='fab fa-linkedin-in'></i>
                                        </a>
                                    </li>
                                </ul>
                            </article>
                        </div>

                    </div>
                    ))}

                </div>

            </div>
        </aside>
    )
}

export default Aside
