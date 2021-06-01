/* =======================================================
 *
 * Created by anele on 2020/05/28.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../../services/loader.service";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    loading: boolean;

    constructor(private loaderService: LoaderService) { }

    ngOnInit(): void {
        this.loaderService.isLoading.subscribe((v) => {
            this.loading = v;
        });
    }

}
