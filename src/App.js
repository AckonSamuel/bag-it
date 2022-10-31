import Social from './components/social/Social';
import LinksPage from './components/linkspage/LinksPage';
import Footer from './components/footer/Footer';
import share from './assets/images/share_button.png';
import d_share from './assets/images/desk_share.png';
import camera from './assets/images/camera.png';
import s_share from './assets/images/Tooltip.png';
import './App.css';

const App = () =>
  <div className="App">
    <div className='container-ic'>      
      <div className='sh-container'><img src={share} alt="share" className="share" /></div>
      <div className='ds-container'>
      <div className='d-container'><img src={d_share} alt="share" className="d-share" /></div>
      <div className='s-container'><img src={s_share} alt="share" className="s-share" /></div>
      </div>
    </div>
    <div className='profile-container'>
      <div id="profile__img">
        <div className='camera'><img src={camera} alt="camera" className='cam-in' /></div>
      </div>
      <h2 id="annette">Ackon Samuel</h2>
      <p id='slack'>ackon_samuel</p>
    </div>
    <LinksPage />
    <Social />
    <Footer />
  </div>

export default App;
