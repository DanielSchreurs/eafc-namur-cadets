export const settings = {
    video: {
        videoSeekTime: 0.5,
        selector: 'video',
    },
    searchForm: {
        formSelector: '.search-form',
        inputSelector: '.search-form__input-container__search',
        templateSelector: '#keyboard-template',
        operatingSystemSelector: '#os',
        itemsSelector: '.slider-section--course .slider__slide',
        hiddenClass: 'visually-hidden',
        showClass: 'card--show',
    },
    filter: {
        formSelector: '#filter-form',
        itemSelector: '.slider-section--course .slider__slide',
        showClass: 'card--show',
        hiddenClass: 'visually-hidden',
        categoryInputSelector: '.slider--cat input[type="checkbox"]',
        tagInputSelector: '.tag-filter input[type="checkbox"]',
    },
    goUpBtn: {
        scrollTrigger: 200,
        selector: '.btn--go-up',
        showClass: 'btn--go-up--visible',
        inverseClass: 'btn--secondary',
    },
};
