import {VideoController} from "./VideoController";
import Swiper from 'swiper';
import {settings} from "./settings";
import {SearchForm} from "./SearchForm";

new VideoController();

(new Swiper(".slider-section--news .slider-section__slider", settings.news)).init();
(new Swiper(".categories__slider", settings.categories)).init();
(new Swiper(".course-pictures", settings.course_pictures)).init();

settings.courseSlider.selectors.forEach((selector) => {
    if (document.querySelector(`${selector}`)) {
        (new Swiper(`${selector} .slider-section__slider`, settings.courseSlider.generateSwiperSettings(selector))).init();
    }
});

new SearchForm();
