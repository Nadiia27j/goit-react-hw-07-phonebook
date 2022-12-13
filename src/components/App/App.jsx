import Section from '../Section/Section';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import {Container } from './App.styled';

export const App = () => {
  return (
    <Container>
    <Section title="Phonebook">
      <ContactForm  />
    </Section>

    <Section title="Contacts">
      <Filter  />
      <ContactList />
    </Section>
  </Container>
  );
};