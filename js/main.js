const sliderData = [
    {
        title: 'Умная колонка',
        discountTitle: 'скидка 30%',
        discountInfo: 'при покупке второго товара',
        img: './images/slider-img/alisa.svg'
    },
    {
        title: 'Умная колонка 2',
        discountTitle: 'скидка 30%',
        discountInfo: 'при покупке второго товара',
        img: './images/slider-img/alisa.svg'
    }
];

// const $slider = document.querySelector('#slider-main');
    

    // const $sliderContent = document.createElement('div');
    // $sliderContent.classList.add('slider-content');
    // const $sliderInfo = document.createElement('div');
    // $sliderInfo.classList.add('slider__info')

    // RENDER

const $sliderContainer = document.querySelector('.slider-container')   

let firstSlider = sliderData;

for (let slider of sliderData) {
  const $sliderContent = document.createElement('div'),
       $sliderInfo = document.createElement('div'),
        $titleTextSliderMainText = document.createElement('h1'),
        $sliderDiscountElement = document.createElement('h2'),
        $sliderDiscountTextInfo = document.createElement('p'),
        $imagesSlider = document.createElement('div');
        

        $sliderContent.classList.add('slider-content');
        $titleTextSliderMainText.classList.add('slider__title');
        $sliderDiscountElement.classList.add('slider__discount');
        $sliderDiscountTextInfo.classList.add('slider__discount-text');
        $imagesSlider.classList.add('slider__img');
        $sliderInfo.classList.add('slider__info');
        

        $titleTextSliderMainText.textContent = slider.title;
        $sliderDiscountElement.textContent = slider.discountTitle;
        $sliderDiscountTextInfo.textContent = slider.discountInfo;

        $sliderContainer.append($sliderContent)
        $sliderContent.append($sliderInfo)

        $sliderInfo.append($titleTextSliderMainText)
        $sliderInfo.append($sliderDiscountElement);
        $sliderInfo.append($sliderDiscountTextInfo);
        $sliderContent.append($imagesSlider)
}

const mainSlider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(mainSlider.querySelector('.slider-content'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
};

function showNextSlide() {
  slideIndex= (slideIndex + 1) % slideCount;
  updateSlider();
};

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none'
    }
  })
}

updateSlider();
console.log(slides);