const searchForm = document.querySelector('#searchForm')
document.addEventListener('DOMContentLoaded', (e)=>{
    loadDiseases()
    document.addEventListener('submit',(e)=>{
        e.preventDefault()
        const tr = document.querySelector('#disease-info')
        let child = tr.lastElementChild;
        while(tr.childNodes.length>2){
            tr.removeChild(child);
            child = tr.lastElementChild;

       }
        findDisease(e.target.searchText.value);
    
    })
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
    tr.className = 'data-row'
    let name = document.createElement('td')
    name.textContent =item.name
    let facts = document.createElement('td')
    facts.textContent =item.facts
    let date = document.createElement('td')
    date.textContent = item.data_updated_at
    let treatment = document.createElement('td')
     item.treatment ===null ?treatment.textContent = "Not Available": treatment.textContent = item.treatment
    let prevention = document.createElement('td')
    item.prevention !==null? prevention.textContent = item.prevention: prevention.textContent = 'Not Available ' 
    let symptom = document.createElement('td')
    item.symptoms !==null? symptom.textContent = item.symptoms: symptom.textContent = "Not Available"
    tr.append(name, facts, date, treatment, symptom, prevention)
    div.append(tr)
}

function findDisease(diseaseName){
    fetch(`https://disease-info-api.herokuapp.com/diseases/${diseaseName.toLowerCase()}.json`)
    .then(response => response.json())
    .then(data =>{
        renderDisease(data.disease)
    })
    .catch(error =>{
        alert(error)
    })

}