export enum TelespazioLeveEnum {
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  INFO = 'INFO',
}

export type TelespazioLevel = "WARNING" | 'ERROR' | 'INFO'

export interface TelespazioEvent {
  timestamp: string;
  message: string;
  level: TelespazioLevel;
}
