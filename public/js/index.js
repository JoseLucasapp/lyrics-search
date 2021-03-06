const btn = document.querySelector('#search_btn');
const band = document.querySelector('#band');
const music = document.querySelector('#music');
const lyrics_space = document.querySelector('#lyrics');
const music_space = document.querySelector('#music_title');

btn.addEventListener('click',()=>{
    api();
});


api = async()=>{
    lyrics_space.innerHTML = "";
    music_space.innerHTML = "";
    lyrics_space.innerHTML='Loading lyrics';
    music_space.innerHTML='Loading music info';
    if(band.value.length > 0 && music.value.length > 0){
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
                lyrics_space.innerHTML = "Error";
                music_space.innerHTML = "Check band/singer and song names";
    
            }
        }
        catch(err){
            console.log(err);
        }
    }
    else{
        lyrics_space.innerHTML = "Error";
        music_space.innerHTML = "Field not filled";
    }
}
searchLyrics = async(band, music)=>{
    return await fetch(`https://api.lyrics.ovh/v1/${band}/${music}`)
}

//colors
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const change_btn = document.querySelector('#change_btn');

change_btn.addEventListener('click', ()=>{
    document.getElementById('root').style.backgroundColor = color1.value;
    document.getElementById('search').style.backgroundColor = color2.value;
    document.getElementById('root').style.color = color3.value;
});