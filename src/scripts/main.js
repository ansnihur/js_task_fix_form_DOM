'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    const label = document.createElement('label');

    label.classList.add('field-label');

    label.setAttribute('for', input.id);

    label.textContent = `${input.name}`.toUpperCase();

    input.setAttribute('placeholder', `${input.name}`);

    const container = input.parentElement;

    container.insertBefore(label, input);
  })
})

