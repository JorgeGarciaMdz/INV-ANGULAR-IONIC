import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemFormComponent } from './item-form/item-form.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ // declaracion de los componentes que la integran
    AppComponent,
    NavbarComponent,
    ItemFormComponent
  ],
  /* imports: Otros módulos cuyas clases exportadas son necesarias para las plantillas de 
  * componentes declaradas en este NgModule. */
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  /* providers: Creadores de servicios que este NgModule aporta a la colección global de 
  * servicios; se vuelven accesibles en todas las partes de la aplicación.
  * (También puedes especificar proveedores a nivel de componente, que a menudo es preferido).*/
  providers: [],
  /* bootstrap: La vista principal de la aplicación, llamado el componente raíz, que aloja todas
  * las demás vistas de la aplicación. Sólo el NgModule raíz debe establecer la propiedad bootstrap.*/
  bootstrap: [AppComponent]
})
export class AppModule { }
