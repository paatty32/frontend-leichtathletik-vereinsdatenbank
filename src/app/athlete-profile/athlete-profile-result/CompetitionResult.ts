export interface CompetitionResult {
    [key: string]: CompetitionEntry[];
  }

  export interface CompetitionEntry {
        date: string;
        result: string;
        place: string;
        resultLink: string;
  }