import React, { useEffect, useState } from 'react'
import "./BoxData.style.css"
import {useQuery} from 'react-query'
import axios from 'axios';
import { data_limpa } from '../logic_data/Dia_semana'; 
import sensacao from "../assets/sol_nuvem.svg"
import seta_cima from "../assets/seta_cima.svg"
import seta_baxio from "../assets/seta_baixo.svg"
import sol_nuvem from "../assets/sol_nuvem.svg"
import humidade from "../assets/humidade.svg"
import pressao from "../assets/medidor_pressão.svg"
import vento from "../assets/vento.svg"

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
        
        <div className='container_sol_nuvem_padrao'>
            <figure>
                <img src={sol_nuvem} alt="Sol na nuvem" className='sol_nuvem'/>
            </figure>
            <p>
              {/* {data.list[0].weather[0].main} */}
              {data}
            </p>
        </div>


        {/* Temp.máxima */}
        <div className='temp'>
            <p>35°C</p>
            <figure className='container_seta'>
                {/* imagem */}
                <img src={seta_cima} alt="Seta para cima" className='imagem_seta' />
            </figure>
        </div>
    
        {/* Temperatura fixa */}
        <p className='temp_fixa'>33°C</p>

        {/* Temp. mínima */}
        <div className='temp'>
            <p>30°C</p>
            <figure className='container_seta'>
                {/* imagem */}
                <img src={seta_baxio} alt="Seta para baixo" className='imagem_seta' />
            </figure>
        </div>       

        
        {/* humidade */}
        <div className='container_humidade_padrao'>
          <figure>
              <img src={humidade} alt="imgame/logo de humidade" className='humidade'/>
              <p>49%</p>
              <p className='nome_pequeno'>Humidade</p>
          </figure>
        </div>
        
        {/* pressão */}
        <div className='container_pressao_padrao'>
          <figure>
              <img src={pressao} alt="imgame/logo de aparelho de medir pressão" className='pressao'/>
              <p>1,007mBar</p>
              <p className='nome_pequeno'>Pressão</p>
          </figure>
        </div>

        {/* vento */}
        <div className='container_vento_padrao'>
            <figure>
                <img src={vento} alt="imagem de corrente de vento" className='vento'/>
                <p>23km/h</p>
                <p className='nome_pequeno'>Vento</p>
            </figure>
        </div>
        
        {/* latitude */}
        <div className='container_vento_padrao'>
            <p>23km/h</p>
            <p className='nome_pequeno'>Latitude</p>
        </div>

        {/* logintude */}
        <div className='container_vento_padrao'>
          <p>13</p>
          <p className='nome_pequeno'>Longitude</p>
        </div>
    
        {/* sensação térmica */}
        <div className='container_vento_padrao'>
          <p>14</p>
          <p className='nome_pequeno'>Sensação Térmica</p>
        </div>
      
        
    </div>
  )
}

export default BoxData