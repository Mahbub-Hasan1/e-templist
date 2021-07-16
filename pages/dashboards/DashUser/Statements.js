import React from 'react';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import UserMenu from '../../../components/dashboards/dashSharedComponents/UserMenu';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const Statements = () => {
    return (
        <div>
            <div class="cover-image bg-background3" data-image-src="../assets/images/banners/banner4.jpg">
                <DashHeader pageName="Statements" />
            </div>


            {/* <!--User dashboard--> */}
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
                        <div class="col-xl-9 col-lg-8 col-md-12">
                            <div class="card mb-0">
                                <div class="card-header">
                                    <h3 class="card-title">Statements List</h3>
                                </div>
                                <div class="table-responsive statement-card">
                                    <table class="table card-table table-vcenter text-nowrap border-bottom">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Category</th>
                                                <th>Date</th>
                                                <th>Author</th>
                                                <th>Type</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#89345</a></td>
                                                <td>HTML Template</td>
                                                <td>07-12-2020</td>
                                                <td class="font-weight-semibold fs-16"> Lily</td>
                                                <td>
                                                    <a href="#" class="badge badge-success">Purchase</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$13</td>
                                                <td>
                                                    <a href="#" class="badge badge-danger">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#39281</a></td>
                                                <td>Worpress Template</td>
                                                <td>12-11-2020</td>
                                                <td class="font-weight-semibold fs-16"> Gavin</td>
                                                <td>
                                                    <a href="#" class="badge badge-info">Sale</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$54</td>
                                                <td>
                                                    <a href="#" class="badge badge-primary">Paid</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#35825</a></td>
                                                <td>Angular Template</td>
                                                <td>15-11-2020</td>
                                                <td class="font-weight-semibold fs-16"> Howard</td>
                                                <td>
                                                    <a href="#" class="badge badge-primary">Credited</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$32</td>
                                                <td>
                                                    <a href="#" class="badge badge-primary">Paid</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#62391</a></td>
                                                <td>PHP Template</td>
                                                <td>10-11-2020</td>
                                                <td class="font-weight-semibold fs-16"> Butler</td>
                                                <td>
                                                    <a href="#" class="badge badge-warning">Withdraw</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$15</td>
                                                <td>
                                                    <a href="#" class="badge badge-danger">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#92481</a></td>
                                                <td>PSD Template</td>
                                                <td>07-11-2020</td>
                                                <td class="font-weight-semibold fs-16"> Eric </td>
                                                <td>
                                                    <a href="#" class="badge badge-primary">Credit</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$32</td>
                                                <td>
                                                    <a href="#" class="badge badge-primary">Paid</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#29381</a></td>
                                                <td>HTML Template</td>
                                                <td>31-10-2020</td>
                                                <td class="font-weight-semibold fs-16"> John </td>
                                                <td>
                                                    <a href="#" class="badge badge-info">Sale</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$25</td>
                                                <td>
                                                    <a href="#" class="badge badge-danger">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#72356</a></td>
                                                <td>Wordpress Template</td>
                                                <td>27-10-2020</td>
                                                <td class="font-weight-semibold fs-16"> Jessica</td>
                                                <td>
                                                    <a href="#" class="badge badge-success">Purchase</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$16</td>
                                                <td>
                                                    <a href="#" class="badge badge-danger">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#89345</a></td>
                                                <td>Angular Template</td>
                                                <td>30-11-2020</td>
                                                <td class="font-weight-semibold fs-16"> Emily</td>
                                                <td>
                                                    <a href="#" class="badge badge-warning">Withdraw</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$24</td>
                                                <td>
                                                    <a href="#" class="badge badge-primary">Paid</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="inovice.html" class="text-primary">#4570</a></td>
                                                <td>PHP Template</td>
                                                <td>03-12-2020</td>
                                                <td class="font-weight-semibold fs-16"> Piers </td>
                                                <td>
                                                    <a href="#" class="badge badge-info">Sale</a>
                                                </td>
                                                <td class="font-weight-semibold fs-18">$14</td>
                                                <td>
                                                    <a href="#" class="badge badge-danger">Pending</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="card-body">
                                    <ul class="pagination">
                                        <li class="page-item page-prev disabled">
                                            <a class="page-link" href="#" tabindex="-1">Prev</a>
                                        </li>
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item page-next">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--/User dashboard--> */}

            {/* Subscribe Online Letter */}

            <SubscribeOnlineLetters />

            {/* Subscribe Online Letter */}
        </div>
    );
};

export default Statements;