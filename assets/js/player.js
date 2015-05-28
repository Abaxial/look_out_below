Player = function(score_element, title_element) {
  this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  this.score = 0
  title_element.style.color = this.color
  this.update_score = function() {
    score_element.textContent = this.score
  }
}