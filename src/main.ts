import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, routes, providers } from './app'
import { Main, Notes, About, Auth, Login, Register } from './app/containers'
import { MaterialModule } from '@angular/material';
import { MdToolbar, MdIconRegistry, MdIcon, MdToolbarRow } from '@angular/material'

import { 
  AppBar,
  NoteCard,
  NoteCreator,
  ColorPicker,
  ErrorPannel
} from './app/ui'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    MaterialModule.forRoot(),
  ],
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
    Login,
    Register,
  ],
  providers,
  schemas: [NgModule],
  bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
