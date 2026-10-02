import CheckBox from '../CheckBox/CheckBox'
import './BookItem.css'

const PALETTE = ["#4f6b52", "#384d68", "#8d5c62", "#9b633e", "#4c4c45", "#536c58"];

export default function BookItem({ book, onDelete, onToggleRead }) 
{
  const coverColor = PALETTE[book.id % PALETTE.length];

  return (
    <div 
    className='book-row'>
      <div 
      className='book-cover' style={{ background: coverColor }}>
        {book.title[0]}
      </div>

      <div 
      className='book-info'>
        <p 
        className={`book-title${book.isRead ? ' done ' : ''}`}>
          {book.title}
        </p>
        <div 
        className='book-author'>{book.author}
        </div>
      </div>

      <CheckBox
        checked={book.isRead}
        onChange={() => onToggleRead(book.id)}
        label="Прочитано"
      />

      <button
        className='delete-btn'
        type='button'
        title="Убрать с полки"
        onClick={() => onDelete(book.id)}
      >
        ✕
      </button>
    </div>
  );
}