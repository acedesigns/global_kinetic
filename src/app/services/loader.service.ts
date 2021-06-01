/* =======================================================
 *
 * Created by anele on 2020/05/28.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

    public isLoading = new BehaviorSubject(false);

    constructor() { }
}
