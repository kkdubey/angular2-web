import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  styles: [`
    .app-bar {
      height: 65px;
      padding: 5px 30px;
      background-color: #00BCD4;
    }
    .logo {
      color: white;
      font-size: 30px;
      font-weight: 300;
      cursor: pointer;
    }
    .link {
      color: white;
      font-size: 24px;
      font-weight: 400;
      cursor: pointer;
    }
    .example-fill-remaining-space {
      // This fills the remaining space, by using flexbox. 
      // Every toolbar row uses a flexbox row layout.
      flex: 1 1 auto;
    }
    .demo-toolbar {
      padding: 6px;
    }
    .demo-toolbar-icon {
      padding: 0 14px;
    }

    .demo-fill-remaining {
      flex: 1 1 auto;
    }
    .removed-margin {
      margin-right: 0rem !importent;
      margin-left: 0rem !importent;
    }
  `],
  template: `
    <header class="app-bar row middle-xs">
      <span [routerLink]="['']" class="logo col-xs-10">
        Retain
      </span>
      <nav class="col-xs-2">
        <div class="row middle-xs between-xs">
          <span [routerLink]="['', 'about']" class="link">About</span>
          <span class="link">signout</span>
        </div>
      </nav>
    </header>
    
  `
})
export class AppBar {
}
