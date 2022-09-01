import styles from './Filter.module.scss';
import PropTypes from 'prop-types';

export const Filter = ({setFilter}) => {
  const {label, input} = styles;

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
  }

  return (
    <>
      <label className={label}>
        Find contacts by name
        <input 
          className={input} 
          type="text"
          onChange={filterContacts}
        />
      </label>
    </>
  )
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
}

export default Filter;