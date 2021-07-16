import React from 'react';
import SubscribeOnlineLetters from '../../components/shareComponents/SubscribeOnlineLetters';
import Link from 'next/link';

const signIn = () => {
    return (
        <div className="headerstyle1">
            {/* <!--Section--> */}
            <div className="cover-image bg-background3" data-image-src="../assets/images/banners/banner4.jpg">

                <section>
                    <div className="bannerimg">
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white">
                                    <h1>Login</h1>
                                    <ol className="breadcrumb text-center">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Login</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--/Section--> */}
            </div>
            {/* <!--/Section--> */}

            {/* <!--Login-Section--> */}
            <section className="sptb">
                <div className="container customerpage">
                    <div className="row">
                        <div className="single-page" >
                            <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                                <div className="wrapper wrapper2">
                                    <div className="card-body pb-4">
                                        <div className="btn-list d-flex">
                                            <a href="https://www.google.com/gmail/" className="btn btn-google btn-block"><i className="fa fa-google fa-1x mr-2"></i> Google</a>
                                            <a href="https://twitter.com/" className="btn btn-twitter"><i className="fa fa-twitter fa-1x"></i></a>
                                            <a href="https://www.facebook.com/" className="btn btn-facebook"><i className="fa fa-facebook fa-1x"></i></a>
                                        </div>
                                    </div>
                                    <hr className="divider" />
                                    <form id="login" className="card-body" tabindex="500">
                                        <div className="mail">
                                            <input type="email" name="mail" />
                                            <label>Mail or Username</label>
                                        </div>
                                        <div className="passwd mb-0">
                                            <input type="password" name="password" />
                                            <label>Password</label>
                                        </div>
                                        <div className="form-group pt-3 rememberme-style">
                                            <label className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" />
                                                <span className="custom-control-label text-dark">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="submit">
                                            <a className="btn ripple  btn-primary btn-block" href="#">Login</a>
                                        </div>
                                        <p className="mb-2"><a href="forgot.html" >Forgot Password</a></p>
                                        <p className="text-dark mb-0">Don't have account?<Link href="/registration/signUp"><a className="text-primary ml-1">Sign UP</a></Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/Login-Section--> */}

            {/* <!-- Onlinesletter--> */}

            <SubscribeOnlineLetters/>
            
            {/* <!-- Onlinesletter--> */}
        </div>
    );
};

export default signIn;