const btn = document.querySelector(".button");
const quescont = document.querySelector(".optionContainer");
const foots= document.querySelector(".questionFooter");
const queselement= document.querySelector(".queselement");
const btnmx= document.querySelector(".btnmx");
const ext = document.querySelector(".next");
 const prog = document.querySelector(".progress-bar");
 let puan = document.querySelector(".puan");
const quesconts = document.querySelector(".questioncontain");
const as = document.querySelector(".as");
const inputgroup = document.querySelector(".rar");
let time = document.querySelector(".time");
let formcontrol = document.querySelector(".form-control");
let btnoutlinesecondary = document.querySelector(".btn-outline-secondary");
const gorevitems = document.querySelector(".gorev-item");
const conta = document.querySelector(".container");
let arı;

let azx = document.querySelector(".azx");
btn.addEventListener("click",startquiz);
    
let shufflequestin,currentquestionindex;
 
function startquiz(){
     
   btn.classList.toggle("kaybol");
    
    
    shufflequestin = questionsm.sort(() =>Math.random() - .5); 
        
        currentquestionindex = 0;
    
    
     quescont.classList.remove('hide');
   
    
   nextquestion();
    

         
    starttim(30);

 
    
    
   // ve dakika başlar 59 saniyeden geri setınterval konusunu calıs yaptıgın uygulamalara bak sonra buraya ekle
}

ext.addEventListener("click",() =>{
        currentquestionindex++; 
   
  
        nextquestion();
  
   prog.textContent =  Number(prog.textContent) + 20
   
    prog.innerText = prog.textContent;
     prog.style.width =  prog.textContent+"%";
 })

function nextquestion(){
 resetstate();
   queselement.style.display= "block";
    if(shufflequestin.length > currentquestionindex){
        
       showquestion(shufflequestin[currentquestionindex]);
 
   quescont.addEventListener("click",function(e){
      
        foots.classList.remove('hidem');
   }) 
      
       }else{ 
         
        clearInterval(arı);
          
           queselement.style.display= "none";
            btn.classList.remove("kaybol");
           btn.innerText = "yeniden oyna";
           
      
           
           
             as.style.display = "none";
      inputgroup.classList.remove("rar");
          inputgroup.classList.remove("ak");
             formcontrol.style.display = "block";
           btn.addEventListener("click",function(e){
      puan.textContent = 0;
             
               
                  as.style.display = "none";
      inputgroup.classList.toggle("ak");
               prog.textContent = 0;
                 prog.style.width =  prog.textContent+"%";
              formcontrol.disabled = false;
             azx.disabled = false;
               
               window.location = "http://127.0.0.1:64178/index.html";
       
   }) 
        
     
           
   }  
       


}

 
function showquestion(par){
    
   queselement.innerText =  par.questin;
    
     par.answer.forEach(function(par){
    
                  
        
    let btnm = document.createElement("button");
         
         
        btnm.innerText =  par.text; 
       
         
    btnm.classList.add("option");
          quescont.appendChild(btnm);
      
   

 btnm.addEventListener("click",answer);
 
      // cevap gormek ıcın
      
                        })
     
 

        
    
}
 

function resetstate(){
     foots.classList.add('hidem');
    while(quescont.firstChild){ // ılk cocugu kadar sılıcek sonra bunu nextquestion fonksıyonunda ılk yere yazıcaz
        
     quescont.removeChild(quescont.firstChild);   
    }
  
}




function answer(e){

   

let am =  shufflequestin[currentquestionindex];
 const boolvar =   am.answer.find(function(omp){ // sorunun true sıkkını verır
        
   return omp.correct;
 
    });

    let val1 = boolvar.text;
   
    let tıkval = e.target.childNodes[0].nodeValue;
    


if(val1 == tıkval){
       // tıkval.disabled=true;
  
       puan.textContent = Number(puan.textContent) + 20; 
  
   }
   let bt = document.querySelector(".option");

   bt.removeEventListener('click', answer); 
    
  
}

 

function starttim (times){
    
 arı = setInterval(secondsm, 1000);
    function secondsm(){
    
    
    time.textContent =  times ; 
    times--;
        
        if(times == 0){
            clearInterval(arı);
             time.textContent = "0";
            var audio = new Audio('alarm.mp3');
            audio.play();
            conta.style.display = "none";
            document.body.classList.remove("az");
          document.body.style.backgroundImage = "url('ss.jpg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
           }
        
    }


 
}


btnoutlinesecondary.addEventListener("click",function(){
  const scores = {
     score:puan.textContent,
     name:formcontrol.value
 };
  
     if(formcontrol.value == ""){
         alert("hata boş değer girmeyinizs");
         }else{
            
         
        localınsert(scores);    
               
           formcontrol.disabled = true;
             azx.disabled = true;
         }
    
        
   
    
})

function localınsert(person){
    
        // localStorage.setItem("isimlistesi",yenıgorev.value);
        
      let memeoryarray;
        
        if(localStorage.getItem("kullancı") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("kullancı"));
           
           }
     
          for (let i = 0; i < memeoryarray.length; i++) {

                
          
         
          if(memeoryarray[i].name != formcontrol.value){
               memeoryarray.push(person); 
              break;
             }else{
               
             alert("Bu yarışmacı zaten var");
                 break;
             }
         
  
                }

          
          
          
   
        
    
    
            
       
        
          
    memeoryarray.sort((x,y) =>  y.score-x.score);

       
               // local apiye yazdırmam lazım bunun ıcın strınge donusturup yazdırcaz
    
    
            
               
        localStorage.setItem("kullancı",JSON.stringify(memeoryarray));  
    
}


azx.addEventListener("click",localoku);


function localoku(){
    
     let memeoryarray;
    
         
    
        if(localStorage.getItem("kullancı") === null ){
           memeoryarray = [];
         
     }
    
           else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("kullancı"));
      
           }
    
    memeoryarray.map((gorev) => gorevıtemol(gorev));
    
        // her bırını okuyup ıcındekı fonsıyonu calıstırcak ıcındekı gorevıtemol fonksıyonuda asagıda lıste yapısını olusturuyr
        
 
        // burdakı parametre aslında dızıdekı her bır eleman

    
}


  


   
function gorevıtemol(gorev){
    
    if(gorev == ""){
       
        alert("lütfen boş bir deger girmeyiniz");
       
       
       
       }else{
             const yenıdıv = document.createElement("div");
    
    yenıdıv.classList.add("gorev-item");
 // lı olusturma
   const gorelı = document.createElement("li");
    gorelı.classList.add("gorev-tanim");
    gorelı.innerText = gorev.name + gorev.score;
    
    
   yenıdıv.appendChild(gorelı);
  
   
      quesconts.appendChild(yenıdıv);
    
       }
    
  
    
    
}



const questionsm = [
    
    {
        questin :"Kıbrıs Barış harekatı hangi tarihte gerçekleşmiştir?",
        answer:[
            {text:'1970',correct: false},
               {text:'1972',correct: false},
              {text:'1969',correct: false},
             {text:'1974',correct: true},
        ]
    },
    
  {
        questin :"Hangi yabancı futbolcu Fenerbahçe forması giymiştir??",
        answer:[
            {text:'Schumacher',correct: true},
               {text:'Simoviç',correct: false},
              {text:'Prekazi',correct: false},
             {text:'Ali koç',correct: false},
        ]
    },
    
    
    
     {
        questin :" Magna Carta hangi ülkenin kralıyla yapılmış bir sözleşmedir?",
        answer:[
            {text:'İngiltere',correct: true},
               {text:'Türkiye',correct: false},
              {text:'Almanya',correct: false},
             {text:'Brezilya',correct: false},
        ]
    },
    
     {
        questin :"Hangisi periyodik tabloda bulunan bir element değildir",
        answer:[
            {text:'Oksijen',correct: false},
               {text:'Su',correct: true},
              {text:'Azot',correct: false},
             {text:'Toprak',correct: false},
        ]
    },
    
     {
        questin :"Hangisi tarihteki Türk devletlerinden biri değildir?",
        answer:[
            {text:'Emevi Devleti',correct: true},
               {text:'Avar Kağanlığı',correct: false},
              {text:'Hun İmparatorluğu',correct: false},
             {text:'babiller',correct: false},
        ]
    }
       
       
       
    
    
]