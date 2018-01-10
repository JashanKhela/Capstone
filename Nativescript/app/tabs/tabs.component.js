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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQU96RSwrREFBK0Q7QUFJL0Q7SUFDRSxjQUNTLEVBQVUsRUFDVixLQUFjLEVBQ2QsTUFBYyxFQUNkLEdBQVcsRUFDWCxJQUFZLEVBQ1osSUFBWTtRQUxaLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDM0IsV0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksb0JBQUk7QUFnQmpCO0lBRUU7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFFO1lBQ1QsRUFBQyxFQUFFLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsMkJBQTJCO2dCQUNsQyxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsR0FBRyxFQUFFLDJCQUEyQixHQUFFLDZCQUE2QjtnQkFDL0QsSUFBSSxFQUFFLG9DQUFvQztnQkFDMUMsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLEdBQUcsRUFBRSwyQkFBMkIsR0FBRSx3QkFBd0I7Z0JBQzFELElBQUksRUFBRSwrRUFBK0U7Z0JBQ3JGLElBQUksRUFBRSwrREFBK0QsRUFBRTtZQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLEdBQUcsRUFBRSwyQkFBMkIsR0FBQyw2QkFBNkI7Z0JBQzlELElBQUksRUFBRSx1Q0FBdUM7Z0JBQzdDLElBQUksRUFBRSwrREFBK0QsRUFBRTtZQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLE1BQU0sRUFBRSxvQkFBb0I7Z0JBQzVCLEdBQUcsRUFBRSx1RUFBdUU7Z0JBQzVFLElBQUksRUFBRSx5Q0FBeUM7Z0JBQy9DLElBQUksRUFBRSwrREFBK0QsRUFBRTtZQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNKLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLE1BQU0sRUFBRSxnQkFBZ0I7Z0JBQ3hCLEdBQUcsRUFBRSxzQkFBc0I7Z0JBQzNCLElBQUksRUFBRSxpRUFBaUU7Z0JBQ3ZFLElBQUksRUFBRSwrREFBK0QsRUFBRTtTQUM1RSxDQUFBO0lBQ0gsQ0FBQztJQUVDLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQTFDUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBQyxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7O09BQ1csYUFBYSxDQTJDdkI7SUFBRCxvQkFBQztDQUFBLEFBM0NILElBMkNHO0FBM0NVLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjsgLy8gdG8gaGlkZSBhY3Rpb24gYmFyXG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIEltYWdlTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZm99IGZyb20gJy4vaW5mbyc7XG4vL2ltcG9ydCB7SW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbmV4cG9ydCBjbGFzcyBuZXdze1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICBwdWJsaWMgVG9waWMgOiBTdHJpbmcsIFxuICAgIHB1YmxpYyBhdXRob3I6IHN0cmluZywgXG4gICAgcHVibGljIHBpYzogc3RyaW5nLCBcbiAgICBwdWJsaWMgcHJldjogU3RyaW5nLFxuICAgIHB1YmxpYyBib2R5OiBTdHJpbmcgKXt9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhYnNcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90YWJzL3RhYnMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOltcIi4vdGFicy90YWJzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgdGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgTmV3czogbmV3c1tdO1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuTmV3cz0gW1xuICAgICAge2lkOiAwLFxuICAgICAgVG9waWM6ICdSYW5kb20gTmV3cyBhYm91dCBOb3RoaW5nJyxcbiAgICAgIGF1dGhvcjogJ0phbWVzIExvY2snLCBcbiAgICAgIHBpYzogXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tXCIgK1wiL2ltYWdlcy93M3NjaG9vbHNfZ3JlZW4uanBnXCIsIFxuICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgLi4uXCIsXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxuICAgICAge2lkOiAxLFxuICAgICAgVG9waWM6ICdXaG8gaXMgRHIuIEJsYW5rZmFjZScsXG4gICAgICBhdXRob3I6ICdEci4gUmVhbCBGYWNlJywgXG4gICAgICBwaWM6IFwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbVwiICtcIi93M2Nzcy9pbWdfYXZhdGFyMy5wbmdcIiwgXG4gICAgICBwcmV2OiBcIlRoaXMgaXMgdGhlIHByZXZpZXcgdG8gd2hvIERyLiBubyBmYWNlIGlzIGRvbnQgcmVhZCBpbnRvIGl0IHRvbyBtdWNoIG9rYXkgLi4uXCIsXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxuICAgICAge2lkOiAyLFxuICAgICAgVG9waWM6ICdSYW5kb20gTmV3cyBhYm91dCBFdmVyeXRoaW5nJyxcbiAgICAgIGF1dGhvcjogJ1lhbmsgTWlrZSBSb3RjaCcsIFxuICAgICAgcGljOiBcImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb21cIitcIi9pbWFnZXMvdzNzY2hvb2xzX2dyZWVuLmpwZ1wiLCBcbiAgICAgIHByZXY6IFwiVGhpcyBpcyB0aGUgcHJldmlldyB0byBldmVyeXRoaW5nIC4uLlwiLFxuICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcbiAgICAgIHtpZDogMyxcbiAgICAgICAgVG9waWM6ICdUSEUgRU5EIElTIE5JR0ghISEnLFxuICAgICAgICBhdXRob3I6ICdSZXZlcmVuZCBEb25hdGlvbnMnLCBcbiAgICAgICAgcGljOiBcImh0dHBzOi8vd3d3LmNsZXZlcmZpbGVzLmNvbS9ob3d0by93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9taW5pLmpwZ1wiLCBcbiAgICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSB0byBldmVyeXRoaW5nIGFzIHdlIGtub3cgaXRcIixcbiAgICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcbiAgICAgICAge2lkOiA0LFxuICAgICAgICAgIFRvcGljOiAnU2F5aWFucyBIYXRlIEhpbSEhIScsXG4gICAgICAgICAgYXV0aG9yOiAnR2FuZ3N0YWxpY2lvdXMnLCBcbiAgICAgICAgICBwaWM6IFwifi9pbWFnZXMvTGlsQmlsbC5wbmdcIiwgXG4gICAgICAgICAgcHJldjogXCJMZWFybiBob3cgdGhpcyB0ZWVuYWdlciBmb3VuZCBvdXQgdGhlIHNlY3JldCB0byB1bmxvY2sgc2F5aWFuLi5cIixcbiAgICAgICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9XG4gICAgXVxuICB9XG4gIHNlbGVjdGVkTmV3czogbmV3cztcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG4gIFxuICAgIG9uU2VsZWN0KGl0ZW06IG5ld3MpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdzID0gaXRlbTtcbiAgICB9XG4gIH1cblxuIl19