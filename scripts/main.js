import { getDataByCount } from './api';
import { format } from 'date-fns';

window.addEventListener('load', () => {
  const contentList = document.querySelector('.content__list');
  const buttons = document.querySelectorAll('.btn');
  fetch('https://wedev-api.sky.pro/api/tasks/random-red')
    .then((res) => res.json())
    .then((data) => {
      document.body.style.backgroundColor = data.color;
    });

  const renderList = (data) => {
    contentList.innerHTML = '';
    data.forEach((dataElem) => {
      contentList.innerHTML += `<li>${format(
        new Date(dataElem.airdate),
        'dd/MM/yyyy hh:mm'
      )} ${dataElem.question}</li>`;
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      contentList.innerHTML = 'Loading...';
      getDataByCount(btn.getAttribute('data-count')).then((data) => {
        renderList(data);
      });
    });
  });
});
