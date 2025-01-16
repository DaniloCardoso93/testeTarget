import {
    calcularSoma,
    verificaFibonacci,
    analisarFaturamento,
    calcularPercentual,
    inverterString
} from './exercicios.js'

function verificarFibonacci() {
    const numero = parseInt(document.getElementById('numeroFibonacci').value)
    const resultado = verificaFibonacci(numero)
    document.getElementById('resultadoFibonacci').innerHTML =
        resultado ?
            `${numero} pertence à sequência de Fibonacci!` :
            `${numero} NÃO pertence à sequência de Fibonacci!`
}

function inverterTexto() {
    const texto = document.getElementById('textoInverter').value
    const resultado = inverterString(texto)
    document.getElementById('resultadoInversao').innerHTML =
        `Texto invertido: ${resultado}`
}

window.verificarFibonacci = verificarFibonacci
window.inverterTexto = inverterTexto

window.onload = async function () {
    const soma = calcularSoma()
    document.getElementById('resultadoSoma').innerHTML =
        `O valor da SOMA é: ${soma}`

    try {
        const analise = await analisarFaturamento()
        document.getElementById('resultadoFaturamento').innerHTML =
            `Menor valor: R$ ${analise.menorValor.toFixed(2)}<br>
            Maior valor: R$ ${analise.maiorValor.toFixed(2)}<br>
            Dias acima da média: ${analise.diasAcimaMedia}`
    } catch (error) {
        document.getElementById('resultadoFaturamento').innerHTML =
            'Erro ao carregar dados de faturamento'
    }

    const percentuais = calcularPercentual()
    let tabelaHtml = '<table><tr><th>Estado</th><th>Percentual</th></tr>'
    for (let estado in percentuais) {
        tabelaHtml += `<tr><td>${estado}</td><td>${percentuais[estado]}</td></tr>`
    }
    tabelaHtml += '</table>'
    document.getElementById('resultadoPercentual').innerHTML = tabelaHtml
}