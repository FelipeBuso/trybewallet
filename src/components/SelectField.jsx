import React from 'react';
import PropTypes from 'prop-types';

class SelectField extends React.Component {
  render() {
    const { handleChange, name, value, options, nameState } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          Método de pagamento
          <select
            className="form-wallet-input-field"
            name={ nameState }
            id={ name }
            onChange={ handleChange }
            value={ value }
          >
            {options.map((opt) => <option key={ opt } value={ opt }>{opt}</option>)}
          </select>
        </label>
      </div>
    );
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  nameState: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectField;
