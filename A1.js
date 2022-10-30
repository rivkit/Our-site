 
 fetch("json.json")
.then(r=>r.json())
.then(data=>{localStorage.setItem("data", JSON.stringify(data))})
.catch(error => console.error(error))

 var objString = localStorage.getItem("data");
 var e=JSON.parse(objString)
 console.log(JSON.parse(objString))
 document.getElementById("h2").innerHTML="Our site"
 document.write("<div style='display: flex ',justify-content: center>")

function random()
    {
    var rand='#'+(Math.random().toString(16)+'00000').slice(2,8)
    return rand
    }
var ran=random();
       for (var j = 0; j < e.length; j++) 
       {
           document.write("<div class='div2'>"  + Show(e[j],ran) + "</div>")
       } 
function Show(j,ran)
    {
    var string = "";
    j.url = "http://" + j.url;
    string += "<div style='background-color:" + ran
     + "'><section > Id:"+ j.id +"</section>"  ;
    string += "<section>Site Name:"+ j.name+" </section>"  ;
    string += "<a target='_blank' href='" + j.url 
    + "'><span class='title'>Site Url: </span>" + j.name + "</a>";
    if(j.subData)
    {
        var ran=random();
        for (var k = 0; k < j.subData.length; k++) {
             string+=Show(j.subData[k],ran)
        }
        string+="</div>"
    }
    else{
        string+="</div>"
        }
        return string;
    }




    
    
 