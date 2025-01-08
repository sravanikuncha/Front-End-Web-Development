import  {stocks,chartsDataUrl,stockListEle,chartsProfileDataUrl,chartsStockDataUrl
    ,loadProfileData,timeButtons,timeButtonTag,timeObj,loadChartData}
 from './stockMarketModule.js';

async function stockMarket(){

    const chartsData=await fetch(chartsDataUrl);
    const chartsProfileData=await fetch(chartsProfileDataUrl);
    const chartsStockData=await fetch(chartsStockDataUrl);

    const chartsDataResponse=await chartsData.json();
    const chartsPDResponse=await chartsProfileData.json();
    const chartsSDResponse=await chartsStockData.json();

    
    //display charts
    const chartsDataResults=chartsDataResponse.stocksData[0];

    //profileData
    const chartsPDResults=chartsPDResponse.stocksProfileData[0];

    //for lists
    const chartsSDResults=chartsSDResponse.stocksStatsData[0];

    
    //create list buttons 
    stocks.forEach((eachStock)=>{
        const statsData=chartsSDResults[eachStock];


        //creating list and styling 
        const liTag=document.createElement("li");

        const buttonTag=document.createElement("button");
        buttonTag.style.backgroundColor="#262661";
        buttonTag.style.width="4rem";

        const spanTag=document.createElement("span");
        const h3=document.createElement("h3");
        spanTag.appendChild(h3);
        spanTag.style.color="white";
        spanTag.style.fontSize="1rem";
      
        const spanTag1=document.createElement("span");
        const h31=document.createElement("h3")
        spanTag1.appendChild(h31);

        stockListEle.appendChild(liTag);
        liTag.appendChild(buttonTag);
        liTag.appendChild(spanTag);
        liTag.appendChild(spanTag1);
        h3.textContent=`$${statsData["bookValue"]}`;
        h31.textContent=`${statsData["profit"].toFixed(2)}%`;
        buttonTag.textContent=eachStock;
        buttonTag.style.color="white";
        if(parseFloat(statsData["profit"])>0){
            h31.style.color="green";
        }
        else{
            h31.style.color="red";
        }

        //adding event listener 
        buttonTag.addEventListener("click",()=>{

            loadProfileData(chartsPDResults,statsData,eachStock);

            //create buttons of tenure.
            loadChartData(timeButtonTag,timeButtons,timeObj,chartsDataResults,eachStock)
        })
        
    })

    //by default load the  first one 
    loadProfileData(chartsPDResults,chartsSDResults[stocks[0]],stocks[0]);

    //create buttons
    loadChartData(timeButtonTag,timeButtons,timeObj,chartsDataResults,stocks[0])
}


stockMarket();