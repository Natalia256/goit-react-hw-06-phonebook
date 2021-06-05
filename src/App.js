import Container from "./components/Container";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { Component } from "react";


class App extends Component {
 
  render() {
    return (
      <Container>
        <Section title={"Phonebook"}>
          <ContactForm />
        </Section>
        <Section title={"Contacts"}>
          <Filter  />
          <ContactList/>
        </Section>
      </Container>
    );
  }
}

export default App;
