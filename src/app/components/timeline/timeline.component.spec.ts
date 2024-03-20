import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ElementRef } from '@angular/core';


import { TimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let spectator: Spectator<TimelineComponent>;
  const createComponent = createComponentFactory(TimelineComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should calculate spacing', () => {
    const mockElementRef = {
      nativeElement: {
        offsetWidth: 200
      }
    } as ElementRef;

    spectator.component.containerEl = mockElementRef;
    spectator.setInput('dataSource', [
      {
        timestamp: "2021-08-01T12:00:00.000Z",
        level: "WARNING",
        message: "Metric 1 is above the warning threshold"
      },
      {
        timestamp: "2021-08-01T13:00:00.000Z",
        level: "ERROR",
        message: "Metric 1 is above the error threshold"
      },
      {
        timestamp: "2021-08-01T14:00:00.000Z",
        level: "INFO",
        message: "Metric 1 is back to normal"
      },
    ]);

    expect(spectator.component.spacingList.length).toBe(3);
    expect(spectator.component.spacingList[0]).toBe(0);
    expect(spectator.component.spacingList[1]).toBe(50);
    expect(spectator.component.spacingList[2]).toBe(100);
  });

  it('should emit activeElementChange on mouseOverItem', () => {
    const index = 2;
    const spyEmit = spyOn(spectator.component.activeElementChange, 'emit');

    spectator.component.mouseOverItem(index);

    expect(spyEmit).toHaveBeenCalledWith(index);
  });

  it('should emit null on mouseLeaveItem', () => {
    const spyEmit = spyOn(spectator.component.activeElementChange, 'emit');

    spectator.component.mouseLeaveItem();

    expect(spyEmit).toHaveBeenCalledWith(null);
  });
});
