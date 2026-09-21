function FilterChip({currentMode, onFilterChange}) 
{
    return
    (
        <div class Name = "Filter-chip">
            <button
            className={currentMode === 'all' ? 'active':''}
            onClick={( ) => onFilterChange('all')}  
            >
                Все книги
            </button>
            <button
            className={currentMode === 'unread' ? 'active' : ''}
            onClick={() => onFilterChange('unread')}
            >
            <span className="dot" />
            Только непрочитанные
            </button>
            <button
            className={currentMode === 'read' ? 'active' : ''}
            onClick={() => onFilterChange('read')}
            >
            <span className = "dot" />
            Только прочитанные
            </button>
        </div>
);    
}
export default FilterChip