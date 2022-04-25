// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
async function Searchmovies(){
    try{
        movie=document.getElementById("search").value;
        url ='http://www.omdbapi.com/?apikey=fa596efb&s='+movie;
        const res=await fetch(url);
        const data=await res.json();
        let mov=data.Search;
        console.log(mov)
        if (mov!=undefined){
            console.log(mov)
            return mov;
        }
    }catch (err){
       console.log(err)
    }
    
}function appendmovies(data){
    document.getElementById("movies").innerText=null;
    data.forEach(element => {
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=element.Poster;
        let title=document.createElement("h3");
        title.innerText=element.Title;
        let button=document.createElement("button");
        button.innerText="Book Now";
        button.addEventListener("click",function(){
            movie={
                Image:element.Poster,
                Title:element.Title,
            };
            localStorage.setItem("movies",JSON.stringify(movie));
            console.log(JSON.parse(localStorage.getItem("movies")));
           
            
        })
        div.append(image,title,button);
        document.getElementById("movies").append(div);
    });
    
}
async function main(){
    let datas=await Searchmovies();
    if(datas!=undefined){
        appendmovies(datas);
    }
}
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay)
}
document.getElementById("wallet").innerText=localStorage.getItem("totalamount");