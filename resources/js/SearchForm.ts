import {settings} from "./settings";

export class SearchForm {
    private readonly form: HTMLFormElement;
    private readonly input: HTMLInputElement;
    private readonly keyboardTemplate: HTMLTemplateElement;
    private hasKeyboard = false;
    private isMacos: boolean = false;

    constructor() {
        this.form = document.querySelector(settings.searchForm.selector) as HTMLFormElement;
        this.input = document.querySelector(settings.searchForm.inputSelector) as HTMLInputElement;
        this.keyboardTemplate = document.querySelector(settings.searchForm.templateSelector) as HTMLTemplateElement;
        if (this.form && this.input) {
            this.insertHTMLTemplate();
            this.addEventListeners();
        }
    }

    private addEventListeners() {
        if (this.hasKeyboard) {
            window.addEventListener('keydown', (e) => {
                if ((e.key === 'k' && e.ctrlKey && !this.isMacos) || (e.key === 'k' && e.metaKey && this.isMacos)) {
                    e.preventDefault();
                    this.input.focus();
                }
            });
        }
    }

    private insertHTMLTemplate() {
        const htmlElements = this.keyboardTemplate.content.cloneNode(true);
        htmlElements.childNodes.forEach((element: HTMLElement) => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            if (settings.macosPlatforms.test(userAgent)) {
                element.querySelector(settings.searchForm.operatingSystemSelector).innerHTML = '&#8984;';
                this.hasKeyboard = true;
                this.isMacos = true;
            } else if (settings.windowsPlatforms.test(userAgent) || settings.linuxPlatforms.test(userAgent)) {
                element.querySelector(settings.searchForm.operatingSystemSelector).textContent = 'Ctrl';
                this.hasKeyboard = true;
            }
            if (this.hasKeyboard) {
                this.input.insertAdjacentElement('afterend', element);
            }
        });
    }
}
