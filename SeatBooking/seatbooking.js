//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu

const movieNameEle=document.getElementById("movieName");
const moviePriceEle=document.getElementById("moviePrice");
movieNameEle.textContent=moviesList[0].movieName;
moviePriceEle.textContent=moviesList[0].price;

const selectMovieEle=document.getElementById("selectMovie");
moviesList.forEach((eachMovie)=>{
    const optionsEle=document.createElement("option");
    selectMovieEle.appendChild(optionsEle);
    optionsEle.textContent=`${eachMovie.movieName}  $${eachMovie.price}`;
    optionsEle.value=eachMovie.movieName;
});

selectMovieEle.addEventListener("change",()=>{
    
    const movieEleValue=selectMovieEle.value;
    moviesList.forEach((eachMovie)=>{
        if(eachMovie.movieName==movieEleValue){
            movieNameEle.textContent=movieEleValue;
            moviePriceEle.textContent=eachMovie.price;

            const totalPriceEle=document.getElementById("totalPrice");
            totalPriceEle.textContent=`$ 0`;
            const numberOfSeatEle=document.getElementById("numberOfSeat");
            numberOfSeatEle.textContent="0";

            const spanEle=document.querySelectorAll(".selectedSeat");
            spanEle.forEach((eachSpanEle)=>{
                    eachSpanEle.remove();
            });

            // deselect the one which is selected 

        }
    })
    
});
//Add eventLister to each unoccupied seat

const seatEle=document.querySelectorAll("#seatCont .seat");
const totalPriceEle=document.getElementById("totalPrice");




let nrofSeats=0;
let totalPrice=0;
const numberOfSeatEle=document.getElementById("numberOfSeat");


seatEle.forEach((eachSeat,index)=>{
   
    const classList=eachSeat.classList;
    if(!classList.contains("occupied")){
        eachSeat.addEventListener("click",()=>{
            const selectedPrice=document.getElementById("moviePrice").textContent;
            const selectedSeatsHolderEle=document.getElementById("selectedSeatsHolder");
            if(!classList.contains("selected")){

                const noSelectedEle=document.querySelector(".noSelected");
                if(noSelectedEle){
                  noSelectedEle.remove();
                }
               
                eachSeat.classList.add("selected");
                totalPrice+=Number(selectedPrice);
                totalPriceEle.textContent=`$ ${totalPrice}`;

                const spanEle=document.createElement("span");
                spanEle.classList.add("selectedSeat",index+1);
                spanEle.textContent=index+1;    
                selectedSeatsHolderEle.appendChild(spanEle);

                nrofSeats+=1;
                numberOfSeatEle.textContent=nrofSeats;
            }
            else{
                eachSeat.classList=[];
                eachSeat.classList.add("seat");
                totalPrice-=Number(selectedPrice);
                totalPriceEle.textContent=`$ ${totalPrice}`;

                const spanEle=document.querySelectorAll(".selectedSeat");
                spanEle.forEach((eachSpanEle)=>{
                    if(eachSpanEle.textContent==index+1){
                        eachSpanEle.remove();
                    }
                });

                nrofSeats-=1;
                numberOfSeatEle.textContent=nrofSeats;

                if(nrofSeats==0){
                  const spanEle=document.createElement("span");
                  selectedSeatsHolderEle.appendChild(spanEle);
                  spanEle.classList.add("noSelected");
                  spanEle.textContent="No Seats Available";
                }
                
               
            }
        });
    }
});

function emptySeatAndPrice(){
    //make totalprice and nr of seats as 0;
    const totalPriceEle=document.getElementById("totalPrice");
    totalPriceEle.textContent='$ 0';
    const numberOfSeatEle=document.getElementById("numberOfSeat");
    numberOfSeatEle.textContent=0;
    totalPrice=0;
    nrofSeats=0;
    
    //empty seats selected
    const spanEle=document.querySelectorAll(".selectedSeat");
    spanEle.forEach((eachSpanEle)=>{
            eachSpanEle.remove();
    });

    const selectedSeatsHolderEle=document.getElementById("selectedSeatsHolder");
    const spanEle1=document.createElement("span");
    selectedSeatsHolderEle.appendChild(spanEle1);
    spanEle1.classList.add("noSelected");
    spanEle1.textContent="No Seats Available";

}

//Add eventLsiter to continue Button

const proceedBtnEle=document.getElementById("proceedBtn");
proceedBtnEle.addEventListener("click",()=>{
    const selectedSeatEle=document.querySelectorAll("#seatCont .selected")
    if(selectedSeatEle.length>0){
        selectedSeatEle.forEach((eachSelectedEle)=>{
            eachSelectedEle.classList=[];
            eachSelectedEle.classList.add("seat","occupied");
        });
        //make totalprice and nr of seats as 0;
        emptySeatAndPrice();

        alert("Yayy! Your Seats have been booked");
    }
    else{
        alert("Oops no seat Selected");
    }
    
});
//Add eventListerner to Cancel Button
const cancelBtnEle=document.getElementById("cancelBtn");

cancelBtnEle.addEventListener("click",()=>{
    const selectedSeatEle=document.querySelectorAll("#seatCont .selected");
    selectedSeatEle.forEach((eachSelectedEle)=>{
        eachSelectedEle.classList=[];
        eachSelectedEle.classList.add("seat");
    });
    emptySeatAndPrice();
});

