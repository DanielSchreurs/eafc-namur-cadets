import Swiper from "swiper";

export type FilterSettings = {
    itemSelector: string;
    formSelector: string,
    hiddenClass: string,
    // this is a css class that is used to hide the slider if no items are found
    showClass: string,
}

export class Filter {
    private readonly form: HTMLFormElement;
    private readonly inputs: NodeListOf<HTMLInputElement>;
    private readonly items: NodeListOf<HTMLElement>;
    private readonly url: URL;
    private settings: FilterSettings;

    constructor(settings: FilterSettings) {
        this.settings = settings;
        this.form = document.querySelector(settings.formSelector) as HTMLFormElement;
        if (!this.form) return;
        this.inputs = this.form.querySelectorAll('input[type="checkbox"]');
        this.items = document.querySelectorAll(settings.itemSelector);
        // @ts-ignore
        this.url = new URL(window.location);
        this.addEventListeners();
        this.filter();
    }

    private addEventListeners() {
        this.inputs.forEach((input) => {
            input.addEventListener('change', (e) => {
                this.updateURL(e.currentTarget as HTMLInputElement);
                this.filter();
            });
        });
    }

    private updateURL(input: HTMLInputElement) {
        if (this.url.searchParams.has(input.name)) {
            this.url.searchParams.delete(input.name);
        } else {
            this.url.searchParams.set(input.name, input.value);
        }
        history.pushState(null, '', this.url);
    }

    public filter() {
        this.showAllItems();
        if (this.url.searchParams.toString().length === 0) {
            return;
        }
        this.items.forEach((item) => {
            let hidde = true;
            this.inputs.forEach((input) => {
                if (input.checked && (input.name === item.dataset.cat || input.name === item.dataset.tags)) {
                    hidde = false;
                    return;
                }
            });
            if (hidde) {
                item.classList.add((this.settings.hiddenClass));
                item.classList.remove((this.settings.showClass));
            }
        });
    }

    private showAllItems() {
        this.items.forEach((item) => {
            item.classList.remove(this.settings.hiddenClass);
            item.classList.add(this.settings.showClass);
        });
    }
}
