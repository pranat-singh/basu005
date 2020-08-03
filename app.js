document.querySelector('.button1').addEventListener('click',gettext);
document.querySelector('.button2').addEventListener('click',getjson);
document.querySelector('.button3').addEventListener('click',getdata);
function gettext()
{
    fetch('text.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.querySelector('.output').innerHTML=data;
    })
    .catch(function(err){
        console.log(err);
    });
}


function getjson()
{
    fetch('rr.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output='';
        data.forEach(function(rr){
            output+=`<h1>${rr.item1}</h1>`;
        });
        document.querySelector('.output').innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    });
}
