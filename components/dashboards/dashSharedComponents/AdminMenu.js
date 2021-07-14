import Link from 'next/link';
import React from 'react';

const AdminMenu = () => {
    return (
        <div class="hor-menu-nav">
            <nav class="navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    Dashboard-Menu<i class="fe fe-align-left"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link href="/dashboards/DashAdmin/editProfile"><a class="nav-link"><i class="fe fe-user nav-icon"></i> Edit Profile</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/dashboards/DashAdmin/uploadItems">
                            <a class="nav-link" ><i class="fe fe-download nav-icon"></i>Upload Items</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/dashboards/DashAdmin/managedItems">
                            <a class="nav-link"><i class="fe fe-folder-plus nav-icon"></i>Managed Items</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="purchase.html"><i class="fe fe-shopping-cart nav-icon"></i>Purchase</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="credits.html"><i class="fe fe-credit-card nav-icon"></i>Credits</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="statements1.html"><i class="fe fe-edit nav-icon"></i>Statements</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="settings1.html"><i class="fe fe-settings nav-icon"></i>Settings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="widthdrawals.html"><i class="fe fe-edit nav-icon"></i>Withdrawals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fe fe-power nav-icon"></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default AdminMenu;