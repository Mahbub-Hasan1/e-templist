import React from 'react';
import DashHeader from '../../../components/dashboards/dashSharedComponents/DashHeader';
import UserMenu from '../../../components/dashboards/dashSharedComponents/UserMenu';
import SubscribeOnlineLetters from '../../../components/shareComponents/SubscribeOnlineLetters';

const Orders = () => {
    return (
        <div>
            <div class="cover-image bg-background3" data-image-src="/assets/images/banners/banner4.jpg">
                <DashHeader/>
            </div>



            {/* <!--User dashboard--> */}
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
					<div class="col-xl-9 col-lg-12 col-md-12">
						<div class="card text-center">
							<div class="card-body">
								<img src="/assets/images/svg/order.svg" class="floating mb-7 w-20" alt="img"/>
								<h2 class="font-weight-normal">Thank You For Our Order!</h2>
								<h4 class="mb-2 text-default">Order Confirmation</h4>
								<p class="mb-0 text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam totam rem aperiam</p>
								<a class="btn ripple  btn-primary mt-4" href="#">Download Product</a>
							</div>
						</div>
						<div class="card mb-0">
							<div class="card-header">
								<h3 class="card-title">Orders List</h3>
							</div>
							<div class="card-body">
								<div class="table-responsive border-top">
									<table class="table table-bordered table-hover text-nowrap">
										<thead>
											<tr>
												<th>Order ID</th>
												<th>Category</th>
												<th>Date</th>
												<th>Price</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="text-primary">#89345</td>
												<td>HTML Template</td>
												<td>07-12-2020</td>
												<td class="fs-16">$13</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#39281</td>
												<td>Worpress Template</td>
												<td>12-11-2020</td>
												<td class="fs-16">$54</td>
												<td>
													<a href="#" class="badge badge-primary">Paid</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#35825</td>
												<td>Angular Template</td>
												<td>15-11-2020</td>
												<td class="fs-16">$32</td>
												<td>
													<a href="#" class="badge badge-primary">Paid</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#62391</td>
												<td>PHP Template</td>
												<td>10-11-2020</td>
												<td class="fs-16">$15</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#92481</td>
												<td>PSD Template</td>
												<td>07-11-2020</td>
												<td class="fs-16">$32</td>
												<td>
													<a href="#" class="badge badge-primary">Paid</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#29381</td>
												<td>HTML Template</td>
												<td>31-10-2020</td>
												<td class="fs-16">$25</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#72356</td>
												<td>Wordpress Template</td>
												<td>27-10-2020</td>
												<td class="fs-16">$16</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#89345</td>
												<td>Angular Template</td>
												<td>30-11-2020</td>
												<td class="fs-16">$24</td>
												<td>
													<a href="#" class="badge badge-primary">Paid</a>
												</td>
											</tr>
											<tr>
												<td class="text-primary">#4570</td>
												<td>PHP Template</td>
												<td>03-12-2020</td>
												<td class="fs-16">$14</td>
												<td>
													<a href="#" class="badge badge-danger">Pending</a>
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

            <SubscribeOnlineLetters/>

            {/* Subscribe Online Letter */}
        </div>
    );
};

export default Orders;