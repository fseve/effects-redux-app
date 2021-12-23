import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { NavbarComponent } from './navbar/navbar.component';

// Módulos
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
