// Using Picsum for better placeholder images as via.placeholder.com can be unreliable
const placeholderUrl = (id, category) => `https://picsum.photos/seed/${category}${id}/300/200`;

const songs = Array.from({ length: 128 }, (_, i) => ({ id: `s${i+1}`, name: `노래 ${i+1}`, img: placeholderUrl(i+1, 'song') }));
const dramas = Array.from({ length: 128 }, (_, i) => ({ id: `d${i+1}`, name: `드라마 ${i+1}`, img: placeholderUrl(i+1, 'drama') }));
const movies = Array.from({ length: 128 }, (_, i) => ({ id: `m${i+1}`, name: `영화 ${i+1}`, img: placeholderUrl(i+1, 'movie') }));
const femaleIdols = Array.from({ length: 128 }, (_, i) => ({ id: `f${i+1}`, name: `여자 아이돌 ${i+1}`, img: placeholderUrl(i+1, 'female') }));
const maleIdols = Array.from({ length: 128 }, (_, i) => ({ id: `male${i+1}`, name: `남자 아이돌 ${i+1}`, img: placeholderUrl(i+1, 'male') }));

export const gameData = {
    songs,
    dramas,
    movies,
    'female-idols': femaleIdols,
    'male-idols': maleIdols,
};
