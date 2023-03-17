import { Routes } from 'react-router-dom'
import moviesRouter from 'pages/movies/router'

// eslint-disable-next-line no-console
console.log('version ', process.env.REACT_APP_VERSION)

const App = () => {
  return (
    <div className="App">
      <Routes>{moviesRouter}</Routes>
    </div>
  )
}

export default App
