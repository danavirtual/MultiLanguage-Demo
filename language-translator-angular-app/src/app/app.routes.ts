import { DisplayTranslatedPageComponent } from "./display-translated-page/display-translated-page.component";
import { LanguageSelectComponent } from "./language-select/language-select.component";
import { Routes } from "@angular/router";
import { UdiLookupComponent } from "./udi-lookup/udi-lookup.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PrivacyactpageComponent } from "./privacyactpage/privacyactpage.component";
import { AgeverificationComponent } from "./ageverification/ageverification.component";
import { DetailformComponent } from "./detailform/detailform.component";
import { ExitpageComponent } from "./exitpage/exitpage.component";

export const routes: Routes = [
    { path: "udi/:udi", component: WelcomeComponent }
    , { path: "lng/:lng", component: LanguageSelectComponent }
    , { path: "lookup-udi/:udi", component: UdiLookupComponent }
    , { path: "privacy/:lng", component: PrivacyactpageComponent }
    , { path: "ageverification/:lng", component: AgeverificationComponent }
    , { path: "detailform/:lng", component: DetailformComponent }
    , { path: "exitpage/:lng", component: ExitpageComponent }
    , { path: "display-translated/:udi/:lng", component: DisplayTranslatedPageComponent }
    , { path: "", component: WelcomeComponent } // default route
];
