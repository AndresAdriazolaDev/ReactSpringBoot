import PropTypes from "prop-types";
import { UserDetails } from "./components/UserDetails";
export const Hello = ({ user, id, email, title, book }) => {
  return (
    <>
      <h1>Hi!</h1>
      <UserDetails user={user} id={id} email={email} book={book} />
    </>
  );
};
Hello.propTypes = {
  title: PropTypes.string.isRequired,
};

Hello.defaultProps = {
  title: "Not Available",
  book: "Design Patterns",
};
