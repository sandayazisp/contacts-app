import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({contacts, onDelete}) {
    return(
        <div>
            {
                contacts.map(contact => {
                    return(
                        <ContactItem key={contact.id} id={contact.id} {...contact} onDelete={onDelete} />
                    )
                })
            }
        </div>
    )
};
