export const inputIsFailed = (inputRef, iconFailRef, messageFailRef) => {
  inputRef.current.classList.remove('border', 'border-white-300', 'placeholder:text-white-300')
  inputRef.current.classList.add('border-2', 'border-geraldine-400', 'placeholder:text-geraldine-400')
  iconFailRef.current.classList.remove('hidden')
  messageFailRef.current.classList.remove('hidden')
}

export const inputIsFailedReset = (inputRef, iconFailRef, messageFailRef) => {
  inputRef.current.classList.add('border', 'border-white-300', 'placeholder:text-white-300')
  inputRef.current.classList.remove('border-2', 'border-geraldine-400', 'placeholder:text-geraldine-400')
  iconFailRef.current.classList.add('hidden')
  messageFailRef.current.classList.add('hidden')
}

export const inputEmailIsFailed = (inputRef, iconFailRef, messageFailRef, messageEmailFailRef) => {
  inputRef.current.classList.remove('border', 'border-white-300', 'placeholder:text-white-300')
  inputRef.current.classList.add('border-2', 'border-geraldine-400', 'placeholder:text-geraldine-400', 'text-geraldine-400', 'font-semibold')
  iconFailRef.current.classList.remove('hidden')
  messageFailRef.current.classList.add('hidden')
  messageEmailFailRef.current.classList.remove('hidden')
}

export const inputEmailIsFailedReset = (inputRef, iconFailRef, messageFailRef, messageEmailFailRef) => {
  inputRef.current.classList.add('border', 'border-white-300', 'placeholder:text-white-300')
  inputRef.current.classList.remove('border-2', 'border-geraldine-400', 'placeholder:text-geraldine-400', 'text-geraldine-400', 'font-semibold')
  iconFailRef.current.classList.add('hidden')
  messageFailRef.current.classList.remove('hidden')
  messageEmailFailRef.current.classList.add('hidden')
}

export const inputIsChecked = (iconCheckRef) => {
  iconCheckRef.current.classList.remove('hidden')
}

export const inputIsCheckedReset = (iconCheckRef) => {
  iconCheckRef.current.classList.add('hidden')
}