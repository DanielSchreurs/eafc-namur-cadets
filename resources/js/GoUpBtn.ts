export type GoUpBtnSettings = {
    selector: string;
    showClass: string;
    inverseClass: string;
    scrollTrigger: number;
}

export class GoUpBtn {
    private readonly goUpBtn: HTMLButtonElement;
    private readonly settings: GoUpBtnSettings;
    private readonly bottom: number;

    constructor(settings: GoUpBtnSettings) {
        this.settings = settings;
        this.goUpBtn = document.querySelector(settings.selector) as HTMLButtonElement;
        if (!this.goUpBtn) {
            return
        }

        this.bottom = parseInt(window.getComputedStyle(this.goUpBtn).bottom) + this.goUpBtn.offsetHeight;
        this.addEvent();
    }

    addEvent() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > this.settings.scrollTrigger) {
                this.goUpBtn.classList.add(this.settings.showClass);
                if (window.innerHeight - document.querySelector('main').getBoundingClientRect().bottom > this.bottom) {
                    this.goUpBtn.classList.add(this.settings.inverseClass);
                } else {
                    this.goUpBtn.classList.remove(this.settings.inverseClass);
                }
            } else {
                this.goUpBtn.classList.remove(this.settings.showClass);
            }

        });
    }
}
