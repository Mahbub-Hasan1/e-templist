import React from 'react';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import UserMenu from '../../../components/dashboards/dashSharedComponents/UserMenu';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const MyFavoriteItems = () => {
    return (
        <div class="headerstyle1">
            <div class="cover-image bg-background3" data-image-src="/assets/images/banners/banner4.jpg">
                <DashHeader pageName="My Favorite" />
            </div>


            {/* <!--User Dashboard--> */}
            <section class="sptb">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-12 col-md-12">

                            {/* user menu side */}
                            <UserMenu />
                            {/* user menu side */}

                            <div class="card my-select">
                                <div class="card-header">
                                    <h3 class="card-title">Search Categories</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="text" placeholder="What are you looking for?" />
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
                        <div class="col-xl-9 col-lg-12 col-md-12">
                            <div class="mb-5">
                                <div class="">
                                    <div class="p-5 bg-white item2-gl-nav d-flex">
                                        <h6 class="mb-0 mt-1 card-title">12 Favorite Items</h6>
                                        <div class="ml-auto">
                                            <div class="d-flex select2-sm text-left">
                                                <label class="mr-2 mt-1 mb-sm-1">Sort By:</label>
                                                <select name="item" class="form-control select-sm w-70 select2">
                                                    <option value="1">Best Seller</option>
                                                    <option value="2">Newest</option>
                                                    <option value="3">Best Rated</option>
                                                    <option value="4">Trending</option>
                                                    <option value="5">Price</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card manged-ad mb-0">
                                <div class="row border-bottom ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="card-title">Name & Details</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="card-title">Price</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="card-title">Status</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="card-title">Action</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/01.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Feb-21-2020</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Admin</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$24</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-primary">Published</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/02.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">Wordpress Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Oct-23-2019</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Listing</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$56</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-danger">hidden</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/03.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">Angular Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-15-2019</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Beauty</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$22</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-warning">Disabled</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/04.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">PHP Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-25-2019</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Business</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$18</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-primary">Published</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/05.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">PSD Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Feb-21-2020</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Medical</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$25</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-primary">Published</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/06.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Dec-15-2018</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Business</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$22</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-danger">hidden</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/07.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">Andora & Admin WebApp Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-22-2017</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>HTML</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$14</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-warning">Disabled</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-top ml-0 mr-0">
                                    <div class="col-md-6 col-sm-6">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <label class="custom-control custom-checkbox mr-3">
                                                    <input type="checkbox" class="custom-control-input" name="checkbox" value="checkbox" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                                <div class="media mt-0 mb-0">
                                                    <div class="card-aside-img">
                                                        <a href="#"></a>
                                                        <img src="/assets/images/media/pictures/small/08.jpg" alt="img" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">Wordpress Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-30-2018</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Corporate</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$18</h3>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <a href="#" class="badge badge-primary">Published</a>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <div class="btn-list">
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Buy Now"><i class="fa fa-shopping-cart"></i></a>
                                                <a class="btn ripple  btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete from Wishlist"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/User Dashboard--> */}


            {/* Subscribe Online Letter */}

            <SubscribeOnlineLetters />

            {/* Subscribe Online Letter */}
        </div>
    );
};

export default MyFavoriteItems;