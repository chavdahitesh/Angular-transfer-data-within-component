import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {
  tableDta :any
  @ViewChild(FilterComponent) filter;
  message: string;
  buttonText = "Search";

  get data(): string {
    return this.dataService.sharedData;
  }
  set data(value: string) {
    this.dataService.sharedData = this.tableDta
  }

  constructor(private dataService: DataServiceService) {
    console.log("data form service",this.data);
    
  }

  ngOnInit(): void {
    this.tableDta = this.data
  }
  ngAfterViewInit() {
    this.message = this.filter.filterMessage;
    console.log("message", this.message);

  }
  onFilterValue(event) {
    console.log("evenrt.tagre", event);

  }

}
