import {Component,ViewChild,ViewContainerRef,ComponentFactoryResolver,ComponentRef,ComponentFactory} from '@angular/core';
import { MessageComponent } from './alert.component';
 
@Component({
    selector: 'apps-root',
    template: `<div style="text-align:center">
                    <h1>Welcome to {{ title }}!</h1>
                    <button (click)="createComponent('Welcome Foo ! ')">Welcome</button>
                    <button (click)="createComponent('Foo Again ?')">Not Welcome</button>
                    <br />
                    <template #messagecontainer></template>
                </div>`
})
export class AppsComponent {
    title = 'app';
    componentRef: any;
 
    @ViewChild('messagecontainer', { read: ViewContainerRef }) appcomp: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }
 
    createComponent(message) {
        this.appcomp.clear();
        const factory = this.resolver.resolveComponentFactory(MessageComponent);
        this.componentRef = this.appcomp.createComponent(factory);
        this.componentRef.instance.message = message;
    }
    destroyComponent() {
        this.componentRef.destroy();
    }
}