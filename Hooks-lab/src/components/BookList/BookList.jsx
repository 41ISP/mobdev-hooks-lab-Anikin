import BookItem from "./BookItem"

const BookList = () => {
    return (
    <div className="book-list" id="bookList">
        <BookItem/>
        { <div className="book-row" data-id={1}>
          <div className="book-cover" style={{ background: "#4f6b52" }}>
            К
          </div>
          <div className="book-info">
            <p className="book-title done">Клара и Солнце</p>
            <div className="book-author">Кадзуо Исигуро</div>
          </div>
          <div
            className="read-check checked"
            onClick={()=> onToggleRead(book.id)}
            <span className="check-circle">✓</span>
            <span className="read-label">Прочитано</span>
          </div>
          <button
            className="delete-btn"
            onClick={()=> onDelete(book.id)}
            title="Убрать с полки"
          > 
          ✕
          </button>
        </div>

)
}
export default BookList 