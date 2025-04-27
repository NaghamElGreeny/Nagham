import React from 'react'

const Intro = () => {
    return (

        <div className="intro background-light d-flex justify-content-center align-items-center px-5">
            <div className="container mx-lg-5 justify-content-center px-lg-5 my-lg-7  py-5">
                <div className="row position-relative align-items-center justify-content-lg-start justify-content-center text-light py-5 my-5">
                    <div className="img col-lg-5 col-8 p-5 justify-content-center d-flex ">
                        <div className="memoji position-relative">
                            <img src="src\assets\ne-hi.webp" width="285px" height="259px" className="img-fluid" />
                            <div className="memojiline">-</div>
                            <div className="linked-in d-flex ">
                                <i className="fa4-brands fa-linkedin" style={{ color: '#ffffff', width: '30px', backgroundColor: 'red' }} />     <p>| Nagham ElGreeny</p>
                            </div>
                        </div>
                    </div>
                    <div className="Developer col-lg-7 col-8 w-lg-50  text-lg-start text-center pe-lg-5 px-0 ">
                        <p className="hi">
                            Hello! I'm <span>Nagham Elgreeny</span>
                        </p>
                        <p className="job fs-6 text-decoration-underline ">A Front-end Developer who</p>
                        <h2 className="text-lg-start text-center w-75 fs-lg-1 fs-md-3 fs-sm-6 lh-md">
                            Converts Designs into <span className="fs-lg-1 fs-md-3 fs-sm-6 lh-lg lh-md lh-sm position-relative">
                                Websites</span> ...
                        </h2>
                        <p className="text-white-50 text-lg-start text-center">Because Good website needs design and some one make it
                            real.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Intro