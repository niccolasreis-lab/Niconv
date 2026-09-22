const form = document.querySelector('#rsvp-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome');
  const convidados = data.get('convidados');
  const message = `Olá! Sou ${nome} e confirmo minha presença no casamento de Nícolas e Ionara. Estaremos em ${convidados} pessoa(s).`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  document.querySelector('#success').hidden = false;
  form.reset();
});
