import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PropTypes from 'prop-types';

const DefaultLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
DefaultLayouts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayouts;
