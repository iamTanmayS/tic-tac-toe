let bus = document.querySelectorAll(".cell")
let newbutton = document.querySelector(".new")
let turno = true;

let chances = [[0,1, 2],[3,4, 5], [6,7, 8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]]

bus.forEach((cell) =>{
    cell.addEventListener("click",() => {
        if(turno === true){
            cell.innerText = "x";
            turno = false;
            cell.style.animationPlayState = "paused";
        }
        else{
            cell.innerText = "o";
            turno = true;
            cell.style.animationPlayState = "paused";
        }
        cell.disabled = true;
        checkwinner();

    });
});

let checkwinner = () =>{
    for (const pattern of chances) {
         let value1 =  bus[pattern[0]].innerText;
         let value2 =  bus[pattern[1]].innerText;
         let value3 =  bus[pattern[2]].innerText;
        
         if(value1 !== "", value2 !== "", value3 !== "")
         {
            if (value1 === value2 && value2 === value3)
         {
            alert("winner",value1);
            bus.forEach((cell) =>{
               cell.disabled = true;
               return;
           });
         }
      }

    }
      };

newbutton.addEventListener("click",() => {
   bus.forEach((cell) =>{
       cell.innerText = "";
       cell.disabled = false;
       cell.style.animationPlayState = "running";
       return;
   });
});