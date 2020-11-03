import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  @Input() text: string;
  @Output() searchValue = new EventEmitter();
  filterValue = '';
  filterMessage="HEyyy this is filterMessage"
  constructor() {
    
   }

  ngOnInit(): void {

  }
  
  onSubmit() {
    console.log("form valiue",this.filterValue);
    this.searchValue.emit(this.filterValue)
  }

}
