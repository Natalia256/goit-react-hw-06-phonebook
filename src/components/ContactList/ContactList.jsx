import ContactItem from '../ContactItem'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import action from "../../redux/phonebook/actions";

const ContactList = ({ list, onClick }) => {
  return ((list.length ?
    (
    <ul>
      {list.map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          onClick={onClick}
          name={item.name}
          number={item.number} />
      ))
      }
    </ul>
  ):(<p>No matches found</p>)))
}
ContactList.propTypes = {
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
const mapStateToProps = (state) => ({
  list: getVisibleContacts(state.contacts.items, state.contacts.filter),
});
const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(action.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);;