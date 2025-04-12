import { RsvpService, Logger } from './RsvpService';
import { Player } from './types';

const logger = new Logger();
const rsvpService = new RsvpService(logger);

const player1: Player = { id: '1', name: 'Declan' };
const player2: Player = { id: '2', name: 'Noah' };
const player3: Player = { id: '3', name: 'Kushal' };
const player4: Player = { id: '4', name: 'John' };

// Add initial RSVPs
rsvpService.addOrUpdateRsvp(player1, 'Yes');
rsvpService.addOrUpdateRsvp(player2, 'No');
rsvpService.addOrUpdateRsvp(player3, 'Maybe');

// Example of updating an RSVP
rsvpService.addOrUpdateRsvp(player4, 'Yes'); // Adding a new player with RSVP 'Yes'
rsvpService.addOrUpdateRsvp(player1, 'No'); // Updating Declan's RSVP from 'Yes' to 'No'

// Get confirmed attendees (players with RSVP "Yes")
console.log('Confirmed Attendees:', rsvpService.getConfirmedAttendees());

console.log('---');

// Get RSVP counts (total, confirmed, declined)
console.log('RSVP Counts:', rsvpService.getRsvpCounts());

console.log('---');

// Edge case: No players with "Yes" status (Empty confirmed list)
rsvpService.addOrUpdateRsvp(player3, 'No'); // Changing Kushal's RSVP to "No"
console.log(
  'Confirmed Attendees (After Changing Kushal):',
  rsvpService.getConfirmedAttendees()
);
// Expected: Should return an empty list since there are no "Yes" responses.

console.log('---');

// Edge case: All players RSVP'd as "Maybe"
rsvpService.addOrUpdateRsvp(player1, 'Maybe');
rsvpService.addOrUpdateRsvp(player2, 'Maybe');
rsvpService.addOrUpdateRsvp(player3, 'Maybe');
rsvpService.addOrUpdateRsvp(player4, 'Maybe');

console.log(
  'Confirmed Attendees (All "Maybe"):',
  rsvpService.getConfirmedAttendees()
);
// Expected: Should return an empty list since no one has RSVP'd as "Yes".

console.log('---');

// Edge case: No players at all
const emptyRsvpService = new RsvpService(logger); // New RSVP service with no players
console.log(
  'Confirmed Attendees (No Players):',
  emptyRsvpService.getConfirmedAttendees()
);
// Expected: Should return an empty list.

console.log('RSVP Counts (No Players):', emptyRsvpService.getRsvpCounts());
// Expected: { total: 0, confirmed: 0, declined: 0 }
