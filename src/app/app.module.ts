import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

// src/app/app.moduls.ts→Modül içerisinde kullanılan componentleri listeleriz. 
// Yeni bir component eklendiğinde CLI otomatik olarak modüle ekler. 
// Tanım yapıldığı için bu modül içerisindeki componenti başka bir component içerisinde kullanabiliriz.
@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}