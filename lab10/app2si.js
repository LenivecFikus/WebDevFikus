//setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

// повторить с интервалом 2 секунды
let timerId = setInterval(() => console.log('hello'), 2000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); console.log('bye'); }, 5000);
