import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './service/api.service';
import { Observable, of } from 'rxjs';

import { TableComponent } from './components/table/table.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TelespazioEvent } from './model/TelespazioEvent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    TableComponent,
    TimelineComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  apiService = inject(ApiService);

  dataList: TelespazioEvent[] = [];
  activeTimelineItem: number | null = null;
  activeTableItem: number | null = null;

  ngOnInit(): void {
    this.apiService.get().subscribe(res => this.dataList = res)
  }

  timelineaActiveElementChange(event: number | null) {
    this.activeTableItem = event;
  }

  tableActiveElementChange(event: number | null) {
    this.activeTimelineItem = event;
  }
}
