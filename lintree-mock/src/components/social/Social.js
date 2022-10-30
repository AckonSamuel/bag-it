import slack from './../../assets/images/slack.png';
import github from './../../assets/images/github.png';
import './../../assets/stylesheets/social.css'

const Social = () =>
<div className='socials'>
   <a href="#"><img src={slack} alt='slack'/></a>
   <a href="https://www.github.com/AckonSamuel/"><img src={github} alt='slack'/></a>
</div>;


export default Social;