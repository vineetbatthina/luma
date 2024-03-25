export interface LocationType {
  name: string;
  description: string;
  listOfAllVisitors?: Visitor[];
}

export interface Visitor {
  name: string;
  age: number;
}
