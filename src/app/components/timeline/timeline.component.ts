import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, OnChanges, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { TelespazioEvent } from '../../model/TelespazioEvent';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnChanges, AfterViewInit {
  @ViewChild('container') containerEl!: ElementRef;
  
  @Input() dataSource: TelespazioEvent[] = [];
  @Input() activeElement: null | number = null;

  @Output() activeElementChange = new EventEmitter<number | null>();

  private cdr = inject(ChangeDetectorRef)
  
  spacing = 50;
  minSpacing = 25;
  spacingList : number[]= [];
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dataSource'] && this.containerEl) {
      this.calculateSpacing();
    }
  }

  ngAfterViewInit(): void {
    this.calculateSpacing()
  }

  calculateSpacing() {
    const timestampList = this.dataSource.map(i => Date.parse(i.timestamp));
    const minDate = Math.min(...timestampList);
    const maxDate = Math.max(...timestampList);
    const containerWidth = this.containerEl.nativeElement.offsetWidth - 100;
    const spacing = containerWidth / (maxDate - minDate);
    const spacingList = this.dataSource.map(i => Math.ceil((Date.parse(i.timestamp) - minDate) * spacing));

    this.spacingList = spacingList

    this.cdr.detectChanges();

    // console.log({
    //   minDate,
    //   maxDate,
    //   minDateHuman: new Date(minDate).toLocaleString(),
    //   maxDateHuman: new Date(maxDate).toLocaleString(),
    //   containerWidth,
    //   spacing,
    //   spacingList
    // })
  }

  mouseOverItem(index: number) {
    this.activeElementChange.emit(index);
  }

  mouseLeaveItem() {
    this.activeElementChange.emit(null);
  }
}
