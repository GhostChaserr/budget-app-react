import './label-input.styles.css';
import { StyledInput } from './LabelInput.styled'

const LabelInput = (props) => {
  return (
    <div className="label__input__container">
      <label htmlFor={props.id}>{props.text}</label>
      <StyledInput
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