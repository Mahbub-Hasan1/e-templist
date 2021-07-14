import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
		
		{/* <!-- Favicon --> */}
		<link rel="icon" href="/assets/images/brand/favicon.ico" type="image/x-icon"/>
		<link rel="shortcut icon" type="image/x-icon" href="/assets/images/brand/favicon.ico" />
		
		{/* <!-- Bootstrap css --> */}
		<link href="/assets/plugins/bootstrap-4.3.1/css/bootstrap.min.css" rel="stylesheet" />

		{/* <!-- Style css --> */}
		<link href="/assets/css/style.css" rel="stylesheet" />
		<link href="/assets/css/skin-modes.css" rel="stylesheet" />

		{/* <!-- Font-awesome  css --> */}
		<link href="/assets/css/icons.css" rel="stylesheet"/>

		{/* <!--Select2 css --> */}
		<link href="/assets/plugins/select2/select2.min.css" rel="stylesheet" />

		{/* <!-- Cookie css --> */}
		<link href="/assets/plugins/cookie/cookie.css" rel="stylesheet"/>

		{/* <!-- Owl Theme css--> */}
		<link href="/assets/plugins/owl-carousel/owl.carousel.css" rel="stylesheet" />

		{/* <!-- Custom scroll bar css--> */}
		<link href="/assets/plugins/scroll-bar/jquery.mCustomScrollbar.css" rel="stylesheet" />

		{/* <!--Image-tooltip css--> */}
		<link href="/assets/plugins/image-tooltip/image-tooltip.css" rel="stylesheet" />

		{/* <!-- Auto Complete css --> */}
		<link href="/assets/plugins/autocomplete/jquery.autocomplete.css" rel="stylesheet"/>

		{/* <!-- Color Skin css --> */}
		<link id="theme" rel="stylesheet" type="text/css" media="all" href="/assets/color-skins/color6.css" />


		</Head>
        <body>
          <Main />
          <NextScript />

		  {/* <!-- JQuery js--> */}
		<script src="/assets/js/jquery-3.2.1.min.js"></script>

		{/* <!-- Bootstrap js --> */}
		<script src="/assets/plugins/bootstrap-4.3.1/js/popper.min.js"></script>
		<script src="/assets/plugins/bootstrap-4.3.1/js/bootstrap.min.js"></script>

		{/* <!--JQuery Sparkline js--> */}
		<script src="/assets/js/jquery.sparkline.min.js"></script>

		{/* <!-- Circle Progress js--> */}
		<script src="/assets/js/circle-progress.min.js"></script>

		{/* <!-- Star Rating js--> */}
		<script src="/assets/plugins/rating/jquery.rating-stars.js"></script>

		{/* <!--Counters js--> */}
		<script src="/assets/plugins/counters/counterup.min.js"></script>
		<script src="/assets/plugins/counters/waypoints.min.js"></script>
		<script src="/assets/plugins/counters/numeric-counter.js"></script>

		{/* <!--Owl Carousel js --> */}
		<script src="/assets/plugins/owl-carousel/owl.carousel.js"></script>

		{/* <!--Horizontal Menu js--> */}
		<script src="/assets/plugins/horizontal-menu/horizontal-menu.js"></script>

		{/* <!--JQuery TouchSwipe js--> */}
		<script src="/assets/js/jquery.touchSwipe.min.js"></script>

		{/* <!--Select2 js --> */}
		<script src="/assets/plugins/select2/select2.full.min.js"></script>
		<script src="/assets/js/select2.js"></script>

		{/* <!-- Cookie js --> */}
		<script src="/assets/plugins/cookie/jquery.ihavecookies.js"></script>
		<script src="/assets/plugins/cookie/cookie.js"></script>

        {/* <!-- Custom scroll bar js--> */}
		<script src="/assets/plugins/scroll-bar/jquery.mCustomScrollbar.js"></script>

		{/* <!-- Image-tooltip js --> */}
		<script src="/assets/plugins/image-tooltip/image-tooltip.js"></script>

		{/* <!--Auto Complete js --> */}
		<script src="/assets/plugins/autocomplete/jquery.autocomplete.js"></script>
		<script src="/assets/plugins/autocomplete/autocomplete.js"></script>

		{/* <!-- Sticky js--> */}
		<script src="/assets/js/sticky.js"></script>

		{/* <!-- Swipe js--> */}
		<script src="/assets/js/swipe.js"></script>

		{/* <!-- Scripts js--> */}
		<script src="/assets/js/owl-carousel.js"></script>

		{/* <!-- Custom Js--> */}
		<script src="/assets/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument