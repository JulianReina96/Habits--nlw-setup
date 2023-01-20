const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

// const data ={
//     run:['01-01', '01-02', '01-06' ]
// }

// nlwSetup.setData(data)
// nlwSetup.load()

const button = document.querySelector('header button')
form.addEventListener("change", save)

//button.addEventListener('click', add)

function add(){

const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
const dayExists = nlwSetup.dayExists(today)
 if(dayExists){
    alert("dia já incluso ❌")
    return
 }


alert('Adicionado com sucesso ✅');

nlwSetup.addDay(today)
}

function save(){


    localStorage.setItem("Plataforma@Habits", JSON.stringify(nlwSetup.data))

    
}

const data = JSON.parse(localStorage.getItem("Plataforma@Habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()


