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
    { name: 'Desu', id: '00000015', url: 'JAP/jap_desu.html', theme: '#ff1212', theme_sub: '#ffc8c8', 
        tags: ['gramatyka', 'desu']
    },
    { name: 'Godzina', id: '00000020', url: 'JAP/jap_jisaifun.html', theme: '#ff1212', theme_sub: '#ffc8c8', 
        tags: ['gramatyka', 'numery', 'czas', 'sufiksy', 'słownictwo']
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
    { name: 'Jikan Tango', id: '00000006', url: 'JAP/jap_timeVocabulary.html', theme: '#d6d300', theme_sub: '#e9e8c9', 
        tags: ['słownictwo', 'czas']
    },
    { name: 'Jikan Setsubiji', id: '00000007', url: 'JAP/jap_timeSufix.html', theme: '#d6d300', theme_sub: '#e9e8c9', 
        tags: ['słownictwo', 'czas', 'sufiksy']
    },
    { name: 'Numery 0-100', id: '00000019', url: 'JAP/jap_numbers100.html', theme: '#ffa600', theme_sub: '#ffedcb', 
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
    }
]

const tagColors = {
    'główna': { color: '#b3b3b3' },
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
    'gramatyka': { color: '#ff1212' },
    'desu': { color: '#ff1212' },
    'partykuły': { color: '#464646' },
    'wa': { color: '#3300CC' },
    'ka': { color: '#55006e' },
    'no': { color: '#6fffe0' },
    'słownictwo': { color: '#d6d300' },
    'czas': { color: '#d6d300' },
    'sufiksy': { color: '#d6d300' },
    'numery': { color: '#ffa600' },
    'kraj': { color: '#74e249' },
    'język': { color: '#74e249' },
    'szkoła': { color: '#3eafdb' },
    'praca': { color: '#3eafdb' },
    'rodzina': { color: '#3eafdb' },
    'restauracja': { color: '#f25dff' }
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