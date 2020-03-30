import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-demo-component',
  templateUrl: './button-demo-component.component.html',
  styleUrls: ['./button-demo-component.component.scss']
})
export class ButtonDemoComponentComponent implements OnInit {
  constructor() { }
  @Input() type: string;
  @Input() text: string;


  ngOnInit(): void {
  }
}
