import React, { useContext, useState } from 'react';
import SubscribeOnlineLetters from '../../components/shareComponents/SubscribeOnlineLetters';
import Link from 'next/link';
import firebaseClient from './firebaseConfig'
import firebase from "firebase/app";
import { useForm } from "react-hook-form";
import "firebase/auth";
import { AuthContext, registerEmailAndPassword } from './Auth';
import "firebase/firestore";
import Formsy, { addValidationRule } from 'formsy-react';

//form Validation check by warnings START
const errors = {
    isEmail: 'You have to type a valid email',
    maxLength: 'You cannot type more than 25 characters',
    minLength: 'You must type more than 6 characters',
    isAlpha: 'You can only type letters',
    equalsField: 'Password is not match',
    isStrong: 'password is not strong include spacial characters $,% or capital latter'
}

const signUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [canSubmit, setCanSubmit] = useState(false)
    // addValidationRule('isStrong', function (values, value) {
    //     return ['$', '%'].some(v => value && value.indexOf(v) !== -1)
    // })
    // const disableButton = () => {
    //     setCanSubmit(false)
    // }
    // const enableButton = () => {
    //     setCanSubmit(true)
    // }

    //Handle Firebase Auth
    //get user login form auth.js file
    // const auth = useContext(AuthContext);
    // const { registerEmailAndPassword, succeed } = auth;
    // const location = useLocation();
    // const history = useHistory();
    // let { from } = location.state || { from: { pathname: "/login" } };

    //form submit to firebase register with email and password
    const onSubmit = (newUserInfo) => {
        console.log(newUserInfo)
        const { firstName, lastName } = newUserInfo;
        const conCatName = firstName + " " + lastName;
        console.log(conCatName);
        if (newUserInfo.email && newUserInfo.password && conCatName) {
            registerEmailAndPassword(newUserInfo.email, newUserInfo.password, conCatName)
                .then(r => {
                    // history.replace(from);
                })
        }
    }



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
                                            <a href="#" className="btn btn-google btn-block"><i className="fa fa-google fa-1x mr-2"></i> Google</a>
                                            <a href="https://twitter.com/" className="btn btn-twitter"><i className="fa fa-twitter fa-1x"></i></a>
                                            <a href="https://www.facebook.com/" className="btn btn-facebook"><i className="fa fa-facebook fa-1x"></i></a>
                                        </div>
                                    </div>
                                    <hr className="divider" />
                                    <form onSubmit={handleSubmit(onSubmit)} id="Register" class="card-body" tabindex="500">
                                        <div class="name">
                                            <input type="text" name="name" {...register("name", { required: true })} />
                                            <label>Name</label>
                                        </div>
                                        <div class="mail">
                                            <input type="email" name="E-mail" {...register("email", { required: true })} />
                                            <label>Mail or Username</label>
                                        </div>
                                        <div class="passwd">
                                            <input type="password" name="password" {...register("password", { required: true })} />
                                            <label>Password</label>
                                        </div>
                                        <div class="submit">
                                            <button type="submit" class="btn ripple  btn-primary btn-block">Register</button>
                                        </div>
                                        <p class="text-dark mb-0">Already have an account?<a href="login.html" class="text-primary ml-1">Sign In</a></p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Section--> */}

            <SubscribeOnlineLetters />
        </div>
    );
};

export default signUp;