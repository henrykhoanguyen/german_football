class Team {
  constructor(name, division) {
    this.name = name;
    this.division = division;
    this.win = 0;
    this.lost = 0;
    this.draw = 0;
    this.goalFor = 0;
    this.goalAgainst = 0;
    this.teamForm = [];
  }

  getName() {
    return this.name;
  }

  setWin() {
    this.win += 1;
  }

  setLost() {
    this.lost += 1;
  }

  setDraw() {
    this.draw += 1;
  }

  setGoalFor(goals) {
    this.goalFor += goals;
  }

  setGoalAgainst(goals) {
    this.goalAgainst += goals;
  }
}
