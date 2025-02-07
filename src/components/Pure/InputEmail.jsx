import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react';
import { HiExclamationCircle, HiCheckCircle } from "react-icons/hi2";
import { inputIsFailed, inputIsFailedReset, inputEmailIsFailed, inputEmailIsFailedReset, inputIsChecked, inputIsCheckedReset } from '../helpers/validateInputsForm'

function InputEmail({ type, name, placeholder, stateForm, stateSubmit, handleChange }) {

  const [focus, setFocus] = useState(false);
  const [blur, setBlur] = useState(true);

  const handleFocus = () => setFocus(!focus)
  const handleBlur = () => setBlur(!blur)

  const inputRef = useRef()
  const iconFailRef = useRef()
  const iconCheckRef = useRef()
  const messageFailRef = useRef()
  const messageEmailFailRef = useRef()

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateEmail = regex.test(stateForm[placeholder])

  const validateStateForm = Object.keys(stateForm).length === 0

  useEffect(() => {
    if ((stateSubmit && validateStateForm) || (stateSubmit && !stateForm[placeholder])) {
      inputIsFailed(inputRef, iconFailRef, messageFailRef)
    } else if (stateForm[placeholder]) {
      inputIsFailedReset(inputRef, iconFailRef, messageFailRef)
      inputIsChecked(iconCheckRef)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateSubmit])
  
  useEffect(() => {
    if (focus && validateStateForm) {
      inputIsFailed(inputRef, iconFailRef, messageFailRef)
    } else if (focus && stateForm[placeholder] && !validateEmail) {
      inputIsFailedReset(inputRef, iconFailRef, messageFailRef)
      inputIsCheckedReset(iconCheckRef)
      inputEmailIsFailed(inputRef, iconFailRef, messageFailRef, messageEmailFailRef)
    } else if (focus && !stateForm[placeholder]) {
      inputEmailIsFailedReset(inputRef, iconFailRef, messageFailRef, messageEmailFailRef)
      inputIsFailed(inputRef, iconFailRef, messageFailRef)
    } else if (focus && stateForm[placeholder] && validateEmail) {
      inputEmailIsFailedReset(inputRef, iconFailRef, messageFailRef, messageEmailFailRef)
      inputIsFailedReset(inputRef, iconFailRef, messageFailRef)
      inputIsChecked(iconCheckRef)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus, stateForm[placeholder]])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blur, stateForm[placeholder]])

  return (
    <>
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className='block w-full py-4 px-5 rounded-sm border border-solid border-white-300 text-sm transition-colors duration-300 placeholder:font-semibold placeholder:text-white-300 focus:outline-0 focus:border-blue-violet-700'
        onChange={(e) => handleChange(e, placeholder)}
        onFocus={() => {
          handleFocus()
          handleBlur()
        }}
        onBlur={() => {
          handleBlur()
          handleFocus()
        }}
      />
      <div
        className='absolute top-3 right-5'
      >
        <i
          ref={iconFailRef}
          className='hidden'
        >
          <HiExclamationCircle
            className='size-7 fill-geraldine-400'
          />
        </i>
        <i
          ref={iconCheckRef}
          className='hidden'
        >
          <HiCheckCircle
            className='size-7 fill-shamrock-300'
          />
        </i>
      </div>
      <div
        className='mt-1 text-right text-xs italic text-geraldine-400'
      >
        <p
          ref={messageFailRef}
          className='hidden'
        >
          {placeholder} cannot be empty
        </p>
        <p
          ref={messageEmailFailRef}
          className='hidden'
        >
          Looks like this is not an email
        </p>
      </div>
      
    </>
  )
}

InputEmail.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  stateForm: PropTypes.object.isRequired,
  stateSubmit: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default InputEmail
