import './../../assets/stylesheets/footer.css';
import zuri from './../../assets/images/zuri_logo.png';
import gunter from './../../assets/images/i4g_logo.png';

const Footer = () => <footer>
            <div className='img-container'>
                <img src={zuri} alt="zuri_internship_logo" id="logo" />
            </div>
            <div className='hng'>HNG Internship 9 Frontend Task</div>
            <div className="downlow">
            <img src={gunter} alt="zuri_internship_logo" id="logo" />
            </div>
</footer>

export default Footer;