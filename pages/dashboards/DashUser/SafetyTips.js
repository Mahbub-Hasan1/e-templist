import React from 'react';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import UserMenu from '../../../components/dashboards/dashSharedComponents/UserMenu';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const SafetyTips = () => {
    return (
        <div>
            <div class="cover-image bg-background3" data-image-src="/assets/images/banners/banner4.jpg">
                <DashHeader pageName="Safety Tips" />
            </div>


            {/* <!--user dashboard--> */}
            <section class="sptb">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-12">

                            {/* user menu side */}
                            <UserMenu />
                            {/* user menu side */}
                            <div class="card my-select">
                                <div class="card-header">
                                    <h3 class="card-title">Search Categories</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="text" placeholder="What are you looking for?"/>
                                    </div>
                                    <div class="form-group">
                                        <select name="country" id="select-countries" class="form-control custom-select select2-show-search">
                                            <option value="1" selected="">All Categories</option>
                                            <option value="2">HTML</option>
                                            <option value="3">Wordpress</option>
                                            <option value="4">Angular</option>
                                            <option value="5">PHP</option>
                                            <option value="7">PSD</option>
                                            <option value="8">Plugins</option>
                                        </select>
                                    </div>
                                    <div class="">
                                        <a href="#" class="btn ripple btn-block btn-primary">Search</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Safety Tips For Buyers</h3>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled widget-spec  mb-0">
                                        <li class="">
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Meet Seller at public Place
                                        </li>
                                        <li class="">
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Check item before you buy
                                        </li>
                                        <li class="">
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Pay only after collecting item
                                        </li>
                                        <li class="ml-5 mb-0">
                                            <a href="tips.html"> View more..</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-8 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">1. Watch out for email scams</h3>
                                    <div class="card-options">
                                        <a href="#" class="btn ripple  btn-sm btn-secondary mr-2"><i class="icon icon-pencil mr-1"></i> Edit</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <label class="form-label">Select Color Theme</label>
                                    <div class="row gutters-xs mb-3">
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="azure" class="colorinput-input" checked=""/>
                                                <span class ="colorinput-color bg-azure"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="indigo" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-indigo"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="purple" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-purple"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="pink" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-secondary"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="red" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-red"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="orange" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-orange"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="yellow" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-yellow"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="lime" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-lime"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="green" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-green"></span>
                                            </label>
                                        </div>
                                        <div class="col-auto">
                                            <label class="colorinput">
                                                <input name="color" type="radio" value="teal" class="colorinput-input"/>
                                                <span class ="colorinput-color bg-teal"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled widget-spec mb-0">
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> Nemo enim ipsam voluptatem voluptas sit aspernatur ratione voluptatem sequi nesciunt. laudantium
                                        </li>
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                                        </li>
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                        </li>
                                        <li class="mb-0">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> Nemo enim ipsam voluptatem voluptas sit aspernatur ratione voluptatem sequi nesciunt. laudantium
                                        </li>

                                    </ul>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn ripple  btn-primary">View More</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">2. Pay with a credit card</h3>
                                    <div class="card-options">
                                        <a href="#" class="btn ripple  btn-sm btn-secondary mr-2"><i class="icon icon-pencil mr-1"></i> Edit</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled widget-spec mb-0">
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> Nemo enim ipsam voluptatem voluptas sit aspernatur ratione voluptatem sequi nesciunt. laudantium
                                        </li>
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                                        </li>
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                        </li>
                                        <li class="mb-0">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> Nemo enim ipsam voluptatem voluptas sit aspernatur ratione voluptatem sequi nesciunt. laudantium
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn ripple  btn-primary">View More</a>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">3. Check your statements</h3>
                                    <div class="card-options">
                                        <a href="#" class="btn ripple  btn-sm btn-secondary mr-2"><i class="icon icon-pencil mr-1"></i> Edit</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label class="form-label">Select Images</label>
                                        <div class="row gutters-sm">
                                            <div class="col-6 col-sm-2">
                                                <label class="imagecheck mb-4">
                                                    <input name="imagecheck" type="checkbox" value="1" class="imagecheck-input"/>
                                                    <span class ="imagecheck-figure">
                                                    <img src="/assets/images/media/0-1.jpg" alt="}" class ="imagecheck-image cover-image"/>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-6 col-sm-2">
                                                <label class="imagecheck mb-4">
                                                    <input name="imagecheck" type="checkbox" value="2" class="imagecheck-input" checked=""/>
                                                    <span class ="imagecheck-figure">
                                                    <img src="/assets/images/media/0-2.jpg" alt="}" class ="imagecheck-image cover-image"/>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-6 col-sm-2">
                                                <label class="imagecheck mb-4">
                                                    <input name="imagecheck" type="checkbox" value="3" class="imagecheck-input"/>
                                                    <span class ="imagecheck-figure">
                                                    <img src="/assets/images/media/0-3.jpg" alt="}" class ="imagecheck-image cover-image"/>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-6 col-sm-2">
                                                <label class="imagecheck mb-4">
                                                    <input name="imagecheck" type="checkbox" value="4" class="imagecheck-input" checked=""/>
                                                    <span class ="imagecheck-figure">
                                                    <img src="/assets/images/media/0-5.jpg" alt="}" class ="imagecheck-image cover-image"/>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-6 col-sm-2">
                                                <label class="imagecheck mb-4">
                                                    <input name="imagecheck" type="checkbox" value="5" class="imagecheck-input"/>
                                                    <span class ="imagecheck-figure">
                                                    <img src="/assets/images/media/0-4.jpg" alt="}" class ="imagecheck-image cover-image"/>
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="col-6 col-sm-2">
                                                <label class="imagecheck mb-4">
                                                    <input name="imagecheck" type="checkbox" value="6" class="imagecheck-input"/>
                                                    <span class ="imagecheck-figure">
                                                    <img src="/assets/images/media/0-6.jpg" alt="}" class ="imagecheck-image cover-image"/>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled widget-spec mb-0">
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> Nemo enim ipsam voluptatem voluptas sit aspernatur ratione voluptatem sequi nesciunt. laudantium
                                        </li>
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                                        </li>
                                        <li class="mb-0">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn ripple  btn-primary">View More</a>
                                </div>
                            </div>
                            <div class="card mb-0">
                                <div class="card-header">
                                    <h3 class="card-title">4. Report the company</h3>
                                    <div class="card-options">
                                        <a href="#" class="btn ripple  btn-sm btn-secondary mr-2"><i class="icon icon-pencil mr-1"></i> Edit</a>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled widget-spec mb-0">
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> Nemo enim ipsam voluptatem voluptas sit aspernatur ratione voluptatem sequi nesciunt. laudantium
                                        </li>
                                        <li class="">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                                        </li>
                                        <li class="mb-0">
                                            <i class="fa fa-caret-right text-success" aria-hidden="true"></i> On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn ripple  btn-primary">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/Section--> */}


            {/* Subscribe Online Letter */}

            <SubscribeOnlineLetters />

            {/* Subscribe Online Letter */}
        </div>
    );
};

export default SafetyTips;