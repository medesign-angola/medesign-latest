import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, NgZone, PLATFORM_ID } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScrollerService{
    constructor(
        private _ngZone: NgZone,
        @Inject(PLATFORM_ID) private platformId: any
    ) {}

    initialNavigation(x: number = 0, y: number = 0): void{
        if(isPlatformBrowser(this.platformId)){
            this._ngZone.runOutsideAngular(() => {
                window.scrollTo(x, y);
            });
        }
    }

    NavigationX(x: number): void{
        if(isPlatformBrowser(this.platformId)){
            this._ngZone.runOutsideAngular(() => {
                window.scrollTo(x, 0);
            });
        }
    }

    NavigationY(y: number): void{
        if(isPlatformBrowser(this.platformId)){
            this._ngZone.runOutsideAngular(() => {
                window.scrollTo(0, y);
            });
        }
    }

}