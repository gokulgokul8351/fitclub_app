import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import StripeCheckout from 'react-stripe-checkout'
import CountdownTimer from '../coundown/CountdownTimer'

const Plans = () => {
  return (
    <div
      className="plans-container"
      id="plan"
    >
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div
        className="programs-header"
        style={{ gap: '2rem' }}
      >
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}

      <div className="offer-zone">
        <CountdownTimer />
        <span className="offer">
          <strong style={{ fontSize: '40px' }}>
            50% <span style={{ color: 'whitesmoke' }}>offer</span>
          </strong>
        </span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div
            className="plan"
            key={i}
          >
            {plan.icon}
            <span>{plan.name}</span>
            <span className="price">₹{plan.price}</span>
            <span
              style={{ color: 'black', fontSize: '1.6rem' }}
              className="price-offer"
            >
              <strike>₹{plan.offer}</strike>
            </span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img
                    src={whiteTick}
                    alt=""
                  />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits </span>
            </div>
            <button className="btn">
              <StripeCheckout
                name={plan.name}
                amount={plan.price * 100}
                currency="INR"
                stripeKey="pk_test_51NbMa6SIwu16w9mPshZCHscrMBCzBjFhrj6ucx9oALFVjgLUMwQCVpZ9yJdC7F1N3Fk3T25D7hPvcAEDJqkOq3On00FHGx0p18"
              >
                Join now
              </StripeCheckout>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
