import React from 'react'

function BackgroundCard() {
  return (
    <div>
      <p className='Calculator-name paragraph-class paragraph-animation'>
        SIP Calculator
      </p>
      <p className='paragraph-class paragraph-animation'>
        This calculator helps you to calculate the amount you’ll receive at the
        end of the investment period. It takes into consideration the SIP
        amount, Investment period, and the expected interest rate to calculate
        the maturity amount.
      </p>
      <img
        src='https://www.elearnmarkets.com/site/assets/img/SIP.png'
        className='calculter-input ng-pristine ng-valid ng-not-empty ng-touched'
        width='250px'
        alt=''
      />
    </div>
  )
}

export default BackgroundCard
