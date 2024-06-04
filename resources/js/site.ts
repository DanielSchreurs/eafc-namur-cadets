import {VideoController} from "./VideoController";
import Swiper from 'swiper';
import {setting} from "./setting";
// import Swiper and modules styles

new VideoController();
const news = new Swiper(".news__slider", setting.news);
const categories = new Swiper(".categories__slider", setting.categories);


news.init();
categories.init();
