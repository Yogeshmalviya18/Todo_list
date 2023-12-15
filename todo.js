let input=document.querySelector("input");
            let addbtn=document.querySelector("button");
            let list=document.querySelector("ul");
            addbtn.addEventListener("click",function(){
                let li=document.createElement("li");
                li.innerText=input.value;
                 let delbtn=document.createElement("button");
                       delbtn.innerText="delete";
                       delbtn.classList.add("delete");
                       li.appendChild(delbtn);
              list.appendChild(li);
              input.value="";
            });

              let ulli=document.querySelector("ul");
              ulli.addEventListener("click",function(event){
                   if (event.target.nodeName=="BUTTON"){
                        let par=event.target.parentElement;
                        par.remove();
                   }
              })