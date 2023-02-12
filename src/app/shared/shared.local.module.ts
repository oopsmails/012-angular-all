import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Spinner2Component } from './components/spinner2/spinner2.component';

@NgModule({
  declarations: [SpinnerComponent, Spinner2Component],
  imports: [CommonModule],
  exports: [SpinnerComponent, Spinner2Component],
})
export class SharedLocalModule {}
