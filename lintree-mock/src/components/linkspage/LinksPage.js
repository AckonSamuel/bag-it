import './../../assets/stylesheets/linkspage.css';

const LinksPage = () =>
        <div className='btn-links'>
                <a href="https://www.twitter.com/dude_ackon" className='btn-link'>
                        Twitter Link
                        
                        </a>
                <a href="https://training.zuri.team/" id='btn_zuri' className='btn-link'><p>Zuri Team<br />
                <small>Join the Zuri Team</small></p>
                </a>
                <a href="http://books.zuri.team" id='books' className='btn-link'>
                        <p>Zuri Books
                        <br />
                        <small>This is where you find books about design and coding.</small></p>
                        </a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=ackon_samuel" id='book_python' className='btn-link'>
                        <p>Python Books
                        <br />
                        <small>Find books to help you learn python from the bests</small></p>
                        </a>
                <a href="https://background.zuri.team" id='pitch' className='btn-link'>
                       <p>Background Check for Coders
                        <br />
                        <small>We help you to know more about your coder's background</small></p> 
                        </a>
                <a href="https://books.zuri.team/design-rules " id='book_design' className='btn-link'>
                        <p>Design Books
                        <br />
                        <small>Here you can find a free design offered by Zuri, to get started with.</small></p></a>
        </div>;
export default LinksPage;
