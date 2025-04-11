import { RsvpService, Logger } from './RsvpService';
import { Player } from './types';

const logger = new Logger();
const rsvpService = new RsvpService(logger);

// Example players
const player1: Player = { id: '1', name: 'Alice' };
const player2: Player = { id: '2', name: 'Bob' };

// Add or update RSVPs
rsvpService.addOrUpdateRsvp(player1, 'Yes');
rsvpService.addOrUpdateRsvp(player2, 'No');

// Get confirmed attendees
console.log('Confirmed Attendees:', rsvpService.getConfirmedAttendees());

// Get RSVP counts
console.log('RSVP Counts:', rsvpService.getRsvpCounts());
