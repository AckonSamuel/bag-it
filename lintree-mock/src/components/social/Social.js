const Social = () => {
    const images = []

    return (
        <div className='social-group'>
            {
                images.map((image) => <a><img src={image} alt={image} /></a>)
            }
        </div>
    )
}

export default Social;