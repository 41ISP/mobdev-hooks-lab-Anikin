import './FilterChip.css'

export default function FilterChip ({ isActive, onToggle}) 
{
    return(
        <button
            type='button'
            className={`filter-chip${isActive ? ' active ' : '' }`}
            onClick={onToggle}>
            <span
            className='dot' />
            Только непрочитанные
        </button>
    )
}