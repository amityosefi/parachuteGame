export class Score {
  private score: number;
  private scoreDisplay: HTMLElement | null;

  public constructor() {
    this.score = 0;
    this.scoreDisplay = document.querySelector('#score');
  }

  addScore() {
    this.score += 10;
  }
  get getScore(): number {
    return this.score;
  }
  get display(): HTMLElement | null {
    return this.scoreDisplay;
  }

  get name(): string {
    return 'Score: ';
  }
}
