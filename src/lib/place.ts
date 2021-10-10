import {Place} from 'google.maps';

export interface PinnedPlace extends Place {
  pinned: boolean;
}
