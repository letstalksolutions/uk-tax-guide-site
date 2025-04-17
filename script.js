document.getElementById('menu-toggle').addEventListener('click', function () {
    const navList = document.querySelector('nav ul');
    navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});
