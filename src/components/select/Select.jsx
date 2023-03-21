import './select.css'

const Select = (props) => {
  return (
    <div className="select__container">
      <div>{props.text}</div>
      <select value={props.value} onChange={props.onChange}>
      {props.options.map(option => {
        return (
          <option key={option.id} value={option.value}>{option.label}</option>
        )
      })}
    </select>
    </div>
  )
}

export default Select