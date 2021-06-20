import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() label = '';
  @Input() options: string[] = [];

  @Output() optionSelected = new EventEmitter<string>();

  selectItem(event: any) {
    this.optionSelected.emit(event.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
