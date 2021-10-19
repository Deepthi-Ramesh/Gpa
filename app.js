
function getOption() {

   var reg = document.querySelector('#regulation').value;
   var dept = document.querySelector('#department').value;
   var sem = document.querySelector('#semester').value;
   fetch('./Data.json')
   .then(response => response.json())
   .then((data)=>{
      console.log(data);
      console.log(data[reg][dept][sem]);
      var subjects = data[reg][dept][sem];
      console.log(subjects.subjects[0]);
      console.log(dept,sem);;
      localStorage.setItem("subjects",JSON.stringify(subjects.subjects));
      localStorage.setItem("dept",dept);
      localStorage.setItem("sem",sem);

      console.log("From local Storage : ");
      console.log(JSON.parse(localStorage.getItem("subjects")));
      window.location.href = "http://127.0.0.1:5500/sam.html";
     
   })
   .catch(error => console.log(error));
   
}