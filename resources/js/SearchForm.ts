export type SearchFormSettings = {
    formSelector: string;
    inputSelector: string;
    templateSelector: string;
    operatingSystemSelector: string;
    itemsSelector: string;
    hiddenClass: string;
    // this is a css class that is used to hide the slider if no items are found
    showClass: string;
    afterEmptySearch?: () => void;
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
    private readonly url: URL;
    private readonly items: NodeListOf<Element>;

    constructor(settings: SearchFormSettings) {
        this.settings = settings;
        this.form = document.querySelector(settings.formSelector) as HTMLFormElement;
        this.input = document.querySelector(settings.inputSelector) as HTMLInputElement;
        this.keyboardTemplate = document.querySelector(settings.templateSelector) as HTMLTemplateElement;
        if (!this.form || !this.input || !this.keyboardTemplate) {
            return;
        }
        this.items = document.querySelectorAll(settings.itemsSelector);
        // @ts-ignore
        this.url = new URL(window.location);
        this.setValueFromURL();
        this.insertHTMLTemplate();
        this.addEventListeners();
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
        // this.form.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     this.search(this.input.value);
        // });
        this.input.addEventListener('input', (e) => {
            this.updateURL(e.currentTarget as HTMLInputElement);
            this.search(this.input.value);
        });
    }

    private updateURL(input: HTMLInputElement) {
        if (input.value.trim().length === 0) {
            this.url.searchParams.delete(input.name);
        } else {
            this.url.searchParams.set(input.name, input.value);
        }
        history.pushState(null, '', this.url);
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

    private search(q: string) {
        this.removeAllMarks();
        if (q.trim().length > 0) {
            document.querySelectorAll(`${this.settings.itemsSelector}:not(.${this.settings.hiddenClass})`).forEach((item) => {
                if (item.textContent.toLowerCase().includes(q.toLowerCase())) {
                    item.innerHTML = item.innerHTML.replace(
                        new RegExp(
                            `(>[^<>]*)(${this.escapeRegExp(q)})([^<>]*<)`,
                            "gi",
                        ),
                        "$1<mark>$2</mark>$3",
                    );
                    item.classList.remove(this.settings.hiddenClass);
                    item.classList.add(this.settings.showClass);
                } else {
                    item.classList.add(this.settings.hiddenClass);
                    item.classList.remove(this.settings.showClass);
                }
            });
        } else {
            this.settings.afterEmptySearch?.();
        }
    }

    private removeAllMarks() {
        this.items.forEach((item) => {
            item.innerHTML = item.innerHTML.replace(/<mark>/gi, '').replace(/<\/mark>/gi, '');
        });
    }

    private escapeRegExp(s: string) {
        return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    private setValueFromURL() {
        const q = this.url.searchParams.get(this.input.name);
        if (q) {
            this.input.value = q;
            this.search(q);
        }
    }
}
