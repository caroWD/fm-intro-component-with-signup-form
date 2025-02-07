import PropTypes from 'prop-types'
import Button from '../Pure/Button'
import InputsContainer from './InputsContainer'
import { useState } from 'react'

function LoginSection({ title, copy, promo, form }) {

  const [ dataForm, setDataForm ] = useState({})
  const [ submit, setSubmit ] = useState(0)

  const handleChange = (e, key) => {
    const newDataForm = {...dataForm}
    newDataForm[key] = e.target.value
    setDataForm(newDataForm)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmit(submit + 1)
  }

  return (
    <section
      className="flex flex-col gap-12 py-24 text-center 2xl:flex-row"
    >
      <hgroup
        className="flex flex-col gap-6 text-white-50 2xl:w-1/2 2xl:justify-center 2xl:text-left"
      >
        <h2
          className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl md:leading-15 2xl:text-6xl 2xl:leading-17"
        >
          {title}
        </h2>
        <p
          className="opacity-85 leading-6.5 2xl:text-lg 2xl:leading-7"
        >
          {copy}
        </p>
      </hgroup>
      <article
        className='flex flex-col gap-6 2xl:w-1/2'
      >
        {
          promo.state &&
            <p
              className='block-shadow py-4 px-6 text-white-50 bg-blue-violet-700 xs:px-13 sm:px-6'
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
              className='flex flex-col gap-4 block-shadow p-5 bg-white-50 xs:p-6 sm:p-8 2xl:p-10'
              onSubmit={handleSubmit}
            >
              {
                form.inputs.map(input => <InputsContainer key={input} name={input} stateForm={dataForm} stateSubmit={submit} handleChange={handleChange} />)
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