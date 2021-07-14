/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link"

const Topbar = () => {
    return (
        <div className="headerstyle1">
            {/* <!--Section--> */}
		<div className="banner-1 cover-image bg-background2" data-image-src="../../assets/images/banners/banner1.jpg">
			{/* <!--Topbar--> */}
			<div className="header-main">
				<div className="top-bar">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-8 col-sm-4 col-7">
								<div className="top-bar-left d-flex">
									<div className="clearfix">
										<ul className="socials">
											<li>
												<a className="social-icon text-dark" href="#"><i className="fa fa-facebook"></i></a>
											</li>
											<li>
												<a className="social-icon text-dark" href="#"><i className="fa fa-twitter"></i></a>
											</li>
											<li>
												<a className="social-icon text-dark" href="#"><i className="fa fa-linkedin"></i></a>
											</li>
											<li>
												<a className="social-icon text-dark" href="#"><i className="fa fa-google-plus"></i></a>
											</li>
										</ul>
									</div>
									<div className="clearfix">
										<ul className="contact">
											<li className="d-lg-none">
												<a href="#" className="callnumber text-dark"><span><i className="fa fa-phone mr-1"></i>: +425 345 8765</span></a>
											</li>
											<li className="select-country">
												<select className="form-control select2-flag-search" data-placeholder="Select Country">
													<option value="UM">United States of America</option>
													<option value="AF">Afghanistan</option>
													<option value="AL">Albania</option>
													<option value="AD">Andorra</option>
													<option value="AG">Antigua and Barbuda</option>
													<option value="AU">Australia</option>
													<option value="AM">Armenia</option>
													<option value="AO">Angola</option>
													<option value="AR">Argentina</option>
													<option value="AT">Austria</option>
													<option value="AZ">Azerbaijan</option>
													<option value="BA">Bosnia and Herzegovina</option>
													<option value="BB">Barbados</option>
													<option value="BD">Bangladesh</option>
													<option value="BE">Belgium</option>
													<option value="BF">Burkina Faso</option>
													<option value="BG">Bulgaria</option>
													<option value="BH">Bahrain</option>
													<option value="BJ">Benin</option>
													<option value="BN">Brunei</option>
													<option value="BO">Bolivia</option>
													<option value="BT">Bhutan</option>
													<option value="BY">Belarus</option>
													<option value="CD">Congo</option>
													<option value="CA">Canada</option>
													<option value="CF">Central African Republic</option>
													<option value="CI">Cote d'Ivoire</option>
													<option value="CL">Chile</option>
													<option value="CM">Cameroon</option>
													<option value="CN">China</option>
													<option value="CO">Colombia</option>
													<option value="CU">Cuba</option>
													<option value="CV">Cabo Verde</option>
													<option value="CY">Cyprus</option>
													<option value="DJ">Djibouti</option>
													<option value="DK">Denmark</option>
													<option value="DM">Dominica</option>
													<option value="DO">Dominican Republic</option>
													<option value="EC">Ecuador</option>
													<option value="EE">Estonia</option>
													<option value="ER">Eritrea</option>
													<option value="ET">Ethiopia</option>
													<option value="FI">Finland</option>
													<option value="FJ">Fiji</option>
													<option value="FR">France</option>
													<option value="GA">Gabon</option>
													<option value="GD">Grenada</option>
													<option value="GE">Georgia</option>
													<option value="GH">Ghana</option>
													<option value="GH">Ghana</option>
													<option value="HN">Honduras</option>
													<option value="HT">Haiti</option>
													<option value="HU">Hungary</option>
													<option value="ID">Indonesia</option>
													<option value="IE">Ireland</option>
													<option value="IL">Israel</option>
													<option value="IN">India</option>
													<option value="IQ">Iraq</option>
													<option value="IR">Iran</option>
													<option value="IS">Iceland</option>
													<option value="IT">Italy</option>
													<option value="JM">Jamaica</option>
													<option value="JO">Jordan</option>
													<option value="JP">Japan</option>
													<option value="KE">Kenya</option>
													<option value="KG">Kyrgyzstan</option>
													<option value="KI">Kiribati</option>
													<option value="KW">Kuwait</option>
													<option value="KZ">Kazakhstan</option>
													<option value="LA">Laos</option>
													<option value="LB">Lebanons</option>
													<option value="LI">Liechtenstein</option>
													<option value="LR">Liberia</option>
													<option value="LS">Lesotho</option>
													<option value="LT">Lithuania</option>
													<option value="LU">Luxembourg</option>
													<option value="LV">Latvia</option>
													<option value="LY">Libya</option>
													<option value="MA">Morocco</option>
													<option value="MC">Monaco</option>
													<option value="MD">Moldova</option>
													<option value="ME">Montenegro</option>
													<option value="MG">Madagascar</option>
													<option value="MH">Marshall Islands</option>
													<option value="MK">Macedonia (FYROM)</option>
													<option value="ML">Mali</option>
													<option value="MM">Myanmar (formerly Burma)</option>
													<option value="MN">Mongolia</option>
													<option value="MR">Mauritania</option>
													<option value="MT">Malta</option>
													<option value="MV">Maldives</option>
													<option value="MW">Malawi</option>
													<option value="MX">Mexico</option>
													<option value="MZ">Mozambique</option>
													<option value="NA">Namibia</option>
													<option value="NG">Nigeria</option>
													<option value="NO">Norway</option>
													<option value="NP">Nepal</option>
													<option value="NR">Nauru</option>
													<option value="NZ">Online Zealand</option>
													<option value="OM">Oman</option>
													<option value="PA">Panama</option>
													<option value="PF">Paraguay</option>
													<option value="PG">Papua Online Guinea</option>
													<option value="PH">Philippines</option>
													<option value="PK">Pakistan</option>
													<option value="PL">Poland</option>
													<option value="QA">Qatar</option>
													<option value="RO">Romania</option>
													<option value="RU">Russia</option>
													<option value="RW">Rwanda</option>
													<option value="SA">Saudi Arabia</option>
													<option value="SB">Solomon Islands</option>
													<option value="SC">Seychelles</option>
													<option value="SD">Sudan</option>
													<option value="SE">Sweden</option>
													<option value="SG">Singapore</option>
													<option value="TG">Togo</option>
													<option value="TH">Thailand</option>
													<option value="TJ">Tajikistan</option>
													<option value="TL">Timor-Leste</option>
													<option value="TM">Turkmenistan</option>
													<option value="TN">Tunisia</option>
													<option value="TO">Tonga</option>
													<option value="TR">Turkey</option>
													<option value="TT">Trinidad and Tobago</option>
													<option value="TW">Taiwan</option>
													<option value="UA">Ukraine</option>
													<option value="UG">Uganda</option>
													<option value="UY">Uruguay</option>
													<option value="UZ">Uzbekistan</option>
													<option value="VA">Vatican City (Holy See)</option>
													<option value="VE">Venezuela</option>
													<option value="VN">Vietnam</option>
													<option value="VU">Vanuatu</option>
													<option value="YE">Yemen</option>
													<option value="ZM">Zambia</option>
													<option value="ZW">Zimbabwe</option>
												</select>
											</li>
											<li className="dropdown">
												<a href="#" className="text-dark" data-toggle="dropdown"><span> Language <i className="fa fa-caret-down text-muted"></i></span> </a>
												<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
													<a href="#" className="dropdown-item" >
														English
													</a>
													<a className="dropdown-item" href="#">
														Arabic
													</a>
													<a className="dropdown-item" href="#">
														German
													</a>
													<a href="#" className="dropdown-item" >
														Greek
													</a>
													<a href="#" className="dropdown-item" >
														Spanish
													</a>
												</div>
											</li>
											<li className="dropdown">
												<a href="#" className="text-dark" data-toggle="dropdown"><span>Currency <i className="fa fa-caret-down text-muted"></i></span></a>
												<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
													<a href="#" className="dropdown-item" >
														USD
													</a>
													<a className="dropdown-item" href="#">
														EUR
													</a>
													<a className="dropdown-item" href="#">
														INR
													</a>
													<a href="#" className="dropdown-item" >
														GBP
													</a>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-4 col-lg-4 col-sm-8 col-5">
								<div className="top-bar-right">
									<ul className="custom">
										<li>
											<a href="register.html" className="text-dark"><i className="fa fa-user mr-1"></i> <span>Register</span></a>
										</li>
										<li>
											<Link href="/registration/signIn"><a className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Login</span></a></Link>
										</li>
										<li className="dropdown">
											<a href="#" className="text-dark" data-toggle="dropdown"><i className="fa fa-home mr-1"></i><span> My Dashboard<i className="fa fa-caret-down ml-1"></i></span></a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
												<a href="mydash.html" className="dropdown-item" >
													<i className="dropdown-icon icon icon-user"></i> My Profile
												</a>
												<a className="dropdown-item" href="#">
													<i className="dropdown-icon icon icon-speech"></i> Inbox
												</a>
												<a className="dropdown-item" href="#">
													<i className="dropdown-icon icon icon-bell"></i> Notifications
												</a>
												<a href="mydash.html" className="dropdown-item" >
													<i className="dropdown-icon  icon icon-settings"></i> Account Settings
												</a>
												<a className="dropdown-item" href="#">
													<i className="dropdown-icon icon icon-power"></i> Log out
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
                {/* <!--/Topbar--> */}

				{/* <!--Header--> */}
				<header className="header-search header-logosec p-2 header-icons">
					<div className="container">
						<div className="d-flex">
							<div className="header-search-logo d-none d-lg-block">
								<a className="header-logo header-brand-img" href="index.html"></a>
							</div>
							<div className="d-flex ml-auto header-right-icons header-search-icon">
								<div className="dropdown d-md-flex notifications">
									<a className="nav-link icon" data-toggle="dropdown">
										<i className="fe fe-shopping-cart"></i>
										<span className="nav-unread badge badge-danger badge-pill">2</span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow cart-dropdown">
										<div className="drop-cart header-dropdown-list">
											<div className="border-bottom">
												<div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
													<div className="">
														<img src="../../assets/images/media/pictures/small/01.jpg" className="br-4" alt="img"/>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="fs-16 h4 d-block">HTML Template</span>
															<div className="fs-13 text-muted">HTML</div>
														</div>
													</div>
													<div className="ml-auto text-center">
														<a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13"></i></a>
														<div className="h5 text-dark mt-1 mb-0">$24</div>
													</div>
												</div>
											</div>
											<div className="border-bottom">
												<div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
													<div className="">
														<img src="../../assets/images/media/pictures/small/02.jpg" className="br-4" alt="img"/>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="fs-16 h4 d-block">Wordpress Template</span>
															<div className="fs-13 text-muted">Wordpress</div>
														</div>
													</div>
													<div className="ml-auto text-center">
														<a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13"></i></a>
														<div className="h5 text-dark mt-1 mb-0">$18</div>
													</div>
												</div>
											</div>
											<div className="border-bottom">
												<div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
													<div className="">
														<img src="../../assets/images/media/pictures/small/03.jpg" className="br-4" alt="img"/>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="fs-16 h4 d-block">Angular Template</span>
															<div className="fs-13 text-muted">Angular</div>
														</div>
													</div>
													<div className="ml-auto text-center">
														<a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13"></i></a>
														<div className="h5 text-dark mt-1 mb-0">$22</div>
													</div>
												</div>
											</div>
											<div className="border-bottom">
												<div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
													<div className="">
														<img src="../../assets/images/media/pictures/small/04.jpg" className="br-4" alt="img"/>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="fs-16 h4 d-block">PHP Template</span>
															<div className="fs-13 text-muted">PHP</div>
														</div>
													</div>
													<div className="ml-auto text-center">
														<a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13"></i></a>
														<div className="h5 text-dark mt-1 mb-0">$12</div>
													</div>
												</div>
											</div>
											<div className="">
												<div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
													<div className="">
														<img src="../../assets/images/media/pictures/small/05.jpg" className="br-4" alt="img"/>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="fs-16 h4 d-block">PSD Template</span>
															<div className="fs-13 text-muted">PSD</div>
														</div>
													</div>
													<div className="ml-auto text-center">
														<a href="#" className="text-muted"><i className="fe fe-trash-2 fs-13"></i></a>
														<div className="h5 text-dark mt-1 mb-0">$5</div>
													</div>
												</div>
											</div>
										</div>
										<div className="dropdown-footer">
											<div className="btn-list">
												<a href="cart.html" className="btn btn-primary  ripple mb-lg-0">View Cart</a>
												<a href="checkout.html" className=" btn btn-secondary  ripple mb-lg-0">Checkout</a>
											</div>
										</div>
									</div>
								 </div>
                                 {/*<!-- NOTIFICATIONS --> */}
								<div className="dropdown d-md-flex notifications">
									<a className="nav-link icon" data-toggle="dropdown">
										<i className="fe fe-bell"></i>
										<span className="pulse bg-success"></span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<div className="notifications-menu header-dropdown-list">
											<a href="#" className="dropdown-item d-flex">
												<div className="text-primary fs-18 mr-3 ">
													<i className="fe fe-mail text-primary"></i>
												</div>
												<div>
													<h6 className="mb-1">Commented on your post.</h6>
													<div className="small text-muted">3 hours ago</div>
												</div>
											</a>
											<a href="#" className="dropdown-item d-flex border-top">
												<div className="text-secondary fs-18 mr-3 ">
													<i className="fe fe-user text-secondary"></i>
												</div>
												<div>
													<h6 className="mb-1">New User Registered.</h6>
													<div className="small text-muted">1 day ago</div>
												</div>
											</a>
											<a href="#" className="dropdown-item d-flex border-top">
												<div className="text-success fs-18 mr-3 ">
													<i className="fe fe-thumbs-up text-success"></i>
												</div>
												<div>
													<h6 className="mb-1">Someone likes our posts</h6>
													<div className="small text-muted">5 mins ago</div>
												</div>
											</a>
											<a href="#" className="dropdown-item d-flex border-top">
												<div className="text-purple fs-18 mr-3 ">
													<i className="fe fe-upload text-purple"></i>
												</div>
												<div>
													<h6 className="mb-1">New file has been uploaded</h6>
													<div className="small text-muted">50 sec ago</div>
												</div>
											</a>
											<a href="#" className="dropdown-item d-flex border-top">
												<div className="text-danger fs-18 mr-3 ">
													<i className="fe fe-alert-circle text-danger"></i>
												</div>
												<div>
													<h6 className="mb-1">System alert</h6>
													<div className="small text-muted">2 days ago</div>
												</div>
											</a>
											<a href="#" className="dropdown-item d-flex border-top">
												<div className="text-warning fs-18 mr-3 ">
													<i className="fe fe-server text-warning"></i>
												</div>
												<div>
													<h6 className="mb-1">Server Rebooted</h6>
													<div className="small text-muted">45 mins ago</div>
												</div>
											</a>
											<a href="#" className="dropdown-item d-flex border-top">
												<div className="text-secondary fs-18 mr-3 ">
													<i className="fe fe-layers text-secondary"></i>
												</div>
												<div>
													<h6 className="mb-1">Completed One task</h6>
													<div className="small text-muted">3 mins ago</div>
												</div>
											</a>
										</div>
										<div className="dropdown-footer p-3">
											<a href="#" className="fs-14 text-dark text-center">View all Notification</a>
										</div>
									</div>
								 </div>
                                {/*<!-- NOTIFICATIONS --> */}
								<div className="dropdown d-md-flex message">
									<a className="nav-link icon text-center" data-toggle="dropdown">
										<i className="fe fe-mail"></i>
										<span className="nav-unread badge badge-info badge-pill">3</span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<div className="message-menu header-dropdown-list">
											<a className="dropdown-item border-bottom" href="#">
												<div className="d-flex align-items-center">
													<div className="">
														<span className="avatar avatar-md brround align-self-center cover-image" data-image-src="../../assets/images/users/male/1.jpg"></span>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="font-weight-semibold">Jack Wright</span> all the best your template awesome
															<div className="small text-muted">
																3 hours ago
															</div>
														</div>
													</div>
												</div>
											</a>
											<a className="dropdown-item border-bottom">
												<div className="d-flex align-items-center">
													<div className="">
														<span className="avatar avatar-md brround  align-self-center cover-image" data-image-src="../../assets/images/users/female/1.jpg"></span>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="font-weight-semibold">Lisa Rutherford</span> Hey! there I'm available
															<div className="small text-muted">
																5 hour ago
															</div>
														</div>
													</div>
												</div>
											</a>
											<a className="dropdown-item border-bottom">
												<div className="d-flex align-items-center">
													<div className="">
														<span className="avatar avatar-md brround  align-self-center cover-image" data-image-src="../../assets/images/users/male/2.jpg"></span>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="font-weight-semibold">Blake Walker</span> just created a new blog post
															<div className="small text-muted">
																45 mintues ago
															</div>
														</div>
													</div>
												</div>
											</a>
											<a className="dropdown-item border-bottom">
												<div className="d-flex align-items-center">
													<div className="">
														<span className="avatar avatar-md brround align-self-center cover-image" data-image-src="../../assets/images/users/female/2.jpg"></span>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="font-weight-semibold">Fiona Morrison</span> added new comment on your photo
															<div className="small text-muted">
																2 days ago
															</div>
														</div>
													</div>
												</div>
											</a>
											<a className="dropdown-item border-bottom">
												<div className="d-flex align-items-center">
													<div className="">
														<span className="avatar avatar-md brround  align-self-center cover-image" data-image-src="../../assets/images/users/male/4.jpg"></span>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="font-weight-semibold">Stewart Bond</span> your payment invoice is generated
															<div className="small text-muted">
																3 days ago
															</div>
														</div>
													</div>
												</div>
											</a>
											<a className="dropdown-item border-bottom">
												<div className="d-flex align-items-center">
													<div className="">
														<span className="avatar avatar-md brround  align-self-center cover-image" data-image-src="../../assets/images/users/female/5.jpg"></span>
													</div>
													<div className="d-flex">
														<div className="pl-3">
															<span className="font-weight-semibold">Faith Dickens</span> please check your mail....
															<div className="small text-muted">
																4 days ago
															</div>
														</div>
													</div>
												</div>
											</a>
										</div>
										<div className="dropdown-divider"></div>
										<a href="#" className="dropdown-item text-center">See all Messages</a>
									</div>
								 </div>
                                {/*<!-- MESSAGE-BOX --> */}
								<div className="dropdown d-md-flex profile-1">
									<a className="nav-link icon text-center" data-toggle="dropdown">
										<i className="fe fe-user"></i>
										<span className="pulse bg-success"></span>
									</a>
									<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<div className="drop-heading">
											<div className="text-center">
												<h5 className="text-dark mb-1">Jacob Smith</h5>
												<small className="text-muted fs-16 text-primary font-weight-semibold">$478.99</small>
											</div>
										</div>
										<div className="dropdown-divider m-0"></div>
										<a className="dropdown-item" href="mydash.html">
											<i className="dropdown-icon ti-write"></i>Edit Profile
										</a>
										<a className="dropdown-item" href="myads.html">
											<i className="dropdown-icon  fe fe-codepen"></i> My Items
										</a>
										<a className="dropdown-item" href="myfavorite.html">
											<span className="float-right"></span>
											<i className="dropdown-icon ti-heart"></i>  My Favorite
										</a>
										<a className="dropdown-item" href="manged.html">
											<i className="dropdown-icon ti-palette"></i> Managed Items
										</a>
										<a className="dropdown-item" href="payments.html">
											<i className="dropdown-icon ti-credit-card"></i> Payments
										</a>
										<a className="dropdown-item" href="orders.html">
											<i className="dropdown-icon ti-shopping-cart"></i> Orders
										</a>
										<a className="dropdown-item" href="statements.html">
											<i className="dropdown-icon ti-filter"></i> Statements
										</a>
										<a className="dropdown-item" href="tips.html">
											<i className="dropdown-icon ti-harddrive"></i> Safety Tips
										</a>
										<a className="dropdown-item" href="settings.html">
											<i className="dropdown-icon ti-settings"></i> Settings
										</a>
										<div className="dropdown-divider mt-0"></div>
										<a className="dropdown-item" href="#">
											<i className="dropdown-icon ti-unlock"></i>  Logout
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
                {/* <!--/Header--> */}

				{/* <!-- Mobile Header --> */}
				<div className="horizontal-header clearfix ">
					<div className="container">
						<a id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
						<span className="smllogo"><img src="../../assets/images/brand/logo1.png" width="120" alt="img"/></span>
						<span className="smllogo-white"><img src="../../assets/images/brand/logo.png" width="120" alt="img"/></span>
						<a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
					</div>
				</div>
				{/* <!-- /Mobile Header --> */}

				{/* <!--Horizontal-main --> */}
				<div className="header-style horizontal-main bg-dark-transparent clearfix">
					<div className="horizontal-mainwrapper container clearfix">
						<nav className="horizontalMenu clearfix d-md-flex">
							<ul className="horizontalMenu-list">
								<li aria-haspopup="true"><a href="#">Home <span className="fe fe-chevron-down"></span></a>
									<ul className="sub-menu">
										<li><a href="index.html">Home Page 01</a></li>
										<li><a href="index2.html">Home Page 02</a></li>
										<li><a href="index3.html">Home Page 03</a></li>
										<li><a href="index4.html">Home Page 04</a></li>
										<li><a href="index5.html">Home Page 05</a></li>
										<li><a href="index6.html">Home Page 06</a></li>
										<li><a href="index7.html">Home Page 07</a></li>
										<li><a href="index8.html">Home Page 08</a></li>
										<li><a href="index9.html">Home Page 09</a></li>
										<li><a href="index10.html">Home Page 10</a></li>
									</ul>
								</li>
								<li aria-haspopup="true"><a href="about.html">About Us </a></li>
								<li aria-haspopup="true"><a href="widgets.html">Widgets</a></li>
								<li aria-haspopup="true"><a href="#" className="">Pages <span className="fe fe-chevron-down"></span></a>
									<div className="horizontal-megamenu clearfix">
										<div className="container">
											<div className="megamenu-content">
												<div className="row">
													<ul className="col link-list">
														<li className="title">Other pages</li>
														<li><a href="page-list.html">Page List</a></li>
														<li><a href="page-list-right.html">Page List Right</a></li>
														<li><a href="page-details.html">Page Details</a></li>
														<li><a href="page-details1.html">Page Details 1</a></li>
														<li><a href="page-details-right.html">Page Details Right</a></li>
														<li><a href="categories.html">Categories</a></li>
														<li><a href="inovice.html">Invoice</a></li>
														<li><a href="usersall.html">User Lists</a></li>
														<li><a href="pricing.html">Pricing</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">Other pages</li>
														<li><a href="ad-list.html">Ad Listing</a></li>
														<li><a href="ad-list-right.html">Ad Listing Right</a></li>
														<li><a href="ad-details.html">Ad Details</a></li>
														<li><a href="ad-details-right.html">Ad Details Right</a></li>
														<li><a href="posts.html">Item Posts</a></li>
														<li><a href="edit-posts.html">Edit Posts</a></li>
														<li><a href="posts2.html">Item Posts2</a></li>
														<li><a href="edit-posts2.html">Edit Posts2</a></li>
														<li><a href="typography.html">Typography</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">User pages</li>
														<li><a href="userprofile.html"> User Profile</a></li>
														<li aria-haspopup="true"><a href="profile.html">User Profile 1</a></li>
														<li><Link href="/DashAdmin/editProfile"><a>My Dashboard</a></Link></li>
														<li><a href="mydash1.html">My Dashboard1</a></li>
														<li><a href="myads.html">My Ads</a></li>
														<li><a href="myfavorite.html">Favorite Ads</a></li>
														<li><a href="manged.html">Manged Ads</a></li>
														<li><a href="payments.html">Payments</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">Other Pages</li>
														<li><a href="orders.html"> Orders</a></li>
														<li><a href="statements.html"> Statments</a></li>
														<li><a href="settings.html"> Settings</a></li>
														<li><a href="tips.html">Tips</a></li>
														<li><a href="testimonial.html">Testimonials</a></li>
														<li><a href="faq.html">Faq</a></li>
														<li><a href="cart.html">Cart</a></li>
														<li><a href="checkout.html">CheckOut</a></li>
													</ul>
													<ul className="col link-list">
														<li className="title">Headers & Footers</li>
														<li><a href="header-style1.html">Header Style 01</a></li>
														<li><a href="header-style2.html">Header Style 02</a></li>
														<li><a href="header-style3.html">Header Style 03</a></li>
														<li><a href="header-style4.html">Header Style 04</a></li>
														<li><a href="footer-style.html">Footer Style 01</a></li>
														<li><a href="footer-style2.html">Footer Style 02</a></li>
														<li><a href="footer-style3.html">Footer Style 03</a></li>
														<li><a href="footer-style4.html">Footer Style 04</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li aria-haspopup="true"><a href="#">Blog <span className="fe fe-chevron-down m-0"></span></a>
									<ul className="sub-menu">
										<li aria-haspopup="true"><a href="#">Blog Grid <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											 <ul className="sub-menu">
												<li aria-haspopup="true"><a href="blog-grid.html">Blog Grid Left</a></li>
												<li aria-haspopup="true"><a href="blog-grid-right.html">Blog Grid Right</a></li>
												<li aria-haspopup="true"><a href="blog-grid-center.html">Blog Grid Center</a></li>
											</ul>
										</li>
										<li aria-haspopup="true"><a href="#">Blog List <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											 <ul className="sub-menu">
												<li aria-haspopup="true"><a href="blog-list.html">Blog List Left</a></li>
												<li aria-haspopup="true"><a href="blog-list-right.html">Blog List Right</a></li>
												<li aria-haspopup="true"><a href="blog-list-center.html">Blog List Center</a></li>
											</ul>
										</li>
										<li aria-haspopup="true"><a href="#">Blog Details <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
											<ul className="sub-menu">
												<li aria-haspopup="true"><a href="blog-details.html">Blog Details Left</a></li>
												<li aria-haspopup="true"><a href="blog-details-right.html">Blog Details Right</a></li>
												<li aria-haspopup="true"><a href="blog-details-center.html">Blog Details Center</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li aria-haspopup="true"><a href="#">Custom Pages <span className="fe fe-chevron-down m-0"></span></a>
									<ul className="sub-menu">
										<li><a href="forum.html">Forum</a></li>
										<li><a href="register.html">Register</a></li>
										<li><a href="login.html">Login</a></li>
										<li><a href="login-2.html">Login 02</a></li>
										<li><a href="forgot.html">Forgot Password</a></li>
										<li><a href="lockscreen.html">Lock Screen</a></li>
										<li><a href="underconstruction.html">Under Constructions</a></li>
										<li><a href="404.html">404</a></li>
									</ul>
								</li>
								<li aria-haspopup="true"><a href="contact.html"> Contact Us</a></li>
								<li aria-haspopup="true" className="d-lg-none mt-5 pb-5 mt-lg-0">
									<span><a className="btn ripple  btn-info" href="register.html">Register Now</a></span>
								</li>
							</ul>
							<ul className="mb-0">
								<li aria-haspopup="true" className="d-none d-lg-block ">
									<span><a className="btn ripple  btn-danger ad-post" href="register.html"><i className="fa fa-cart-plus mr-2 text-white fs-16"></i>Become a Seller</a></span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			 </div>
             {/*<!--/Horizontal-main --> */}
		</div>
        {/* <!--/Section--> */}
        </div>
    );
};

export default Topbar;