import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ CommonModule, MatTableModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() activeTableItem: number | null = null;

  @Output() activeElementChange = new EventEmitter<number | null>();

  displayedColumns: string[] = [
    'timestamp',
    'level',
    'message'
  ];

  mouseOverItem(index: number) {
    this.activeElementChange.emit(index);
  }

  mouseLeaveItem() {
    this.activeElementChange.emit(null);
  }
}
