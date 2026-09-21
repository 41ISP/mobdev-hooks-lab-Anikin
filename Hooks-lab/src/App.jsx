import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' 
// import ShelfScreen from './components/ShelfScreen/'
  const [books, setBooks] = useState([
    {id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', isRead: true},
    {id: 2, title: 'Гарри Поттер', author: Джоан Роулинг, isRead: false} 
  ])
  

  const App = () => {
  return 
  (
    <div className="app">

    </div>
  )
}
export default App
