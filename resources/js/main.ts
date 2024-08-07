import {Filter} from "./Filter";
import {VideoController} from "./VideoController";
import {settings} from "./settings";
import {SearchForm} from "./SearchForm";
import {GoUpBtn} from "./GoUpBtn";

document.documentElement.classList.add('js');

const url = new URL(window.location.href);

new VideoController();

const filter = new Filter(settings.filter, url);
const search = new SearchForm(settings.searchForm, url);

filter.registerAfterFilter(search.searchWithoutFiltering.bind(search));
search.registerAfterSearch(filter.filterWithoutSearch.bind(filter));

new GoUpBtn(settings.goUpBtn);
