import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-lernen';

  exampleLogInput = 'Ich bin ein Beispiel';
  usernameLogInput = ''

  printMyExampleOutput(myOutputEvent: any) {
    console.log('Das ist mein OutputEvent', myOutputEvent);
  }

  sendUsername(myOutputEvent: any) {
    this.usernameLogInput = myOutputEvent
  }
}
