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

loadCategory();