
import './filters.css';

import LabelInput from '../label-input/LabelInput';
import { useState } from 'react';
import Select from '../select/Select';


const Filters = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [minAmount, setMinAmount] = useState(undefined);
  const [maxAmount, setMaxAmount] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState();
  const onSelectedDate = (e) => setSelectedDate(e.target.value);
  const onMinAmountChange = (e) => setMinAmount(e.target.value);
  const onMaxAmountChange = (e) => setMaxAmount(e.target.value);
  const onCategoryChange = (e) => setSelectedCategory(e.target.value);

  const onFiltersSubmit = () => {

    const minAmountInt = parseFloat(minAmount)
    const maxAmountInt = parseFloat(maxAmount);

    console.log({ minAmountInt, maxAmountInt, selectedCategory, selectedDate })


    // console.log({
    //   selectedDate,
    //   parseFloat(minAmount),
    //   maxAmount,
    //   selectedCategory
    // })
  }

  const options = [
    {
      id: 1,
      label: 'Shopping',
      value: 'shopping'
    },
    {
      id: 2,
      label: 'Invoice',
      value: 'invoice'
    }
  ]

  return (
    <div className='filters__container'>
      <LabelInput
        id={1}
        text='Expense creation date'
        type={'date'}
        name={'date-filter'}
        value={selectedDate}
        onChange={onSelectedDate}
      />
      <div>
        <Select
          value={selectedCategory}
          text='Select Category'
          options={options}
          onChange={onCategoryChange}
        />
      </div>
      <div className='amount__filters_container'>
        <LabelInput
          id={3}
          text='Enter min amount'
          type={'amount'}
          name={'amount-min-filter'}
          value={minAmount}
          onChange={onMinAmountChange}
        />
        <LabelInput
          id={4}
          text='Enter max amount'
          type={'amount'}
          name={'amount-max-filter'}
          value={maxAmount}
          onChange={onMaxAmountChange}
        />
      </div>
      <div className='apply__button__container'>
        <button onClick={onFiltersSubmit} className='apply__button'>Apply</button>
      </div>
    </div>
  )
}

export default Filters;