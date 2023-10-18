   let btn1=document.querySelectorAll("button")[0];
   let btn2=document.querySelectorAll("button")[1];

  //  console.log(btn1);
  //  console.log(btn2);

  let table=document.querySelector("table");
  // console.log(table.rows[0].cells[0]);

  let form=document.forms[0];

  let username=form.elements.username;
  let password=form.elements.password;

  btn1.addEventListener("click" , e=>{

    e.preventDefault();
       
       let tr=document.createElement("tr");
       tr.innerHTML +=`
                     <th>1</th>
                     <th>${username.value}</th>
                     <th>${password.value}</th>
       
       `;

       table.rows[0].insertAdjacentElement("afterend",tr);

         for(let i=1;i<table.rows.length;i++){

             table.rows[i].cells[0].textContent=i;
                
         }

         for(let i=1;i<table.rows.length;i++){

          if(table.rows[i].cells[2].textContent.length<=8){
  
            table.rows[i].cells[2].style.backgroundColor="red";
          }
          else if(table.rows[i].cells[2].textContent.length>8 && table.rows[i].cells[2].textContent.length<=10){

            table.rows[i].cells[2].style.backgroundColor="orange";

          }
          else{
            table.rows[i].cells[2].style.backgroundColor="green";
          }
        }
  });

  btn2.addEventListener("click" , e=>{

    e.preventDefault();
       
       let tr=document.createElement("tr");
       tr.innerHTML +=`
                     <th>1</th>
                     <th>${username.value}</th>
                     <th>${password.value}</th>
       
       `;

       table.appendChild(tr);

         for(let i=1;i<table.rows.length;i++){

             table.rows[i].cells[0].textContent=i;
                
         }
         for(let i=1;i<table.rows.length;i++){

          if(table.rows[i].cells[2].textContent.length<=8){
  
            table.rows[i].cells[2].style.backgroundColor="red";
          }
          else if(table.rows[i].cells[2].textContent.length>8 && table.rows[i].cells[2].textContent.length<=10){

            table.rows[i].cells[2].style.backgroundColor="orange";

          }
          else{
            table.rows[i].cells[2].style.backgroundColor="green";
          }
        }
  });


  //  console.log(table.rows[0].cells[2].textContent.length);
  