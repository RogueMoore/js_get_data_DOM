'use strict';

const populationData = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...populationData].reduce((total, country) => {
  const clearingString = country.textContent.replaceAll(',', '');

  const toNumber = parseInt(clearingString);

  return total + toNumber;
}, 0);

const totalResult = (totalPopulation.textContent =
  total.toLocaleString('en-us'));

const averageResult = Math.round(total / populationData.length).toLocaleString(
  'en-us',
);

averagePopulation.textContent = averageResult;
