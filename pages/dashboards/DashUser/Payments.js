import React from 'react';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import UserMenu from '../../../components/dashboards/dashSharedComponents/UserMenu';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const Payments = () => {
    return (
        <div>
            <div class="cover-image bg-background3" data-image-src="../assets/images/banners/banner4.jpg">
                <DashHeader pageName="Payments" />
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
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Payment Method</h3>
                                </div>
                                <div class="card-body">
                                    <div class="card-pay">
                                        <ul class="tabs-menu nav">
                                            <li class=""><a href="#tab1" class="active" data-toggle="tab"><i class="fa fa-credit-card"></i> Credit Card</a></li>
                                            <li><a href="#tab2" data-toggle="tab" class=""><i class="fa fa-paypal"></i>  Paypal</a></li>
                                            <li><a href="#tab3" data-toggle="tab" class=""><i class="fa fa-university"></i>  Bank Transfer</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active show" id="tab1">
                                                <div class="form-group">
                                                    <label class="form-label">CardHolder Name</label>
                                                    <input type="text" class="form-control" id="name1" placeholder="First Name" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="form-label">Card number</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Search for..." />
                                                        <span class="input-group-append">
                                                            <button class="btn ripple  btn-info" type="button"><i class="fa fa-cc-visa"></i> &nbsp; <i class="fa fa-cc-amex"></i> &nbsp;
                                                                <i class="fa fa-cc-mastercard"></i></button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-8">
                                                        <div class="form-group">
                                                            <label class="form-label">Expiration</label>
                                                            <div class="input-group">
                                                                <input type="number" class="form-control" placeholder="MM" name="expire-month" />
                                                                <input type="number" class="form-control" placeholder="YY" name="expire-year" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label class="form-label">CVV <i class="fa fa-question-circle"></i></label>
                                                            <input type="number" class="form-control" required="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="#" class="btn ripple  btn-primary">Submit</a>
                                            </div>
                                            <div class="tab-pane" id="tab2">
                                                <h6 class="font-weight-semibold">Paypal is easiest way to pay online</h6>
                                                <p><a href="#" class="btn ripple  btn-primary"><i class="fa fa-paypal"></i> Log in my Paypal</a></p>
                                                <p class="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                            </div>
                                            <div class="tab-pane" id="tab3">
                                                <h6 class="font-weight-semibold">Bank account details</h6>
                                                <dl class="card-text">
                                                    <dt>BANK: </dt>
                                                    <dd> THE UNION BANK 0456</dd>
                                                </dl>
                                                <dl class="card-text">
                                                    <dt>Accaunt number: </dt>
                                                    <dd> 67542897653214</dd>
                                                </dl>
                                                <dl class="card-text">
                                                    <dt>IBAN: </dt>
                                                    <dd>543218769</dd>
                                                </dl>
                                                <p class="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-0">
                                <div class="card-header">
                                    <h3 class="card-title">Payments</h3>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive border-top">
                                        <table class="table table-bordered table-hover text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Invoice ID</th>
                                                    <th>Category</th>
                                                    <th>Purchase Date</th>
                                                    <th>Price</th>
                                                    <th>Due Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#INV-348</td>
                                                    <td>HTML Template</td>
                                                    <td>07-12-2019</td>
                                                    <td class="fs-16">$18</td>
                                                    <td>17-12-2019</td>
                                                    <td>
                                                        <a class="btn ripple  btn-primary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                        <a class="btn ripple  btn-secondary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a><br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#INV-186</td>
                                                    <td>Listing Template</td>
                                                    <td>02-12-2019</td>
                                                    <td class="fs-16">$14,276</td>
                                                    <td>14-12-2019</td>
                                                    <td>
                                                        <a class="btn ripple  btn-primary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                        <a class="btn ripple  btn-secondary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a><br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#INV-831</td>
                                                    <td>Busniess Template</td>
                                                    <td>30-11-2019</td>
                                                    <td class="fs-16">$25,000</td>
                                                    <td>04-12-2019</td>
                                                    <td>
                                                        <a class="btn ripple  btn-primary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                        <a class="btn ripple  btn-secondary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a><br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#INV-672</td>
                                                    <td>Corporate Template</td>
                                                    <td>25-18-2019</td>
                                                    <td class="fs-16">$50.00</td>
                                                    <td>07-12-2019</td>
                                                    <td>
                                                        <a class="btn ripple  btn-primary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                        <a class="btn ripple  btn-secondary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a><br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#INV-428</td>
                                                    <td>Spa Template</td>
                                                    <td>24-11-2019</td>
                                                    <td class="fs-16">$99.99</td>
                                                    <td>11-12-2019</td>
                                                    <td>
                                                        <a class="btn ripple  btn-primary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                        <a class="btn ripple  btn-secondary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a><br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#INV-543</td>
                                                    <td>Wordpress Template</td>
                                                    <td>22-11-2019</td>
                                                    <td class="fs-16">$145</td>
                                                    <td>12-12-2019</td>
                                                    <td>
                                                        <a class="btn ripple  btn-primary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                        <a class="btn ripple  btn-secondary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a><br />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>#INV-986</td>
                                                    <td>Angular Template</td>
                                                    <td>18-11-2019</td>
                                                    <td class="fs-16">$378</td>
                                                    <td>07-12-2019</td>
                                                    <td>
                                                        <a class="btn ripple  btn-primary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                        <a class="btn ripple  btn-secondary btn-sm text-white mb-1" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a><br />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

export default Payments;