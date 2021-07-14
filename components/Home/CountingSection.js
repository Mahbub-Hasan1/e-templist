import React from 'react';

const CountingSection = () => {
    return (
		<section>
			<div className="about-1 cover-image sptb section-bg-background-color1">
				<div className="content-text mb-0 text-white info">
					<div className="container">
						<div className="row text-center">
							<div className="col-lg-3 col-md-6">
								<div className="counter-status md-mb-0">
									<div className="counter-icon">
										<i className="fe fe-codepen"></i>
									</div>
									<h5 className="font-weight-normal">Total Items</h5>
									<h2 className="counter mb-0">2569</h2>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="counter-status status-1 md-mb-0">
									<div className="counter-icon text-warning">
										<i className="fe fe-shopping-cart"></i>
									</div>
									<h5 className="font-weight-normal">Total Sales</h5>
									<h2 className="counter mb-0">1765</h2>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="counter-status status md-mb-0">
									<div className="counter-icon text-primary">
										<i className="fe fe-users"></i>
									</div>
									<h5 className="font-weight-normal">Total Members</h5>
									<h2 className="counter mb-0">846</h2>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="counter-status status">
									<div className="counter-icon text-success">
										<i className="icon icon-emotsmile"></i>
									</div>
									<h5 className="font-weight-normal">Happy Customers</h5>
									<h2 className="counter mb-0">7253</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default CountingSection;