const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
  ];
  

// IMC = poids en kg / taille² en m
let form = document.querySelector('form');
let btn = document.querySelector('button');
let sameValue = document.querySelector('.same-value')
let result = document.querySelector('.result')

form.addEventListener('submit',function(e){
    e.preventDefault();
    calcul();
});

function calcul(){
    let input = document.querySelectorAll('input');
    let taille = input[0].value;
    let poids = input[1].value;
    if(!taille || !poids || poids<=0 || taille<=0){
        handleError();
        return;
    }
    const IBM = (poids/Math.pow(taille/100,2)).toFixed(2);
    show(IBM);
}
 

function handleError(){
    sameValue.textContent = 'Oups...🤯';
    sameValue.style.color = "red";
    result.textContent = 'Veillez entrer des valeurs numerique et positif.'
}



function show(IBM){
    const rank = BMIData.find(data =>{
        if(IBM>=data.range[0] && IBM<data.range[1]) return data;
        else if(typeof data.range==='number' && IBM>=data.range) return data;
    })
    sameValue.textContent = IBM;
    sameValue.style.color = rank.color;
    result.textContent = `Résultat : ${rank.name}`;;
}