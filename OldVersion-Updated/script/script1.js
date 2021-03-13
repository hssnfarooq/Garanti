document.getElementById('btn').addEventListener('click', function () {
  const name = document.getElementById('customer').value;
  const time = new Date();
  const turkTime = (time.toLocaleString('tr-TR') + '<br>');
  localStorage.setItem('userName', name);
  localStorage.setItem('Date', turkTime);
});
