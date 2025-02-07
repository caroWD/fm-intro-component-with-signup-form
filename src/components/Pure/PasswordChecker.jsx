import PropTypes from 'prop-types'
import { HiCheck, HiXMark } from "react-icons/hi2";

function PasswordChecker({ password = ' ' }) {
  return (
    <div
      className='absolute top-full w-full mt-1 p-4 rounded-sm flex flex-col gap-3 text-left bg-white-100 text-white-700 xl:p-6'
    >
      <h3
        className='text-xs xl:text-lg font-bold uppercase border-b'
      >
        Password must include
      </h3>
      <ul
        className='xl:grid xl:grid-cols-2 xl:grid-rows-3 xl:gap-x-4 xl:gap-y-2 text-sm *:flex *:xl:flex-wrap *:items-center *:gap-1 *:*:size-4'
      >
        <li>
          {
            password.length > 7
              ? <HiCheck
                  className='fill-shamrock-600'
                />
              : <HiXMark
                  className='fill-geraldine-400'
                />
          }
          Least eigth characters
        </li>
        <li>
          {
            (/^(?=.*[A-Z])/).test(password)
              ? <HiCheck
                  className='fill-shamrock-600'
                />
              : <HiXMark
                  className='fill-geraldine-400'
                />
          }
          Capital letters
        </li>
        <li>
          {
            (/^(?=.*[a-z])/).test(password)
              ? <HiCheck
                  className='fill-shamrock-600'
                />
              : <HiXMark
                  className='fill-geraldine-400'
                />
          }
          Lowercase letters
        </li>
        <li>
          {
            (/^(?=.*[0-9])/).test(password)
              ? <HiCheck
                  className='fill-shamrock-600'
                />
              : <HiXMark
                  className='fill-geraldine-400'
                />
          }
          Numbers
        </li>
        <li
          className='xl:col-span-2'
        >
          {
            (/^(?=.*[$@$!%*?&/])/).test(password)
              ? <HiCheck
                  className='fill-shamrock-600'
                />
              : <HiXMark
                  className='fill-geraldine-400'
                />
          }
          Special characters ($@$!%*?&)
        </li>
      </ul>
    </div>
  )
}

PasswordChecker.propTypes = {
  password: PropTypes.string,
} 

export default PasswordChecker
