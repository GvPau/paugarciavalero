function apperText() {
    var introText = document.querySelector('.hobbi')
    var introPosition = introText.getBoundingClientRect().top
    console.log(introPosition);
    var screenPosition = 400;
    var positionToFade = 500;

    if (introPosition < screenPosition) {
        introText.classList.add('hobbi-apper')
    }

    if (introPosition > positionToFade) {
        introText.classList.remove('hobbi-apper')
        introText.classList.add('hobbi')

    }
}

window.addEventListener('scroll', apperText)

