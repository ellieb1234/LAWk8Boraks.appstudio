hmbMenu.onclick = function(s) {
      if (typeof(s) == "object")
            return
      if (s == 0) {
            ChangeForm(dessertVoting)
      } else if (s == 1) {
            ChangeForm(describeYou)
      } else if (s == 2) {
            ChangeForm(favExercises)
      }
}