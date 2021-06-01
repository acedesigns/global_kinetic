/* =======================================================
 *
 * Created by anele on 2020/05/28.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "./loader/loader.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({

    declarations: [ LoaderComponent, ],

    exports: [ LoaderComponent ],

    imports: [ CommonModule, FormsModule, ReactiveFormsModule ]
})
export class ComponentsModule {}
