import './label-input.styles.css';

const LabelInput = (props) => {
  return (
    <div className="label__input__container">
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default LabelInput;