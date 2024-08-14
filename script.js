setInterval(() => {
  const date = new Date();
  const hourTime = date.getHours();
  const minuteTime = date.getMinutes();
  const secondTime = date.getSeconds();

  const hourRotation = 30 * hourTime + minuteTime / 2;
  const minuteRotation = 6 * minuteTime;
  const secondRotation = 6 * secondTime;

  const hour = document.getElementById('hour');
  const minute = document.getElementById('minute');
  const second = document.getElementById('second');

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
