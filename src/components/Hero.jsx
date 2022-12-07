import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="hero" id="home">
        <div className="container">

          <div className="hero-content">

            <p className="hero-subtitle">
              <ion-icon name="home"></ion-icon>

              <span>Real Estate Agency</span>
            </p>

            <h2 className="h1 hero-title">Find Your Dream House By Us</h2>

            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            </p>

            <button className="btn">Make An Enquiry</button>

          </div>

          <figure className="hero-banner">
            <img src="./hero-banner.png" alt="Modern house model" className="w-100" />
          </figure>
        </div>
      </section>
    </div>
  )
}

export default Hero