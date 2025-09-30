document.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const saludo = hour < 12 ? '¡Buenos días!' :
                 hour < 18 ? '¡Buenas tardes!' : '¡Buenas noches!';
  console.log(saludo);
});
