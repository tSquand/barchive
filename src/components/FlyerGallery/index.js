import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

const FlyerGallery = () => {
    const [images, setImages] = useState ([]);

    useEffect(() => {
        fetch(
            `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=72177720308120716&user_id=198342063@N08&format=json&nojsoncallback=1`
        )
        .then((response) => response.json())
        .then((data) => {
            setImages(data.photoset.photo);
        });
    }, []);

    const buildImageUrl = (image) => {
        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
    };

    return (
        <div className="FlyerGallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
            {images.map((image) => (
                 <img key={image.id} src={buildImageUrl(image)} alt={image.title} />
            ))}
        </div>
    );
};

export default FlyerGallery;