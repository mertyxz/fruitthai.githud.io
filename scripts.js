
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for your buying!');
});

document.getElementById('cta-button2').addEventListener('click', function() {
    alert('Thank you for your buying!');
});

document.getElementById('cta-button3').addEventListener('click', function() {
    alert('Thank you for your buying!');
});

document.getElementById('cta-button4').addEventListener('click', function() {
    alert('Thank you for your buying!');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});