import { ContactItemBody } from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import React from 'react';
import DeleteButton from "./DeleteButton";

export default function ContactItem({name, tag, imageUrl, id, onDelete}) {
    return(
        <div className="contact-item">
            <ContactItemImage image={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
};
