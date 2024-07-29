import {A11y, Keyboard, Navigation, Pagination} from 'swiper/modules';

export const settings = {
    video: {
        videoSeekTime: 0.5,
        selector: 'video',
    },
    news: {
        modules: [Navigation, Pagination, Keyboard, A11y],
        slidesPerView: 1.1,
        spaceBetween: 16,
        loop: false,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.slider-section--news .swiper-button-next',
            prevEl: '.slider-section--news .swiper-button-prev',
        },
        pagination: {
            el: ".slider-section--news .swiper-pagination",
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 2.2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        },
        a11y: {
            enabled: true,
            paginationBulletMessage: 'Aller à l’actualité {{index}}',
            containerMessage: 'La liste de toutes les actualités',
            prevSlideMessage: 'Actualité précédente',
            nextSlideMessage: 'Actualité suivante',
            firstSlideMessage: 'Première actualité',
            lastSlideMessage: 'Dernière actualité',
        }
    },
    courseSlider: {
        selectors: ['.slider-section--course-si', '.slider-section--course-ss', '.slider-section--course-stc'],
        generateSwiperSettings: (selector: string) => {
            return {
                modules: [Navigation, Pagination, Keyboard, A11y],
                slidesPerView: 1.1,
                spaceBetween: 16,
                loop: false,
                slidesOffsetBefore: 16,
                navigation: {
                    nextEl: `${selector} .swiper-button-next`,
                    prevEl: `${selector} .swiper-button-prev`,
                },
                pagination: {
                    clickable: true
                },
                breakpoints: {
                    600: {
                        slidesPerView: 2.2,
                    },
                    1200: {
                        slidesPerView: 3.2,
                    },
                    1400: {
                        slidesPerView: 4.2,
                    },
                    1900: {
                        slidesPerView: 4.0,
                        slidesOffsetBefore: 0,
                    },
                },
                a11y: {
                    enabled: true,
                    paginationBulletMessage: 'Aller à la formation {{index}}',
                    containerMessage: 'La liste de toutes les formations',
                    prevSlideMessage: 'Formations précédente',
                    nextSlideMessage: 'Formations suivante',
                    firstSlideMessage: 'Première formation',
                    lastSlideMessage: 'Dernière formation',
                }
            }
        }
    },

    categories: {
        modules: [Navigation, Pagination, Keyboard, A11y],
        slidesPerView: 1.3,
        spaceBetween: 16,
        loop: false,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.categories .swiper-button-next',
            prevEl: '.categories .swiper-button-prev',
        },
        pagination: {
            el: ".categories .swiper-pagination",
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 3.2,
                spaceBetween: 30
            },
            600: {
                slidesPerView: 4.2,
                spaceBetween: 40
            },
            1400: {
                slidesPerView: 7,
                spaceBetween: 20
            }
        },
        a11y: {
            enabled: true,
            paginationBulletMessage: 'Aller à la catégorie {{index}}',
            containerMessage: 'La liste de toutes les catégories de nos formations',
            prevSlideMessage: 'Catégorie précédente',
            nextSlideMessage: 'Catégorie suivante',
            firstSlideMessage: 'Première catégorie',
            lastSlideMessage: 'Dernière catégorie',
        }
    },
    course_pictures: {
        modules: [Navigation, Pagination, Keyboard, A11y],
        slidesPerView: 4.3,
        spaceBetween: 16,
        loop: true,
        keyboard: {
            enabled: true,
        },
        navigation: {
            nextEl: '.course-pictures .swiper-button-next',
            prevEl: '.course-pictures .swiper-button-prev',
        },
        pagination: {
            el: '.course-pictures .swiper-pagination',
            clickable: true
        },
        a11y: {
            enabled: true,
            paginationBulletMessage: 'Aller à l’image {{index}}',
            containerMessage: 'La liste de toutes les images de nos formations',
            prevSlideMessage: 'Image précédente',
            nextSlideMessage: 'Image suivante',
            firstSlideMessage: 'Premièr image',
            lastSlideMessage: 'Dernière image',
        }
    },
    searchForm: {
        formSelector: '.search-form',
        inputSelector: '.search-form__input-container__search',
        templateSelector: '#keyboard-template',
        operatingSystemSelector: '#os',
        itemsSelector: '.card--course',
        hiddenClass: 'visually-hidden',
        showClass: 'card--show',
    },
    filter: {
        formSelector: '#filter-form',
        itemSelector: '.card--course',
        showClass: 'card--show',
        hiddenClass: 'visually-hidden',
        categoryInputSelector: '.categories__slider input[type="checkbox"]',
        tagInputSelector: '.tag-filter input[type="checkbox"]',
    },

};
