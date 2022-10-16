import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Section from 'components/Section/Section';
import Filter from 'components/Filter';
import { Box } from '../common/Box';
import { fetchContacts } from 'redux//operations';
import { selectIsLoading } from 'redux/selectors';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      as="main"
      backgroundColor="#c3c8db"
      m="16px"
      pt="16px"
      pb="32px"
      width="560px"
      mr="auto"
      ml="auto"
    >
      <Section title="Phonebook">
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Section>
    </Box>
  );
}
