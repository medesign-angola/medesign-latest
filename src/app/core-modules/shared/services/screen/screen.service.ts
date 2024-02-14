import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScreenService{

    constructor(
        @Inject(PLATFORM_ID) private platformId: any
    ) { }

    get screenDimentions(): { width: number | 'window not supported on server', height: number | 'window not supported on server' }{
        if(isPlatformBrowser(this.platformId)){
            return {
                width: window.screen.width,
                height: window.screen.height
            };
        }else{
            return {
                width: 'window not supported on server',
                height: 'window not supported on server'
            }
        }
    }

    get screenType(): 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'window not supported on server' {
        if(isPlatformBrowser(this.platformId)){
            
            if(typeof(this.screenDimentions.width) == 'number' && typeof(this.screenDimentions.height) == 'number'){

                if(this.screenDimentions.width < 768){
                    return 'mobile';

                }else if(this.screenDimentions.width >= 768 &&  this.screenDimentions.width < 1024){
                    return 'tablet';

                }else if(this.screenDimentions.width >= 1024 &&  this.screenDimentions.width < 1280){
                    return 'laptop';

                }else{
                    return 'desktop';
                }

            }else {
                return 'window not supported on server';
            }

        }else{
            return 'window not supported on server'
        }
    }

}