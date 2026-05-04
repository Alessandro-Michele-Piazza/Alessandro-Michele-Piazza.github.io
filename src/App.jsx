
import './App.css'
import { RouterProvider } from 'react-router'
import router from './router/router';


export default function App() {

  return (
    <>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </>
  )
}