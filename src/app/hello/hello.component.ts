import { Component } from "@angular/core";

@Component({
  selector: "hello",
  template: `
  <h1>{{message}}</h1>
  <p
  [id]="sayHelloId"
  [style.color]="fontColor">
  You can set my color in the component!
</p>
<br/>
<button
  [disabled]="canClick"
  (click)="sayMessage()">
  Trigger alert message
</button>
<h2>Hello World: ngIf!</h2>

<button (click)="onEditClick()">Make text editable!</button>

<div *ngIf="canEdit; else noEdit">
    <p>You can edit the following paragraph.</p>
</div>

<ng-template #noEdit>
    <p>The following paragraph is read only. Try clicking the button!</p>
</ng-template>

<p [contentEditable]="canEdit">{{ message }}</p>
  `

})

export class HelloComponent {
  message = "I\'am read only "
  fontColor = "red"
  sayHelloId = "12"
  canClick = false
  canEdit = false
  sayMessage() {
    alert("alert message ")
  }
  onEditClick() {
    this.canEdit = !this.canEdit
    if (this.canEdit) {
      this.message = "you can edit me "
    }
    else {
      this.message = "I\'am read only "
    }
  }
}
