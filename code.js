
let computerNum = Math.floor((Math.random() * 10) + 1)
let temp = document.getElementById(`outPc`)
let result = document.getElementById(`out`)
let loss = document.getElementById(`loss`)

console.log(computerNum)
let count = 3


      if(count > 0) {
        function func() {
          count = count - 1
           document.getElementById(`count`).innerHTML =  " Осталось попыток " + count
          let userNum = document.getElementById(`mynum`).value
          if (userNum == computerNum) {
            alert(`Вы угадали число!`)
            location.reload()
          } else if (userNum > computerNum) {
            result.innerHTML = " Вы ввели число больше чем нужно "
            
          }  else if(userNum < computerNum)  {
            result.innerHTML = "Вы ввели число меньше чем нужно "
            
          }    if (count === 0) {
            alert(`У вас закончились попытки,сейчас вы начнёте игру заново!`)
            location.reload()
          }
      
           }
      }

      
