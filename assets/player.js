 Player = function(scoreElement, titleElement, turnsElement) {
  this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  this.score = 0
  this.turnsRemaining = 10
  this.scoreElement = scoreElement
  this.wins = 0
  titleElement.style.color = this.color
  turnsElement.textContent = this.turnsRemaining
  this.updateScore = function() {
    scoreElement.textContent = this.score    
  }
  this.update_turns = function() {
    this.turnsRemaining = this.turnsRemaining - 1
    turnsElement.textContent = this.turnsRemaining
  }
}
