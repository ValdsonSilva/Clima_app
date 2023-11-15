import React, { useEffect, useState } from 'react'
import "./BoxData.style.css"
import {useQuery} from 'react-query'
import axios from 'axios';
import { data_limpa } from '../logic_data/Dia_semana'; 
import seta_cima from "../assets/seta_cima.svg"
import seta_baxio from "../assets/seta_baixo.svg"
import sol_nuvem from "../assets/sol_nuvem.svg"
import humidade from "../assets/humidade.svg"
import pressao from "../assets/medidor_pressão.svg"
import vento from "../assets/vento.svg"
import noite_vento from "../assets/noite_vento.svg"

const key = "923c6f0edf17c6425d91e6f22443e3cd"

// const minha_url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`

function BoxData() {

  const [city, setCity] = useState('Moscow')

  // atualiza o state de city
  const HandleCityChange = (event) => {
      setCity(event.target.value)
  }
  
  // const minha_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`;
  // const minha_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  const minha_url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`


  // const [dados] = useState([])

  const {data, isFetching, isError} = useQuery(['dados'], async () => {
      try {
          const response = await axios.get(minha_url)
          return response.data

      }catch(error) {
          throw error
          console.log(error)
      }
        
  },{
    // Garante que os dados sejam atualizados ao retornar para tela
    refetchOnWindowFocus:true, 
    // Tempo que o código vai esperar para fazer uma nova requisição
    staleTime: 1000 * 6,
  })

  console.log(data)
  console.log(typeof(data))

  var Temperatura_celsius, Temperatura_maxima, Temperatura_minima, Sensacao_termica;

  //verificando se data != Null
  if (!data){

    // window.alert("Dados indisponíveis!")
     
    return <h1>Dados indisponíveis!</h1>

  } else {
    
    const constante_formula = 237.15 // deslocamento entre as escalas
    const main = data.list?.[0]?.main; // list -> [0] -> main

    if (!main){
        console.log("erro no main!" + '\t' + main)
        return <h1>Dados indisponíveis!</h1>
    }

    Temperatura_celsius = ((main.temp) - constante_formula).toFixed(0)
    Temperatura_maxima = ((main.temp_max) - constante_formula).toFixed(0)
    Temperatura_minima = ((main.temp_min) - constante_formula).toFixed(0)
    Sensacao_termica =  ((main.feels_like) - constante_formula).toFixed(0)

      // se estiver carregando
    if (isFetching){

      return <h1>Carregando dados...</h1>

    // se deu erro
    }else if (isError){

      return <h1>Erro na consulta!</h1>

    // se deu certo
    }else {

      return (

          <div className='Boxdata'>
              {/* Nome d.sema, data Mês ano, | hora */}
              <p className='data_app'>{data_limpa}</p>

              {/* País e cidade */}
              {data && (
                <>
                  <p id='country'>{data.city.name}</p>
                  {/* <input type="text" value={city} onChange={HandleCityChange}></input> */}
                  {/* {pais} */}
                </>
              )}
        
              {/* situação climática */}
              
              <div className='container_sol_nuvem_padrao'>
                  <figure>
                      {/* Esse código abaixo será usado no fim */}
                      <img 
                      src={(data.list[0].weather[0].main) === 'sunny' ? sol_nuvem : noite_vento}

                      alt={(data.list[0].weather[0].main) === 'sunny' ? 'Sol na nuvem' : 'Lua na nuvem'} 

                      className='sol_nuvem'/>
                      {/* <img src={sol_nuvem } alt="Sol na nuvem" className='sol_nuvem'/> */}
                  </figure>
      
                  {data && (
                    <p>{data.list[0].weather[0].main}</p>
                    // {data}
                  )}
              </div>
      
      
              {/* Temp.máxima */}
              <div className='temp'>
                  <p>{Temperatura_maxima}°C</p>
                  <figure className='container_seta'>
                      {/* imagem */}
                      <img src={seta_cima} alt="Seta para cima" className='imagem_seta' />
                  </figure>
              </div>
          
              {/* Temperatura fixa */}
              <p className='temp_fixa'>{Temperatura_celsius}°C</p>
      
              {/* Temp. mínima */}
              <div className='temp'>
                  <p>{Temperatura_minima}°C</p>
                  <figure className='container_seta'>
                      {/* imagem */}
                      <img src={seta_baxio} alt="Seta para baixo" className='imagem_seta' />
                  </figure>
              </div>       
      
              
              {/* humidade */}
              <div className='container_humidade_padrao'>
                <figure>
                    <img src={humidade} alt="imgame/logo de humidade" className='humidade'/>
                    {data && (
                        <p>{data.list[0].main.humidity}</p>
                    )}
                    <p className='nome_pequeno'>Humidade</p>
                </figure>
              </div>
              
              {/* pressão */}
              <div className='container_pressao_padrao'>
                <figure>
                    <img src={pressao} alt="imgame/logo de aparelho de medir pressão" className='pressao'/>
                    {data && (
                        <p>{data.list[0].main.pressure}mBar</p>
                    )}
                    <p className='nome_pequeno'>Pressão</p>
                </figure>
              </div>
      
              {/* vento */}
              <div className='container_vento_padrao'>
                  <figure>
                      <img src={vento} alt="imagem de corrente de vento" className='vento'/>
                      {data && (
                          <p>{data.list[0].wind.speed}km/h</p>
                      )}
                      <p className='nome_pequeno'>Vento</p>
                  </figure>
              </div>
              
              {/* latitude */}
              <div className='container_vento_padrao'>
                  {data && (
                      <p>{data.city.coord.lat}</p>
                  )}
                  <p className='nome_pequeno'>Latitude</p>
              </div>
      
              {/* logintude */}
              <div className='container_vento_padrao'>
                {data && (
                    <p>{data.city.coord.lon}</p>
                )}
                <p className='nome_pequeno'>Longitude</p>
              </div>
          
              {/* sensação térmica */}
              <div className='container_vento_padrao'>
                {Sensacao_termica}°C
                <p className='nome_pequeno'>Sensação Térmica</p>
              </div>
            
              
          </div>
        )
    }
  }
}

export default BoxData