const loadCategory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const dataArray = data.data;
    dataArray.forEach( el => {
        const categoryDiv = document.getElementById('category-div');
        const categoryButton = document.createElement('button');
        categoryButton.classList = 'btn ml-5 hover:bg-[#FF1F3D] hover:text-white text-black';
        categoryButton.innerText = el.category;
        categoryDiv.appendChild(categoryButton);
    });
    
}

const loadAllCards = async () =>{
    const res = await fetch ('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const cardInfoArray = data.data;
    const cardContainer = document.getElementById('card-container');
    cardInfoArray.forEach( el =>{
        const card = document.createElement('div');
        card.classList = 'card bg-base-100 shadow-lg'
        card.innerHTML = `

        <figure><img class="h-[250px] w-full" src="${el.thumbnail}" /></figure>
        <div class="flex gap-1">
           <img class="w-[80px] mt-5 ml-5 h-[80px] rounded-full" src="${el.authors[0].profile_picture}" />
           <div class='card-body'>
           <h2 class="card-title">${el.title}</h2>
           <p>${el.authors[0].profile_name} ${el.authors[0].verified ? el.authors[0].verified = '<i class="fa-solid fa-circle-check" style="color: #005eff;"></i>' : ' '}</p>
           <p>${el.others.views}</p>
           </div>
        </div>
        `;
        cardContainer.appendChild(card);
    })
}

loadCategory();
loadAllCards();