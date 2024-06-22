import { MaterialColorScheme } from '../shared/generateRandomMaterialColorScheme';

export interface Attendee {
  Name: string;
  PlusOneCount: number;
  colourScheme: MaterialColorScheme;
}
