import { ContactItemBody } from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import React from 'react';

export default function ContactItem({name, tag, imageUrl}) {
    return(
        <div className="contact-item">
            <ContactItemImage image={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
        </div>
    )
};
