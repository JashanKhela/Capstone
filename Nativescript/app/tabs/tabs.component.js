"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQVd6RTtJQUNFLGNBQ1MsRUFBVSxFQUNWLEtBQWMsRUFDZCxNQUFjLEVBQ2QsR0FBVyxFQUNYLElBQVksRUFDWixJQUFZO1FBTFosT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQUMzQixXQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxvQkFBSTtBQWdCakI7SUFFRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUU7WUFDVCxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsMkJBQTJCLEdBQUUsNkJBQTZCO2dCQUMvRCxJQUFJLEVBQUUsb0NBQW9DO2dCQUMxQyxJQUFJLEVBQUUsK0RBQStELEVBQUU7WUFDdkUsRUFBQyxFQUFFLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixNQUFNLEVBQUUsZUFBZTtnQkFDdkIsR0FBRyxFQUFFLDJCQUEyQixHQUFFLHdCQUF3QjtnQkFDMUQsSUFBSSxFQUFFLCtFQUErRTtnQkFDckYsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLDhCQUE4QjtnQkFDckMsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsR0FBRyxFQUFFLDJCQUEyQixHQUFDLDZCQUE2QjtnQkFDOUQsSUFBSSxFQUFFLHVDQUF1QztnQkFDN0MsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsR0FBRyxFQUFFLHVFQUF1RTtnQkFDNUUsSUFBSSxFQUFFLHlDQUF5QztnQkFDL0MsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIsR0FBRyxFQUFFLHNCQUFzQjtnQkFDM0IsSUFBSSxFQUFFLGlFQUFpRTtnQkFDdkUsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1NBQzVFLENBQUE7SUFDSCxDQUFDO0lBRUMsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBMUNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFDLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzs7T0FDVyxhQUFhLENBMkN2QjtJQUFELG9CQUFDO0NBQUEsQUEzQ0gsSUEyQ0c7QUEzQ1Usc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7IC8vIHRvIGhpZGUgYWN0aW9uIGJhclxyXG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0ICogYXMgSW1hZ2VNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5mb30gZnJvbSAnLi9pbmZvJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBuZXdze1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICBwdWJsaWMgVG9waWMgOiBTdHJpbmcsIFxyXG4gICAgcHVibGljIGF1dGhvcjogc3RyaW5nLCBcclxuICAgIHB1YmxpYyBwaWM6IHN0cmluZywgXHJcbiAgICBwdWJsaWMgcHJldjogU3RyaW5nLFxyXG4gICAgcHVibGljIGJvZHk6IFN0cmluZyApe31cclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInRhYnNcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3RhYnMvdGFicy5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCIuL3RhYnMvdGFicy5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyB0YWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gIE5ld3M6IG5ld3NbXTtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5OZXdzPSBbXHJcbiAgICAgIHtpZDogMCxcclxuICAgICAgVG9waWM6ICdSYW5kb20gTmV3cyBhYm91dCBOb3RoaW5nJyxcclxuICAgICAgYXV0aG9yOiAnSmFtZXMgTG9jaycsIFxyXG4gICAgICBwaWM6IFwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbVwiICtcIi9pbWFnZXMvdzNzY2hvb2xzX2dyZWVuLmpwZ1wiLCBcclxuICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgLi4uXCIsXHJcbiAgICAgIGJvZHk6IFwiVGhpcyBzaSB0aGUgcHJldmlldyB0byBub3RoaW5nIGFuZCBpIGhhdmUgbm90aGluZyBlbHNlIHRvIHNheVwiIH0sXHJcbiAgICAgIHtpZDogMSxcclxuICAgICAgVG9waWM6ICdXaG8gaXMgRHIuIEJsYW5rZmFjZScsXHJcbiAgICAgIGF1dGhvcjogJ0RyLiBSZWFsIEZhY2UnLCBcclxuICAgICAgcGljOiBcImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb21cIiArXCIvdzNjc3MvaW1nX2F2YXRhcjMucG5nXCIsIFxyXG4gICAgICBwcmV2OiBcIlRoaXMgaXMgdGhlIHByZXZpZXcgdG8gd2hvIERyLiBubyBmYWNlIGlzIGRvbnQgcmVhZCBpbnRvIGl0IHRvbyBtdWNoIG9rYXkgLi4uXCIsXHJcbiAgICAgIGJvZHk6IFwiVGhpcyBzaSB0aGUgcHJldmlldyB0byBub3RoaW5nIGFuZCBpIGhhdmUgbm90aGluZyBlbHNlIHRvIHNheVwiIH0sXHJcbiAgICAgIHtpZDogMixcclxuICAgICAgVG9waWM6ICdSYW5kb20gTmV3cyBhYm91dCBFdmVyeXRoaW5nJyxcclxuICAgICAgYXV0aG9yOiAnWWFuayBNaWtlIFJvdGNoJywgXHJcbiAgICAgIHBpYzogXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tXCIrXCIvaW1hZ2VzL3czc2Nob29sc19ncmVlbi5qcGdcIiwgXHJcbiAgICAgIHByZXY6IFwiVGhpcyBpcyB0aGUgcHJldmlldyB0byBldmVyeXRoaW5nIC4uLlwiLFxyXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxyXG4gICAgICB7aWQ6IDMsXHJcbiAgICAgICAgVG9waWM6ICdUSEUgRU5EIElTIE5JR0ghISEnLFxyXG4gICAgICAgIGF1dGhvcjogJ1JldmVyZW5kIERvbmF0aW9ucycsIFxyXG4gICAgICAgIHBpYzogXCJodHRwczovL3d3dy5jbGV2ZXJmaWxlcy5jb20vaG93dG8vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDgvbWluaS5qcGdcIiwgXHJcbiAgICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSB0byBldmVyeXRoaW5nIGFzIHdlIGtub3cgaXRcIixcclxuICAgICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxyXG4gICAgICAgIHtpZDogNCxcclxuICAgICAgICAgIFRvcGljOiAnU2F5aWFucyBIYXRlIEhpbSEhIScsXHJcbiAgICAgICAgICBhdXRob3I6ICdHYW5nc3RhbGljaW91cycsIFxyXG4gICAgICAgICAgcGljOiBcIn4vaW1hZ2VzL0xpbEJpbGwucG5nXCIsIFxyXG4gICAgICAgICAgcHJldjogXCJMZWFybiBob3cgdGhpcyB0ZWVuYWdlciBmb3VuZCBvdXQgdGhlIHNlY3JldCB0byB1bmxvY2sgc2F5aWFuLi5cIixcclxuICAgICAgICAgIGJvZHk6IFwiVGhpcyBzaSB0aGUgcHJldmlldyB0byBub3RoaW5nIGFuZCBpIGhhdmUgbm90aGluZyBlbHNlIHRvIHNheVwiIH1cclxuICAgIF1cclxuICB9XHJcbiAgc2VsZWN0ZWROZXdzOiBuZXdzO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBvblNlbGVjdChpdGVtOiBuZXdzKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROZXdzID0gaXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iXX0=