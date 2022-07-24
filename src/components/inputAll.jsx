import React, {useState} from 'react'
import Button from './InputButton'
import './inputText.css'
const InputText = ({handleAdressAddition})=>{
    const [inputData,setInput] = useState('')
    const handleSearchInput = (e) =>{
        setInput(e.target.value)
    }

   const handleButtonClick = ()=>{
    handleAdressAddition(inputData)

   }

    return(
        <>
        <input type="text" 
        className='inputText'
        placeholder="Cole seu cep aqui.."
        value={inputData}
        onChange={handleSearchInput}>
        </input>
        <Button onClick={handleButtonClick}>BUSCAR</Button>
       </>
    ) 
}

export default InputText