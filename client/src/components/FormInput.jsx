import PropTypes from 'prop-types'

const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        className={`input input-bordered ${size}`}
        type={type}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  size: PropTypes.string,
}

export default FormInput
