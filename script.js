let Width = document.getElementById('width');
let Height = document.getElementById('height');

Width.textContent = screen.width + 'px';
Height.textContent = screen.height + 'px';

window.addEventListener('resize', function() {
    Width.textContent = screen.width + 'px';
    Height.textContent = screen.height + 'px';
});

