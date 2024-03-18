import React, { useContext } from 'react'
import { NumberContext } from './NumberProvider'

const FunctionButton = ({buttonValue}) => {
  const {handleSetCalcFunction}=useContext(NumberContext)
  return (
    <button type='button' className='function-button' onClick={(e)=>handleSetCalcFunction(buttonValue,e)}>{buttonValue}</button>
  )
}

export default FunctionButton