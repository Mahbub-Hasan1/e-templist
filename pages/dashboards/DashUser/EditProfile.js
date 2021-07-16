import React from 'react';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import UserMenu from '../../../components/dashboards/dashSharedComponents/UserMenu';

const EditProfile = () => {
    return (
        <div className="headerstyle1">
            <div class="cover-image bg-background3" data-image-src="/assets/images/banners/banner4.jpg">
                <DashHeader />
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
                            <div class="card mb-0">
                                <div class="card-header">
                                    <h3 class="card-title">Edit Profile</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">First Name</label>
                                                <input type="text" class="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Last Name</label>
                                                <input type="text" class="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Email address</label>
                                                <input type="email" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Phone Number</label>
                                                <input type="number" class="form-control" placeholder="Number" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Address</label>
                                                <input type="text" class="form-control" placeholder="Home Address" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-4">
                                            <div class="form-group">
                                                <label class="form-label">City</label>
                                                <input type="text" class="form-control" placeholder="City" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-3">
                                            <div class="form-group">
                                                <label class="form-label">Postal Code</label>
                                                <input type="number" class="form-control" placeholder="ZIP Code" />
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label class="form-label">Country</label>
                                                <select class="form-control select2-show-search border-bottom-0 w-100 select2-show-search" data-placeholder="Select">
                                                    <optgroup label="Categories">
                                                        <option>--Select--</option>
                                                        <option value="1">Germany</option>
                                                        <option value="2">Real Estate</option>
                                                        <option value="3">Canada</option>
                                                        <option value="4">Usa</option>
                                                        <option value="5">Afghanistan</option>
                                                        <option value="6">Albania</option>
                                                        <option value="7">China</option>
                                                        <option value="8">Denmark</option>
                                                        <option value="9">Finland</option>
                                                        <option value="10">India</option>
                                                        <option value="11">Kiribati</option>
                                                        <option value="12">Kuwait</option>
                                                        <option value="13">Mexico</option>
                                                        <option value="14">Pakistan</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Facebook</label>
                                                <input type="text" class="form-control" placeholder="https://www.facebook.com/" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Google</label>
                                                <input type="text" class="form-control" placeholder="https://www.google.com/" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Twitter</label>
                                                <input type="text" class="form-control" placeholder="https://twitter.com/" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Pinterest</label>
                                                <input type="text" class="form-control" placeholder="https://in.pinterest.com/" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">About Me</label>
                                                <textarea rows="5" class="form-control" placeholder="Enter About your description"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group mb-0">
                                                <label class="form-label">Upload Image</label>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" name="example-file-input-custom" />
                                                    <label class="custom-file-label">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <button type="submit" class="btn ripple  btn-secondary">Updated Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/User Dashboard--> */}

        </div>
    );
};

export default EditProfile;