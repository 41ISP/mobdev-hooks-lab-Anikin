import './CheckBox.css';

export default function CheckBox({ checked, onChange, label }) 
{
  return (
    <div
      className={`read-check${checked ? ' checked' : ''}`}
      onClick={onChange}
      role="checkbox"
      aria-checked={checked}
    >
      <span 
      className="check-circle">
        ✓
    </span>
      {label && <span 
      className="read-label">
        {label}</span>}
    </div>
  );
}