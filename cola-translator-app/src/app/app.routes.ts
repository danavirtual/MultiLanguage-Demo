import { DisplayTranslatedPageComponent } from "./display-translated-page/display-translated-page.component";
import { LanguageSelectComponent } from "./language-select/language-select.component";
import { Routes } from "@angular/router";
import { UdiLookupComponent } from "./udi-lookup/udi-lookup.component";
import { WelcomeComponent } from "./welcome/welcome.component";

export const routes: Routes = [
    { path: "udi/:udi", component: WelcomeComponent }
    , { path: "lng/:lng", component: LanguageSelectComponent }
    , { path: "lookup-udi/:udi", component: UdiLookupComponent }
    , { path: "display-translated/:udi/:lng", component: DisplayTranslatedPageComponent }
    , { path: "", component: WelcomeComponent } // default route
];
