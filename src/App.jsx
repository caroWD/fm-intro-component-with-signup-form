import data from './assets/data/data.json'
import LoginSection from './components/Containers/LoginSection'

function App() {

  const { title, copy, promo, form } = data

  return (
    <div
      className="px-6"
    >
      <LoginSection
        title={title}
        copy={copy}
        promo={promo}
        form={form}
      />
    </div>
  )
}

export default App
