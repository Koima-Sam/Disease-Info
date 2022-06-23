document.addEventListener('DOMContentLoaded', (e)=>{
    loadDiseases()
})

function loadDiseases(){
    fetch('https://disease-info-api.herokuapp.com/diseases.json')
    .then(response => response.json())
    .then(pandemics =>{
        pandemics.diseases.forEach(disease =>{
            renderDisease(disease)
        })
    })
}
function renderDisease(item){
    let div = document.querySelector('#disease-info')
    let tr = document.createElement('tr')
    let name = document.createElement('td')
    name.textContent =item.name
    let facts = document.createElement('td')
    facts.textContent =item.facts
    let date = document.createElement('td')
    date.textContent = item.data_updated_at
    let treatment = document.createElement('td')
    treatment.textContent = item.treatment
    let prevention = document.createElement('td')
    prevention.textContent = item.prevention
    let symptom = document.createElement('td')
    symptom.textContent = item.symptoms
    tr.append(name, facts, date, treatment, symptom, prevention)
    div.append(tr)
}