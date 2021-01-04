import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedNzZorroModule } from '@mrrtech-workspace/shared/nz-zorro';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FrontendModule } from '@mrrtech-workspace/frontend';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzIconModule.forRoot([]),
    SharedNzZorroModule,
    RouterModule.forRoot([]),
    FrontendModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
