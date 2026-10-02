import { useState, useEffect } from 'react'
import './App.css' 
import ShelfScreen from './pages/ShelfScreen/ShelfScreen.jsx'
export default function App() {
  const [books, setBooks] = useState([
    {id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', isRead: true},
    {id: 2, title: 'Гарри Поттер', author: 'Джоан Роулинг', isRead: false}, 
  ])

  const [showOnlyUnread, setShowOnlyUnread] = useState(false)
  useEffect(() => 
    {
      document.title = `Shelf - ${books.length} книг`
    } , [books.length])
    const handleAdd = (title) => 
      {
        const newBook = 
        {
          id: Date.now(),
          title,
          author: 'Неизвестный автор',
          isRead: false,
        }
        setBooks(prev => [...prev, newBook]);
      }
      function handleDelete(id)  
        {
          setBooks(prev => prev.filter(book => book.id !== id));
        }
      function handleToggleRead(id) 
      {
        setBooks(prev =>
        prev.map(book =>
          book.id === id ? {...book, isRead: !book.isRead } : book
        )
      )
    }
    function handleToggleFilter () 
      {
        setShowOnlyUnread(prev => !prev)
      }
      return (
        <div
        className="app">
        <ShelfScreen
        books={books}
        showOnlyUnread={showOnlyUnread}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onToggleRead={handleToggleRead}
        onToggleFilter={handleToggleFilter} 
        />
        </div>
      )
    }
