rbtnDescribeYou.onchange = function() {
      s=rbtnDescribeYou.value
      let userChoice = $("input[name=rbtnDescribeYou]:checked").prop("value")
      if (s == 0 || s == 3) {
            lblDescribeYou.value=`I would agree that you are an ${userChoice} person too!`
      } else {
            lblDescribeYou.value = `I would agree that you are a ${userChoice} person too!`
      }
}

btnNext2.onclick = function() {
      ChangeForm(favExercises)
}