import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Spinner2Component } from './components/spinner2/spinner2.component';
import { Spinner3Component } from './components/spinner3/spinner3.component';
import { Spinner4Component } from './components/spinner4/spinner4.component';

@NgModule({
  declarations: [SpinnerComponent, Spinner2Component, Spinner3Component, Spinner4Component],
  imports: [CommonModule],
  exports: [SpinnerComponent, Spinner2Component, Spinner3Component, Spinner4Component],
})
export class SharedLocalModule {}
