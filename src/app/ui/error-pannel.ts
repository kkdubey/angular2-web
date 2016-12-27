import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'error-pannel',
  styles: [`
    .error-styles {
      color: red;
      text-align: left;
      border: 1px solid #f6a2a2;
      padding: 2px;
    }
    .link-styles {
      cursor: pointer;
    }
  `],
  template: `
    <div
      *ngIf="errors.length > 0"
      class="error-styles row"
    >
      <div class="col-xs-12"
      >
        <ul>
          <li class="shadow-6"
            *ngFor="let error of errors"
          >
            <a class="link-styles"
              (click)="onClicked(error)"
            >
              {{ error.Text }}
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  `
})
export class ErrorPannel {
  @Input() errors = [];
  @Output() linkClick = new EventEmitter();

  onClicked(error) {
    try {
      document.getElementById(error.Id).focus();
    } catch (err) {
      this.linkClick.next(err);
    }
  }
}
