// EXERCICIO 01
export function calcularSoma() {
    let INDICE = 13
    let SOMA = 0
    let K = 0

    for (let K = 1; K <= INDICE; K++) {
        SOMA = SOMA + K
    }

    return SOMA
}

// EXERCICIO 2
export function verificaFibonacci(numero) {
    if (numero === 0 || numero === 1) return true

    let a = 0
    let b = 1
    let fibonacci

    for (fibonacci = a + b; fibonacci <= numero; fibonacci = a + b) {
        if (fibonacci === numero) return true
        a = b
        b = fibonacci
    }

    return false
}

// EXERCICIO 3
export async function analisarFaturamento() {
    try {
        const response = await fetch('dados.json')
        if (!response.ok) throw new Error('Erro ao carregar o arquivo JSON')

        const dados = await response.json()
        const diasUteis = dados.filter(dia => dia.valor > 0)

        let menorValor = diasUteis[0].valor
        let maiorValor = diasUteis[0].valor
        let somaValores = 0

        for (let i = 0; i < diasUteis.length; i++) {
            const valor = diasUteis[i].valor
            if (valor < menorValor) menorValor = valor
            if (valor > maiorValor) maiorValor = valor
            somaValores += valor
        }

        const mediaMensal = somaValores / diasUteis.length

        let diasAcimaMedia = 0
        for (let i = 0; i < diasUteis.length; i++) {
            if (diasUteis[i].valor > mediaMensal) {
                diasAcimaMedia++
            }
        }

        return {
            menorValor,
            maiorValor,
            diasAcimaMedia
        }
    } catch (error) {
        console.error('Erro na análise de faturamento:', error)
        throw error
    }
}

// EXERCICIO 4
export function calcularPercentual() {
    const faturamento = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    }

    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0)
    const percentuais = {}

    for (let estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2) + '%'
    }

    return percentuais
}

// EXERCICIO 5
export function inverterString(str) {
    let resultado = ''

    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]
    }

    return resultado
}

