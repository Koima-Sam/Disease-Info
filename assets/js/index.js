document.addEventListener('DOMContentLoaded', (e)=>{
    loadDiseases()
})

function loadDiseases(){
    fetch('https://disease-info-api.herokuapp.com/diseases.json')
    .then(response => response.json())
    .then(pandemics =>{
        pandemics.diseases.forEach(disease =>{
            console.log(disease.name)
        })
    })
}