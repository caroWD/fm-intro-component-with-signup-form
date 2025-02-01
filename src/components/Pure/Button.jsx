import PropTypes from 'prop-types'

function Button({ text }) {
  return (
    <button
      type="submit"
      className='py-4 bg-shamrock-400 rounded-sm inset-shadow-[0_-5px_0px_0px_rgba(0,0,0,0.15)] text-white-50 font-medium uppercase'
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button
