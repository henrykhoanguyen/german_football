class Team {
  constructor(name, division, season) {
    this.Name = name;
    this.Division = division;
    this.Season = season;
    this.Win = 0;
    this.Lost = 0;
    this.Draw = 0;
    this.GoalsFor = 0;
    this.GoalsAgainst = 0;
    this.GoalsDifferences = 0;
    this.Points = 0;
    // this.teamForm = []; // maybe
  }

  getName() {
    return this.Name;
  }

  setWin() {
    this.Win += 1;
  }

  setLost() {
    this.Lost += 1;
  }

  setDraw() {
    this.Draw += 1;
  }

  setGoalFor(goals) {
    this.GoalsFor += goals;
  }

  setGoalAgainst(goals) {
    this.GoalsAgainst += goals;
  }

  setGoalsDiff(){
    this.GoalsDifferences = this.GoalsFor - this.GoalsAgainst;
  }

  setPts(){
    this.Points = this.Win * 3 + this.Draw;
  }
}

module.exports = Team;
