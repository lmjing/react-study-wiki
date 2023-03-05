export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export const FilterList = ["All", "Active", "Complete"] as const;
export type FilterType = typeof FilterList[number];
