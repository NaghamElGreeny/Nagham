import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
const Intro = () => {
    return (

        <div class="intro background-light d-flex justify-content-center ">
            <div class="container mx-lg-5 w-75 py-5">
                <div class="row position-relative align-items-center justify-content-lg-start justify-content-center text-light py-5">
                    <div class="col-lg-3 col-8 pb-5 img align-items-center ">
                        <div class="memoji position-relative">
                            <img src="../assets/ne-hi.webp" width="285px" height="259px" class="img-fluid" />
                            <div className="memojiline">-</div>
                            <div className="linked-in d-flex justify-content-between">
                                <TiSocialLinkedin /> <p>| Nagham ElGreeny</p>
                            </div>
                        </div>
                    </div>
                    <div class="Developer col-lg-9 col-8 w-lg-50  text-lg-start text-center pe-lg-5 px-0 ">
                        <p class="hi">
                            Hello! I'm <span>Nagham Elgreeny</span>
                        </p>
                        <p class="job fs-6 text-decoration-underline ">A Front-end Developer who</p>
                        <h2 class="text-lg-start text-center w-75 fs-lg-1 fs-md-3 fs-sm-6 lh-md">
                            Converts Designs into <span class="fs-lg-1 fs-md-3 fs-sm-6 lh-lg lh-md lh-sm position-relative">
                                Websites</span> ...
                        </h2>
                        <p class="text-white-50 text-lg-start text-center">Because Good website needs design and some one make it
                            real.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro