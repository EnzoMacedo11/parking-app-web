export default function dateFormat(dataString) {
    const data = new Date(dataString);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    //const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const diaFormatado = dia < 10 ? `0${dia}` : dia;
    const mesFormatado = mes < 10 ? `0${mes}` : mes;
    const horaFormatada = hora < 10 ? `0${hora}` : hora;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;
    return `${diaFormatado}/${mesFormatado} - ${horaFormatada}:${minutosFormatados}`;
  }