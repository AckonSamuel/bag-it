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
     <img src={d_share} alt="share" className="d-share" />
     <img src={s_share} alt="share" className="s-share" /> 
      <img src={share} alt="share" className="share" />
      <div className='profile-container'>
      <div id="profile_img">
        <div className='camera'><img src={camera} alt="camera" className='cam-in'/></div>
      </div>
      <h2 id="annette">Ackon Samuel</h2>
       <small id='slack'><em>Slack: @ackon_samuel</em></small> 
       <br />
       <small id='twitter'><em>Twitter: @dude_ackon</em></small>
      </div>
      <LinksPage />
      <Social />
      <Footer />

    </div>;

export default App;
