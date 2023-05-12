import React, { useState, useEffect } from 'react';
import './styles.css';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

const FlyerGallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [sortOrder, setSortOrder] = useState('newest');

    useEffect(() => {
        fetch(
            `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=72177720308120716&user_id=198342063@N08&format=json&nojsoncallback=1`
        )
        .then((response) => response.json())
        .then((data) => {
            const photos = data.photoset.photo;

            photos.sort((a, b) => {
                const dateA = new Date(a.title);
                const dateB = new Date(b.title);
                return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
            });

            setImages(photos);
        });
    }, [sortOrder]);

    const buildImageUrl = (image) => {
        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_n.jpg`;
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div>
            <div className="sort-container">
                <label>Sort by: </label>
                <select onChange={handleSortChange} value={sortOrder}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
            <div className="FlyerGallery">
                {images.map((image) => (
                    <button
                        key={image.id}
                        onClick={() => setSelectedImage(buildImageUrl(image))}
                        className="image-wrapper"
                    >
                        <img src={buildImageUrl(image)} alt={image.title} />
                    </button>           
                ))}
                {selectedImage && (
                    <div
                        className="modal"
                        onClick={() => setSelectedImage(null)}
                    >
                        <img className="modal-image" src={selectedImage} alt="Selected" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlyerGallery;