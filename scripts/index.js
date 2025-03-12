
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
             <button id="btn-${categori.category_id}" onclick="loadCategoryVideo(${categori.category_id})" class="btn hover:bg-[#FF1F3D] hover:text-white">${categori.category}</button>
        `
        //  appendChild div

        categoriesParent.appendChild(btn_div)

        
    }

}



// load video function

function loadVideo (){

    // fetch korbo
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")

    .then((res) => res.json())
    .then((data) => {
        document.getElementById("load_video").classList.add("Acktive")
        displayVideo(data.videos)
    })
}

// loadVideo()

const loadCategoryVideo = (id) => {
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        removerAcktiveClass()
        const clickButton = document.getElementById(`btn-${id}`);
        clickButton.classList.add("Acktive")
        console.log(clickButton)
        displayVideo(data.category)
    })

}


const displayVideo = (videos) => {
     // console.log(videos)

    // parent Selection
    const videoContainar = document.getElementById("video_containar");
    videoContainar.innerHTML = "";
    if(videos.length === 0){
        videoContainar.innerHTML = ` <div class="mt-7  text-center col-span-full flex flex-col justify-center items-center">
           
            <img class="w-32" src="./assets/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no <br> content here</h2>
           
        </div>`;
        return
    }
   
    //   forEach loop chalobo

    videos.forEach(video => {

        // console.log(video)

        const cardVideo = document.createElement("div") ;

        cardVideo.innerHTML = `
              <div class="card bg-base-100  shadow-sm">
            <figure class="relative">
              <img class = "w-full h-[150px] object-cover" src="${video.thumbnail}" />

                <span class="absolute bottom-2 right-2 bg-black text-white px-2 rounded-sm">3hrs 56 min ago</span>
            </figure>
            <div class="flex space-x-4 pt-5 px-3">
              
                <!-- image div -->
                 <div>
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${video.authors[0].profile_picture}" />
                        </div>
                      </div>
                 </div>
                 <!-- contant div -->
                  <div class="space-y-1">
                    <h1 class="text-sm font-semibold">${video.title}</h1>
                    <div class="flex items-center space-x-2">
                        <p class="text-sm text-gray-400">${video.authors[0].profile_name}</p>
                        <img class="w-4" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                    </div>
                    <p>${video.others.views}</p>
                  </div>
            </div>
          </div>
       

        `
        videoContainar.appendChild(cardVideo)
        
    });

}


// removed acktive class function
function removerAcktiveClass () {
    const AcktiveButton = document.getElementsByClassName("Acktive")
    for(let btn of AcktiveButton){
        btn.classList.remove("Acktive")
        
    }
    console.log(AcktiveButton)
}


// {
//     "category_id": "1003",
//     "video_id": "aaac",
//     "thumbnail": "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
//     "title": "Laugh at My Pain",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/XVHM7NP/kevin.jpg",
//             "profile_name": "Kevin Hart",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "13885"
//     },
//     "description": "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more."
// }






