export type SearchFormSettings = {
    formSelector: string;
    inputSelector: string;
    templateSelector: string;
    operatingSystemSelector: string;
};

export class SearchForm {
    private readonly macosPlatforms: RegExp = /(macintosh|macintel|macppc|mac68k|macos)/i;
    private readonly windowsPlatforms: RegExp = /(win32|win64|windows|wince)/i;
    private readonly linuxPlatforms: RegExp = /(linux)/i;
    private readonly form: HTMLFormElement;
    private readonly input: HTMLInputElement;
    private readonly settings: SearchFormSettings;
    private readonly keyboardTemplate: HTMLTemplateElement;
    private hasKeyboard = false;
    private isMacos: boolean = false;

    constructor(settings: SearchFormSettings) {
        this.settings = settings;
        this.form = document.querySelector(settings.formSelector) as HTMLFormElement;
        this.input = document.querySelector(settings.inputSelector) as HTMLInputElement;
        this.keyboardTemplate = document.querySelector(settings.templateSelector) as HTMLTemplateElement;
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
            if (this.macosPlatforms.test(userAgent)) {
                element.querySelector(this.settings.operatingSystemSelector).innerHTML = '&#8984;';
                this.hasKeyboard = true;
                this.isMacos = true;
            } else if (this.windowsPlatforms.test(userAgent) || this.linuxPlatforms.test(userAgent)) {
                element.querySelector(this.settings.operatingSystemSelector).textContent = 'Ctrl';
                this.hasKeyboard = true;
            }
            if (this.hasKeyboard) {
                this.input.insertAdjacentElement('afterend', element);
            }
        });
    }
}
