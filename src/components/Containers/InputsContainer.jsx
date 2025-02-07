import PropTypes from 'prop-types'
import InputEmail from '../Pure/InputEmail';
import InputPassword from '../Pure/InputPassword';
import InputText from '../Pure/InputText';

function InputsContainer({ name, stateForm, stateSubmit, handleChange }) {

  const inputName = name.toLowerCase().split(' ').join('-')

  let inputType

  switch (name) {
    case 'Email Address':
      inputType = 'email'
      break
    case 'Password':
      inputType = 'password'
      break
    default:
      inputType = 'text'
      break
  }

  return (
    <div
          className='relative'
        >
          <label
            htmlFor={inputName}
            className='hidden'
          >
            {name}
          </label>
          {
            inputType === 'password' ?
              <InputPassword
                type={inputType}
                name={inputName}
                placeholder={name}
                stateForm={stateForm}
                stateSubmit={stateSubmit}
                handleChange={handleChange} />
              : inputType == 'email' ?
                <InputEmail
                  type={inputType}
                  name={inputName}
                  placeholder={name}
                  stateForm={stateForm}
                  stateSubmit={stateSubmit}
                  handleChange={handleChange} />
                : <InputText
                    type={inputType}
                    name={inputName}
                    placeholder={name}
                    stateForm={stateForm}
                    stateSubmit={stateSubmit}
                    handleChange={handleChange} />
          }
        </div>
  )
}

InputsContainer.propTypes = {
  name: PropTypes.string.isRequired,
  stateForm: PropTypes.object.isRequired,
  stateSubmit: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default InputsContainer
