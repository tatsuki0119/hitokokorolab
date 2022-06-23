'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const menu01 = document.querySelector('.menu01');
  const menu02 = document.querySelector('.menu02');
  const menu03 = document.querySelector('.menu03');
  const menu04 = document.querySelector('.menu04');
  const menu05 = document.querySelector('.menu05');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  menu01.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  menu02.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  menu03.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  menu04.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  menu05.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}