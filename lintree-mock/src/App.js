import Social from './components/social/Social';
import LinksPage from './components/homepage/LinksPage';
import profileImg from './assets/images/profile_img.png';

const App = () => 
    <div className="App">
      <header className="App-header">
        <img src={profileImg} id="profile_img" alt="logo" />
      </header>
      <LinksPage />
      <Social />

    </div>;

export default App;
