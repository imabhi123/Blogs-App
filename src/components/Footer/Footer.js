import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="text-center text-lg-start pt-5 bg-dark text-white ">
     
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto px-md-5 mb-4">
              <h2 className="text-uppercase fw-bold m-0 mb-4 text-success">
                CrossVal
              </h2>
              <p>
                Here you can use
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <i className="fa-solid fa-envelope me-3" /> info@gmail.com
              </p>
               <p>
                <i className="fa-solid fa-location-dot me-3" /> New York, NY 10012, US
              </p>
            </div>
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  About
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Our Team
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Press
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Contact Us
                </a>
              </p>
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Support</h6>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  FAQ
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Help & Support
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Terms & onditions
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Glossary
                </a>
              </p>
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Plateform</h6>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  founder
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none">
                  Investor
                </a>
              </p>
              <p>
                <a href=" " className="text-reset text-decoration-none ">
                  Partners
                </a>
              </p>
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
              <p>
                Valuation
              </p>
              <p>
                Pitch Deck
              </p>
              <p>
                Fincial Model
              </p>
              <p>
              <i class="fa-brands fa-linkedin me-3"></i> <i class="fa-brands fa-facebook me-3"></i> <i class="fa-brands fa-twitter me-3"></i>
              </p>
            </div>
           
          </div>
         
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center bg-success p-4"
        
      >
        Copyright&copy;2019-2016 CrossVal. All Rights Reserved
        <a className="text-reset text-decoration-none fw-bold" href="">
         
        </a>
      </div>
     
    </footer>
    {/* Footer */}
  </>
  
  )
}

export default Footer
