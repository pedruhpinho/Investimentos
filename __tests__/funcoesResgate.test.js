import {calculaValorAcao, calculaTotalResgate} from '../src/resgatePersonalizado'

test('Calcula valor da ação sobre montante', () => {
    expect(calculaValorAcao(35000.00,12)).toBe(4200)
})

test('Calcula valor total solicitado para resgate', () => {
    let valores = {
        a: {valorResgateDesejado: 2000.50},
        b: {valorResgateDesejado: 13500.00},
        c: {valorResgateDesejado: 1020.89},
    }
    expect(calculaTotalResgate(valores)).toBe(16521.39)
})