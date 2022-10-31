import './../../assets/stylesheets/linkspage.css';

const LinksPage = () =>
        <div className='btn-links'>
                <a href="https://www.twitter.com/dude_ackon" className='btn-link' id='twitter'>
                        Twitter Link </a>
                <a href="https://training.zuri.team/" title='Join the Zuri Team' id='btn__zuri' className='btn-link'>Zuri Team
                </a>
                <a href="http://books.zuri.team" id='books' title='This is where you find books about design and coding.' className='btn-link'>
                        Zuri Books
                        </a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=ackon_samuel" id='book__python' title='Find books to help you learn python from the bests' className='btn-link'>
                        Python Books
                        </a>
                <a href="https://background.zuri.team" id='pitch' title="We help you to know more about your coder's background" className='btn-link'>
                       Background Check for Coders 
                        </a>
                <a href="https://books.zuri.team/design-rules " id='book__design' title="Here you can find a free design offered by Zuri, to get started with." className='btn-link'>
                        Design Books
                </a>
        </div>;
export default LinksPage;
