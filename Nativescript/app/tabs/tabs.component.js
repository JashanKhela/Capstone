"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import {Input, ChangeDetectionStrategy} from '@angular/core';
var news = (function () {
    function news(id, Topic, author, pic, prev, body) {
        this.id = id;
        this.Topic = Topic;
        this.author = author;
        this.pic = pic;
        this.prev = prev;
        this.body = body;
    }
    return news;
}());
exports.news = news;
var tabsComponent = (function () {
    function tabsComponent() {
        this.News = [
            { id: 0,
                Topic: 'Random News about Nothing',
                author: 'James Lock',
                pic: "https://www.w3schools.com" + "/images/w3schools_green.jpg",
                prev: "This is the preview to nothing ...",
                body: "This si the preview to nothing and i have nothing else to say" },
            { id: 1,
                Topic: 'Who is Dr. Blankface',
                author: 'Dr. Real Face',
                pic: "https://www.w3schools.com" + "/w3css/img_avatar3.png",
                prev: "This is the preview to who Dr. no face is dont read into it too much okay ...",
                body: "This si the preview to nothing and i have nothing else to say" },
            { id: 2,
                Topic: 'Random News about Everything',
                author: 'Yank Mike Rotch',
                pic: "https://www.w3schools.com" + "/images/w3schools_green.jpg",
                prev: "This is the preview to everything ...",
                body: "This si the preview to nothing and i have nothing else to say" },
            { id: 3,
                Topic: 'THE END IS NIGH!!!',
                author: 'Reverend Donations',
                pic: "https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg",
                prev: "This is the to everything as we know it",
                body: "This si the preview to nothing and i have nothing else to say" },
            { id: 4,
                Topic: 'Sayians Hate Him!!!',
                author: 'Gangstalicious',
                pic: "~/images/LilBill.png",
                prev: "Learn how this teenager found out the secret to unlock sayian..",
                body: "This si the preview to nothing and i have nothing else to say" }
        ];
    }
    tabsComponent.prototype.ngOnInit = function () {
    };
    tabsComponent.prototype.onSelect = function (item) {
        this.selectedNews = item;
    };
    tabsComponent = __decorate([
        core_1.Component({
            selector: "tabs",
            templateUrl: "./tabs/tabs.component.html",
            styleUrls: ["./tabs/tabs.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], tabsComponent);
    return tabsComponent;
}());
exports.tabsComponent = tabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQU96RSwrREFBK0Q7QUFJL0Q7SUFDRSxjQUNTLEVBQVUsRUFDVixLQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQVcsRUFDWCxJQUFZLEVBQ1osSUFBWTtRQUxaLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDM0IsV0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksb0JBQUk7QUFnQmpCO0lBRUU7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFFO1lBQ1QsRUFBQyxFQUFFLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsMkJBQTJCO2dCQUNsQyxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsR0FBRyxFQUFFLDJCQUEyQixHQUFFLDZCQUE2QjtnQkFDL0QsSUFBSSxFQUFFLG9DQUFvQztnQkFDMUMsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLEdBQUcsRUFBRSwyQkFBMkIsR0FBRSx3QkFBd0I7Z0JBQzFELElBQUksRUFBRSwrRUFBK0U7Z0JBQ3JGLElBQUksRUFBRSwrREFBK0QsRUFBRTtZQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLEdBQUcsRUFBRSwyQkFBMkIsR0FBQyw2QkFBNkI7Z0JBQzlELElBQUksRUFBRSx1Q0FBdUM7Z0JBQzdDLElBQUksRUFBRSwrREFBK0QsRUFBRTtZQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLE1BQU0sRUFBRSxvQkFBb0I7Z0JBQzVCLEdBQUcsRUFBRSx1RUFBdUU7Z0JBQzVFLElBQUksRUFBRSx5Q0FBeUM7Z0JBQy9DLElBQUksRUFBRSwrREFBK0QsRUFBRTtZQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLEdBQUcsRUFBRSxzQkFBc0I7Z0JBQzNCLElBQUksRUFBRSxpRUFBaUU7Z0JBQ3ZFLElBQUksRUFBRSwrREFBK0QsRUFBRTtTQUM1RSxDQUFBO0lBQ0gsQ0FBQztJQUVDLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQTFDUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBQyxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7O09BQ1csYUFBYSxDQTJDdkI7SUFBRCxvQkFBQztDQUFBLEFBM0NILElBMkNHO0FBM0NVLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiOyAvLyB0byBoaWRlIGFjdGlvbiBiYXJcclxuaW1wb3J0ICogYXMgbGlzdFZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcbmltcG9ydCAqIGFzIEltYWdlTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluZm99IGZyb20gJy4vaW5mbyc7XHJcbi8vaW1wb3J0IHtJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgbmV3c3tcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyLFxyXG4gICAgcHVibGljIFRvcGljIDogU3RyaW5nLCBcclxuICAgIHB1YmxpYyBhdXRob3I6IHN0cmluZywgXHJcbiAgICBwdWJsaWMgcGljOiBzdHJpbmcsIFxyXG4gICAgcHVibGljIHByZXY6IFN0cmluZyxcclxuICAgIHB1YmxpYyBib2R5OiBTdHJpbmcgKXt9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ0YWJzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJzL3RhYnMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wiLi90YWJzL3RhYnMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgdGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBOZXdzOiBuZXdzW107XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuTmV3cz0gW1xyXG4gICAgICB7aWQ6IDAsXHJcbiAgICAgIFRvcGljOiAnUmFuZG9tIE5ld3MgYWJvdXQgTm90aGluZycsXHJcbiAgICAgIGF1dGhvcjogJ0phbWVzIExvY2snLCBcclxuICAgICAgcGljOiBcImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb21cIiArXCIvaW1hZ2VzL3czc2Nob29sc19ncmVlbi5qcGdcIiwgXHJcbiAgICAgIHByZXY6IFwiVGhpcyBpcyB0aGUgcHJldmlldyB0byBub3RoaW5nIC4uLlwiLFxyXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxyXG4gICAgICB7aWQ6IDEsXHJcbiAgICAgIFRvcGljOiAnV2hvIGlzIERyLiBCbGFua2ZhY2UnLFxyXG4gICAgICBhdXRob3I6ICdEci4gUmVhbCBGYWNlJywgXHJcbiAgICAgIHBpYzogXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tXCIgK1wiL3czY3NzL2ltZ19hdmF0YXIzLnBuZ1wiLCBcclxuICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSBwcmV2aWV3IHRvIHdobyBEci4gbm8gZmFjZSBpcyBkb250IHJlYWQgaW50byBpdCB0b28gbXVjaCBva2F5IC4uLlwiLFxyXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxyXG4gICAgICB7aWQ6IDIsXHJcbiAgICAgIFRvcGljOiAnUmFuZG9tIE5ld3MgYWJvdXQgRXZlcnl0aGluZycsXHJcbiAgICAgIGF1dGhvcjogJ1lhbmsgTWlrZSBSb3RjaCcsIFxyXG4gICAgICBwaWM6IFwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbVwiK1wiL2ltYWdlcy93M3NjaG9vbHNfZ3JlZW4uanBnXCIsIFxyXG4gICAgICBwcmV2OiBcIlRoaXMgaXMgdGhlIHByZXZpZXcgdG8gZXZlcnl0aGluZyAuLi5cIixcclxuICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcclxuICAgICAge2lkOiAzLFxyXG4gICAgICAgIFRvcGljOiAnVEhFIEVORCBJUyBOSUdIISEhJyxcclxuICAgICAgICBhdXRob3I6ICdSZXZlcmVuZCBEb25hdGlvbnMnLCBcclxuICAgICAgICBwaWM6IFwiaHR0cHM6Ly93d3cuY2xldmVyZmlsZXMuY29tL2hvd3RvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA4L21pbmkuanBnXCIsIFxyXG4gICAgICAgIHByZXY6IFwiVGhpcyBpcyB0aGUgdG8gZXZlcnl0aGluZyBhcyB3ZSBrbm93IGl0XCIsXHJcbiAgICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcclxuICAgICAgICB7aWQ6IDQsXHJcbiAgICAgICAgICBUb3BpYzogJ1NheWlhbnMgSGF0ZSBIaW0hISEnLFxyXG4gICAgICAgICAgYXV0aG9yOiAnR2FuZ3N0YWxpY2lvdXMnLCBcclxuICAgICAgICAgIHBpYzogXCJ+L2ltYWdlcy9MaWxCaWxsLnBuZ1wiLCBcclxuICAgICAgICAgIHByZXY6IFwiTGVhcm4gaG93IHRoaXMgdGVlbmFnZXIgZm91bmQgb3V0IHRoZSBzZWNyZXQgdG8gdW5sb2NrIHNheWlhbi4uXCIsXHJcbiAgICAgICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9XHJcbiAgICBdXHJcbiAgfVxyXG4gIHNlbGVjdGVkTmV3czogbmV3cztcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG4gIFxyXG4gICAgb25TZWxlY3QoaXRlbTogbmV3cyk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTmV3cyA9IGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19