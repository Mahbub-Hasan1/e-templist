import Link from 'next/link';
import React from 'react';

const DashHeader = ({pageName}) => {
    return (
        //  <!--Section-->
        <div class="cover-image bg-background3" data-image-src="../assets/images/banners/banner4.jpg">

            <section>
                <div class="bannerimg">
                    <div class="header-text mb-0">
                        <div class="container">
                            <div class="text-center text-white">
                                <h1>{pageName ? pageName : "My Dashboard"}</h1>
                                <ol class="breadcrumb text-center">
                                    <li class="breadcrumb-item">
                                        <Link href="/">
                                        <a>Home</a>
                                        </Link>
                                    </li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item active text-white" aria-current="page">{pageName ? pageName : "My Dashboard"}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashHeader;