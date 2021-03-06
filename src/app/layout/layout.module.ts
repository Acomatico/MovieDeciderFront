import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [NavbarComponent]
})
export class LayoutModule { }