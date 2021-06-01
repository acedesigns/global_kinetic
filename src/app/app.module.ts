/* =======================================================
 *
 * Created by anele on 2020/05/28.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpService } from "./services/http.service";
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { LocationService } from "./services/location.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { LoaderComponent } from "./components/loader/loader.component";
import { HttpClientModule, HTTP_INTERCEPTORS, } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpRequestInterceptor } from "./interceptors/http-loading.interceptor";


@NgModule({

    declarations: [
        AppComponent,
        LoaderComponent
    ],

    imports: [
        MatCardModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],

    providers: [
        HttpService,
        LocationService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
    ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
