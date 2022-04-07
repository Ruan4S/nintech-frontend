import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { InputPasswordSuffixComponent } from './components/input-password-suffix/input-password-suffix.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, TranslateModule, CommonModule, RouterModule],
  declarations: [HeaderComponent, MenuComponent, FooterComponent, LoaderComponent, InputPasswordSuffixComponent],
  exports: [HeaderComponent, MenuComponent, FooterComponent, LoaderComponent, InputPasswordSuffixComponent],
})
export class SharedModule {}
