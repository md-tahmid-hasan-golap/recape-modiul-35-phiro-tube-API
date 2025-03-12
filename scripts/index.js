
// load function
function load (){
    // fetch chalabo
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    // convert json
    .then(res => res.json())

    // send display function
    .then(data => display(data.categories))
}

load()

// display function

function display (categories){
    // parent div 

    const categoriesParent = document.getElementById("categories");
    

    // loop chalabo 
    for(let categori of categories ){
        // console.log(categori)
            
        // creat Element

        const btn_div = document.createElement("categories");
        btn_div.innerHTML = `
             <button class="btn hover:bg-[#FF1F3D] hover:text-white">${categori.category}</button>
        `
        //  appendChild div

        categoriesParent.appendChild(btn_div)

        
    }

}