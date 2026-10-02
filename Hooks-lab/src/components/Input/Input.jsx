export default function Input({ value, onChange, onKeyDown, placeholder }) 
{
  return (
    <input
      className='input'
      type='text'
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  )
}