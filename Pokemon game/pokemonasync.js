//https://pokeapi.co/api/v2/pokemon/


const fightEle=document.getElementById("fight");

const p1_nameEle=document.getElementById("p1_name");
p1_nameEle.textContent="Sravani";
const p1_scoreEle=document.getElementById("p1_score");
const card1ImgEle=document.querySelector("#card1 #img");
const card1NameEle=document.querySelector("#card1 #name");
const card1ExperinceEle=document.querySelector("#card1 #experience");
const card1AbilitiesEle=document.querySelector("#card1 #abilities");
let score1=0;
p1_scoreEle.textContent=`Score ${score1}`;

const p2_nameEle=document.getElementById("p2_name");
p2_nameEle.textContent="Kuncha";
const p2_scoreEle=document.getElementById("p2_score");
const card2ImgEle=document.querySelector("#card2 #img");
const card2NameEle=document.querySelector("#card2 #name");
const card2ExperinceEle=document.querySelector("#card2 #experience");
const card2AbilitiesEle=document.querySelector("#card2 #abilities");
let score2=0;
p2_scoreEle.textContent=`Score ${score2}`;

async function startFight(){
    const url=`https://pokeapi.co/api/v2/pokemon/`;

    const pokemonList=await fetch(url);
    const pokemonResponse=await pokemonList.json();
    const pokemonData=await pokemonResponse.results;

    async function getPlayerDetails(pokemonData){
        const player1Id=Math.floor(Math.random()*pokemonData.length);
        const name=pokemonData[player1Id].name;

        card1NameEle.textContent="";
        card1NameEle.textContent=name;

        const player1Url=pokemonData[player1Id].url;
        
        const player1Data=await fetch(player1Url);
        const player1ResponseData=await player1Data.json();

        const imageUrl=player1ResponseData.sprites.back_default;
        card1ImgEle.textContent="";
        const image1Tag=document.createElement("img");
        image1Tag.src=imageUrl;
        card1ImgEle.appendChild(image1Tag);

        const experience=player1ResponseData.base_experience;
        card1ExperinceEle.textContent=experience;

        const abilitiesArr=player1ResponseData.abilities;
        card1AbilitiesEle.textContent="";
        abilitiesArr.forEach((eachability)=>{
            const abilityLi=document.createElement("li");
            abilityLi.textContent=eachability.ability.name;
            card1AbilitiesEle.appendChild(abilityLi);
        })


        const player2Id=Math.floor(Math.random()*pokemonData.length);

        const name2=pokemonData[player2Id].name;

        card2NameEle.textContent="";
        card2NameEle.textContent=name2;

        const player2Url=pokemonData[player2Id].url;

        const player2Data=await fetch(player2Url);
        const player2ResponseData=await player2Data.json();

        const image2Url=player2ResponseData.sprites.back_default;
        card2ImgEle.textContent="";
        const image2Tag=document.createElement("img");
        image2Tag.src=image2Url;
        card2ImgEle.appendChild(image2Tag);

        const experience1=player2ResponseData.base_experience;
        card2ExperinceEle.textContent=experience1;

        if(experience>experience1){
            score1++;
            p1_scoreEle.textContent=`Score ${score1}`;
        }
        else if(experience<experience1){
            score2++;
            p2_scoreEle.textContent=`Score ${score2}`;
        }
        const abilities1Arr=player2ResponseData.abilities;
        card2AbilitiesEle.textContent="";
        abilitiesArr.forEach((eachability)=>{
            const abilityLi=document.createElement("li");
            abilityLi.textContent=eachability.ability.name;
            card2AbilitiesEle.appendChild(abilityLi);
        })

    }
    fightEle.addEventListener("click",()=>{
        //player1 random index 
       getPlayerDetails(pokemonData); 
    });
}
startFight();
