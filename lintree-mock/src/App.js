import Social from './components/social/Social';
import LinksPage from './components/linkspage/LinksPage';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => 
    <div className="App">
      <div className='profile-container'>
      <div id="profile_img">
      </div>
      <h2 id="annette">Ackon Samuel</h2>
      </div>
      <LinksPage />
      <Social />
      <Footer />

    </div>;

export default App;
