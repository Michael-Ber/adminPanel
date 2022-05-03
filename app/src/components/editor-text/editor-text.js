export default class EditorText {
    constructor(element, virtualElement) {
        this.element = element;
        this.virtualElement = virtualElement;
        this.element.addEventListener("click", () => this.onClick());
        this.element.addEventListener("blur", () => this.onBlur());
        this.element.addEventListener("keypress", (e) => this.onKeypress(e));
        this.element.addEventListener("input", () => this.onTextEdit());
        if(this.element.parentNode.nodeName === 'A' || this.element.parentNode.nodeName == 'BUTTON') {
            this.element.addEventListener("contextmenu", (e) => this.onCtxMenu(e));
        }
        
    }

    onCtxMenu(e) {
        e.preventDefault(); //предотвращаем всплытие контекстного меню при нажатии правой клавиши мыши
        this.onClick();
    }

    onKeypress(e) {
        if(e.keyCode === 13) { //13 = Enter
            this.element.blur();
        } 
    }

    onClick() {
        this.element.contentEditable = "true";
        this.element.focus();
    }
    onBlur() {
        this.element.removeAttribute('contenteditable');
    }
    onTextEdit() {
        this.virtualElement.innerHTML = this.element.innerHTML;
    }
}