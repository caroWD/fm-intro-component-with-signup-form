import PropTypes from 'prop-types'

function Input({ name }) {

  const inputName = name.toLowerCase().split(' ').join('-')

  return (
    <div
      className='relative'
    >
      <input
        type='text'
        name={inputName}
        id={inputName}
        placeholder={name}
        className='block w-full py-4 px-5 rounded-sm border border-solid border-white-200 text-sm transition-colors duration-300 placeholder:font-semibold placeholder:text-white-300 focus:outline-0 focus:border-blue-violet-700'
        />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Input
