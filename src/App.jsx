import { GeneralInfo, EducationInfo, PracticalExperience } from './components/information'
import './App.css'

function App() {
  return (
    <form>
      <GeneralInfo />
      <EducationInfo />
      <PracticalExperience />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
