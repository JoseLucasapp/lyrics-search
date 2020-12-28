const btn = document.querySelector('#search_btn');

btn.addEventListener('click',()=>{
    api();
});

api = async()=>{
    const band = document.querySelector('#band');
    const music = document.querySelector('#music');
    const lyrics_space = document.querySelector('#lyrics');
    const music_space = document.querySelector('#music_title');
    lyrics_space.innerHTML='<div id="lyrics">Loading</div>';
    try{
        const buscar = await searchLyrics(band.value, music.value);
        const res = await buscar.json();
        if(res.lyrics){
            lyrics_space.innerHTML = res.lyrics;
            music_space.innerHTML = `${band.value}/${music.value}`;
            band.value = '';
            music.value = '';
        }
        else{
            lyrics_space.innerHTML = "Check band/singer and song names";
        }
    }
    catch(err){
        console.log(err);
    }
}
searchLyrics = async(band, music)=>{
    return await fetch(`https://api.lyrics.ovh/v1/${band}/${music}`)
}