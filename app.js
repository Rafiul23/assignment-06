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
    cardContainer.innerText = '';

    cardInfoArray.forEach( el =>{
        const allCard = document.createElement('div');
        allCard.classList = 'card bg-base-100 shadow-lg'
        allCard.innerHTML = `

        <figure><img class="h-[250px] w-full" src="${el.thumbnail}" /></figure>
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
    })
}


loadCategory();
loadCards(1000);