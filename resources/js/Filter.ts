export type FilterSettings = {
    itemSelector: string;
    formSelector: string,
    categoryInputSelector: string,
    tagInputSelector: string,
    hiddenClass: string,
    // this is a css class that is used to hide the slider if no items are found
    showClass: string,
}

export class Filter {
    private readonly form: HTMLFormElement;
    private readonly categoryInputs: NodeListOf<HTMLInputElement>;
    private readonly tagInputs: NodeListOf<HTMLInputElement>;
    private readonly courses: NodeListOf<HTMLElement>;
    private readonly url: URL;
    private settings: FilterSettings;

    constructor(settings: FilterSettings, url: URL) {
        this.settings = settings;
        this.form = document.querySelector(settings.formSelector) as HTMLFormElement;
        if (!this.form) return;
        this.categoryInputs = this.form.querySelectorAll(settings.categoryInputSelector);
        this.tagInputs = this.form.querySelectorAll(settings.tagInputSelector);
        this.courses = document.querySelectorAll(settings.itemSelector);
        // @ts-ignore
        this.url = url;
        this.addEventListeners();
        this.filter();
    }

    private addEventListeners() {
        document.querySelectorAll(`${this.settings.categoryInputSelector}, ${this.settings.tagInputSelector}`).forEach((input) => {
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
            this.url.searchParams.set(input.name, input.name);
        }
        history.pushState(null, '', this.url);
    }

    public filter() {
        this.showAllItems();
        if (this.url.searchParams.toString().length === 0) {
            return;
        }
        this.courses.forEach((course) => {
            let hidde = true;
            let hasNoCategoryChecked = true;
            this.categoryInputs.forEach((catInput) => {
                if (catInput.checked) {
                    hasNoCategoryChecked = false;
                    if (catInput.name === course.dataset.cat) {
                        hidde = false;
                        this.tagInputs.forEach((levelInput) => {
                            if (levelInput.checked) {
                                if (course.dataset.tags === undefined || !course.dataset.tags.includes(levelInput.name)) {
                                    hidde = true;
                                    return;
                                }
                            }
                        });
                        return;
                    }
                }
            });

            if (hasNoCategoryChecked) {
                hidde = false;
                this.tagInputs.forEach((levelInput) => {
                    if (levelInput.checked) {
                        if (course.dataset.tags === undefined || !course.dataset.tags.includes(levelInput.name)) {
                            hidde = true;
                            return;
                        }
                    }
                });
            }
            if (hidde) {
                course.classList.add((this.settings.hiddenClass));
                course.classList.remove((this.settings.showClass));
            }
        });
    }

    private showAllItems() {
        this.courses.forEach((item) => {
            item.classList.remove(this.settings.hiddenClass);
            item.classList.add(this.settings.showClass);
        });
    }
}
