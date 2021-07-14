import React from 'react';
import SubscribeOnlineLetters from '../../components/shareComponents/SubscribeOnlineLetters';

const signUp = () => {
    return (
        <div>
            <div className="cover-image bg-background3" data-image-src="../assets/images/banners/banner4.jpg">
                <section>
                    <div className="bannerimg">
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white">
                                    <h1>Register</h1>
                                    <ol className="breadcrumb text-center">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Register</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* <!--/Section--> */}


            </div>
            {/* <!--Section--> */}
            <section className="sptb">
                <div className="container customerpage">
                    <div className="row">
                        <div className="single-page" >
                            <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                                <div className="wrapper wrapper2">
                                    <div className="card-body">
                                        <div className="btn-list d-flex">
                                            <a href="https://www.google.com/gmail/" className="btn btn-google btn-block"><i className="fa fa-google fa-1x mr-2"></i> Google</a>
                                            <a href="https://twitter.com/" className="btn btn-twitter"><i className="fa fa-twitter fa-1x"></i></a>
                                            <a href="https://www.facebook.com/" className="btn btn-facebook"><i className="fa fa-facebook fa-1x"></i></a>
                                        </div>
                                    </div>
                                    <hr className="divider" />
                                    <form id="Register" className="card-body" tabindex="500">
                                        <div className="name">
                                            <input type="text" name="name" />
                                            <label>Name</label>
                                        </div>
                                        <div className="mail">
                                            <input type="email" name="mail" />
                                            <label>Mail or Username</label>
                                        </div>
                                        <div className="passwd">
                                            <input type="password" name="password" />
                                            <label>Password</label>
                                        </div>
                                        <div className="submit">
                                            <a className="btn ripple  btn-primary btn-block" href="#">Register</a>
                                        </div>
                                        <p className="text-dark mb-0">Already have an account?<a href="login.html" className="text-primary ml-1">Sign In</a></p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Section--> */}

            <SubscribeOnlineLetters/>
        </div>
    );
};

export default signUp;