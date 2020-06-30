var div = document.getElementById('test');

var color = prompt('Введите новый цвета');
div.style.background = color;
var radius = prompt('Введите новый радиус');
radius += 'px';
div.style.borderRadius = radius;
