import React from 'react'

const chaiPage = () => {
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
</div>

<div>
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
            <h1 className="title">About Our Company</h1>
            <h4 className="sub-title"><a className="home" href="https://html.rrdevs.net/">Home </a><span /><a className="inner-page" href="about.html"> About Us</a></h4>
          </div>
        </div>
      </section>
      {/* ./ page-header */}
      <section className="about-section-2 pt-130 pb-130">
        <div className="container">
          <div className="row about-wrap-2 gy-lg-0 gy-4 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-img-box">
                <div className="shapes">
                  <img className="shape shape-1" src="assets/img/shapes/about-shape-1.png" alt="about" />
                  <img className="shape shape-2" src="assets/img/shapes/about-shape-2.png" alt="about" />
                </div>
                <div className="img-1 reveal">
                  <img src="assets/img/images/about-img-2.jpg" alt="about" />
                </div>
                <div className="img-2 reveal">
                  <img src="assets/img/images/about-img-3.jpg" alt="about" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="about-content-2">
                <div className="section-heading">
                  <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">About Our Company</h4>
                  <h2 className="section-title" data-text-animation data-split="word" data-duration={1}>We design and develop outstanding Digital Products and digital- first Brands.</h2>
                  <p>Platea vehicula rutrum curae magna taciti acut malesuada inceptos phasellus massa, eget ultrices tempor lacinia dictumst tincidunt leo mollis luctus varius gravida eleifend cursus litora consequat...</p>
                </div>
                <div className="about-items">
                  <div className="about-item">
                    <div className="icon"><img src="assets/img/icon/about-1.png" alt="icon" /></div>
                    <div className="content"><h4 className="title">Professional Creative <br />Team Members</h4></div>
                  </div>
                  <div className="about-item">
                    <div className="icon"><img src="assets/img/icon/about-2.png" alt="icon" /></div>
                    <div className="content"><h4 className="title">Provide Market Standard <br />Service to Client’s</h4></div>
                  </div>
                </div>
                <a href="#" className="rr-primary-btn">Get Started Now <i className="fa-sharp fa-regular fa-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ about-section */}
      <section className="process-section-2 fade-wrapper">
        <div className="container">
          <div className="section-heading text-center">
            <span className="bg-text">Studio</span>
            <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Work Process</h4>
            <h2 className="section-title" data-text-animation data-split="word" data-duration={1}>Quality Service For Growth <br />Your Branding Identity</h2>
          </div>
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="process-box fade-top">
                <span className="number">01</span>
                <h3 className="title">Client Consultation</h3>
                <p>Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae</p>
                <a href="about.html" className="read-more">Read More<i className="fa-sharp fa-regular fa-chevrons-right" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-box fade-top">
                <span className="number">02</span>
                <h3 className="title">Research and Analysis</h3>
                <p>Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae</p>
                <a href="about.html" className="read-more">Read More<i className="fa-sharp fa-regular fa-chevrons-right" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-box fade-top">
                <span className="number">03</span>
                <h3 className="title">Project Revisions Launch</h3>
                <p>Autem vel eum repreh enderit eui in ea velit esse quame nihil molestiae</p>
                <a href="about.html" className="read-more">Read More<i className="fa-sharp fa-regular fa-chevrons-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ process-section-2 */}
      <section className="counter-section counter-2">
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <h3 className="title"><span className="odometer" data-count={10}>0</span></h3>
                <p>Years of <br />Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <h3 className="title"><span className="odometer" data-count={18}>0</span></h3>
                <p>Sillded <br /> Perforamce</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <h3 className="title"><span className="odometer" data-count={32}>0</span></h3>
                <p>Visited <br /> Conference</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item">
                <h3 className="title"><span className="odometer" data-count={1}>0</span>k</h3>
                <p>Years of <br />Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ counter-section */}
      <div className="running-text running-3">
        <div className="bg-img" data-background="assets/img/bg-img/running-bg.jpg" />
        <div className="carouselTicker carouselTicker-nav" data-speed="fast">
          <ul className="text-anim carouselTicker__list scroller__inner inner-3">
            <li>Latest Projects</li>
            <li className="stroke-text">Web Development</li>
            <li>Latest Projects</li>
            <li className="stroke-text">Web Development</li>
            <li>Latest Projects</li>
            <li className="stroke-text">Web Development</li>
            <li>Latest Projects</li>
            <li className="stroke-text">Web Development</li>
          </ul>
        </div>
      </div>
      {/* ./ running-text */}
      <section className="about-section-5 pt-130 pb-130">
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-6">
              <div className="about-content-5">
                <div className="section-heading">
                  <h4 className="sub-heading after-none" data-text-animation="fade-in" data-duration="1.5">About Company</h4>
                  <h2 className="section-title" data-text-animation data-split="word" data-duration={1}>Our Main Goal to Satisfied local &amp; Global Clients</h2>
                </div>
                <div className="about-tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Our Mission</button>
                      <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Our Vision</button>
                      <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Our Goal</button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <h3 className="title">Digital Web Design Agency</h3>
                      <p className="mb-20">A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.</p>
                      <p className="mb-0">At the core of a web design agency&apos;s essence lies the artistry of visual storytelling and user experience creation.</p>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <h3 className="title">Digital Web Design Agency</h3>
                      <p className="mb-20">A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.</p>
                      <p className="mb-0">At the core of a web design agency&apos;s essence lies the artistry of visual storytelling and user experience creation.</p>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                      <h3 className="title">Digital Web Design Agency</h3>
                      <p className="mb-20">A web design agency is a multifaceted entity that plays a pivotal role in shaping the digital presence of businesses and individuals alike. These agencies are dynamic hubs of creativity, technical expertise, and strategic thinking.</p>
                      <p className="mb-0">At the core of a web design agency&apos;s essence lies the artistry of visual storytelling and user experience creation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrap-5">
                <div className="shapes">
                  <div className="shape shape-1"><img src="assets/img/shapes/about-shape-4.png" alt="shape" /></div>
                  <div className="shape shape-2"><img src="assets/img/shapes/about-shape-5.png" alt="shape" /></div>
                </div>
                <div className="about-img reveal">
                  <img className="img-1" src="assets/img/images/about-img-8.png" alt="img" />
                </div>
                <div className="about-img-2 reveal">
                  <img className="img-2" src="assets/img/images/about-img-9.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ about-section */}
      <section className="team-section fade-wrapper">
        <div className="container">
          <div className="section-heading text-center">
            <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Team Members</h4>
            <h2 className="section-title" data-text-animation data-split="word" data-duration={1}>Our Expert Team Would Like <br />To Hear From You!</h2>
          </div>
          <div className="row gy-lg-0 gy-5">
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-1.png" alt="team" />
                  <ul className="team-social-2">
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
                <div className="team-content">
                  <h3 className="title"><a href="team-details.html">Charlotte Amitina</a></h3>
                  <span>Ui/Ux Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-2.png" alt="team" />
                  <ul className="team-social-2">
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
                <div className="team-content">
                  <h3 className="title"><a href="team-details.html">William Edward</a></h3>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-3.png" alt="team" />
                  <ul className="team-social-2">
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
                <div className="team-content">
                  <h3 className="title"><a href="team-details.html">Hannah Chloe</a></h3>
                  <span>Product Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-4.png" alt="team" />
                  <ul className="team-social-2">
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
                <div className="team-content">
                  <h3 className="title"><a href="team-details.html">Maiselan Willam</a></h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ team-section */}
      <section className="testimonial-section pt-130 pb-130 fade-wrapper">
        <div className="container">
          <div className="section-heading heading-3 text-center">
            <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">Testimonials</h4>
            <h2 className="section-title" data-text-animation data-split="word" data-duration={1}>Clients feedback</h2>
          </div>
          <div className="row gy-lg-0 gy-4 testi-wrap justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="testi-item item-3 text-center fade-top">
                <div className="testi-thumb">
                  <img src="assets/img/testi/testi-author-1.png" alt="img" />
                </div>
                <div className="testi-content">
                  <h3 className="author">Daniel Joseph <span>Writter</span></h3>
                  <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testi-item item-3 text-center fade-top">
                <div className="testi-thumb">
                  <img src="assets/img/testi/testi-author-3.png" alt="img" />
                </div>
                <div className="testi-content">
                  <h3 className="author">Victoria Madison <span>Writter</span></h3>
                  <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testi-item item-3 mb-0 text-center fade-top">
                <div className="testi-thumb">
                  <img src="assets/img/testi/testi-author-2.png" alt="img" />
                </div>
                <div className="testi-content">
                  <h3 className="author">Nicholas Thomas <span>Writter</span></h3>
                  <p>Curabitur accumsan nec aliquam mauris placat primis lacinia egestas congue facilisis ligula leo sociosqu consequat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ testimonial-section */}
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


 </>


  )
}

export default chaiPage