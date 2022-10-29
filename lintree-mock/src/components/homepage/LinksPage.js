import Links from '../links/Links'

const LinksPage = () => {
    const data = ['Twitter Link', 'Zuri Team', 'Zuri Books', 'Python Books', 'Background Check for Coders', 'Design Books'];

    return ( 
        <ul className="link-list">{
 data.map((item) => <Links name={item} /> )}
 </ul>
    )
}

export default LinksPage;