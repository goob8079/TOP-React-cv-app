import { GeneralInfo } from './components/information'
import './App.css'

function App() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
    }}>
      <GeneralInfo />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
