
import PropTypes from 'prop-types'
import { useState } from 'react';
import { HiEye, HiEyeSlash } from "react-icons/hi2";

function ShowPassword({ togglePassword }) {

  const [ visible, setVisible ] = useState(false)
  const hableVisible = () => setVisible(!visible)

  return (
    <button
      className='cursor-pointer text-white-200 transition-colors duration-300 hover:text-white-400 *:size-7'
      onClick={() => {
        togglePassword()
        hableVisible()
        }
      }
    >
      {
        visible
          ? <HiEye />
          : <HiEyeSlash />
      }
    </button>
  )
}

ShowPassword.propTypes = {
  togglePassword: PropTypes.func.isRequired,
}

export default ShowPassword
