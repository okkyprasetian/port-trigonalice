import { useState } from 'react'
import Download from './components/Download'
import Card from './components/Card'
import data from './features'

function App() {

  // State
  const [features] = useState(data)

  return (
    <div className="App">

      <div className="home">
        <div className="home-content">
          <div className="brand">
            Trigonalice
          </div>
          <div className="home-main">
            <h1 className="home-h1"> Money Management at Your Fingertips </h1>
            <p className="home-p">
              Trigonalice will help you manage your finance
            </p>
            <Download name="app" />
          </div>
        </div>
        <div className="home-illust">
          Image
        </div>
      </div>

      <div className="feature">
        <h1 className="feature-h1"> App Features </h1>
        <p className="feature-p">
          We have three main feature in trigonalice. The most functionality you need for controlling your finance
        </p>
        <div className="cards">
          {features.map((feature, index) => <Card feature={feature} key={index} />)}
        </div>
      </div>

      <div className="beta">

        <div className="beta-1">
          <h1 className="beta-h1">We Make Our Beta App Avaible for Everyone</h1>
          <p className="beta-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium deserunt illo assumenda similique, exercitationem harum aspernatur commodi voluptatem et inventore ullam. Odio in accusamus fugiat reiciendis aliquid, itaque sed hic exercitationem placeat nihil laborum ut, quas beatae animi voluptatibus? Accusantium doloremque, nihil laboriosam sint odio deleniti quos.
          </p>
          <div className="beta-illust">
            Image
          </div>
        </div>

        <div className="beta-2">
          <div className="beta-2-1">
            <h2 className="beta-h2">Download Trigonalice Beta Version to Experience New Features</h2>
            <p className="beta-download-p">
              click button and install!
            </p>
            <Download name="beta app" />
          </div>

          <div className="footer">
            C2022. Trigonalice. All right reserved.
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
