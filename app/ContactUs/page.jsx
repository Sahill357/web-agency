 import React from 'react'
 
 const page = () => {
   return (
     <> 
    
     <div>
  <div id="popup-search-box">
    <div className="box-inner-wrap d-flex align-items-center">
      <form id="form" action="#" method="get" role="search">
        <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
      </form>
      <div className="search-close"><i className="fa-sharp fa-regular fa-xmark" /></div>
    </div>
  </div>
  {/* /#popup-search-box */}
  <div id="sidebar-area" className="sidebar-area">
    <button className="sidebar-trigger close">
      <svg className="sidebar-close" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7" style={{enableBackground: 'new 0 0 16 12.7'}} xmlSpace="preserve">
        <g>
          <rect x={0} y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width={16} height={2} />
          <rect x={0} y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width={16} height={2} />
        </g>
      </svg>
    </button>
    <div className="side-menu-content">
      <div className="side-menu-logo">
        <a className="dark-img" href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo" /></a>
        <a className="light-img" href="index.html"><img src="assets/img/logo/logo-3.png" alt="logo" /></a>
      </div>
      <div className="side-menu-wrap" />
      <div className="side-menu-about">
        <div className="side-menu-header">
          <h3>About Us</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.</p>
        <a href="contact.html" className="rr-primary-btn">Contact Us</a>
      </div>
      <div className="side-menu-contact">
        <div className="side-menu-header">
          <h3>Contact Us</h3>
        </div>
        <ul className="side-menu-list">
          <li>
            <i className="fas fa-map-marker-alt" />
            <p>Valentin, Street Road 24, New York, </p>
          </li>
          <li>
            <i className="fas fa-phone" />
            <a href="tel:+000123456789">+000 123 (456) 789</a>
          </li>
          <li>
            <i className="fas fa-envelope-open-text" />
            <a href="mailto:runokcontact@gmail.com">runokcontact@gmail.com</a>
          </li>
        </ul>
      </div>
      <ul className="side-menu-social">
        <li className="facebook"><a href="#"><i className="fab fa-facebook-f" /></a></li>
        <li className="instagram"><a href="#"><i className="fab fa-instagram" /></a></li>
        <li className="twitter"><a href="#"><i className="fab fa-twitter" /></a></li>
        <li className="g-plus"><a href="#"><i className="fab fa-fab fa-google-plus" /></a></li>
      </ul>
    </div>
  </div>
  {/*/.sidebar-area*/}
  {/* <div id="preloader">
    <div className="loading" data-loading-text="Runok" />
  </div> */}
  {/* ./ preloader */}
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <section className="page-header" data-background="assets/img/bg-img/page-header-bg.jpg">
        <div className="overlay" />
        <div className="shapes">
          <div className="shape shape-1"><img src="assets/img/shapes/page-header-shape-1.png" alt="shape" /></div>
          <div className="shape shape-2"><img src="assets/img/shapes/page-header-shape-2.png" alt="shape" /></div>
          <div className="shape shape-3"><img src="assets/img/shapes/page-header-shape-3.png" alt="shape" /></div>
        </div>
        <div className="container">
          <div className="page-header-content text-center">
            <h1 className="title">Contact Us</h1>
            <h4 className="sub-title"><a className="home" href="index.html">Home </a><span /><a className="inner-page" href="contact.html"> Contact Us</a></h4>
          </div>
        </div>
      </section>
      {/* ./ page-header */}
      <section className="contact-section pt-130 pb-130">
        <div className="container">
          <div className="row gy-lg-0 gy-5">
            <div className="col-lg-5 col-md-12">
              <div className="contact-content">
                <div className="section-heading">
                  <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">Contact Us</h4>
                  <h2 className="section-title" data-text-animation data-split="word" data-duration={1}>Let’s working together</h2>
                  <p>Thank you for your interest in Attach Web Agency. We&apos;re excited to hear from you and discuss...</p>
                </div>
                <div className="contact-list">
                  <div className="list-item">
                    <div className="icon">
                      <i className="fa-light fa-location-dot" />
                    </div>
                    <div className="content">
                      <h4 className="title">Our Address</h4>
                      <p>2690 Hilton Street Victoria Road, <br />New York, Canada</p>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="icon">
                      <i className="fa-light fa-phone" />
                    </div>
                    <div className="content">
                      <h4 className="title">Phone Number</h4>
                      <span><a href="tel:+65485965789">(+65) - 48596 - 5789</a></span>
                      <span><a href="mailto:hello@acadu.com">hello@acadu.com</a></span>
                    </div>
                  </div>
                  <div className="list-item">
                    <div className="icon">
                      <i className="fa-light fa-clock" />
                    </div>
                    <div className="content">
                      <h4 className="title">Hours of Operation</h4>
                      <span>Monday - Friday: 09:00 - 20:00</span>
                      <span>Sunday &amp; Saturday: 10:30 - 22:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="blog-contact-form form-2">
                <div className="request-form">
                  <form action="https://html.rrdevs.net/runok/mail.php" method="post" id="ajax_contact" className="form-horizontal">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <div className="form-item">
                          <input type="text" id="fullname" name="fullname" className="form-control" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-item">
                          <input type="text" id="lastname" name="lastname" className="form-control" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6">
                        <div className="form-item">
                          <input type="text" id="email" name="email" className="form-control" placeholder="Email address*" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-item">
                          <input type="text" id="phone" name="phone" className="form-control" placeholder="Phone number*" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="form-item">
                          <div className="nice-select select-control form-control country" tabIndex={0}><span className="current">Select Queary Topic</span><ul className="list"><li data-value className="option selected focus">Select Queary Topic</li><li data-value="vdt" className="option">Plan One</li><li data-value="can" className="option">Plan Two</li><li data-value="uk" className="option">Plan Three</li></ul></div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="form-item message-item">
                          <textarea id="message" name="message" cols={30} rows={5} className="form-control address" placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div className="submit-btn">
                      <button id="submit" className="rr-primary-btn" type="submit">Submit Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ contact-section */}
      <div className="map-wrapper pb-130">
        <div className="container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8826.923787362664!2d-118.27754354757262!3d34.03471770929568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1566525118697!5m2!1svi!2s" width="100%" height={600} frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
      </div>
      {/* ./ map-wrapper */}
      <footer className="footer-section bg-dark-1">
        <div className="shape"><img src="assets/img/shapes/footer-shape.png" alt="footer" /></div>
        <div className="container">
          <div className="row footer-wrap">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <div className="footer-logo">
                    <a href="index.html"><img src="assets/img/logo/logo-2.png" alt="logo" /></a>
                  </div>
                </div>
                <p className="mb-20">Centric aplications productize before front end vortals visualize front end is results and value added</p>
                <h4 className="title">WE ARE AVAILABLE <span>Mon-Sat: 09.00 am to 6.30 pm</span></h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-col-2">
                <div className="widget-header">
                  <h3 className="widget-title">Useful Links</h3>
                </div>
                <ul className="footer-list">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="project.html">Our Gallery</a></li>
                  <li><a href="service.html">Our Services</a></li>
                  <li><a href="team.html">Our Team</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h3 className="widget-title">Contact Us</h3>
                </div>
                <ul className="address-list">
                  <li><a href="mailto:support@agency.com">support@agency.com</a></li>
                  <li><a href="tel:+2585492153215">+258 (549) 2158 3215</a></li>
                  <li>2589 Dorland Street Luke INUA <br /> Berlin, Germany</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h3 className="widget-title">Subscribe newsletter</h3>
                </div>
                <div className="footer-form mb-20">
                  <form action="#" className="rr-subscribe-form">
                    <input className="form-control" type="email" name="email" placeholder="Email address" />
                    <input type="hidden" name="action" defaultValue="mailchimpsubscribe" />
                    <button className="submit">Sign Up</button>
                    <div className="clearfix" />
                  </form>
                </div>
                <div className="form-check form-item">
                  <input className="form-check-input" type="checkbox" defaultValue id="man" />
                  <label className="form-check-label" htmlFor="man">
                    I’m okay with getting emails and having
                    that tracked to improve my experience
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row copyright-content">
              <div className="col-md-6">
                <p>© 2024 Runok. All Rights Reserved.</p>
              </div>
              <div className="col-md-6">
                <ul className="social-list">
                  <li className="facebook">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                  </li>
                  <li className="pinterest">
                    <a href="#"><i className="fab fa-pinterest" /></a>
                  </li>
                  <li className="twitter">
                    <a href="#"><i className="fab fa-twitter" /></a>
                  </li>
                  <li className="instagram">
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ./ footer-section */}
    </div>
  </div>
  <div id="scroll-percentage"><span id="scroll-percentage-value" /></div>
  {/*scrollup*/}
  {/* <div id="theme-toogle" className="switcher-button">
    <div className="switcher-button-inner-left" />
    <div className="switcher-button-inner" />
  </div> */}
</div>


        
     </ >
   )
 }
 
 export default page