const allStar = document.querySelectorAll('.star');
let currRating = document.querySelector('#curr_rating');
let curr_star_level;


allStar.forEach( (star , i)=>{
  
 // console.log(`for i = ${i + 1}`);
   
  star.onclick = function (){
      curr_star_level = i + 1;

      currRating.innerText = `${curr_star_level} of 5`;
     //console.log(`curr = ${curr_star_level}`);

     allStar.forEach( (star , j) => {
       
     // console.log(`for j = ${j+1}`);

       if(curr_star_level >= j+1){
        star.innerHTML = '&#9733';
        //console.log(`if j = ${j +1}`);

       }
       else{
        star.innerHTML = '&#9734';
        //console.log(`else j = ${j +1}`);
       }
     });

   }
});


// if(curr_star_level == 1){
//   currRating.innerText = '1 of 5'
// }

// else if(curr_star_level == 2){
//   currRating.innerText = '2 of 5'
// }

// else if(curr_star_level == 3){
//   currRating.innerText = '3 of 5'
// }

// else if(curr_star_level == 4){
//   currRating.innerText = '4 of 5'
// }

// else if(curr_star_level == 5){
//   currRating.innerText = '5 of 5'
// }



