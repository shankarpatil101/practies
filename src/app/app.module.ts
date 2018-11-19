import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayDataModule } from './pages/display-data/display.module';
import { SyntexModule } from './pages/template-syntex/syntex.module';
import { UserInputModule } from './pages/user-input/userinput.module';
import { LifecycleHooksModule } from './pages/lifecycle-hooks/lifecyclehooks.module';
import { ComponentIntrectionModule } from './pages/component-intrection/intrection.module';
import { DynamicModule } from './pages/dynamic-component/dynamic-module';
import { DirectiveModule } from './pages/directive/directive-module';
import { PipeModule } from './pages/pipes/pipe.module';
import { FormModule } from './pages/forms/form.module';
import { ObservableModule } from './pages/Observables/observable.module';
import { DependencyInjectionModule } from './pages/Dependency Injection/di.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DisplayDataModule,
    SyntexModule,
    UserInputModule,
    LifecycleHooksModule,
    ComponentIntrectionModule,
    DynamicModule,
    DirectiveModule,
    PipeModule,
    FormModule,
    ObservableModule,
    DependencyInjectionModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
