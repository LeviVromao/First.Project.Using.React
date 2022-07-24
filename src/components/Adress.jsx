import React from "react"

const Adress = ({adress}) =>{
    return (
        <>
        <p>{adress.cep}</p>
        <p>{adress.logradouro}</p>
        <p>{adress.bairro}</p>
        <p>{adress.complemento}</p>
        <p>{adress.localidade}</p>
        </>
    )
}

export default Adress