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


const url=`https://pokeapi.co/api/v2/pokemon/`;

const pokemonList=fetch(url);

pokemonList.then((response)=>{
    return response.json();
}).then((responseData)=>{
    return responseData.results;
}).then((pokemonData)=>{
    fightEle.addEventListener("click",()=>{
        //player1 random index 
        const player1Id=Math.floor(Math.random()*pokemonData.length);
        const name=pokemonData[player1Id].name;

        card1NameEle.textContent="";
        card1NameEle.textContent=name;

        const player1Url=pokemonData[player1Id].url;
        
        console.log(player1Url);

        const player1Data=fetch(player1Url);

        player1Data.then((player1Response)=>{
            return player1Response.json();
        }).then((player1ResponseData)=>{

            const imageUrl=player1ResponseData.sprites.back_default;
            card1ImgEle.textContent="";
            const image1Tag=document.createElement("img");
            image1Tag.src=imageUrl;
            card1ImgEle.appendChild(image1Tag);

            const experience=player1ResponseData.base_experience;
            card1ExperinceEle.textContent=experience;

            console.log(player1ResponseData);
            const abilitiesArr=player1ResponseData.abilities;
            card1AbilitiesEle.textContent="";
            abilitiesArr.forEach((eachability)=>{
                const abilityLi=document.createElement("li");
                abilityLi.textContent=eachability.ability.name;
                card1AbilitiesEle.appendChild(abilityLi);
            })

            //player2 random index
            const player2Id=Math.floor(Math.random()*pokemonData.length);

            const name2=pokemonData[player2Id].name;

            card2NameEle.textContent="";
            card2NameEle.textContent=name2;

            const player2Url=pokemonData[player2Id].url;
            console.log(player2Url);
            
            const player2Data=fetch(player2Url);

            player2Data.then((player2Response)=>{
                return player2Response.json();
            }).then((player2ResponseData)=>{

                const imageUrl=player2ResponseData.sprites.back_default;
                card2ImgEle.textContent="";
                const image1Tag=document.createElement("img");
                image1Tag.src=imageUrl;
                card2ImgEle.appendChild(image1Tag);

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
                const abilitiesArr=player2ResponseData.abilities;
                card2AbilitiesEle.textContent="";
                abilitiesArr.forEach((eachability)=>{
                    const abilityLi=document.createElement("li");
                    abilityLi.textContent=eachability.ability.name;
                    card2AbilitiesEle.appendChild(abilityLi);
                })

        });

        });
       
        
       
    })
})