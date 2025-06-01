export interface Event {
  id: number;
  topic: string;
  description: string;
  image?: string;
}

export interface Activity {
  id: number;
  date: string;
  time: string;
  topic: string;
}