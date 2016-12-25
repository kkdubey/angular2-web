import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, routes, providers } from './app'
import { Main, Notes, About, Auth, Register } from './app/containers'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { 
  AppBar,
  NoteCard,
  NoteCreator,
  ColorPicker,
  ErrorPannel
} from './app/ui'

@NgModule({
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    Notes,
    NoteCreator,
    ColorPicker,
    ErrorPannel,
    About,
    Auth,
    Register
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    NgbModule.forRoot()
  ],
  providers,
  schemas: [NgModule],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
