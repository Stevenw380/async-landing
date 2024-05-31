const url = 'https://twitter154.p.rapidapi.com/search/search/continuation?query=%23python&section=top&min_retweets=20&limit=5&continuation_token=DAACCgACF_Sz76EAJxAKAAMX9LPvoP_Y8AgABAAAAAILAAUAAABQRW1QQzZ3QUFBZlEvZ0dKTjB2R3AvQUFBQUFVWDlJWmx4cHZBZkJmMG5RNUxHdUVQRi9TdTZPSGJzQ0VYOUp6Y3psdUJ3UmYwbFE3Q1dxQWsIAAYAAAAACAAHAAAAAAwACAoAARf0hmXGm8B8AAAA&min_likes=20&start_date=2022-01-01&language=en';

const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ef9f011c3emsh971449e623fe8cfp1a51e7jsn170aa12eb5a6',
		'x-rapidapi-host': 'twitter154.p.rapidapi.com'
	}
};


async function fetchData(url){
    const response = await fetch(url, options);
    const data = await response.json();
    return data; 
}

(async () => {
    try{
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    </div>
        `).slice(0,4).join('')}
       
      `;
      content.innerHTML = view;
    }catch (error){
      console.log(error);

    }
})();