import React from 'react'
import './Hero.css'
import women2 from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'
import Header from './Header'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
import { Link } from 'react-scroll'

const Hero = () => {
  const transition = { type: 'spring', duration: 3 }

  const mobile = window.innerHeight <= 768 ? true : false

  return (
    <div
      className="hero"
      id="home"
    >
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '160px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>the best fitness club in the down</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <diV>
            <span className="stroke-text">Shape</span>
            <span> </span>
            <span>Your</span>
          </diV>
          <div>
            <span className="ideal">Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        {/* figure */}

        <div className="figures">
          <div>
            <span>
              <NumberCounter
                end={140}
                start={10}
                delay="4"
                preFix="+"
              />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={978}
                start={600}
                delay="4"
                preFix="+"
              />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter
                start={0}
                end={50}
                delay="4"
                preFix="+"
              />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero button */}

        <div className="hero-button">
          <button className="btn">
            <Link
              to="plan"
              span={true}
              smooth={true}
            >
              Get Started
            </Link>
          </button>
          <button className="btn">
            <Link
              to="programs"
              span={true}
              smooth={true}
            >
              Learn More
            </Link>
          </button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">
          <Link
            to="join-us"
            span={true}
            smooth={true}
          >
            Join Now
          </Link>
        </button>

        <motion.div
          whileInView={{ right: '4rem' }}
          initial={{ right: '-1rem' }}
          transition={transition}
          className="heart-rate"
        >
          <div className="heart"></div>
          <span>Heart Rate</span>
          <span>
            <NumberCounter
              start={0}
              end={116}
              delay="4"
            />{' '}
            bpm
          </span>
        </motion.div>

        {/* hero images */}

        <img
          src={women2}
          alt=""
          className="hero-image"
        />

        {/* hero back image */}

        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* calories */}

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories"
        >
          <img
            src={calories}
            alt=""
          />

          <div>
            <span>Calories Burned</span>
            <span className="kcal">
              <NumberCounter
                start={0}
                end={220}
                delay="4"
                className="kcal"
              />{' '}
              kcal
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
