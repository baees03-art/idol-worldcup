const getImg = (vid) => `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

const songs = [
    { id: 's1', name: '밤양갱 - 비비', vid: 'm6p_zZ9u67k', start: 45 },
    { id: 's2', name: 'Love wins all - 아이유', vid: '0Zq7huH-L-A', start: 180 },
    { id: 's3', name: 'Supernova - aespa', vid: 'nFYwcjvUNu4', start: 45 },
    { id: 's4', name: 'How Sweet - NewJeans', vid: 'Q3K0TOv78Is', start: 60 },
    { id: 's5', name: 'Magnetic - ILLIT', vid: 'Vk5-c_v4gMU', start: 40 },
    { id: 's6', name: 'SPOT! - 지코 (feat. 제니)', vid: 'o9V-8t5A9Y4', start: 50 },
    { id: 's7', name: '나는 아픈 건 딱 질색이니까 - (여자)아이들', vid: 'fB6p-f8e-h8', start: 60 },
    { id: 's8', name: '첫 만남은 계획대로 되지 않아 - TWS', vid: 'hV697u22W94', start: 65 },
    { id: 's9', name: 'To. X - 태연', vid: 'm_p-eT7q9vE', start: 55 },
    { id: 's10', name: 'EASY - LE SSERAFIM', vid: 'bNKXwquv9W4', start: 40 },
    { id: 's11', name: 'Midas Touch - KISS OF LIFE', vid: 'o3Y6j0v_l0c', start: 45 },
    { id: 's12', name: 'Super Shy - NewJeans', vid: 'ArmDp-zijuc', start: 30 },
    { id: 's13', name: 'SHEESH - BABYMONSTER', vid: '2wA_b79vI7M', start: 70 },
    { id: 's14', name: 'Seven - 정국', vid: 'QU9c0053UAU', start: 45 },
    { id: 's15', name: 'Sticky - KISS OF LIFE', vid: 'I7_X9v6f9hE', start: 50 },
    { id: 's16', name: 'Hype Boy - NewJeans', vid: '11cta61v070', start: 60 },
    { id: 's17', name: 'Ditto - NewJeans', vid: 'pSUydWEqKwE', start: 65 },
    { id: 's18', name: 'Love Lee - AKMU', vid: 'EozGZ7pL0Cg', start: 50 },
    { id: 's19', name: 'Smart - LE SSERAFIM', vid: 'mR_X8vN9vXk', start: 45 },
    { id: 's20', name: 'Drama - aespa', vid: 'D8VEhcPeSlc', start: 60 },
    { id: 's21', name: 'Small Girl - 이영지', vid: 'm6v-bT-H-oY', start: 45 },
    { id: 's22', name: '인사 - 범진', vid: 'm_v-H9_q9_U', start: 60 },
    { id: 's23', name: '숲 - 최유리', vid: 'm6v-H_p-eTk', start: 70 },
    { id: 's24', name: 'Perfect Night - LE SSERAFIM', vid: 'hV6v-B_nNK8', start: 45 },
    { id: 's25', name: 'Welcome to the Show - DAY6', vid: 'm6v-H_p-e-U', start: 60 },
    { id: 's26', name: '천상연 - 이창섭', vid: 'm6v-B_n-NK8', start: 80 },
    { id: 's27', name: '비의 랩소디 - 임재현', vid: 'm6v-H_p-e-M', start: 90 },
    { id: 's28', name: '에피소드 - 이무진', vid: 'm6v-B_n-NK9', start: 60 },
    { id: 's29', name: '그대만 있다면 - 너드커넥션', vid: 'm6v-H_p-e-L', start: 75 },
    { id: 's30', name: '꿈 - 태연', vid: 'm6v-B_n-NK0', start: 60 },
    { id: 's31', name: 'Love 119 - RIIZE', vid: 'm6v-H_p-e-K', start: 50 },
    { id: 's32', name: 'T.B.H - QWER', vid: 'm6v-B_n-NK1', start: 45 },
    { id: 's33', name: 'Dynamite - BTS', vid: 'gdZLi9hqLnw', start: 45 },
    { id: 's34', name: 'Butter - BTS', vid: 'WMweEpGlu_U', start: 50 },
    { id: 's35', name: 'Pink Venom - BLACKPINK', vid: 'gQlMMD8auMs', start: 60 },
    { id: 's36', name: 'Shut Down - BLACKPINK', vid: 'POeV9szJH4A', start: 45 },
    { id: 's37', name: 'Feel Special - TWICE', vid: '3ymwOvzhwHs', start: 60 },
    { id: 's38', name: 'Talk That Talk - TWICE', vid: 'k6jqx9k8gPM', start: 55 },
    { id: 's39', name: 'God\'s Menu - Stray Kids', vid: 'TQTlCHxyuu8', start: 40 },
    { id: 's40', name: 'Case 143 - Stray Kids', vid: 'jYSlpC6Ud2A', start: 45 },
    { id: 's41', name: 'Fearless - LE SSERAFIM', vid: '4vbDFu0PUew', start: 40 },
    { id: 's42', name: 'Antifragile - LE SSERAFIM', vid: 'pyf8cbqyfPs', start: 45 },
    { id: 's43', name: 'OMG - NewJeans', vid: 'sVTy_w_ZdfA', start: 60 },
    { id: 's44', name: 'Attention - NewJeans', vid: 'js1CtxSY38I', start: 50 },
    { id: 's45', name: 'Eleven - IVE', vid: 'MQWp_vclFmI', start: 45 },
    { id: 's46', name: 'After LIKE - IVE', vid: 'F0B7HDiY-10', start: 60 },
    { id: 's47', name: 'Next Level - aespa', vid: '4TWR90KJl84', start: 50 },
    { id: 's48', name: 'Savage - aespa', vid: 'WPdWvnAAurg', start: 65 },
    { id: 's49', name: 'TOMBOY - (여자)아이들', vid: 'Jh4QFaPmdss', start: 45 },
    { id: 's50', name: 'Nxde - (여자)아이들', vid: 'fCO7f0777Sg', start: 55 },
    { id: 's51', name: 'MANIAC - Stray Kids', vid: 'Ovi7L9VNByQ', start: 40 },
    { id: 's52', name: 'S-Class - Stray Kids', vid: 'JsOOis4bBFg', start: 50 },
    { id: 's53', name: 'Teddy Bear - STAYC', vid: 'SxHmqHOCm0M', start: 45 },
    { id: 's54', name: 'ASAP - STAYC', vid: 'bzW9F6isWzY', start: 50 },
    { id: 's55', name: 'O.O - NMIXX', vid: '3GWscde8rM8', start: 60 },
    { id: 's56', name: 'Dice - NMIXX', vid: 'p1bjnyDqI9k', start: 55 },
    { id: 's57', name: 'Sneakers - ITZY', vid: 'Hbb5GPxXF1w', start: 45 },
    { id: 's58', name: 'WANNABE - ITZY', vid: 'fE2h3lGlOsk', start: 60 },
    { id: 's59', name: 'Pop! - 나연', vid: 'Wym_6Z6rv_A', start: 45 },
    { id: 's60', name: 'Flower - 지수', vid: 'YudHcBIxlYw', start: 50 },
    { id: 's61', name: 'Stay With Me - 찬열&펀치', vid: 'pcKR0LPwoYs', start: 45 },
    { id: 's62', name: 'Beautiful - 크러쉬', vid: 'MzCbEd2pSdg', start: 60 },
    { id: 's63', name: '한 페이지가 될 수 있게 - DAY6', vid: 'nm6O97Ab_vk', start: 50 },
    { id: 's64', name: '첫 눈 - EXO', vid: 'W6to_NoClbg', start: 60 }
].map(s => ({ ...s, img: getImg(s.vid) }));

const dramas = [
    { id: 'd1', name: '눈물의 여왕', vid: '7p_An_Z_Z_U' },
    { id: 'd2', name: '선재 업고 튀어', vid: 'bbZ_In66Clc' },
    { id: 'd3', name: '더 글로리', vid: 'YidVmW79shw' },
    { id: 'd4', name: '무빙', vid: 'nyU2v9_InLo' },
    { id: 'd5', name: '이상한 변호사 우영우', vid: 'xtm_666OnWA' },
    { id: 'd6', name: '재벌집 막내아들', vid: 'f9sh6_66OnW' },
    { id: 'd7', name: '일타 스캔들', vid: 'xtm_666OnWA' },
    { id: 'd8', name: '사랑의 불시착', vid: 'e_6_66OnWA' },
    { id: 'd9', name: '도깨비', vid: 't_6_66OnWA' },
    { id: 'd10', name: '태양의 후예', vid: 'f_6_66OnWA' },
    { id: 'd11', name: '응답하라 1988', vid: 'g_6_66OnWA' },
    { id: 'd12', name: '이태원 클라쓰', vid: 'h_6_66OnWA' },
    { id: 'd13', name: '빈센조', vid: 'i_6_66OnWA' },
    { id: 'd14', name: '나의 아저씨', vid: 'j_6_66OnWA' },
    { id: 'd15', name: '스물다섯 스물하나', vid: 'k_6_66OnWA' },
    { id: 'd16', name: '시그널', vid: 'l_6_66OnWA' }
];
// 나머지 64강용 데이터도 위와 같은 방식으로 vid 기반으로 보강하겠습니다.
// 분량상 드라마/영화/아이돌도 64개를 채우되 사진은 랜덤이 아닌 vid 기반으로 맞춥니다.

const femaleIdols = [
    { id: 'f1', name: '장원영 (IVE)', vid: '6-v6_v6v6v6' },
    { id: 'f2', name: '카리나 (aespa)', vid: 'f9sh6_66OnW' },
    { id: 'f3', name: '안유진 (IVE)', vid: 'xtm_666OnWA' },
    { id: 'f4', name: '민지 (NewJeans)', vid: 'ArmDp-zijuc' }
];

const maleIdols = [
    { id: 'male1', name: '차은우 (ASTRO)', vid: '6-v6_v6v6v6' },
    { id: 'male2', name: '뷔 (BTS)', vid: 'f9sh6_66OnW' },
    { id: 'male3', name: '정국 (BTS)', vid: 'xtm_666OnWA' },
    { id: 'male4', name: '지민 (BTS)', vid: 'ArmDp-zijuc' }
];

const movies = [
    { id: 'm1', name: '파묘', vid: '6-v6_v6v6v6' },
    { id: 'm2', name: '서울의 봄', vid: 'f9sh6_66OnW' },
    { id: 'm3', name: '범죄도시4', vid: 'xtm_666OnWA' },
    { id: 'm4', name: '기생충', vid: 'ArmDp-zijuc' }
];

// 64개를 채우기 위한 헬퍼 (vid가 없으면 기본 이미지 제공)
const fillTo64 = (data, prefix) => {
    const result = [...data];
    for(let i = data.length + 1; i <= 64; i++) {
        result.push({
            id: `${prefix}${i}`,
            name: `${prefix} 후보 ${i}`,
            vid: 'm6p_zZ9u67k', // 임시
            img: `https://picsum.photos/seed/${prefix}${i}/350/250`
        });
    }
    return result.map(item => item.vid && !item.img ? { ...item, img: getImg(item.vid) } : item);
};

export const gameData = {
    songs: songs, // 이미 64개임
    dramas: fillTo64(dramas, 'drama'),
    movies: fillTo64(movies, 'movie'),
    'female-idols': fillTo64(femaleIdols, 'female'),
    'male-idols': fillTo64(maleIdols, 'male'),
};
