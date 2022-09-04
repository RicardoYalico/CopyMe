document.oncopy = event =>{
  event.preventDefault();
  event.clipboardData.setData('text/plain', 'Que pasho V:')
}
