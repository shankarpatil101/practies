import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientComponent } from './http-client.component';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
    declarations: [HttpClientComponent],
    exports: [HttpClientComponent],
  imports: [CommonModule, HttpClientModule,
  ],
})
export class HttpClientModuless { }