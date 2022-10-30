import './../../assets/stylesheets/footer.css';
import zuri from './../../assets/images/zuri_logo.png';

const Footer = () => <footer>
    <div className='container'>
        <div className='content'>
            <div className='img-container'>
                <img src={zuri} alt="zuri_internship_logo" id="logo" />
            </div>
            <span className='hng'>HNG Internship 9 Frontend Task</span>
        </div>
    </div>
    <div className="i4g"></div>
</footer>

export default Footer;