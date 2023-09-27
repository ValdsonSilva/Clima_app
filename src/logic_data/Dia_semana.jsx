const Dia_semana = new Date();

const DataFormatada = Dia_semana.toString()

const indiceInicio = DataFormatada.indexOf("GMT-0300 (Hora padrão de Brasília)")

/*  O método substring da classe String extrai os caracteres 
    que desejamos que esteja na string
    de descarta o resto  
    const var = String.substring(string_que_fica, string_que_some).trim()*/
export const data_limpa = DataFormatada.substring(0, indiceInicio).trim()



