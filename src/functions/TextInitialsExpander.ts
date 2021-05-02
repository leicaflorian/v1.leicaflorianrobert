import anime from "animejs/lib/anime"

export interface TextStructure {
    initial: string
    text: string
}

export class TextInitialsExpander {
    el: HTMLElement | null;

    constructor(selector: string, public textToRender: TextStructure[]) {
        this.el = document.querySelector(selector);

        this.initHtml()
    }

    initHtml() {
        const letters = this.textToRender.reduce((acc: string[], el) => {
            acc.push(el.initial)

            return acc
        }, [])

       /* this.el.innerHTML = letters.map(el => {
            el.
        })*/
    }
}
