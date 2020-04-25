const typeWriter = function (txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Init Method
typeWriter.prototype.type = function () {
    //Current index of words
    const current = this.wordIndex % this.words.length;

    //Get full text of current word
    const fulltxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
        // Remove char
        this.txt = fulltxt.substring(0, this.txt.length - 1)
    } else {
        // Add char
        this.txt = fulltxt.substring(0, this.txt.length + 1)
    }

    // Inset txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    // Initial Speed
    let typeSpeed = 200

    if (this.isDeleting) {
        typeSpeed /= 2
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
        // Make pause at end
        typeSpeed = this.wait

        //Set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 250;
    }

    setTimeout(() => this.type(), typeSpeed)

}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init)

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait');

    new typeWriter(txtElement, words, wait)

}