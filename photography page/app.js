const hamburgerButton = document.getElementById('view-work')

function toggleButton(){
	navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

document.querySelectorAll('a[href^="#images"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});