/**
 * Created by lex on 25.03.17.
 */

/*
 * @flow
 * */

///TODO Make it dynamically
const MAIN_SERVICE_URL: string = "http://localhost:3000";

const IFRAME_DIV_ID: string = "SMS_Widget";
const IFRAME_ID: string = "SMS_WIDGET_IFRAME";

const RESIZE_STANDARD_MESSAGE: string = 'RESIZE_STANDARD_MESSAGE';
const RESIZE_COLLAPSED_MESSAGE: string = "RESIZE_COLLAPSED_MESSAGE";
const RESIZE_BIG_MESSAGE: string ="RESIZE_BIG_MESSAGE";

const COLLAPSED_IFRAME_STYLE: string = `.COLLAPSED_IFRAME_STYLE { 
  height : 50px;
  width: 260px;
  position: fixed;
  bottom: 20px;
  right: 20px;

}`;
const BIG_IFRAME_STYLE: string = `.BIG_IFRAME_STYLE {
  height : 70%;
  width: 50%;
  position: fixed;
  top: 10%;
  right: 25%;
}`;
const STANDART_IFRAME_STYLE: string = `.STANDART_IFRAME_STYLE {
  height : 52%;
  width: 40%;
  position: fixed;
  bottom: 10px;
  right: 10px;
}`;

class Widget {

    iframe: Object;
    init: Function;
    prepareIframe: Function;
    subscribeEvents: Function;

    constructor() {


        this.init = this.init.bind(this);
        this.prepareIframe = this.prepareIframe.bind(this);
        this.subscribeEvents = this.subscribeEvents.bind(this);

    }

    init() {

        Widget.prepareCSS();
        this.prepareIframe();
        this.subscribeEvents();

    };

    static prepareCSS(): void {

        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = COLLAPSED_IFRAME_STYLE + ' ' + STANDART_IFRAME_STYLE + ' ' + BIG_IFRAME_STYLE;
        document.getElementsByTagName('head')[0].appendChild(style);

    }


    prepareIframe(): void {

        this.iframe = document.createElement("iframe");
        this.iframe.setAttribute("src", MAIN_SERVICE_URL);
        this.iframe.scrolling = "no";
        this.iframe.frameBorder = 0;
        this.iframe.className = "COLLAPSED_IFRAME_STYLE";
        this.iframe.setAttribute("id", IFRAME_ID);


        let div: ?Object = document.getElementById(IFRAME_DIV_ID);

        if (div === undefined || div === null) {
            console.log("Div not fount");
        } else {
            div.appendChild(this.iframe);
        }


    }

    subscribeEvents(): void {
        let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        let eventer = window[eventMethod];
        let messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
        let iframe = this.iframe;
        eventer(messageEvent, function (e) {
            console.log('parent received message!:  ', e.data);
            switch (e.data) {
                case RESIZE_STANDARD_MESSAGE:
                    iframe.className = "STANDART_IFRAME_STYLE";
                    return;
                case RESIZE_COLLAPSED_MESSAGE:
                    iframe.className = "COLLAPSED_IFRAME_STYLE";
                    return;
                case RESIZE_BIG_MESSAGE:
                    iframe.className = "BIG_IFRAME_STYLE";
                    return;
                default:
                    console.log(1);
                    return;

            }

        }, false);
    }


}
