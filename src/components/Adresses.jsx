import React from 'react'
import Adress from './Adress'

const Adresses = ({adress})=>{   
    return (
    <>
    {adress.map((adress) =>( <Adress adress={adress}/>))}   
    </>
    
    )
}
export default Adresses