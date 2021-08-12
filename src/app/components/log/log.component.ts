import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  @Input('exampleInput')
  exampleInput!: string;

  @Input('usernameInput')
  usernameInput!: string;

  @Output('exampleOutput') exampleOutput = new EventEmitter<string>();

  logEvents = [
    /* { time: '14:10', msg: 'Das ist mein erstes Logevent' },
    { time: '14:15', msg: 'Das ist mein zweites Logevent' }, */
  ];

  constructor() {}

  ngOnInit(): void {
    //this.logEvents.push({ time: '15:00', msg: this.exampleInput });
  }

  sendOutput() {
      let timeNow = new Date().toLocaleString()
      this.logEvents.push({ time: timeNow, msg: this.usernameInput + ' eingeloggt!' });
  }
}
