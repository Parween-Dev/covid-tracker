export interface IDatatable {
  metrics: string;
  yesterday: string | number | null;
  today: string | number | null;
  name?: string;
}
