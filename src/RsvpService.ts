import { Player, RsvpEntry } from './types';

// Logger class (used for dependency injection)
class Logger {
  log(message: string): void {
    console.log(message);
  }
}

// RsvpService class
class RsvpService {
  private rsvps: RsvpEntry[] = [];

  constructor(private logger: Logger) {}

  // Add or update a player's RSVP
  addOrUpdateRsvp(player: Player, status: 'Yes' | 'No' | 'Maybe'): void {
    const existingEntry = this.rsvps.find(
      (entry) => entry.player.id === player.id
    );

    if (existingEntry) {
      existingEntry.status = status; // Update existing entry
      this.logger.log(`RSVP updated for ${player.name} to ${status}`);
    } else {
      this.rsvps.push({ player, status }); // Add new entry
      this.logger.log(`RSVP added for ${player.name} with status ${status}`);
    }
  }

  // Get a list of confirmed attendees (RSVP status "Yes")
  getConfirmedAttendees(): Player[] {
    const confirmed = this.rsvps
      .filter((entry) => entry.status === 'Yes')
      .map((entry) => entry.player);

    if (confirmed.length === 0) {
      this.logger.log('No confirmed attendees.');
    }

    return confirmed;
  }

  // Count the number of total, confirmed, and declined responses
  getRsvpCounts(): { total: number; confirmed: number; declined: number } {
    const total = this.rsvps.length;
    const confirmed = this.rsvps.filter(
      (entry) => entry.status === 'Yes'
    ).length;
    const declined = this.rsvps.filter((entry) => entry.status === 'No').length;
    return { total, confirmed, declined };
  }
}

export { RsvpService, Logger };
