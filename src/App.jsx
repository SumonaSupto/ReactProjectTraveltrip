
import { RouterProvider } from 'react-router-dom'
import './App.css'
import MainRoutes from './component/routes/MainRoutes'

function App() {
  

  return (
    <>
      <RouterProvider router={MainRoutes}></RouterProvider>
    </>
  )
}

export default App
