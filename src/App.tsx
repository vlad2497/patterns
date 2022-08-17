import { Routes } from 'react-router-dom'
import moviesRouter from 'view/pages/movies/router'

const App = () => {
  return (
    <div className="App">
      <Routes>{moviesRouter}</Routes>
    </div>
  )
}

export default App
