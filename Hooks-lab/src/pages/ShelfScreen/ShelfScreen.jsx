import BookForm from '../../components/BookForm/BookForm'
import BookList from '../../components/BookList/BookList'
import FilterChip from '../../components/FilterChip/FilterChip'
import './ShelfScreen.css'

export default function ShelfScreen({
  books,
  showOnlyUnread,
  onAdd,
  onDelete,
  onToggleRead,
  onToggleFilter,
}) {
  const visibleBooks = showOnlyUnread
    ? books.filter(book => !book.isRead)
    : books;

  return (
    <section className='screen active' id='screen-shelf'>
      <p className='greeting'>Добрый вечер</p>

      <BookForm onAdd={onAdd} />

      <div className='list-toolbar'>
        <span className='toolbar-title'>Книги</span>
        <FilterChip isActive={showOnlyUnread} onToggle={onToggleFilter} />
      </div>

      <BookList
        books={visibleBooks}
        onDelete={onDelete}
        onToggleRead={onToggleRead}
      />
    </section>
  );
}