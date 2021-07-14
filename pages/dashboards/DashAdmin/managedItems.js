import React from 'react';
import AdminMenu from '../../../components/dashboards/dashSharedComponents/AdminMenu';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const managedItems = () => {
    return (
        <div>
            <DashHeader pageName="Managed Items" />

            {/* <!--User Dashboard--> */}
            <section class="sptb">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">

                            {/* Admin menu  */}
                            <AdminMenu />
                            {/* Admin menu  */}

                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="mb-5">
                                <div class="">
                                    <div class="p-5 bg-white item2-gl-nav d-flex">
                                        <h6 class="mb-0 mt-1 card-title">67 Manged Items</h6>
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
                            <div class="card manged-ad">
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
                                                        <img src="/assets/images/media/pictures/small/01.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/02.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/03.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/04.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/05.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/06.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/07.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/08.jpg" alt="img" class="br-4" />
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/09.jpg" alt="img" class="br-4" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">PSD Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Dec-03-2018</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Ecommerce</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$35</h3>
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/10.jpg" alt="img" class="br-4" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">Angular Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-15-2019</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Spa</div>
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/11.jpg" alt="img" class="br-4" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">PHP Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-03-2017</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Classified</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$35</h3>
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
                                                        <img src="/assets/images/media/pictures/small/12.jpg" alt="img" class="br-4" />
                                                    </div>
                                                    <div class="media-body">
                                                        <div class="card-item-desc ml-4 p-0">
                                                            <a href="#" class="text-dark"><h4 class="text-over">HTML Template</h4></a>
                                                            <div class="text-muted"><i class="fa fa-clock-o mr-1"></i> Nov-20-2019</div>
                                                            <div class="text-muted"><i class="fa fa-tag mr-1"></i>Corporate</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-sm-6">
                                        <div class="card-body">
                                            <h3 class="fs-20">$12</h3>
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
                                                <a href="edit-posts.html" class="btn ripple  btn-secondary btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                <a class="btn ripple  btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="pagination justify-content-end">
                                <li class="page-item page-prev disabled">
                                    <a class="page-link" href="#" tabindex="-1">Prev</a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item page-next">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/User Dashboard--> */}


            {/* <!-- Onlinesletter--> */}

            <SubscribeOnlineLetters />

            {/* <!-- Onlinesletter--> */}
        </div>
    );
};

export default managedItems;