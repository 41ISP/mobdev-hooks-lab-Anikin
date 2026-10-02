import BookItem from '../BookItem/BookItem'
import './BookList.css'

export default function BookList({ books, onDelete, onToggleRead }) 
{
  if (books.length === 0) 
  {
    return <div className="book-list empty">На полке пока нет книг</div>;
  }

  return (
    <div 
    className="book-list" id="bookList">
      {books.map(book => (
        <BookItem
          key={book.id}
          book={book}
          onDelete={onDelete}
          onToggleRead={onToggleRead}
        />
      )
    )
  }
    </div>
  );
}