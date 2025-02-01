import PropTypes from 'prop-types'
import Button from '../Pure/Button'
import Input from '../Pure/Input'

function LoginSection({ title, copy, promo, form }) {
  return (
    <section
      className="flex flex-col gap-12 py-24 text-center"
    >
      <hgroup
        className="flex flex-col gap-6 text-white-50"
      >
        <h2
          className="font-bold text-2xl xs:text-3xl sm:text-4xl"
        >
          {title}
        </h2>
        <p
          className="opacity-85 leading-6.5"
        >
          {copy}
        </p>
      </hgroup>
      <article
        className='flex flex-col gap-6'
      >
        {
          promo.state &&
            <p
              className='block-shadow py-4 px-5 text-white-50 bg-blue-violet-700 xs:px-13 sm:px-20'
            >
              <strong>
                {promo.copy.split(' ', 5).join(' ')}
              </strong>
              {` ${promo.copy.split(' ').slice(5).join(' ')}`}
            </p>
        }
        {
          form.state &&
            <form
              className='flex flex-col gap-4 block-shadow p-5 bg-white-50 xs:p-6 sm:p-8'
            >
              {
                form.inputs.map(input => <Input key={input} name={input} />)
              }
              <Button text={form.button} />
              <p
                className='text-xs text-white-300'
              >
                {form.legal.split(' ').slice(0, -3).join(' ')}
                <a
                  href="#"
                  className='font-bold text-geraldine-400 transition-colors duration-300 hover:text-geraldine-600'
                >
                  {` ${form.legal.split(' ').slice(-3).join(' ')}`}
                </a>
              </p>
            </form>
        }
      </article>
    </section>
  )
}

LoginSection.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  promo: PropTypes.object,
  form: PropTypes.object.isRequired,
}

export default LoginSection