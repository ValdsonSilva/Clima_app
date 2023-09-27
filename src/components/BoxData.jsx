import React, { useEffect, useState } from 'react'
import "./BoxData.style.css"
import {useQuery} from 'react-query'
import axios from 'axios';
import { data_limpa } from '../logic_data/Dia_semana'; 

const key = "923c6f0edf17c6425d91e6f22443e3cd"

const minha_url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`

function BoxData() {

  // const [data, setData] = useState([])
  
  const data = "Valdson"

  // useEffect(() => {
  //     fetch(minha_url)
  //     .then((response) => response.json())
  //     .then((dado) => {
  //       // Responsável por ativar novas requisições
  //       // com base na mudança de estado
  //       setData(dado)
  //     })
  //     .catch((erro) => {console.log(`Algo deu errado ai ${erro}!`)})
  // },
  //   [] // O array vazia fala para o useEffect fazer apenas 1 requizição ao renderizar o componente
  // )

  console.log(data)

  const constante_formula = 237.15 // deslocamento entre as escalas

  // var Temperatura_celsius = ((data.list[0].main.temp) - constante_formula)

  // var Temperatura_maxima = ((data.list[0].main.temp_max) - constante_formula)

  // var Temperatura_minima = ((data.list[0].main.temp_min) - constante_formula)

  return (

    <div className='Boxdata'>
        {/* Nome d.sema, data Mês ano, | hora */}
        <p className='data_app'>{data_limpa}</p>
        {/* País e cidade */}
        <p>
          {/* {data.city.name} */}
          {data}
        </p>
        {/* situação climática */}
        <p>
          {/* {data.list[0].weather[0].main} */}
          {data}
        </p>

        {/* Temp.máxima */}
        <p>Baaa</p>
        {/* Temperatura fixa */}
        <p className='temp_fixa'>33°C</p>
        {/* Temp. mínima */}
        <p>Daaa</p>
        
        {/* humidade */}
        <p>Faaa</p>
        {/* pressão */}
        <p>10</p>
        {/* nivel d.mar */}
        <p>11</p>

        {/* latitude */}
        <p>12</p>
        {/* logintude */}
        <p>13</p>
        {/* sensação térmica */}
        <p>14</p>
        
    </div>
  )
}

export default BoxData