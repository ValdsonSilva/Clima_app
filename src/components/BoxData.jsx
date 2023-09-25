import React, { useEffect, useState } from 'react'
import "./BoxData.style.css"
import {useQuery} from 'react-query'
import axios from 'axios';

const key = "923c6f0edf17c6425d91e6f22443e3cd"

const minha_url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`

function BoxData() {

  const [data, setData] = useState([])


  setTimeout(useEffect(() => {
      fetch(minha_url)
      .then((response) => response.json())
      .then((dado) => {
        setData(dado)
      })
      .catch((erro) => {console.log(`Algo deu errado ai ${erro}!`)})
  },
    [] // O array vazia fala para o useEffect fazer apenas 1 requizição ao renderizar o componente
  ), 0.6)

  console.log(data)


  // const dado = fetch(minha_url)
  // .then((resp) => resp.json())
  // .then((data) => {
  //     //  setData(dado);
  //     return data
  // })
  // .catch((erro) => console.log(`Erro na busca pelos dados!\n${erro}`))

  // console.log(dado)
 
  return (

    <div className='Boxdata'>
        {/* {props.children} */}
        {/* {consumo_api()} */}
        <p>Data</p>
        <p>Localidae</p>
        <p>Aaaaa</p>
        <p>Baaa</p>
        <p>Caaa</p>
        <p>Daaa</p>
        <p>Faaa</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        
    </div>
  )
}

export default BoxData