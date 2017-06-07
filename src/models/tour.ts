import { Stage } from './stage';

export class Tour {
  private stages: Stage[];

  constructor(stages: Stage[]) {
    this.stages = stages;
  }
}