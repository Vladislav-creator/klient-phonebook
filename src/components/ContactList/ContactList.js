import { useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contacts/selectors';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.module';

export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);
console.log("visibleContacts" ,visibleContacts);
const sortedContacts =  visibleContacts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
  
  return (
    <ContactsList>
          {sortedContacts.map(({ _id, name, number }) => (
    <ContactsListItem key={_id} id={_id} name={name} number={number} />
  ))} 
      
    </ContactsList>
  );
};