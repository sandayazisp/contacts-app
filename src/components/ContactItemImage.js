import React from 'react';

export default function ContactItemImage({image}) {
    return(
        <div className="contact-item__image">
            <img src={image} alt="contact avatar" />
        </div>
    )
};
