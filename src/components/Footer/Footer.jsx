/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import style from "./Footer.module.css"

function Footer() {
    return (
        <>
            <footer style={{ background: "rgb(6, 12, 34)" }} className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <h6 className="h1 text-white">TheEvent</h6>
                            <p className="text-muted">
                                In alias aperiam. Placeat tempore facere. Officiis voluptate ipsam vel eveniet est dolor et totam porro. Perspiciatis ad omnis fugit molestiae recusandae possimus. Aut consectetur id quis. In inventore consequatur ad voluptate cupiditate debitis accusamus repellat cumque.
                            </p>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <h6 className={`${style.forH6} text-white pb-3 mt-2`}>USEFUL LINKS</h6>
                            <ul className="list-unstyled">
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Home</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Services</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Terms Of Service</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className={`${style.forH6} text-white pb-3 mt-2`}>USEFUL LINKS</h6>
                            <ul className="list-unstyled">
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Home</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Services</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Terms Of Service</a></li>
                                <li className="pt-2 pb-2"><i className={`fa fa-angle-right me-2 ${style.fori}`}></i><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className={`${style.forH6} text-white pb-3 mt-2`}>USEFUL LINKS</h6>
                            <article className="text-muted">
                                A108 Adam Street
                                New York, NY 535022
                                United States
                                Phone: +1 5589 55488 55
                                Email: info@example.com
                            </article>
                            <ul className="list-unstyled d-flex mt-3 justify-content-between">
                                <li className=""><a href="#" className={`text-white p-3 d-block h-100 ${style.icons}`}><i className="fab fa-facebook-f"></i></a></li>
                                <li className=""><a href="#" className={`text-white p-3 d-block h-100 ${style.icons}`}><i className="fab fa-twitter"></i></a></li>
                                <li className=""><a href="#" className={`text-white p-3 d-block h-100 ${style.icons}`}><i className="fab fa-instagram"></i></a></li>
                                <li className=""><a href="#" className={`text-white p-3 d-block h-100 ${style.icons}`}><i className="fab fa-google-plus-g"></i></a></li>
                                <li className=""><a href="#" className={`text-white p-3 d-block h-100 ${style.icons}`}><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div style={{background: "#101522"}} className="copyrights col text-center pt-4 pb-4 text-white">
                © Copyright TheEvent. All Rights Reserved
                <br/>
                Designed by <span style={{color: "#f82249" , fontWeight: "700" , textTransform: "uppercase"}} className="font-weight-bold">khaled</span>
            </div>
        </>
    )
}

export default Footer
