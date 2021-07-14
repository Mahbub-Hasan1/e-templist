/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import React from 'react';
import Footer from '../components/shareComponents/Footer';
import Topbar from '../components/shareComponents/Topbar';

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				{/* <!-- Meta data --> */}
				<meta charSet="UTF-8" />
				<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0' />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta content="Templist – HTML5 Premium Digital goods marketplace directory jquery css responsive website Template" name="description" />
				<meta content="Spruko Technologies Private Limited" name="author" />
				<meta name="keywords" content="digital goods, digital marketplace, easy digital downloads, marketplace website, multi vendor, online marketplace, digital download, marketplace, best marketplace, best marketplace websites, building an online marketplace, digital goods marketplace, digital product marketplace, internet marketplace, marketplace html template, marketplace template, marketplace website template, online marketplace to sell, web marketplace, bootstrap 4 marketplace template, bootstrap marketplace, bootstrap marketplace template, digital marketplace html template, html marketplace template, marketplace bootstrap template, marketplace template bootstrap, marketplace template html, multi vendor html template, template marketplace bootstrap" />
				
				{/* <!-- Title --> */}
				<title>Templist – HTML5 Premium Digital goods marketplace directory jquery css responsive website Template</title>

			</Head>
			<Topbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;