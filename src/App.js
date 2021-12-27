import './App.css'
import BackgroundCard from './Components/BackgroundCard'
import SipCalculation from './Components/SipCalculation'

function App() {
  return (
    <div className='App'>
      <div
        className='col-lg-9 pt-4'
        style={{
          background: '#f3f7fb',
          'border-radius': '30px 0px 0px 30px;',

          overflow: 'hidden;',
        }}
      >
        <div className='row justify-content-md-center'>
          <div className='col-lg-11'>
            <div className='row'>
              <div className='col-lg-6 pt-2 title-class'>
                <BackgroundCard />
              </div>
              <div className='col-lg-6 pt-2 calculator-class'>
                <SipCalculation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
