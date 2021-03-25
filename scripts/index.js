// настройки https://prog-time.ru/kak-sdelat-animatsiyu-nabora-teksta-na-jquery-obzor-biblioteki-typeit/

$('#prog_time_replay2').typeIt({
      speed: 100,
      loop: true,
      autoStart: false
 })
 .tiType('Системы очистки воды для дома')
 .tiPause(2000)
 .tiDelete(4)
 .tiType('квартиры')
 .tiPause(2000)
 .tiDelete(8)
 .tiType('офиса')
 .tiPause(2000);

$('#prog_time_replay').typeIt({
      speed: 100,
      loop: true,
      autoStart: false
 })
 .tiType('Остались вопросы?')
 .tiPause(2000)
 .tiDelete(17)
 .tiType('Закажи консультацию')
 .tiPause(2000);
