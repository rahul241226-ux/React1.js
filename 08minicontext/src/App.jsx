
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider>
      <h1>React with Rahul</h1>
    <Login/>
  
    <Profile/>
    </UserContextProvider>
  )
}

export default App
