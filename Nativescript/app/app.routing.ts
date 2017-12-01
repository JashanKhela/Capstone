import {tabsComponent} from "./tabs/tabs.component";
import {SideComponent} from "./sidedrawer/side.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
export const routes = [
  { path: "", component: tabsComponent },
  {path: "", component: NewsDetailComponent}
];

export const navigatableComponents = [
  tabsComponent,
  SideComponent,
  NewsDetailComponent
];
