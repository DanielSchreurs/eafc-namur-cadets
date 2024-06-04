import {A11y, Keyboard, Navigation, Pagination} from 'swiper/modules';

export const setting = {
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
            nextEl: '.news .swiper-button-next',
            prevEl: '.news .swiper-button-prev',
        },
        pagination: {
            el: ".news .swiper-pagination",
            clickable: true
        },
        breakpoints: {
            480: {
                slidesPerView: 2.2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40
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
    categories: {
        modules: [Navigation, Pagination, Keyboard, A11y],
        slidesPerView: 1.2,
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
            800: {
                slidesPerView: 5,
                spaceBetween: 40
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
    }
};
