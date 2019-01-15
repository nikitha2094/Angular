import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header.component'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule { }
