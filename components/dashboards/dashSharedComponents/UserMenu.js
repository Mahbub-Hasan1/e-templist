import Link from 'next/link';
import React from 'react';

const UserMenu = () => {
    return (
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">My Dashboard</h3>
            </div>
            <div class="card-body text-center item-user">
                <div class="profile-pic">
                    <div class="profile-pic-img mb-4">
                        <span class="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
                        <img src="/assets/images/users/male/2.jpg" class="brround" alt="user" />
                    </div>
                    <a href="userprofile.html" class="text-dark"><h4 class="mt-3 mb-0 font-weight-semibold">Jacob Smith</h4></a>
                </div>
            </div>
            <aside class="app-sidebar doc-sidebar my-dash">
                <div class="app-sidebar__user clearfix">
                    <ul class="side-menu">
                        <li>
                            <Link href="/dashboards/DashUser/EditProfile">
                            <a class="side-menu__item "><i class="side-menu__icon fe fe-user"></i><span class="side-menu__label">Edit Profile</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboards/DashUser/MyItems">
                            <a class="side-menu__item"><i class="side-menu__icon fe fe-codepen"></i><span class="side-menu__label">My Items</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboards/DashUser/MyFavoriteItems">
                            <a class="side-menu__item"><i class="side-menu__icon fe fe-heart"></i><span class="side-menu__label">My Favorite</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboards/DashUser/ManageItems">
                            <a class="side-menu__item" data-toggle="slide"><i class="side-menu__icon fe fe-folder-plus"></i><span class="side-menu__label">Managed Items</span><i class="angle fa fa-angle-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboards/DashUser/Payments">
                            <a class="side-menu__item" href="payments.html"><i class="side-menu__icon fe fe-credit-card"></i><span class="side-menu__label">Payments</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboards/DashUser/Orders">
                            <a class="side-menu__item"><i class="side-menu__icon fe fe-shopping-cart"></i><span class="side-menu__label">Orders</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboards/DashUser/Statements">
                            <a class="side-menu__item"><i class="side-menu__icon fe fe-edit"></i><span class="side-menu__label">Statements</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboards/DashUser/SafetyTips">
                            <a class="side-menu__item"><i class="side-menu__icon fe fe-compass"></i><span class="side-menu__label"> Safety Tips</span></a>
                            </Link>
                        </li>
                        <li>
                            <a class="side-menu__item" href="#"><i class="side-menu__icon fe fe-settings"></i><span class="side-menu__label">Settings</span></a>
                        </li>
                        <li>
                            <a class="side-menu__item" href="#"><i class="side-menu__icon fe fe-power"></i><span class="side-menu__label">Logout</span></a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default UserMenu;