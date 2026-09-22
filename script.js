const form = document.querySelector('#rsvp-form');
const confirmButtons = [...document.querySelectorAll('.choice')];
const companionButtons = [...document.querySelectorAll('.pills button')];
let attending = 'Sim';
let companion = 'Sim';

function selectButton(group, selected) {
  group.forEach(button => button.classList.toggle('selected', button === selected));
}
confirmButtons.forEach(button => button.addEventListener('click', () => {
  attending = button.textContent.includes('SIM') ? 'Sim' : 'Não';
  selectButton(confirmButtons, button);
}));
companionButtons.forEach(button => button.addEventListener('click', () => {
  companion = button.textContent.trim();
  selectButton(companionButtons, button);
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome');
  if (!nome) return;
  const mensagem = data.get('mensagem') || 'Sem mensagem';
  const message = `Olá! Sou ${nome}. ${attending === 'Sim' ? 'Confirmo minha presença' : 'Infelizmente não poderei comparecer'} ao casamento de Nícolas e Ionara. Acompanhante: ${companion}. Mensagem: ${mensagem}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  document.querySelector('#success').hidden = false;
  document.querySelector('#success').classList.add('show');
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.panel').forEach(panel => observer.observe(panel));
