var dept = document.querySelector('.department');
dept.innerHTML = localStorage.getItem("dept");
var sem_num = document.querySelector('.sem-number');
sem_num.innerHTML = localStorage.getItem("sem");  
var subjects = JSON.parse(localStorage.getItem("subjects"));
 var sub =document.querySelectorAll(".sub");
 var opt =document.querySelectorAll(".select");
 for(var i=0;i<subjects.length;i++){
sub[i].innerHTML= subjects[i].name;
opt[i].innerHTML='<select id="select"'+i+'><option class="op" value="O">O</option><option class="op" value="A" > A</option><option class="op" value="A+">A+</option><option class="op" value="B">B</option> <option class="op" value="B+">B+</option></select><br>';

} 
function getOption() {
    selectElement = 
            document.querySelector('#select0');
              
    output = selectElement.value;

    document.querySelector('.result').innerHTML
            = output;
    
}