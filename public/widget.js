"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by lex on 25.03.17.
 */

var MAIN_SERVICE_URL = "http://localhost:3000";

var IFRAME_DIV_ID = "SMS_Widget";
var IFRAME_ID = "SMS_WIDGET_IFRAME";

var RESIZE_STANDARD_MESSAGE = 'RESIZE_STANDARD_MESSAGE';
var RESIZE_COLLAPSED_MESSAGE = "RESIZE_COLLAPSED_MESSAGE";
var RESIZE_BIG_MESSAGE = "RESIZE_BIG_MESSAGE";

var COLLAPSED_IFRAME_STYLE = ".COLLAPSED_IFRAME_STYLE { \n  height : 50px;\n  width: 260px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n\n}";
var BIG_IFRAME_STYLE = ".BIG_IFRAME_STYLE {\n  height : 70%;\n  width: 50%;\n  position: fixed;\n  top: 10%;\n  right: 25%;\n}";
var STANDART_IFRAME_STYLE = ".STANDART_IFRAME_STYLE {\n  height : 52%;\n  width: 40%;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n}";

var Widget = function () {
    function Widget() {
        _classCallCheck(this, Widget);

        this.init = this.init.bind(this);
        this.prepareIframe = this.prepareIframe.bind(this);
        this.subscribeEvents = this.subscribeEvents.bind(this);
    }

    _createClass(Widget, [{
        key: "init",
        value: function init() {

            Widget.prepareCSS();
            this.prepareIframe();
            this.subscribeEvents();
        }
    }, {
        key: "prepareIframe",
        value: function prepareIframe() {

            this.iframe = document.createElement("iframe");
            this.iframe.setAttribute("src", MAIN_SERVICE_URL);
            this.iframe.scrolling = "no";
            this.iframe.frameBorder = 0;
            this.iframe.className = "COLLAPSED_IFRAME_STYLE";
            this.iframe.setAttribute("id", IFRAME_ID);

            var div = document.getElementById(IFRAME_DIV_ID);

            if (div === undefined || div === null) {
                console.log("Div not fount");
            } else {
                div.appendChild(this.iframe);
            }
        }
    }, {
        key: "subscribeEvents",
        value: function subscribeEvents() {
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";
            var iframe = this.iframe;
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
    }], [{
        key: "prepareCSS",
        value: function prepareCSS() {

            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = COLLAPSED_IFRAME_STYLE + ' ' + STANDART_IFRAME_STYLE + ' ' + BIG_IFRAME_STYLE;
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }]);

    return Widget;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudF9zcmMvd2lkZ2V0LmpzIl0sIm5hbWVzIjpbIk1BSU5fU0VSVklDRV9VUkwiLCJJRlJBTUVfRElWX0lEIiwiSUZSQU1FX0lEIiwiUkVTSVpFX1NUQU5EQVJEX01FU1NBR0UiLCJSRVNJWkVfQ09MTEFQU0VEX01FU1NBR0UiLCJSRVNJWkVfQklHX01FU1NBR0UiLCJDT0xMQVBTRURfSUZSQU1FX1NUWUxFIiwiQklHX0lGUkFNRV9TVFlMRSIsIlNUQU5EQVJUX0lGUkFNRV9TVFlMRSIsIldpZGdldCIsImluaXQiLCJiaW5kIiwicHJlcGFyZUlmcmFtZSIsInN1YnNjcmliZUV2ZW50cyIsInByZXBhcmVDU1MiLCJpZnJhbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzY3JvbGxpbmciLCJmcmFtZUJvcmRlciIsImNsYXNzTmFtZSIsImRpdiIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwiZXZlbnRNZXRob2QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRlciIsIm1lc3NhZ2VFdmVudCIsImUiLCJkYXRhIiwic3R5bGUiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBU0EsSUFBTUEsbUJBQTJCLHVCQUFqQzs7QUFFQSxJQUFNQyxnQkFBd0IsWUFBOUI7QUFDQSxJQUFNQyxZQUFvQixtQkFBMUI7O0FBRUEsSUFBTUMsMEJBQWtDLHlCQUF4QztBQUNBLElBQU1DLDJCQUFtQywwQkFBekM7QUFDQSxJQUFNQyxxQkFBNEIsb0JBQWxDOztBQUVBLElBQU1DLGtKQUFOO0FBUUEsSUFBTUMsMkhBQU47QUFPQSxJQUFNQywwSUFBTjs7SUFRTUMsTTtBQU9GLHNCQUFjO0FBQUE7O0FBR1YsYUFBS0MsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVUMsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLGFBQUtDLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxhQUFLRSxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJGLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBRUg7Ozs7K0JBRU07O0FBRUhGLG1CQUFPSyxVQUFQO0FBQ0EsaUJBQUtGLGFBQUw7QUFDQSxpQkFBS0MsZUFBTDtBQUVIOzs7d0NBWXFCOztBQUVsQixpQkFBS0UsTUFBTCxHQUFjQyxTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxpQkFBS0YsTUFBTCxDQUFZRyxZQUFaLENBQXlCLEtBQXpCLEVBQWdDbEIsZ0JBQWhDO0FBQ0EsaUJBQUtlLE1BQUwsQ0FBWUksU0FBWixHQUF3QixJQUF4QjtBQUNBLGlCQUFLSixNQUFMLENBQVlLLFdBQVosR0FBMEIsQ0FBMUI7QUFDQSxpQkFBS0wsTUFBTCxDQUFZTSxTQUFaLEdBQXdCLHdCQUF4QjtBQUNBLGlCQUFLTixNQUFMLENBQVlHLFlBQVosQ0FBeUIsSUFBekIsRUFBK0JoQixTQUEvQjs7QUFHQSxnQkFBSW9CLE1BQWVOLFNBQVNPLGNBQVQsQ0FBd0J0QixhQUF4QixDQUFuQjs7QUFFQSxnQkFBSXFCLFFBQVFFLFNBQVIsSUFBcUJGLFFBQVEsSUFBakMsRUFBdUM7QUFDbkNHLHdCQUFRQyxHQUFSLENBQVksZUFBWjtBQUNILGFBRkQsTUFFTztBQUNISixvQkFBSUssV0FBSixDQUFnQixLQUFLWixNQUFyQjtBQUNIO0FBR0o7OzswQ0FFdUI7QUFDcEIsZ0JBQUlhLGNBQWNDLE9BQU9DLGdCQUFQLEdBQTBCLGtCQUExQixHQUErQyxhQUFqRTtBQUNBLGdCQUFJQyxVQUFVRixPQUFPRCxXQUFQLENBQWQ7QUFDQSxnQkFBSUksZUFBZUosZ0JBQWdCLGFBQWhCLEdBQWdDLFdBQWhDLEdBQThDLFNBQWpFO0FBQ0EsZ0JBQUliLFNBQVMsS0FBS0EsTUFBbEI7QUFDQWdCLG9CQUFRQyxZQUFSLEVBQXNCLFVBQVVDLENBQVYsRUFBYTtBQUMvQlIsd0JBQVFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ08sRUFBRUMsSUFBN0M7QUFDQSx3QkFBUUQsRUFBRUMsSUFBVjtBQUNJLHlCQUFLL0IsdUJBQUw7QUFDSVksK0JBQU9NLFNBQVAsR0FBbUIsdUJBQW5CO0FBQ0E7QUFDSix5QkFBS2pCLHdCQUFMO0FBQ0lXLCtCQUFPTSxTQUFQLEdBQW1CLHdCQUFuQjtBQUNBO0FBQ0oseUJBQUtoQixrQkFBTDtBQUNJVSwrQkFBT00sU0FBUCxHQUFtQixrQkFBbkI7QUFDQTtBQUNKO0FBQ0lJLGdDQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNBOztBQVpSO0FBZ0JILGFBbEJELEVBa0JHLEtBbEJIO0FBbUJIOzs7cUNBdkR5Qjs7QUFFdEIsZ0JBQUlTLFFBQVFuQixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQWtCLGtCQUFNQyxJQUFOLEdBQWEsVUFBYjtBQUNBRCxrQkFBTUUsU0FBTixHQUFrQi9CLHlCQUF5QixHQUF6QixHQUErQkUscUJBQS9CLEdBQXVELEdBQXZELEdBQTZERCxnQkFBL0U7QUFDQVMscUJBQVNzQixvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q1gsV0FBekMsQ0FBcURRLEtBQXJEO0FBRUgiLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGxleCBvbiAyNS4wMy4xNy5cbiAqL1xuXG4vKlxuICogQGZsb3dcbiAqICovXG5cbi8vL1RPRE8gTWFrZSBpdCBkeW5hbWljYWxseVxuY29uc3QgTUFJTl9TRVJWSUNFX1VSTDogc3RyaW5nID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcblxuY29uc3QgSUZSQU1FX0RJVl9JRDogc3RyaW5nID0gXCJTTVNfV2lkZ2V0XCI7XG5jb25zdCBJRlJBTUVfSUQ6IHN0cmluZyA9IFwiU01TX1dJREdFVF9JRlJBTUVcIjtcblxuY29uc3QgUkVTSVpFX1NUQU5EQVJEX01FU1NBR0U6IHN0cmluZyA9ICdSRVNJWkVfU1RBTkRBUkRfTUVTU0FHRSc7XG5jb25zdCBSRVNJWkVfQ09MTEFQU0VEX01FU1NBR0U6IHN0cmluZyA9IFwiUkVTSVpFX0NPTExBUFNFRF9NRVNTQUdFXCI7XG5jb25zdCBSRVNJWkVfQklHX01FU1NBR0U6IHN0cmluZyA9XCJSRVNJWkVfQklHX01FU1NBR0VcIjtcblxuY29uc3QgQ09MTEFQU0VEX0lGUkFNRV9TVFlMRTogc3RyaW5nID0gYC5DT0xMQVBTRURfSUZSQU1FX1NUWUxFIHsgXG4gIGhlaWdodCA6IDUwcHg7XG4gIHdpZHRoOiAyNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuXG59YDtcbmNvbnN0IEJJR19JRlJBTUVfU1RZTEU6IHN0cmluZyA9IGAuQklHX0lGUkFNRV9TVFlMRSB7XG4gIGhlaWdodCA6IDcwJTtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDI1JTtcbn1gO1xuY29uc3QgU1RBTkRBUlRfSUZSQU1FX1NUWUxFOiBzdHJpbmcgPSBgLlNUQU5EQVJUX0lGUkFNRV9TVFlMRSB7XG4gIGhlaWdodCA6IDUyJTtcbiAgd2lkdGg6IDQwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufWA7XG5cbmNsYXNzIFdpZGdldCB7XG5cbiAgICBpZnJhbWU6IE9iamVjdDtcbiAgICBpbml0OiBGdW5jdGlvbjtcbiAgICBwcmVwYXJlSWZyYW1lOiBGdW5jdGlvbjtcbiAgICBzdWJzY3JpYmVFdmVudHM6IEZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cblxuICAgICAgICB0aGlzLmluaXQgPSB0aGlzLmluaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlSWZyYW1lID0gdGhpcy5wcmVwYXJlSWZyYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlRXZlbnRzID0gdGhpcy5zdWJzY3JpYmVFdmVudHMuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgV2lkZ2V0LnByZXBhcmVDU1MoKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlSWZyYW1lKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlRXZlbnRzKCk7XG5cbiAgICB9O1xuXG4gICAgc3RhdGljIHByZXBhcmVDU1MoKTogdm9pZCB7XG5cbiAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IENPTExBUFNFRF9JRlJBTUVfU1RZTEUgKyAnICcgKyBTVEFOREFSVF9JRlJBTUVfU1RZTEUgKyAnICcgKyBCSUdfSUZSQU1FX1NUWUxFO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgIH1cblxuXG4gICAgcHJlcGFyZUlmcmFtZSgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZShcInNyY1wiLCBNQUlOX1NFUlZJQ0VfVVJMKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuc2Nyb2xsaW5nID0gXCJub1wiO1xuICAgICAgICB0aGlzLmlmcmFtZS5mcmFtZUJvcmRlciA9IDA7XG4gICAgICAgIHRoaXMuaWZyYW1lLmNsYXNzTmFtZSA9IFwiQ09MTEFQU0VEX0lGUkFNRV9TVFlMRVwiO1xuICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBJRlJBTUVfSUQpO1xuXG5cbiAgICAgICAgbGV0IGRpdjogP09iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElGUkFNRV9ESVZfSUQpO1xuXG4gICAgICAgIGlmIChkaXYgPT09IHVuZGVmaW5lZCB8fCBkaXYgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGl2IG5vdCBmb3VudFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc3Vic2NyaWJlRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBsZXQgZXZlbnRNZXRob2QgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciA/IFwiYWRkRXZlbnRMaXN0ZW5lclwiIDogXCJhdHRhY2hFdmVudFwiO1xuICAgICAgICBsZXQgZXZlbnRlciA9IHdpbmRvd1tldmVudE1ldGhvZF07XG4gICAgICAgIGxldCBtZXNzYWdlRXZlbnQgPSBldmVudE1ldGhvZCA9PT0gXCJhdHRhY2hFdmVudFwiID8gXCJvbm1lc3NhZ2VcIiA6IFwibWVzc2FnZVwiO1xuICAgICAgICBsZXQgaWZyYW1lID0gdGhpcy5pZnJhbWU7XG4gICAgICAgIGV2ZW50ZXIobWVzc2FnZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudCByZWNlaXZlZCBtZXNzYWdlITogICcsIGUuZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhc2UgUkVTSVpFX1NUQU5EQVJEX01FU1NBR0U6XG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jbGFzc05hbWUgPSBcIlNUQU5EQVJUX0lGUkFNRV9TVFlMRVwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSBSRVNJWkVfQ09MTEFQU0VEX01FU1NBR0U6XG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jbGFzc05hbWUgPSBcIkNPTExBUFNFRF9JRlJBTUVfU1RZTEVcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhc2UgUkVTSVpFX0JJR19NRVNTQUdFOlxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUuY2xhc3NOYW1lID0gXCJCSUdfSUZSQU1FX1NUWUxFXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuXG59XG4iXX0=