import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TienditaComponent } from './tiendita/tiendita.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TienditaComponent,
    TarifasComponent,
    ShopComponent,
    DetailsComponent,
    TopBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'Shop', component: ShopComponent},
      {path: 'Tiendita', component: TienditaComponent},
      {path: 'Tarifas', component: TarifasComponent},
      {path: 'EnVenta/:articuloid', component: DetailsComponent},
      {path: 'Home', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
