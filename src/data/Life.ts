export class Life {
  private lifeScore: number;
  private lifeDisplay: HTMLElement | null;

  public constructor(lifeScore: number) {
    this.lifeScore = lifeScore;
    this.lifeDisplay = document.querySelector('#life');
  }

  get getScore(): number {
    return this.lifeScore;
  }

  decreaseLife(): void {
    this.lifeScore -= 1;
  }

  get display(): HTMLElement | null {
    return this.lifeDisplay;
  }

  get name(): string {
    return 'Life: ';
  }
}
