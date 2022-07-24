import React, {useState} from 'react'
import Inputs from './components/inputAll.jsx'
import Title from './components/title.jsx'
import Adresses from './components/Adresses.jsx'
import './App.css'

const App = ()=>{  
  const [adress,setEndress] = useState([
    {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: ''
    }
  ])
  
  const handleAdressAddition = async (inputAdress) =>{
    if(inputAdress === ""){
      alert('Precisa colocar um CEP para prosseguir.')
      return
    }else if(inputAdress.length < 3){
      alert('Precisa usar um CEP válido para prosseguir')
      return
    }else{
      const adress = ""
      const response = await fetch(`https://viacep.com.br/ws/${inputAdress}/json/`)
      .catch(error =>{ 
        alert('CEP incorreto, insira um CEP válido para prosseguir') 
        console.log(error)})
      const data = await response.json()
      const newAdress = [...adress,{
        cep: data.cep,
        logradouro: data.logradouro,
        complemento:data.complemento,
        bairro:data.bairro,
        localidade:data.localidade
      }]
      setEndress(newAdress)
      return
    }
  }
  const input = document.querySelector('.inputText')
  return (
    <div className="main_container">
    <header className="header-content">
      <Title/>
      <Inputs handleAdressAddition={handleAdressAddition}/> 
    </header>  
    { input && ( 
    <main className="main_content">
      <Adresses adress={adress}/>
    </main>
    )} 
    </div>
    )
}


    

export default App