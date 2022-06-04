import React from "react";
import "./Footer.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import facebook from "../../Assets/img/facebook.png";
import insta from "../../Assets/img/instagram.png";
import youtube from "../../Assets/img/youtube.png";
import linkedin from "../../Assets/img/linkedin.png";
import logo from "../../Assets/img/logo.png";
import line from "../../Assets/img/line.png";
import upArrow from "../../Assets/img/upArrow.png";
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10  mx-auto">
                        <div className="row mb-5">
                            <div className="col-6 col-lg-6 my-auto d-flex justify-content-start ">
                               
                             
                                <div className="col-12 col-lg-9">
                                    <div className="row">
                                    <div className="col-5 col-lg-4 p-0 mx-auto  my-auto ">
                                        <img src={logo}  className="logo m-0" alt="" />
                                    </div>
                                    <div className="col-1 col-lg-1 p-0  mx-auto my-auto" >
                                        <img src={line} className="line m-0" alt="" />
                                    </div>
                                    <div className="col-6 col-lg-7 p-0 mx-auto my-auto" >
                                        <h2 class="logo-heading m-0" >IIT Roorkee</h2>
                                    </div>
                                    </div>
                                   
                                
                                </div>
                                
                            </div>

                            <div className="col-6 col-lg-6 d-flex justify-content-end">
                                <div className="column text-center">
                                    <div>
                                        <button onClick={topFunction} id="btn-backToTop">
                                            <img className="m-1 backToTopImg" src={upArrow} alt="" />
                                        </button>
                                    </div>
                                    <div>
                                        <h4 className="backToTop m-1">BACK TO TOP</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-6 col-lg-4 mb-4 ">
                                <h4 className="mb-3">Our Address</h4>
                                <p className="mb-0">Department Of Electrical Engineering</p>
                                <p className="mb-1">IIT Roorkee, 247667</p>
                                <p className="mb-1">Phone: xxxx-xxxx-xxxx</p>
                                <p className="mb-1">
                                    Email: <a href="mailto:eess@iitr.ac.in">eess@iitr.ac.in</a>
                                </p>
                            </div>

                            <div className="col-6 col-lg-4 mb-4 text-center ">
                                <h4 className="mb-3">Quick Links</h4>
                                <ul>
                                    <li>
                                        <a href="#">Lorem, ipsum.</a>
                                    </li>
                                    <li>
                                        <a href="#">Lorem, ipsum.</a>
                                    </li>
                                    <li>
                                        <a href="#">Lorem, ipsum.</a>
                                    </li>
                                    <li>
                                        <a href="#">Lorem, ipsum.</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-lg-4 mb-4 text-center">
                                <h4 className="mb-3">Follow Us</h4>
                                <div className="col-lg-6 mx-auto">
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.facebook.com/eess.iitr/" target="_blank">
                                                <img
                                                    className="social-links "
                                                    src={facebook}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.instagram.com/eess.iitr" target="_blank">
                                                <img
                                                    className="social-links "
                                                    src={insta}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.youtube.com/channel/UC9ZDP8Tj1kEzDcCnML1JIUA" target="_blank">
                                                <img
                                                    className="social-links "
                                                    src={youtube}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.linkedin.com/company/electrical-engineering-students-society-iit-roorkee/" target="_blank">
                                                <img
                                                    className="social-links "
                                                    src={linkedin}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-2" />

                            <div className="mt-2">
                                <p className="copyright-text text-center w-100">
                                    &copy; Copyright 2022, Electrical Engineering Students’ Society, IIT Roorkee. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// let mybutton = document.getElementById("btn-backToTop");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default Footer;
