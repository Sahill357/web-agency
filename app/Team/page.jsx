import React from 'react'

const Team = () => {
  return (
    <>
     
       

       <div>
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
            <h1 className="title">Team Members</h1>
            <h4 className="sub-title"><a className="home" href="index.html">Home </a><a className="inner-page" href="team.html">Our Team</a></h4>
          </div>
        </div>
      </section>
      {/* ./ page-header */}
      <section className="team-section pt-130 pb-130">
        <div className="container">
          <div className="row gy-5 fade-wrapper">
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
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-5.png" alt="team" />
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
                  <h3 className="title"><a href="team-details.html">Sophia Williams</a></h3>
                  <span>Ui/Ux Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-6.png" alt="team" />
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
                  <h3 className="title"><a href="team-details.html">Isabella Anderson</a></h3>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-7.png" alt="team" />
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
                  <h3 className="title"><a href="team-details.html">Jonathan Clark</a></h3>
                  <span>Product Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item fade-top">
                <div className="team-thumb">
                  <div className="gradient-color" />
                  <img src="assets/img/team/team-8.png" alt="team" />
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
                  <h3 className="title"><a href="team-details.html">Amelia Clark</a></h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./ team-section */}
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

export default Team