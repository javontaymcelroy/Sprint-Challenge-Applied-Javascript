class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.rightButton = document.querySelector('.right-button');
        this.leftButton = document.querySelector('.left-button');
        this.images = document.querySelectorAll('.carousel img');

        this.currentIndex = 0;
        this.currentImage = this.images[this.currentIndex];
        this.currentImage.getElementsByClassName.display = 'block';
        this.rightButton.addEventListener('click', () => this.nextImage());
        this.leftButton.addEventListener('click', () => this.previousImage());
    }
    
    previousImage() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach(image => image.style.display = 'none');
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 3;
        }
        if (this.currentIndex > 3) {
            this.currentIndex = 0;
        }
        this.images[this.currentIndex].style.display = 'block';
    }
    
    nextImage() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach(image => image.style.display = 'none');
        this.currentIndex += 1;
        if (this.currentIndex < 0) {
            this.currentIndex = 3;
        }
        if (this.currentIndex > 3) {
            this.currentIndex = 0;
        }
        this.images[this.currentIndex].style.display = 'block';
    }
}

let carousel = document.querySelector('.carousel');
carousel.forEach(carousel => new Carousel(carousel));