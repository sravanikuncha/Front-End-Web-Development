//Referece https://plotly.com/javascript/line-charts/

export const stocks=["AAPL","MSFT","GOOGL","AMZN","PYPL","TSLA","JPM","NVDA","NFLX",'DIS'];

export const timeButtons=["1 Month","3 Month","1 Year","5 Years"];

export const chartsDataUrl=`https://stocks3.onrender.com/api/stocks/getstocksdata`;

export const chartsProfileDataUrl=`https://stocks3.onrender.com/api/stocks/getstocksprofiledata`;

export const chartsStockDataUrl=`https://stocks3.onrender.com/api/stocks/getstockstatsdata`;

export const stockListEle=document.getElementById("stockList");

export const detailTag=document.getElementById("detail");

export const chartTag=document.getElementById("chartData");

export const timeButtonTag=document.querySelector(".timeButton");

export const plotChartTag=document.getElementById("plotChart");


export const timeObj={
    "1 Month":"1mo",
    "3 Month":"3mo",
    "1 Year":"1y",
    "5 Years":"5y"
}


export function loadProfileData(chartsPDResults,statsData,eachStock){
    const profileData=chartsPDResults[eachStock]["summary"];
            //remove detail tag first and then create 3 h2 tags
            detailTag.textContent="";

            const spanTag=document.createElement("span");
            const stockNameTag=document.createElement("h2");
            const profitTag=document.createElement("h2");
            const bookValueTag=document.createElement("h2");
            spanTag.append(stockNameTag,profitTag,bookValueTag);

            //create a ptag
            const divTag=document.createElement("div");
            const pTag=document.createElement("p");
            divTag.appendChild(pTag);
            detailTag.append(spanTag,divTag);

            //filling content
            stockNameTag.textContent=eachStock;
            profitTag.textContent=`${statsData["profit"]}%`;
            bookValueTag.textContent=`$${statsData["bookValue"]}`
            pTag.className="profileData";
            pTag.textContent=profileData;
           
            //styling
            
            if(parseFloat(statsData["profit"])>0){
                profitTag.style.color="green";
            }
            else{
                profitTag.style.color="red";
            }
}


function loadChart(chartTime,chartsDataResults,stockName){
  
           console.log(chartsDataResults[stockName][chartTime]);
           const timeStamp=chartsDataResults[stockName][chartTime]["timeStamp"];
           const xArray=timeStamp.map((eachytimestamp)=>{
                return new Date(eachytimestamp*1000).toLocaleDateString();
           });
           let yArray=chartsDataResults[stockName][chartTime]["value"];
           yArray=yArray.map((eachValue)=>eachValue.toFixed(2));

           const data = [{
            x: xArray,
            y: yArray,
            mode:"lines",
            line: {
                color: "green",
                width: 2
              },
            hovertemplate:`${stockName}:$%{y}<extra></extra>`,
          },
          ];

          const layout = {
            xaxis: {},
            yaxis: {},
            annotations:[{
                x: xArray[0],
                y: yArray[0],
                xanchor: 'right',
                text: `${stockName}:$${yArray[0]}`,
                showarrow: false,
                font: {
                    color:'green'
                }
            },{
                x: xArray[xArray.length-1],
                y: yArray[yArray.length-1],
                xanchor: 'left',
                text: `${stockName}:$${yArray[yArray.length-1]}`,
                showarrow: false,
                font: {
                    color:'green'
                }
            }]
          };
          
          Plotly.newPlot(plotChartTag, data, layout);
}


export function loadChartData(timeButtonTag,timeButtons,timeObj,chartsDataResults,stockName){
    timeButtonTag.textContent="";
    timeButtons.forEach((eachButton)=>{

        const buttonTag=document.createElement("button");
        buttonTag.textContent=eachButton;
        buttonTag.className="timeButtons";
        timeButtonTag.appendChild(buttonTag);
        

        //by default
        if(timeObj[eachButton]==="5y"){
            loadChart(timeObj[eachButton],chartsDataResults,stockName);
        }

        buttonTag.addEventListener("click",()=>{
            const chartTime=timeObj[eachButton];
            loadChart(chartTime,chartsDataResults,stockName);
        });

    })
}