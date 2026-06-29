if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.onload = function() {
    window.scrollTo(0, 0);
}


//LOKALNA BAZA DANYCH
const database = [
    { name: 'Główna', id: '00000000', url: 'index.html', theme: '#868d98', theme_sub: '#e6ede7', 
        tags: ['główna', 'autor']
    },
    { name: 'Postacie', id: '00000022', url: 'characters.html', theme: '#868d98', theme_sub: '#e6ede7', 
        tags: ['postacie', 'autor']
    },
    { name: 'Hiragana', id: '00000001', url: 'JAP/jap_hiragana.html', theme: '#73dcff', theme_sub: '#ebfaff', 
        tags: ['hiragana', 'dakuten', 'handakuten', 'alfabety']
    },
    { name: 'Katakana', id: '00000002', url: 'JAP/jap_katakana.html', theme: '#73dcff', theme_sub: '#ebfaff', 
        tags: ['katakana', 'alfabety']
    },
    { name: 'Kanji', id: '00000003', url: 'JAP/jap_kanji.html', theme: '#73dcff', theme_sub: '#ebfaff', 
        tags: ['kanji', 'alfabety']
    },
    { name: 'Aisatsu', id: '00000004', url: 'JAP/jap_greetings.html', theme: '#00973f', theme_sub: '#b2e6c8', 
        tags: ['aisatsu', 'podstawy']
    },
    { name: 'Kaiwa', id: '00000005', url: 'JAP/jap_dialog1.html', theme: '#00973f', theme_sub: '#b2e6c8', 
        tags: ['kaiwa', 'aisatsu', 'podstawy']
    },
    { name: 'Daimeishi', id: '00000013', url: 'JAP/jap_pronouns.html', theme: '#00973f', theme_sub: '#b2e6c8', 
        tags: ['zaimki']
    },
    { name: 'Gimonshi', id: '00000014', url: 'JAP/jap_questions.html', theme: '#00973f', theme_sub: '#b2e6c8', 
        tags: ['słowa_pytające']
    },
    { name: 'Zdania JLPTN5', id: '00000027', url: 'JAP/jap_dialogues.html', theme: '#00973f', theme_sub: '#b2e6c8', 
        tags: ['JLPTN5']
    },
    { name: 'Desu', id: '00000015', url: 'JAP/jap_desu.html', theme: '#ff1212', theme_sub: '#ffc8c8', 
        tags: ['gramatyka', 'desu', 'negacja']
    },
    { name: 'Godzina', id: '00000020', url: 'JAP/jap_jisaifun.html', theme: '#ff1212', theme_sub: '#ffc8c8', 
        tags: ['gramatyka', 'numery', 'czas', 'sufiksy', 'słownictwo']
    },
    { name: 'Wskazywanie', id: '00000025', url: 'JAP/jap_pointing.html', theme: '#ff1212', theme_sub: '#ffc8c8', 
        tags: ['gramatyka', 'wskazywanie', 'słownictwo']
    },
    { name: 'Czasowniki I', id: '00000033', url: 'JAP/jap_verbs1.html', theme: '#ff1212', theme_sub: '#ffc8c8', 
        tags: ['gramatyka', 'czasowniki', 'słownictwo']
    },
    { name: 'Czasowniki Baza 100', id: '00000039', url: 'JAP/jap_verbs100.html', theme: '#c300ff', theme_sub: '#f5d4ff', 
        tags: ['czasowniki', 'słownictwo']
    },
    { name: 'WA', id: '00000016', url: 'JAP/jap_particlesWA.html', theme: '#3300CC', theme_sub: '#a8a1bd', 
        tags: ['partykuły', 'wa']
    },
    { name: 'KA', id: '00000017', url: 'JAP/jap_particlesKA.html', theme: '#55006e', theme_sub: '#897a8d', 
        tags: ['partykuły', 'ka']
    },
    { name: 'NO', id: '00000018', url: 'JAP/jap_particlesNO.html', theme: '#6fffe0', theme_sub: '#f4fffd', 
        tags: ['partykuły', 'no']
    },
    { name: 'MO', id: '00000028', url: 'JAP/jap_particlesMO.html', theme: '#a700a7', theme_sub: '#c5b6c5', 
        tags: ['partykuły', 'mo']
    },
    { name: 'YONE', id: '00000029', url: 'JAP/jap_particlesYONE.html', theme: '#c5b7e1', theme_sub: '#ffffff',
        tags: ['partykuły', 'yo', 'ne']
    },
    { name: 'WO', id: '00000034', url: 'JAP/jap_particlesWO.html', theme: '#ff9900', theme_sub: '#fff3e2', 
        tags: ['partykuły', 'wo']
    },
    { name: 'DE', id: '00000035', url: 'JAP/jap_particlesDE.html', theme: '#7f6000', theme_sub: '#fffbf1', 
        tags: ['partykuły', 'de']
    },
    { name: 'NI', id: '00000036', url: 'JAP/jap_particlesNI.html', theme: '#00ff00', theme_sub: '#e6ffe6', 
        tags: ['partykuły', 'ni']
    },
    { name: 'NI', id: '00000037', url: 'JAP/jap_particlesHE.html', theme: '#b6d7a8', theme_sub: '#f6fff2', 
        tags: ['partykuły', 'he']
    },
    { name: 'GA', id: '00000038', url: 'JAP/jap_particlesGA.html', theme: '#ff0000', theme_sub: '#ffd4d4', 
        tags: ['partykuły', 'ga']
    },
    { name: 'Jikan Tango', id: '00000006', url: 'JAP/jap_timeVocabulary.html', theme: '#d6d300', theme_sub: '#e9e8c9', 
        tags: ['słownictwo', 'czas']
    },
    { name: 'Jikan Setsubiji', id: '00000007', url: 'JAP/jap_timeSufix.html', theme: '#d6d300', theme_sub: '#e9e8c9', 
        tags: ['słownictwo', 'czas', 'sufiksy']
    },
    { name: 'Dni i Miesiące', id: '00000031', url: 'JAP/jap_timeDayMonth.html', theme: '#d6d300', theme_sub: '#e9e8c9', 
        tags: ['słownictwo', 'czas', 'sufiksy', 'dniimiesiące']
    },
    { name: 'Częstotliwość', id: '00000032', url: 'JAP/jap_timeAdverbs.html', theme: '#d6d300', theme_sub: '#e9e8c9', 
        tags: ['słownictwo', 'czas', 'częstotliwość']
    },
    { name: 'Numery 0-100', id: '00000019', url: 'JAP/jap_numbers100.html', theme: '#ffa600', theme_sub: '#ffedcb', 
        tags: ['numery']
    },
    { name: 'Liczenie', id: '00000024', url: 'JAP/jap_numbers.html', theme: '#ffa600', theme_sub: '#ffedcb', 
        tags: ['numery']
    },
    { name: 'Kuni Tango', id: '00000008', url: 'JAP/jap_countryVocabulary.html', theme: '#74e249', theme_sub: '#d1e7c8', 
        tags: ['słownictwo', 'kraj']
    },
    { name: 'Kokuseki Setsubiji', id: '00000009', url: 'JAP/jap_countryPerson.html', theme: '#74e249', theme_sub: '#d1e7c8', 
        tags: ['słownictwo', 'sufiksy', 'kraj', 'język']
    },
    { name: 'Gakkou', id: '00000010', url: 'JAP/jap_schoolVocabulary.html', theme: '#3eafdb', theme_sub: '#a9c7d3', 
        tags: ['słownictwo', 'sufiksy', 'szkoła']
    },
    { name: 'Shigoto', id: '00000011', url: 'JAP/jap_workVocabulary.html', theme: '#3eafdb', theme_sub: '#a9c7d3', 
        tags: ['słownictwo', 'praca']
    },
    { name: 'Kazoku', id: '00000012', url: 'JAP/jap_familyVocabulary.html', theme: '#3eafdb', theme_sub: '#a9c7d3', 
        tags: ['słownictwo', 'rodzina']
    },
    { name: 'Restauracja', id: '00000021', url: 'JAP/jap_restaurantVocabulary.html', theme: '#f25dff', theme_sub: '#fef0ff', 
        tags: ['słownictwo', 'restauracja']
    },
    { name: 'Sklep', id: '00000023', url: 'JAP/jap_shoppingVocabulary.html', theme: '#f25dff', theme_sub: '#fef0ff', 
        tags: ['słownictwo', 'sklep']
    },
    { name: 'Miasto', id: '00000026', url: 'JAP/jap_machiVocabulary.html', theme: '#f25dff', theme_sub: '#fef0ff', 
        tags: ['słownictwo', 'miasto']
    },
    { name: 'Jedzenie', id: '00000030', url: 'JAP/jap_foodVocabulary.html', theme: '#0e7b22', theme_sub: '#b7f2c6', 
        tags: ['słownictwo', 'jedzenie']
    }
]

const tagColors = {
    'główna': { color: '#b3b3b3' },
    'postacie': { color: '#b3b3b3' },
    'autor': { color: '#b3b3b3' },
    'alfabety': { color: '#73dcff' },
    'hiragana': { color: '#73dcff' },
    'dakuten': { color: '#73dcff' },
    'handakuten': { color: '#73dcff' },
    'katakana': { color: '#73dcff' },
    'kanji': { color: '#73dcff' },
    'aisatsu': { color: '#00973f' },
    'podstawy': { color: '#00973f' },
    'kaiwa': { color: '#00973f' },
    'zaimki': { color: '#00973f' },
    'słowa_pytające': { color: '#00973f' },
    'JLPTN5': { color: '#00973f' },
    'gramatyka': { color: '#ff1212' },
    'desu': { color: '#ff1212' },
    'negacja': { color: '#ff1212' },
    'wskazywanie': { color: '#ff1212' },
    'czasowniki': { color: '#ff1212' },
    'partykuły': { color: '#464646' },
    'wa': { color: '#3300CC' },
    'ka': { color: '#55006e' },
    'no': { color: '#6fffe0' },
    'mo': { color: '#a700a7' },
    'wo': { color: '#ff9900' },
    'yo': { color: '#a64d79' },
    'ne': { color: '#c5b7e1' },
    'de': { color: '#7f6000' },
    'ni': { color: '#00ff00' },
    'he': { color: '#b6d7a8' },
    'ga': { color: '#ff0000' },
    'słownictwo': { color: '#d6d300' },
    'czas': { color: '#d6d300' },
    'sufiksy': { color: '#d6d300' },
    'dniimiesiące': { color: '#d6d300' },
    'sufiksy': { color: '#d6d300' },
    'numery': { color: '#ffa600' },
    'kraj': { color: '#74e249' },
    'język': { color: '#74e249' },
    'szkoła': { color: '#3eafdb' },
    'praca': { color: '#3eafdb' },
    'rodzina': { color: '#3eafdb' },
    'restauracja': { color: '#f25dff' },
    'sklep': { color: '#f25dff' },
    'miasto': { color: '#f25dff' }
};

//Liczenie Tagów
function calculateTagCounts() {
    Object.keys(tagColors).forEach(tag => {
        tagColors[tag].count = 0;
    });

    database.forEach(doc => {
        doc.tags.forEach(tag => {
            const lowerTag = tag.toLowerCase();
            if (tagColors[lowerTag]) {
                tagColors[lowerTag].count += 1;
            }
        });
    });
}


calculateTagCounts();


//Kolorowanko Tagów
function tokeniseAndColor(text) {
    if (text.trim() === '') return '';
    const parts = text.split(/(\s+)/);
    return parts.map(part => {
        if (part.startsWith('%')) {
            const tag = part.substring(1).toLowerCase();
            if (tagColors[tag]) {
                return `<span style="color: #888888; font-weight: normal;">%</span><span style="color: ${tagColors[tag].color}; font-weight: bold;">${part.substring(1)}</span>`;
            }
        }
        return part;
    }).join('');
}

//Kursor
function setCaretToEnd(el) {
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
}

function closeAutocomplete() {
    document.getElementById('searchAutocomplete').style.display = 'none';
}

//Tag z podpowiedzi
function selectTag(tagName, tagColor) {
    const input = document.getElementById('searchInput');
    const text = input.innerText;
    const words = text.split(/(\s+)/);
    
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].startsWith('%')) {
            words[i] = `%${tagName}`;
            break;
        }
    }
    
    const newRawText = words.join('') + ' ';
    input.innerHTML = tokeniseAndColor(newRawText);
    
    closeAutocomplete();
    setCaretToEnd(input);
}

//Wyszukiwarka
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const rawQuery = searchInput.innerText.replace(/\u00a0/g, ' ').trim();
    let query = rawQuery.toLowerCase();
    const resultsContainer = document.querySelector('.text-content');

    resultsContainer.innerHTML = '';
    closeAutocomplete();

    if (query === '') {
        resultsContainer.innerHTML = `
            <h3 class="search-result-header">Kategorie Archiwum:</h3>
            <a href="#" class="search-result-link" style="--dynamic-main: #8dc84a; --dynamic-sub: #dbeadf;">🏷️ ZBIÓR TAGÓW</a>
            <a href="#" class="search-result-link" style="--dynamic-main: #d7b632; --dynamic-sub: #dfede3;">🔒 PLIKI ŚCIŚLE TAJNE</a>
        `;
        return;
    }

    let results = [];

    if (query.startsWith('#')) {
        const searchId = query.substring(1).trim();
        results = database.filter(doc => doc.id === searchId);
    } 
    else if (query.includes('%')) {
        const tagTokens = query.split(/\s+/).filter(word => word.startsWith('%'));
        const searchTags = tagTokens.map(token => token.substring(1).trim()).filter(t => t.length > 0);
        
        if (searchTags.length > 0) {
            results = database.filter(doc => {
                return searchTags.every(tag => doc.tags.includes(tag));
            });
        }
    } 
    else {
        results = database.filter(doc => doc.name.toLowerCase() === query);
    }

    if (results.length > 0) {
        let html = `<h3 class="search-result-header">Znaleziono w bazie:</h3>`;
        results.forEach(doc => {
            html += `<a href="${doc.url}" class="search-result-link" style="--dynamic-main: ${doc.theme}; --dynamic-sub: ${doc.theme_sub};">[#${doc.id}] ${doc.name}</a>`;
        });
        resultsContainer.innerHTML = html;
    } else {
        let html = `<h3 class="search-result-header">Brak Zasobu w Bazie:</h3>`;
        html += `<a href="#" class="search-result-link" style="--dynamic-main: #8b0000; --dynamic-sub: #fdeaea;">[ ! ] NIE ZNALEZIONO: "${rawQuery}"</a>`;
        resultsContainer.innerHTML = html;
    }
}

//Pasek INPUT
document.getElementById('searchInput').addEventListener('input', function() {
    const text = this.innerText;
    const autocompleteBox = document.getElementById('searchAutocomplete');
    
    if (text.trim() === '') {
        this.innerHTML = '';
        closeAutocomplete();
        return;
    }

    if (text.endsWith(' ') || text.endsWith('\u00A0')) {
        const formattedHTML = tokeniseAndColor(text);
        this.innerHTML = formattedHTML;
        setCaretToEnd(this);
    }

    const words = text.split(/\s+/);
    const lastWord = words[words.length - 1] || '';
    
    if (lastWord.startsWith('%') && lastWord !== '%') {
        const currentTagPart = lastWord.substring(1).toLowerCase();
        const matchingTags = Object.keys(tagColors).filter(tag => tag.startsWith(currentTagPart));
        
        if (matchingTags.length > 0) {
            let html = '';
            matchingTags.slice(0, 6).forEach(tag => {
                const tagData = tagColors[tag];
                // Wyświetlamy automatycznie wyliczoną wartość tagData.count, która ma ten sam kolor co reszta napisu!
                html += `
                    <div class="autocomplete-item" onclick="selectTag('${tag}', '${tagData.color}')">
                        <span class="autocomplete-prefix">%</span><span style="color: ${tagData.color}; font-weight: bold;">${tag} (${tagData.count})</span>
                    </div>
                `;
            });
            autocompleteBox.innerHTML = html;
            autocompleteBox.style.display = 'block';
        } else {
            closeAutocomplete();
        }
    } else {
        closeAutocomplete();
    }
});

//Zamknij podpowiedzi
document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
        closeAutocomplete();
    }
});

//Guzik Enter
document.getElementById('searchBtn').addEventListener('click', performSearch);
document.getElementById('searchInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
    }
});