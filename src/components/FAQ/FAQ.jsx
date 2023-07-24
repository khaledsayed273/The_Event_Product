import React from 'react'

import style from "./FAQ.module.css"

function FAQ() {
    return (
        <div className='mt-5'>
            <h2 className={style.title}>f.a.q</h2>
            <p className={style.subTitle}></p>
            <div className='container px-md-5 mt-5'>
                <div className="accordion accordion-flush px-md-5" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header " id="flush-headingOne">
                            <button className="accordion-button collapsed fw-bold  p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Non consectetur a erat nam at lectus urna duis?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed fw-bold  p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">

                                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?

                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed fw-bold  p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">

                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?

                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed fw-bold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className={`mt-5 ${style.NEWSLETTER} py-5`}>
                    <h2 className={style.title2}>NEWSLETTER</h2>
                    <p className={`${style.subTitle} text-white`}>Rerum numquam illum recusandae quia mollitia consequatur.</p>
                    <form className='mt-5 d-flex justify-content-center flex-wrap'>
                        <input className='mt-3' type="text" placeholder='Enter Your Email' style={{
                            padding: "7px 10px",
                            borderRadius: "20px"
                        }}/>

                        <button className='btn mt-3'
                            style={{
                                background: "#f82249",
                                color: "white",
                                padding: "7px 12px",
                                margin: "0 10px",
                                borderRadius: "40px",
                                textTransform: "capitalize"
                            }}
                        >subscribe
                        </button>

                    </form>
                </div>
            </div>


        </div>
    )
}

export default FAQ
