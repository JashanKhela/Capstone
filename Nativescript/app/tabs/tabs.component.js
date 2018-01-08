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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQVV6RTtJQUNFLGNBQ1MsRUFBVSxFQUNWLEtBQWMsRUFDZCxNQUFjLEVBQ2QsR0FBVyxFQUNYLElBQVksRUFDWixJQUFZO1FBTFosT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQUMzQixXQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxvQkFBSTtBQWdCakI7SUFFRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUU7WUFDVCxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsMkJBQTJCLEdBQUUsNkJBQTZCO2dCQUMvRCxJQUFJLEVBQUUsb0NBQW9DO2dCQUMxQyxJQUFJLEVBQUUsK0RBQStELEVBQUU7WUFDdkUsRUFBQyxFQUFFLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixNQUFNLEVBQUUsZUFBZTtnQkFDdkIsR0FBRyxFQUFFLDJCQUEyQixHQUFFLHdCQUF3QjtnQkFDMUQsSUFBSSxFQUFFLCtFQUErRTtnQkFDckYsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLDhCQUE4QjtnQkFDckMsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsR0FBRyxFQUFFLDJCQUEyQixHQUFDLDZCQUE2QjtnQkFDOUQsSUFBSSxFQUFFLHVDQUF1QztnQkFDN0MsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsR0FBRyxFQUFFLHVFQUF1RTtnQkFDNUUsSUFBSSxFQUFFLHlDQUF5QztnQkFDL0MsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIsR0FBRyxFQUFFLHNCQUFzQjtnQkFDM0IsSUFBSSxFQUFFLGlFQUFpRTtnQkFDdkUsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1NBQzVFLENBQUE7SUFDSCxDQUFDO0lBRUMsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBMUNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFDLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzs7T0FDVyxhQUFhLENBMkN2QjtJQUFELG9CQUFDO0NBQUEsQUEzQ0gsSUEyQ0c7QUEzQ1Usc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7IC8vIHRvIGhpZGUgYWN0aW9uIGJhclxyXG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0ICogYXMgSW1hZ2VNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5mb30gZnJvbSAnLi9pbmZvJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIG5ld3N7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgIHB1YmxpYyBUb3BpYyA6IFN0cmluZywgXHJcbiAgICBwdWJsaWMgYXV0aG9yOiBzdHJpbmcsIFxyXG4gICAgcHVibGljIHBpYzogc3RyaW5nLCBcclxuICAgIHB1YmxpYyBwcmV2OiBTdHJpbmcsXHJcbiAgICBwdWJsaWMgYm9keTogU3RyaW5nICl7fVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidGFic1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFicy90YWJzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOltcIi4vdGFicy90YWJzLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIHRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgTmV3czogbmV3c1tdO1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLk5ld3M9IFtcclxuICAgICAge2lkOiAwLFxyXG4gICAgICBUb3BpYzogJ1JhbmRvbSBOZXdzIGFib3V0IE5vdGhpbmcnLFxyXG4gICAgICBhdXRob3I6ICdKYW1lcyBMb2NrJywgXHJcbiAgICAgIHBpYzogXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tXCIgK1wiL2ltYWdlcy93M3NjaG9vbHNfZ3JlZW4uanBnXCIsIFxyXG4gICAgICBwcmV2OiBcIlRoaXMgaXMgdGhlIHByZXZpZXcgdG8gbm90aGluZyAuLi5cIixcclxuICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcclxuICAgICAge2lkOiAxLFxyXG4gICAgICBUb3BpYzogJ1dobyBpcyBEci4gQmxhbmtmYWNlJyxcclxuICAgICAgYXV0aG9yOiAnRHIuIFJlYWwgRmFjZScsIFxyXG4gICAgICBwaWM6IFwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbVwiICtcIi93M2Nzcy9pbWdfYXZhdGFyMy5wbmdcIiwgXHJcbiAgICAgIHByZXY6IFwiVGhpcyBpcyB0aGUgcHJldmlldyB0byB3aG8gRHIuIG5vIGZhY2UgaXMgZG9udCByZWFkIGludG8gaXQgdG9vIG11Y2ggb2theSAuLi5cIixcclxuICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcclxuICAgICAge2lkOiAyLFxyXG4gICAgICBUb3BpYzogJ1JhbmRvbSBOZXdzIGFib3V0IEV2ZXJ5dGhpbmcnLFxyXG4gICAgICBhdXRob3I6ICdZYW5rIE1pa2UgUm90Y2gnLCBcclxuICAgICAgcGljOiBcImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb21cIitcIi9pbWFnZXMvdzNzY2hvb2xzX2dyZWVuLmpwZ1wiLCBcclxuICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSBwcmV2aWV3IHRvIGV2ZXJ5dGhpbmcgLi4uXCIsXHJcbiAgICAgIGJvZHk6IFwiVGhpcyBzaSB0aGUgcHJldmlldyB0byBub3RoaW5nIGFuZCBpIGhhdmUgbm90aGluZyBlbHNlIHRvIHNheVwiIH0sXHJcbiAgICAgIHtpZDogMyxcclxuICAgICAgICBUb3BpYzogJ1RIRSBFTkQgSVMgTklHSCEhIScsXHJcbiAgICAgICAgYXV0aG9yOiAnUmV2ZXJlbmQgRG9uYXRpb25zJywgXHJcbiAgICAgICAgcGljOiBcImh0dHBzOi8vd3d3LmNsZXZlcmZpbGVzLmNvbS9ob3d0by93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9taW5pLmpwZ1wiLCBcclxuICAgICAgICBwcmV2OiBcIlRoaXMgaXMgdGhlIHRvIGV2ZXJ5dGhpbmcgYXMgd2Uga25vdyBpdFwiLFxyXG4gICAgICAgIGJvZHk6IFwiVGhpcyBzaSB0aGUgcHJldmlldyB0byBub3RoaW5nIGFuZCBpIGhhdmUgbm90aGluZyBlbHNlIHRvIHNheVwiIH0sXHJcbiAgICAgICAge2lkOiA0LFxyXG4gICAgICAgICAgVG9waWM6ICdTYXlpYW5zIEhhdGUgSGltISEhJyxcclxuICAgICAgICAgIGF1dGhvcjogJ0dhbmdzdGFsaWNpb3VzJywgXHJcbiAgICAgICAgICBwaWM6IFwifi9pbWFnZXMvTGlsQmlsbC5wbmdcIiwgXHJcbiAgICAgICAgICBwcmV2OiBcIkxlYXJuIGhvdyB0aGlzIHRlZW5hZ2VyIGZvdW5kIG91dCB0aGUgc2VjcmV0IHRvIHVubG9jayBzYXlpYW4uLlwiLFxyXG4gICAgICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfVxyXG4gICAgXVxyXG4gIH1cclxuICBzZWxlY3RlZE5ld3M6IG5ld3M7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuICBcclxuICAgIG9uU2VsZWN0KGl0ZW06IG5ld3MpOiB2b2lkIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5ld3MgPSBpdGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==