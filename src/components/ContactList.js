import React from 'react';
import ContactItem from './ContactItem';

export default function ContactList({contacts}) {
    return(
        <div>
            {
                contacts.map(contact => {
                    return(
                        <ContactItem key={contact.id} {...contact} />
                    )
                })
            }
        </div>
    )
};
