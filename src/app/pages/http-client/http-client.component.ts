import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from 'src/app/pages/http-client/config.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'http-client',
    template: `<h2>HTTP Client Component</h2>
    {{error | json}}
    `
})
export class HttpClientComponent {
    config:  Config;
    datas : any;
    error: any;
    constructor(private ConfigServices: ConfigService, private http: HttpClient) {
        this.showConfig();
    }
    showConfig() {
        this.ConfigServices.getConfig()
            .subscribe(resp => {
                const keys = resp;
                
            },
            error => this.error = error
        )

    }
}