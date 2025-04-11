export interface Player {
  id: string;
  name: string;
}

export interface RsvpEntry {
  player: Player;
  status: 'Yes' | 'No' | 'Maybe';
}
