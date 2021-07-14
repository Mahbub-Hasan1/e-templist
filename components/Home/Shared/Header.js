import React from 'react';

const Header = () => {
    return (
        <div className="banner-1 cover-image bg-background2" data-image-src="../assets/images/banners/banner1.jpg">
            <section>
                <div className="sptb-2 sptb-tab">
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white mb-6">
                                <h1 className="mb-1">Create your Business With MarketPlace</h1>
                                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="row mb-5">
                                <div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
                                    <div className="search-form">
                                        <input type="text" className="form-control input-lg keywords-input" id="text4" placeholder="Search Product....." />
                                        <button className="btn ripple "><i className="fe fe-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-center mb-0 font-weight-light"><span className="font-weight-semibold">45,789</span> HTML Templates From <span className="font-weight-semibold">&#36;1</span></h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;