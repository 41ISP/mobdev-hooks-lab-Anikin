import { useState } from "react"

const BookForm = () => {
  

  const [bookField, setBooksField] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (bookField.trim().length === 0 || taskField.trim().length > 40) return
        const newTask = {
            id: nanoid(),
            title: taskField.trim()
        }
        setTasks([...books, newBooks])
        setTaskField("")
}

    return (
      <div className="add-book-row">
        <input
          className="input"
          id="bookInput"
          placeholder="Название книги..."
        />
        <button className="btn" id="addBtn">
          Добавить на полку
        </button>
      </div>
)
}
export default BookForm 