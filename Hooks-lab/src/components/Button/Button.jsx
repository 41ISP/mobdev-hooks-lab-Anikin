export default function Button({ onClick, children, className = "btn" }) 
{
  return (
    <button 
    className={className} 
    type='button' onClick={onClick}>
      {children}
    </button>
  );
}