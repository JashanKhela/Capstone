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
            styleUrls: ['./tabs/tabs.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], tabsComponent);
    return tabsComponent;
}());
exports.tabsComponent = tabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQVV6RTtJQUNFLGNBQ1MsRUFBVSxFQUNWLEtBQWMsRUFDZCxNQUFjLEVBQ2QsR0FBVyxFQUNYLElBQVksRUFDWixJQUFZO1FBTFosT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztJQUMzQixXQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxvQkFBSTtBQWdCakI7SUFFRTtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUU7WUFDVCxFQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNOLEtBQUssRUFBRSwyQkFBMkI7Z0JBQ2xDLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixHQUFHLEVBQUUsMkJBQTJCLEdBQUUsNkJBQTZCO2dCQUMvRCxJQUFJLEVBQUUsb0NBQW9DO2dCQUMxQyxJQUFJLEVBQUUsK0RBQStELEVBQUU7WUFDdkUsRUFBQyxFQUFFLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixNQUFNLEVBQUUsZUFBZTtnQkFDdkIsR0FBRyxFQUFFLDJCQUEyQixHQUFFLHdCQUF3QjtnQkFDMUQsSUFBSSxFQUFFLCtFQUErRTtnQkFDckYsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLDhCQUE4QjtnQkFDckMsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsR0FBRyxFQUFFLDJCQUEyQixHQUFDLDZCQUE2QjtnQkFDOUQsSUFBSSxFQUFFLHVDQUF1QztnQkFDN0MsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsR0FBRyxFQUFFLHVFQUF1RTtnQkFDNUUsSUFBSSxFQUFFLHlDQUF5QztnQkFDL0MsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1lBQ3ZFLEVBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIsR0FBRyxFQUFFLHNCQUFzQjtnQkFDM0IsSUFBSSxFQUFFLGlFQUFpRTtnQkFDdkUsSUFBSSxFQUFFLCtEQUErRCxFQUFFO1NBQzVFLENBQUE7SUFDSCxDQUFDO0lBRUMsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBMUNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzs7T0FDVyxhQUFhLENBMkN2QjtJQUFELG9CQUFDO0NBQUEsQUEzQ0gsSUEyQ0c7QUEzQ1Usc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7IC8vIHRvIGhpZGUgYWN0aW9uIGJhclxyXG5pbXBvcnQgKiBhcyBsaXN0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0ICogYXMgSW1hZ2VNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5mb30gZnJvbSAnLi9pbmZvJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIG5ld3N7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgIHB1YmxpYyBUb3BpYyA6IFN0cmluZywgXHJcbiAgICBwdWJsaWMgYXV0aG9yOiBzdHJpbmcsIFxyXG4gICAgcHVibGljIHBpYzogc3RyaW5nLCBcclxuICAgIHB1YmxpYyBwcmV2OiBTdHJpbmcsXHJcbiAgICBwdWJsaWMgYm9keTogU3RyaW5nICl7fVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidGFic1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vdGFicy90YWJzLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy90YWJzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgdGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICBOZXdzOiBuZXdzW107XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuTmV3cz0gW1xyXG4gICAgICB7aWQ6IDAsXHJcbiAgICAgIFRvcGljOiAnUmFuZG9tIE5ld3MgYWJvdXQgTm90aGluZycsXHJcbiAgICAgIGF1dGhvcjogJ0phbWVzIExvY2snLCBcclxuICAgICAgcGljOiBcImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb21cIiArXCIvaW1hZ2VzL3czc2Nob29sc19ncmVlbi5qcGdcIiwgXHJcbiAgICAgIHByZXY6IFwiVGhpcyBpcyB0aGUgcHJldmlldyB0byBub3RoaW5nIC4uLlwiLFxyXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxyXG4gICAgICB7aWQ6IDEsXHJcbiAgICAgIFRvcGljOiAnV2hvIGlzIERyLiBCbGFua2ZhY2UnLFxyXG4gICAgICBhdXRob3I6ICdEci4gUmVhbCBGYWNlJywgXHJcbiAgICAgIHBpYzogXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tXCIgK1wiL3czY3NzL2ltZ19hdmF0YXIzLnBuZ1wiLCBcclxuICAgICAgcHJldjogXCJUaGlzIGlzIHRoZSBwcmV2aWV3IHRvIHdobyBEci4gbm8gZmFjZSBpcyBkb250IHJlYWQgaW50byBpdCB0b28gbXVjaCBva2F5IC4uLlwiLFxyXG4gICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9LFxyXG4gICAgICB7aWQ6IDIsXHJcbiAgICAgIFRvcGljOiAnUmFuZG9tIE5ld3MgYWJvdXQgRXZlcnl0aGluZycsXHJcbiAgICAgIGF1dGhvcjogJ1lhbmsgTWlrZSBSb3RjaCcsIFxyXG4gICAgICBwaWM6IFwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbVwiK1wiL2ltYWdlcy93M3NjaG9vbHNfZ3JlZW4uanBnXCIsIFxyXG4gICAgICBwcmV2OiBcIlRoaXMgaXMgdGhlIHByZXZpZXcgdG8gZXZlcnl0aGluZyAuLi5cIixcclxuICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcclxuICAgICAge2lkOiAzLFxyXG4gICAgICAgIFRvcGljOiAnVEhFIEVORCBJUyBOSUdIISEhJyxcclxuICAgICAgICBhdXRob3I6ICdSZXZlcmVuZCBEb25hdGlvbnMnLCBcclxuICAgICAgICBwaWM6IFwiaHR0cHM6Ly93d3cuY2xldmVyZmlsZXMuY29tL2hvd3RvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA4L21pbmkuanBnXCIsIFxyXG4gICAgICAgIHByZXY6IFwiVGhpcyBpcyB0aGUgdG8gZXZlcnl0aGluZyBhcyB3ZSBrbm93IGl0XCIsXHJcbiAgICAgICAgYm9keTogXCJUaGlzIHNpIHRoZSBwcmV2aWV3IHRvIG5vdGhpbmcgYW5kIGkgaGF2ZSBub3RoaW5nIGVsc2UgdG8gc2F5XCIgfSxcclxuICAgICAgICB7aWQ6IDQsXHJcbiAgICAgICAgICBUb3BpYzogJ1NheWlhbnMgSGF0ZSBIaW0hISEnLFxyXG4gICAgICAgICAgYXV0aG9yOiAnR2FuZ3N0YWxpY2lvdXMnLCBcclxuICAgICAgICAgIHBpYzogXCJ+L2ltYWdlcy9MaWxCaWxsLnBuZ1wiLCBcclxuICAgICAgICAgIHByZXY6IFwiTGVhcm4gaG93IHRoaXMgdGVlbmFnZXIgZm91bmQgb3V0IHRoZSBzZWNyZXQgdG8gdW5sb2NrIHNheWlhbi4uXCIsXHJcbiAgICAgICAgICBib2R5OiBcIlRoaXMgc2kgdGhlIHByZXZpZXcgdG8gbm90aGluZyBhbmQgaSBoYXZlIG5vdGhpbmcgZWxzZSB0byBzYXlcIiB9XHJcbiAgICBdXHJcbiAgfVxyXG4gIHNlbGVjdGVkTmV3czogbmV3cztcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG4gIFxyXG4gICAgb25TZWxlY3QoaXRlbTogbmV3cyk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTmV3cyA9IGl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19
