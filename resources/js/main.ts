import {Filter} from "./Filter";
import {VideoController} from "./VideoController";
import Swiper from 'swiper';
import {settings} from "./settings";
import {SearchForm} from "./SearchForm";
import {GoUpBtn} from "./GoUpBtn";

document.documentElement.classList.add('js');

const url = new URL(window.location.href);

new VideoController();

(new Swiper(".slider-section--news .slider-section__slider", settings.news)).init();
(new Swiper(".categories__slider", settings.categories)).init();
(new Swiper(".course-pictures", settings.course_pictures)).init();

settings.courseSlider.selectors.forEach((selector) => {
    if (document.querySelector(`${selector}`)) {
        new Swiper(`${selector} .slider-section__slider`, settings.courseSlider.generateSwiperSettings(selector));
    }
});

const filter = new Filter(settings.filter, url);
const search = new SearchForm(settings.searchForm, url);

filter.registerAfterFilter(search.searchWithoutFiltering.bind(search));
search.registerAfterSearch(filter.filterWithoutSearch.bind(filter));

new GoUpBtn(settings.goUpBtn);
