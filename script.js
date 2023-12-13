"use strict";
const btnReceita = document.querySelector(".btn-receita");
const entradaValor = document.querySelector(".valor__entrada");
const entradaTipo = document.querySelector(".tipo__entrada");
const itemExtrato = document.querySelector(".extrato__lista");
const saldoEl = document.querySelector(".saldo");

const btnSaida = document.querySelector(".btn-saida");
const saidaValor = document.querySelector(".valor-saida");

const saldo = [];

const sumSaldo = function (array) {
  const somaArray = array.reduce((acc, num) => acc + num);
  saldoEl.textContent = `Saldo: ${somaArray} R$`;
};

btnReceita.addEventListener("click", function (e) {
  e.preventDefault();
  const time = new Date();
  const dia = time.getDay();
  const mes = time.getMonth();
  const ano = time.getFullYear();
  const horas = time.getHours();
  const minutos = time.getMinutes();
  const data = `${dia}/${mes}/${ano} as ${horas}:${minutos}`;
  const html = `
  <div class="novo-item">
    <p><strong>Receita:</strong> ${entradaValor.value}R$ <span class='data-format'> Data:${data}:${minutos}</span></p>
  </div>
  `;

  if (entradaValor.value > 0) {
    saldo.push(Number(entradaValor.value));
    sumSaldo(saldo);
    itemExtrato.insertAdjacentHTML("afterbegin", html);
  }
  entradaValor.value = "";
});

btnSaida.addEventListener("click", function (e) {
  e.preventDefault();
  const time = new Date();
  const dia = time.getDay();
  const mes = time.getMonth();
  const ano = time.getFullYear();
  const horas = time.getHours();
  const minutos = time.getMinutes();
  const data = `${dia}/${mes}/${ano} as ${horas}:${minutos}`;
  const html = `
  <div class="novo-item">
    <p><strong>Despesa:</strong> ${saidaValor.value}R$ <span class='data-format'> Data:${data}:${minutos}</span></p>
  </div>
  `;

  if (saidaValor.value > 0) {
    saldo.push(-Number(saidaValor.value));
    sumSaldo(saldo);
    itemExtrato.insertAdjacentHTML("afterbegin", html);
  }

  saidaValor.value = "";
});
