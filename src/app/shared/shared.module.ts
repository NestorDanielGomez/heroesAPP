import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotfountPageComponent } from './pages/notfount-page/notfount-page.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    NotfountPageComponent
  ],
  exports: [
    NotfountPageComponent
  ]
})
export class SharedModule { }
