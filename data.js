// Helper to generate image URLs
const getImg = (category, name) => `https://picsum.photos/seed/${category}_${encodeURIComponent(name)}/300/200`;

// Helper to generate YouTube search links
const getMusicLink = (name) => `https://www.youtube.com/results?search_query=${encodeURIComponent(name)}`;

// Top real items to ensure quality
const topSongs = [
    { name: '밤양갱 - 비비(BIBI)' }, { name: 'Love wins all - 아이유(IU)' }, { name: 'To. X - 태연(TAEYEON)' },
    { name: '첫 만남은 계획대로 되지 않아 - TWS' }, { name: 'EASY - LE SSERAFIM' }, { name: 'Fate - (여자)아이들' },
    { name: 'Supernova - aespa' }, { name: 'How Sweet - NewJeans' }, { name: 'Super Shy - NewJeans' },
    { name: 'Seven - Jungkook' }, { name: 'Magnetic - ILLIT' }, { name: 'SPOT! - ZICO (feat. JENNIE)' },
    { name: 'SHEESH - BABYMONSTER' }, { name: 'Midas Touch - KISS OF LIFE' }, { name: 'Hype Boy - NewJeans' },
    { name: 'Ditto - NewJeans' }, { name: 'OMG - NewJeans' }, { name: 'Attention - NewJeans' },
    { name: 'I AM - IVE' }, { name: 'Kitsch - IVE' }, { name: 'Baddie - IVE' }, { name: 'Love Lee - AKMU' },
    { name: 'Fry\'s Dream - AKMU' }, { name: 'Spicy - aespa' }, { name: 'Drama - aespa' },
    { name: 'Wife - (여자)아이들' }, { name: 'Queencard - (여자)아이들' }, { name: 'Tomboy - (여자)아이들' },
    { name: 'Perfect Night - LE SSERAFIM' }, { name: 'Smart - LE SSERAFIM' }, { name: 'Sticky - KISS OF LIFE' }
];

const topDramas = [
    { name: '눈물의 여왕' }, { name: '선재 업고 튀어' }, { name: '더 글로리' }, { name: '무빙' },
    { name: '이상한 변호사 우영우' }, { name: '재벌집 막내아들' }, { name: '일타 스캔들' }, { name: '사랑의 불시착' },
    { name: '도깨비' }, { name: '태양의 후예' }, { name: '응답하라 1988' }, { name: '이태원 클라쓰' },
    { name: '빈센조' }, { name: '나의 아저씨' }, { name: '스물다섯 스물하나' }, { name: '시그널' },
    { name: '미스터 션샤인' }, { name: '슬기로운 의사생활' }, { name: '부부의 세계' }, { name: '비밀의 숲' },
    { name: '킹덤' }, { name: '오징어 게임' }, { name: '수리남' }, { name: 'D.P.' },
    { name: '스위트홈' }, { name: '사내맞선' }, { name: '재벌X형사' }, { name: '소년시대' }
];

const topMovies = [
    { name: '파묘' }, { name: '서울의 봄' }, { name: '범죄도시4' }, { name: '기생충' },
    { name: '신과함께' }, { name: '부산행' }, { name: '극한직업' }, { name: '명량' },
    { name: '베테랑' }, { name: '택시운전사' }, { name: '올드보이' }, { name: '헤어질 결심' },
    { name: '범죄도시' }, { name: '국제시장' }, { name: '변호인' }, { name: '광해, 왕이 된 남자' },
    { name: '도둑들' }, { name: '7번방의 선물' }, { name: '암살' }, { name: '괴물' },
    { name: '왕의 남자' }, { name: '태극기 휘날리며' }, { name: '해운대' }, { name: '실미도' },
    { name: '인터스텔라' }, { name: '어벤져스: 엔드게임' }, { name: '엘리멘탈' }, { name: '인사이드 아웃 2' }
];

const topFemaleIdols = [
    { name: '장원영 (IVE)' }, { name: '카리나 (aespa)' }, { name: '안유진 (IVE)' }, { name: '민지 (NewJeans)' },
    { name: '해린 (NewJeans)' }, { name: '윈터 (aespa)' }, { name: '제니 (BLACKPINK)' }, { name: '지수 (BLACKPINK)' },
    { name: '사나 (TWICE)' }, { name: '나연 (TWICE)' }, { name: '설윤 (NMIXX)' }, { name: '미연 ((여자)아이들)' },
    { name: '아이린 (Red Velvet)' }, { name: '김채원 (LE SSERAFIM)' }, { name: '허윤진 (LE SSERAFIM)' }, { name: '나띠 (KISS OF LIFE)' },
    { name: '하니 (NewJeans)' }, { name: '다니엘 (NewJeans)' }, { name: '혜인 (NewJeans)' }, { name: '리즈 (IVE)' },
    { name: '레이 (IVE)' }, { name: '가을 (IVE)' }, { name: '이서 (IVE)' }, { name: '지젤 (aespa)' },
    { name: '닝닝 (aespa)' }, { name: '로제 (BLACKPINK)' }, { name: '리사 (BLACKPINK)' }, { name: '모모 (TWICE)' }
];

const topMaleIdols = [
    { name: '차은우 (ASTRO)' }, { name: '뷔 (BTS)' }, { name: '정국 (BTS)' }, { name: '지민 (BTS)' },
    { name: '현진 (Stray Kids)' }, { name: '필릭스 (Stray Kids)' }, { name: '원빈 (RIIZE)' }, { name: '성찬 (RIIZE)' },
    { name: '민규 (SEVENTEEN)' }, { name: '정한 (SEVENTEEN)' }, { name: '백현 (EXO)' }, { name: '재현 (NCT)' },
    { name: '도영 (NCT)' }, { name: '강다니엘' }, { name: '연준 (TXT)' }, { name: '수빈 (TXT)' },
    { name: '진 (BTS)' }, { name: '슈가 (BTS)' }, { name: '제이홉 (BTS)' }, { name: 'RM (BTS)' },
    { name: '호시 (SEVENTEEN)' }, { name: '원우 (SEVENTEEN)' }, { name: '에스쿱스 (SEVENTEEN)' }, { name: '승관 (SEVENTEEN)' },
    { name: '앤톤 (RIIZE)' }, { name: '소희 (RIIZE)' }, { name: '쇼타로 (RIIZE)' }, { name: '은석 (RIIZE)' }
];

// Generator function to reach 128 items
const generateData = (topItems, categoryLabel) => {
    const data = topItems.map((item, i) => ({
        id: `${categoryLabel}${i + 1}`,
        name: item.name,
        img: getImg(categoryLabel, item.name),
        ...(categoryLabel === 'songs' ? { link: getMusicLink(item.name) } : {})
    }));
    
    // Fill the rest up to 128
    for (let i = topItems.length; i < 128; i++) {
        const name = `${categoryLabel} 후보 ${i + 1}`;
        data.push({
            id: `${categoryLabel}${i + 1}`,
            name: name,
            img: getImg(categoryLabel, name),
            ...(categoryLabel === 'songs' ? { link: getMusicLink(name) } : {})
        });
    }
    return data;
};

export const gameData = {
    songs: generateData(topSongs, 'songs'),
    dramas: generateData(topDramas, 'dramas'),
    movies: generateData(topMovies, 'movies'),
    'female-idols': generateData(topFemaleIdols, 'female-idols'),
    'male-idols': generateData(topMaleIdols, 'male-idols'),
};
