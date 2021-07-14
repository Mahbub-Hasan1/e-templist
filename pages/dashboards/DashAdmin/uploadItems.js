import React from 'react';
import AdminMenu from '../../../components/dashboards/dashSharedComponents/AdminMenu';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const UploadItems = () => {
    return (
        <div>
            <DashHeader pageName="Upload Items" />

            {/* <!--User Dashboard--> */}
            <section class="sptb">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            
                            {/* amin menu  */}
                            <AdminMenu />
                            {/* amin menu  */}

                        </div>
                        <div class="col-xl-8 col-lg-8 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Upload Items</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-12">
                                            <div class="form-group">
                                                <select name="country" id="select-countries" class="form-control custom-select select2-show-search">
                                                    <option value="1" selected="">Search Categories</option>
                                                    <option value="2">HTML</option>
                                                    <option value="3">Wordpress</option>
                                                    <option value="4">Angular</option>
                                                    <option value="5">PHP</option>
                                                    <option value="7">PSD</option>
                                                    <option value="8">Plugins</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Item Name</label>
                                                <input type="text" class="form-control" placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Description</label>
                                                <textarea rows="5" class="form-control" placeholder="Enter your description"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Upload Image</label>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" name="example-file-input-custom" />
                                                    <label class="custom-file-label">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="">
                                                <div class="form-group">
                                                    <label class="form-label text-dark">Image1</label>
                                                    <select class="form-control custom-select select2">
                                                        <option>Image1</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label text-dark">Image2</label>
                                                    <select class="form-control custom-select select2">
                                                        <option>Image2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">File Included<span class="text-danger">*</span></label>
                                                <input type="email" class="form-control" placeholder="Enter here" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <div class="form-group">
                                                <label class="form-label">Item Dimensions<span class="text-danger">*</span></label>
                                                <input type="number" class="form-control" placeholder="Enter Dimensions" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="form-label">Tags<span class="text-danger">*</span></label>
                                                <textarea rows="3" class="form-control" placeholder="Enter Item tags..."></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label class="form-label">Item Theme:</label>
                                                    </div>
                                                    <div class="col-md-9">
                                                        <select data-placeholder="Choose a Language..." class="form-control select2 languages">
                                                            <option value="0">Choose Theme</option>
                                                            <option value="1">Default Theme</option>
                                                            <option value="2">Light Theme</option>
                                                            <option value="3">Dark Theme</option>
                                                            <option value="4">Sidebar light Theme</option>
                                                            <option value="5">Sidebar Dark Theme</option>
                                                            <option value="6">RTL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group ">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label class="form-label" id="inputEmail4">Color Theme:</label>
                                                    </div>
                                                    <div class="col-md-9">
                                                        <div class="custom-controls-stacked d-flex">
                                                            <label class="custom-control custom-radio mr-4">
                                                                <input type="radio" class="custom-control-input" name="example-radios" value="option1" checked />
                                                                <span class="custom-control-label">Light</span>
                                                            </label>
                                                            <label class="custom-control custom-radio">
                                                                <input type="radio" class="custom-control-input" name="example-radios" value="option2" />
                                                                <span class="custom-control-label">Dark</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group mb-0">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label class="form-label">Responsive Layout:</label>
                                                    </div>
                                                    <div class="col-md-9">
                                                        <label class="custom-switch pl-0">
                                                            <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" />
                                                            <span class="custom-switch-indicator"></span>
                                                            <span class="custom-switch-description">On/Off</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer text-right">
                                    <div class="btn-list">
                                        <button type="submit" class="btn ripple  btn-primary">Submit</button>
                                        <button type="submit" class="btn ripple  btn-secondary">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Benefits Of Premium Items</h3>
                                </div>
                                <div class="card-body pb-2">
                                    <ul class="list-unstyled widget-spec vertical-scroll mb-0">
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Items Active
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Items Active
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Items Active
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Items Active
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Items Active
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Terms And Conditions</h3>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled widget-spec  mb-0">
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Money Not Refundable
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>You can renew your Premium ad after experted.
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are active for depend on package.
                                        </li>
                                        <li class="ml-5 mb-0">
                                            <a href="tips.html"> View more..</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card mb-0">
                                <div class="card-header">
                                    <h3 class="card-title">Safety Tips For Buyers</h3>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled widget-spec  mb-0">
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Meet Seller at public Place
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Check item before you buy
                                        </li>
                                        <li>
                                            <i class="fa fa-check text-success" aria-hidden="true"></i> Pay only after collecting item
                                        </li>
                                        <li class="ml-5 mb-0">
                                            <a href="tips.html"> View more..</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--User Dashboard--> */}

            {/* <!-- Onlinesletter--> */}

            <SubscribeOnlineLetters />

            {/* <!-- Onlinesletter--> */}
        </div>
    );
};

export default UploadItems;