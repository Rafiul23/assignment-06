const loadCategory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const dataArray = data.data;
    dataArray.forEach( el => {
        const categoryContainer = document.getElementById('category-container');
        const categoryDiv = document.createElement('div');
        
        categoryDiv.innerHTML = `
            <button class='btn ml-5 hover:bg-[#FF1F3D] hover:text-white text-black' onclick="loadCards('${el.category_id}')">${el.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    });
    
}

const loadCards = async (id) =>{
    const res = await fetch (`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const cardInfoArray = data.data;

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    const arrayLength = cardInfoArray.length;

    if(arrayLength > 0){
        cardInfoArray.forEach( el =>{
            const allCard = document.createElement('div');
            allCard.classList = 'card bg-base-100 shadow-lg'
    
            const getTimeString = el.others.posted_date;
            const getTime = parseInt(getTimeString);
            
    
            const hours = Math.floor((getTime / 3600));
            const minutes = Math.floor((getTime % 3600) / 60);
            const seconds = ((getTime % 3600) % 60);
    
            console.log(hours, minutes, seconds);
    
            allCard.innerHTML = `
    
           <div class='relative'>
           <figure><img class="h-[250px] w-full" src="${el.thumbnail}" /></figure>
             <div class='absolute p-2 rounded-lg bottom-1 right-2 bg-black text-white'>
                ${(!isNaN(getTime) ? (hours + 'hrs ' + minutes + ' min ' + seconds + 's ago') : ' '  )}
             </div>
           </div>
            <div class="flex gap-1">
               <img class="w-[80px] mt-5 ml-5 h-[80px] rounded-full" src="${el.authors[0].profile_picture}" />
               <div class='card-body'>
               <h2 class="card-title">${el.title}</h2>
               <p>${el.authors[0].profile_name} ${el.authors[0].verified ? el.authors[0].verified = '<i class="fa-solid fa-circle-check ml-1" style="color: #005eff;"></i>' : ' '}</p>
               <p>${el.others.views}</p>
               </div>
            </div>
            `;
            cardContainer.appendChild(allCard);
            const warningContainer = document.getElementById('warning');
            warningContainer.innerText = '';
        })
    } else {
        cardContainer.innerHTML = '';
        const warningContainer = document.getElementById('warning');
        warningContainer.innerHTML = `
        
        <img class="mx-auto" src='./images/Icon.png' />
        <p class="font-bold mt-5 text-2xl">Oops!! Sorry, There is no content here</p>
        
        `;

    }
}


loadCategory();
loadCards(1000);