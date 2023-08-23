# Desafio: DioBank

- [ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

  1. Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  2. Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

- [ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount

  1. Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  2. Apenas contas com o status true podem fazer empréstimo

- [ ] Criar um novo tipo de conta a partir da DioAccount

  1. Esta conta não deve receber novos atributos
  2. Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

- [ ] Todos os atributos de qualquer conta devem ser privados
- [ ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente
- [ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.
