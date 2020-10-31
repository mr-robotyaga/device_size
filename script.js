let Width = document.getElementById('width');
let Height = document.getElementById('height');
Width.textContent = window.outerWidth + 'px';
Height.textContent = window.outerHeight + 'px';

window.addEventListener('resize', function() {
    Width.textContent = window.outerWidth + 'px';
    Height.textContent = window.outerHeight + 'px';
});