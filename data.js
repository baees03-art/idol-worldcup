const placeholderUrl = (text) => `https://via.placeholder.com/300x200.png?text=${encodeURIComponent(text)}`;

const songs = Array.from({ length: 128 }, (_, i) => ({ id: `s${i+1}`, name: `노래 ${i+1}`, img: placeholderUrl(`Song ${i+1}`) }));
const dramas = Array.from({ length: 128 }, (_, i) => ({ id: `d${i+1}`, name: `드라마 ${i+1}`, img: placeholderUrl(`Drama ${i+1}`) }));
const movies = Array.from({ length: 128 }, (_, i) => ({ id: `m${i+1}`, name: `영화 ${i+1}`, img: placeholderUrl(`Movie ${i+1}`) }));
const femaleIdols = Array.from({ length: 128 }, (_, i) => ({ id: `f${i+1}`, name: `여자 아이돌 ${i+1}`, img: placeholderUrl(`Female Idol ${i+1}`) }));
const maleIdols = Array.from({ length: 128 }, (_, i) => ({ id: `male${i+1}`, name: `남자 아이돌 ${i+1}`, img: placeholderUrl(`Male Idol ${i+1}`) }));

export const gameData = {
    songs,
    dramas,
    movies,
    'female-idols': femaleIdols,
    'male-idols': maleIdols,
};
