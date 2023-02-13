import { Routes } from 'react-router-dom'
import moviesRouter from 'view/pages/movies/router'
import packageJson from '../package.json'

// eslint-disable-next-line no-console
console.log('version ', packageJson.version)

const App = () => {
  return (
    <div className="App">
      <Routes>{moviesRouter}</Routes>
    </div>
  )
}

export default App
