if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.onload = function() {
    window.scrollTo(0, 0);
};

const flashcardsDatabase = [
    {
        id: "hiragana",
        name: "Hiragana ひらがな",
        activeColor: "#91e4ff",
        cards: [
            { q: "ん", a: "N", hint: "Traktuje się je jako sylabę. Czasami brzmi jak NN" },
            { q: "あ", a: "A", hint: "" },
            { q: "い", a: "I", hint: "" },
            { q: "う", a: "U", hint: "" },
            { q: "え", a: "E", hint: "" },
            { q: "お", a: "O", hint: "" },
            { q: "か", a: "KA", hint: "" },
            { q: "き", a: "KI", hint: "" },
            { q: "く", a: "KU", hint: "" },
            { q: "け", a: "KE", hint: "" },
            { q: "こ", a: "KO", hint: "" },
            { q: "さ", a: "SA", hint: "" },
            { q: "し", a: "SHI", hint: "" },
            { q: "す", a: "SU", hint: "" },
            { q: "せ", a: "SE", hint: "" },
            { q: "そ", a: "SO", hint: "" },
            { q: "た", a: "TA", hint: "" },
            { q: "ち", a: "CHI", hint: "" },
            { q: "つ", a: "TSU", hint: "" },
            { q: "て", a: "TE", hint: "" },
            { q: "と", a: "TO", hint: "" },
            { q: "な", a: "NA", hint: "" },
            { q: "に", a: "NI", hint: "" },
            { q: "ぬ", a: "NU", hint: "" },
            { q: "ね", a: "NE", hint: "" },
            { q: "の", a: "NO", hint: "" },
            { q: "は", a: "HA", hint: "" },
            { q: "ひ", a: "HI", hint: "" },
            { q: "ふ", a: "FU", hint: "Nie ma HU" },
            { q: "へ", a: "HE", hint: "" },
            { q: "ほ", a: "HO", hint: "" },
            { q: "ま", a: "MA", hint: "" },
            { q: "み", a: "MO", hint: "" },
            { q: "む", a: "MU", hint: "" },
            { q: "め", a: "ME", hint: "" },
            { q: "も", a: "MO", hint: "" },
            { q: "や", a: "YA", hint: "" },
            { q: "ゆ", a: "YU", hint: "" },
            { q: "よ", a: "YO", hint: "" },
            { q: "ら", a: "RA", hint: "" },
            { q: "り", a: "RI", hint: "" },
            { q: "る", a: "RU", hint: "" },
            { q: "れ", a: "RE", hint: "" },
            { q: "ろ", a: "RO", hint: "" },
            { q: "わ", a: "WA", hint: "" },
            { q: "を", a: "WO", hint: "" }
        ]
    },
    {
        id: "katakana",
        name: "Katakana カタカナ",
        activeColor: "#91e4ff",
        cards: [
            { q: "ン", a: "N", hint: "Traktuje się je jako sylabę. Czasami brzmi jak NN" },
            { q: "ア", a: "A", hint: "" },
            { q: "イ", a: "I", hint: "" },
            { q: "ウ", a: "U", hint: "" },
            { q: "エ", a: "E", hint: "" },
            { q: "オ", a: "O", hint: "" },
            { q: "カ", a: "KA", hint: "" },
            { q: "キ", a: "KI", hint: "" },
            { q: "ク", a: "KU", hint: "" },
            { q: "ケ", a: "KE", hint: "" },
            { q: "コ", a: "KO", hint: "" },
            { q: "サ", a: "SA", hint: "" },
            { q: "シ", a: "SHI", hint: "" },
            { q: "ス", a: "SU", hint: "" },
            { q: "セ", a: "SE", hint: "" },
            { q: "ソ", a: "SO", hint: "" },
            { q: "タ", a: "TA", hint: "" },
            { q: "チ", a: "CHI", hint: "" },
            { q: "ツ", a: "TSU", hint: "" },
            { q: "テ", a: "TE", hint: "" },
            { q: "ト", a: "TO", hint: "" },
            { q: "ナ", a: "NA", hint: "" },
            { q: "ニ", a: "NI", hint: "" },
            { q: "ヌ", a: "NU", hint: "" },
            { q: "ネ", a: "NE", hint: "" },
            { q: "ノ", a: "NO", hint: "" },
            { q: "ハ", a: "HA", hint: "" },
            { q: "ヒ", a: "HI", hint: "" },
            { q: "フ", a: "FU", hint: "Nie ma HU" },
            { q: "ヘ", a: "HE", hint: "" },
            { q: "ホ", a: "HO", hint: "" },
            { q: "マ", a: "MA", hint: "" },
            { q: "ミ", a: "MO", hint: "" },
            { q: "ム", a: "MU", hint: "" },
            { q: "メ", a: "ME", hint: "" },
            { q: "モ", a: "MO", hint: "" },
            { q: "ヤ", a: "YA", hint: "" },
            { q: "ユ", a: "YU", hint: "" },
            { q: "ヨ", a: "YO", hint: "" },
            { q: "ラ", a: "RA", hint: "" },
            { q: "リ", a: "RI", hint: "" },
            { q: "ル", a: "RU", hint: "" },
            { q: "レ", a: "RE", hint: "" },
            { q: "ロ", a: "RO", hint: "" },
            { q: "ワ", a: "WA", hint: "" },
            { q: "ヲ", a: "WO", hint: "" }
        ]
    },
    {
        id: "aisatsu",
        name: "Aisatsu あいさつ",
        activeColor: "#00973f",
        cards: [
            { q: "Aisatsu あいさつ", a: "Przywitanie", hint: "Jest to rzeczownik." },
            { q: "Ohayou Gozaimasu おはようございます", a: "Cześć (Formalnie)", hint: "" },
            { q: "Konnichiwa こんにちわ", a: "Dzień Dobry", hint: "" },
            { q: "Sayounara さようなら", a: "Do widzenia", hint: "" },
            { q: "Oyasuminasai おやすみなさい", a: "Dobranoc", hint: "" },
            { q: "Arigatou Gozaimasu ありがとうございます", a: "Bardzo Dziękuję", hint: "" },
            { q: "Ohayou おはよう", a: "Cześć", hint: "Nie formalna króka forma" },
            { q: "Oyasumi おやすみ", a: "Dobranoc", hint: "Nie formalna króka forma" },
            { q: "Sumimasen すみません", a: "Przepraszam", hint: "Może oznaczać także Przepraszam jako angielskie 'Excuse Me'" },
            { q: "Ittekimasu いってきます", a: "Wychodzę i Wrócę", hint: "Używane gdy wychodzisz z domu i się żegnasz" },
            { q: "Itterasshai いってらっしゃい", a: "Dobrej drogi", hint: "Używane gdy ktoś wychodzi z domu i się z nim żegnasz." },
            { q: "Tadaima ただいま", a: "Wróciłem", hint: "Używane gdy wracasz do domu." },
            { q: "Okaerinasai おかえりなさい", a: "Powitanie", hint: "Używane gdy ktoś wraca do domu i odpowiadasz na tadaima." },
            { q: "Itadakimasu いただきます", a: "", hint: "Używane przed jedzeniem." },
            { q: "Gochisousamadeshita ごちそうさまでした", a: "Podziękowanie", hint: "Używane po jedzeniu." },
            { q: "Hajimemashite はじめまして", a: "Miło Poznać", hint: "Używane przy pierwszym spotkaniu." },
            { q: "Yoroshiku Onegaishimasu よろしくおねがいします", a: "", hint: "Wyrażasz przyjemność ze spotkania :3" },
            { q: "Kaiwa かいわ", a: "Konwersacja, Dialog", hint: "Rzeczownik." }
        ]
    },
    {
        id: "daimeishi",
        name: "Daimeishi 代名詞",
        activeColor: "#00973f",
        cards: [
            { q: "Watashi 私", a: "Ja", hint: "Formalne, zwykłe, bazowe." },
            { q: "Atashi あたし", a: "Ja", hint: "Słodkie, dla kobiet i dziewczyn." },
            { q: "Boku ぼく", a: "Ja", hint: "Dziecięce, dla chłopaków. Pozycja niższa do kogoś innego." },
            { q: "Ore おれ", a: "Ja", hint: "Nie formalne i męskie. W stylu 'Kusogaki'!" },
            { q: "Anata あなた", a: "Ty", hint: "Formalne, zwykłe, bazowe." },
            { q: "Kimi きみ", a: "Ty", hint: "Nie formalne. Z przyjaciółmi albo gdy mówisz do kogoś z niższa pozycją od twojej." },
            { q: "Omae おまえ", a: "Ty", hint: "Nie miłe i wulgarne. Styl jak z anime." },
            { q: "Kare かれ", a: "On", hint: "" },
            { q: "Kanojo かのじょ", a: "Ona", hint: "Oznacza także ogólnie dziwczyna." },
            { q: "Ano Hito あの人", a: "Tamten Człowiek", hint: "Wskazujesz oddaloną osobę. Trzecia osoba pojedyncza." }
        ]
    },
    {
        id: "gimonshi",
        name: "Gimonshi 疑問詞",
        activeColor: "#00973f",
        cards: [
            { q: "Nani/Nan なに/な", a: "Co?", hint: "" },
            { q: "Dare だれ", a: "Kto?", hint: "" },
            { q: "Doko どこ", a: "Gdzie?", hint: "" },
            { q: "Itsu いつ", a: "Kiedy?", hint: "" },
            { q: "Dou どう", a: "Jak?", hint: "" },
            { q: "Nande/Naze/Doshite なんで/なぜ/どして", a: "Dlaczego?", hint: "" },
            { q: "Ikutsu いくつ", a: "Ile?", hint: "" },
            { q: "Ikura いくら", a: "Ile?", hint: "Specyficznie dla ceny." }
        ]
    },
    {
        id: "doushi1",
        name: "Dōshi 動詞 0-100",
        activeColor: "#ff1212",
        cards: [
            { q: "Desu です", a: "Być", hint: "Czasownik ten ma wiele zastosowań. Więcej niż tylko 'być'." },
            { q: "Iku いく", a: "Iść", hint: "Godan" },
            { q: "Taberu たべる", a: "Jeść", hint: "Ichidan" },
            { q: "Suru する", a: "Robić/Grać", hint: "Nieregularny." },
            { q: "Kuru くる", a: "Przyjśc", hint: "Nieregularny." },
            { q: "Benkyou Suru べんきょうする", a: "Uczyć Się", hint: "Czasownik ...Suru" },
            { q: "Naru なる", a: "Przyjśc", hint: "Godan." },
            { q: "Neru ねる", a: "Spać", hint: "Ichidan." },
            { q: "Nageru なげる", a: "Rzucać", hint: "Ichidan." },
            { q: "Kaeru かえる", a: "Wracać", hint: "Godan." },
        ]
    },
    {
        id: "dore",
        name: "Dore, Dono, Doko どれ、どの、どこ",
        activeColor: "#ff1212",
        cards: [
            { q: "Doko ", a: "Gdzie?", hint: "" },
            { q: "Koko ", a: "Tutaj", hint: "Blisko Siebie" },
            { q: "Soko ", a: "Tutaj", hint: "Blisko Ciebie" },
            { q: "Asoko ", a: "Tam", hint: "Daleko od nas" },
            { q: "Kore ", a: "To", hint: "Blisko Siebie" },
            { q: "Sore ", a: "To", hint: "Blisko Ciebie" },
            { q: "Are ", a: "Tamto", hint: "Daleko od nas" },
            { q: "Dore ", a: "Który/Jaki", hint: "" },
            { q: "Kono ", a: "Ten...", hint: "Blisko Siebie. [...przedmiot]" },
            { q: "Sono ", a: "Ten...", hint: "Blisko Ciebie. [...przedmiot]" },
            { q: "Ano ", a: "Tamten...", hint: "Daleko od nas. [...przedmiot]" },
            { q: "Dono ", a: "Który...", hint: "...Przedmiot." },
        ]
    },
    {
        id: "particles",
        name: "Particles",
        activeColor: "#464646",
        cards: [
            { q: "WA は", a: "Partykuła Tematu", hint: "Używana aby precyzować co jest tematem rozmowy." },
            { q: "GA が", a: "Partykuła Podmiotu", hint: "Używana aby precyzować kto wykonuje czynność, kto jest podmiotem, kto jest." },
            { q: "KA か", a: "Partykuła Pytająca", hint: "Używana aby zmieniać zdanie w pytanie." },
            { q: "NO の", a: "Partykuła Przynależności", hint: "Używana aby zdefiniować czye coś jest lub stworzyć nowe słowa." },
            { q: "MO も", a: "Partykuła Włączająca", hint: "Używana aby zdefiniować słowo 'także'. To też, On też, Zrobimy też to." },
            { q: "YO よ", a: "Partykuła Kończąca", hint: "Używana aby wzmocnić wydźwięk zdania. Moim zdaniem do przyzwyczajenia się w praktyce." },
            { q: "NE ね", a: "Partykuła Kończąca", hint: "Używana aby zmienić zdanie w styl pytający ale nie jest to pytanie, bardziej szukanie potwierdzenia. 'Jest gorąco, prawda?'. Moim zdaniem do przyzwyczajenia się w praktyce." },
            { q: "WO を", a: "Partykuła Obiektu", hint: "Używana aby zdefiniować obiekt zdania." },
            { q: "DE で", a: "Partykuła Lokacji", hint: "Używana aby zdefiniować lokacje w której zdarzenie ma miejsce." },
            { q: "NI に", a: "Partykuła Celu/Czasu/Stanu", hint: "Używana aby zdefiniować cel i czas, czynności. Rzucasz DO... Idziesz DO." },
            { q: "HE へ", a: "Partykuła Wskazywania Kierunku", hint: "Używana najczęściej do przekazywania kierunku na przykład podróży, jest rzadsza niż に i często mylona z に." },
        ]
    },
    {
        id: "kuni",
        name: "Kuni くに, Gengo げんご",
        activeColor: "#74e249",
        cards: [
            { q: "Kuni くに", a: "Kraj", hint: "Rzeczownik." },
            { q: "Kokuseki 国籍", a: "Narodowość", hint: "Narodowość i Obywatelstwo." },
            { q: "Amerika アメリカ", a: "USA", hint: "Kraj." },
            { q: "Igirisu イギリス", a: "Anglia", hint: "Kraj. Często używane jako całe UK." },
            { q: "Oosutoraria オーストラリア", a: "Australia", hint: "Kraj." },
            { q: "Doitsu ドイツ", a: "Niemcy", hint: "Kraj." },
            { q: "Nihon 日本", a: "Japonia", hint: "Kraj." },
            { q: "Kankoku 韓国", a: "Korea", hint: "Kraj." },
            { q: "Chuugoku 中国", a: "Chiny", hint: "Kraj." },
            { q: "Suweeden スウェーデン", a: "Szwecja", hint: "Kraj." },
            { q: "Furansu フランス", a: "Francja", hint: "Kraj." },
            { q: "Poorando ポオランド", a: "Polska", hint: "Kraj." },
            { q: "Roshia ロシア", a: "Rosja", hint: "Kraj." },
            { q: "Betonamu ベトナム", a: "Wietnam", hint: "Kraj." },
            { q: "Hangarii ハンガリー", a: "Węgry", hint: "Kraj." },
            { q: "Supein スペイン", a: "Hiszpania", hint: "Kraj." },
            { q: "Itaria イタリア", a: "Włochy", hint: "Kraj." },
            { q: "Girisha ギリシャ", a: "Grecja", hint: "Kraj." },
            { q: "Firipin フィリピン", a: "Filipiny", hint: "Kraj." },
            { q: "~jin", a: "...człowiek", hint: "Używane by tworzyć na przykład narodowości." },
            { q: "~go", a: "...język", hint: "Używane z nazwą kraju aby stworzyć język danego kraju." },
            { q: "Bokokugo 母国語", a: "Ojczysty Język", hint: "Rzeczownik" }
        ]
    },
    {
        id: "jikan",
        name: "Jikan じかん",
        activeColor: "#d6d300",
        cards: [
            { q: "Jikan じかん", a: "Czas", hint: "Jest to rzeczownik." },
            { q: "Han はん", a: "Połowa", hint: "Używane w czasie jako wpół do." },
            { q: "Ima いま", a: "Teraz", hint: "" },
            { q: "Gozen ごぜん", a: "A.M.", hint: "" },
            { q: "Gogo ごご", a: "P.M.", hint: "" },
            { q: "~sai ～さい", a: "...wiek", hint: "" },
            { q: "~ji ～じ", a: "...godzina", hint: "" },
            { q: "~fun/~pun ～ふん/～ぷん", a: "...minuta", hint: "" },
            { q: "~nensei ～ねんせい", a: "...rok na studiach", hint: "" },
            { q: "~nichi ～にち", a: "...dni", hint: "" },
            { q: "~kagetsu ～かげつ", a: "...miesiące", hint: "" },
            { q: "Tsuitachi ついたち", a: "Pierwszy Dzień Miesiąca", hint: "" },
            { q: "Futsuka ふつか", a: "Drugi Dzień Miesiąca", hint: "" },
            { q: "Mikka みっか", a: "Trzeci Dzień Miesiąca", hint: "" },
            { q: "Yokka よっか", a: "Czwarty Dzień Miesiąca", hint: "" },
            { q: "Itsuka いつか", a: "Piąty Dzień Miesiąca", hint: "" },
            { q: "Muika むいか", a: "Szósty Dzień Miesiąca", hint: "" },
            { q: "Nanoka なのか", a: "Siódmy Dzień Miesiąca", hint: "" },
            { q: "Youka ようか", a: "Ósmy Dzień Miesiąca", hint: "" },
            { q: "Kokonoka ここのか", a: "Dziewiąty Dzień Miesiąca", hint: "" },
            { q: "Touka とうか", a: "Dziesiąty Dzień Miesiąca", hint: "" },
            { q: "Juuyokka じゅうよっか", a: "Czternasty Dzień Miesiąca", hint: "" },
            { q: "Hatsuka はつか", a: "Dwudziesty Dzień Miesiąca", hint: "" },
            { q: "Nijuuyokka にじゅうよっか", a: "Dwudziesty Czwarty Dzień Miesiąca", hint: "" },
            { q: "Ikkagetsu いっかげつ", a: "Jeden Miesiąc", hint: "" },
            { q: "Nikagetsu にかげつ", a: "Dwa Miesiące", hint: "" },
            { q: "Sankagetsu さんかげつ", a: "Trzy Miesiące", hint: "" },
            { q: "Yonkagetsu よんかげつ", a: "Cztery Miesiące", hint: "" },
            { q: "Gokagetsu ごかげつ", a: "Pięć Miesięcy", hint: "" },
            { q: "Rokkagetsu ろっかげつ", a: "Sześć Miesięcy", hint: "" },
            { q: "Nanakagetsu ななかげつ", a: "Siedem Miesięcy", hint: "" },
            { q: "Hachikagetsu はちかげつ", a: "Osiem Miesięcy", hint: "" },
            { q: "Kyuukagetsu きゅうかげつ", a: "Dziewięć Miesięcy", hint: "" },
            { q: "Juukkagetsu じゅうっかげつ", a: "Dziesięć Miesięcy", hint: "" },
            { q: "Juuikkagetsu じゅういっかげつ", a: "Jedenaście Miesięcy", hint: "" },
            { q: "Juunikagetsu じゅうにかげつ", a: "Dwanaście Miesięcy", hint: "" }
        ]
    },
    {
        id: "jikan2",
        name: "Jikan Niban じかん二ばん",
        activeColor: "#d6d300",
        cards: [
            { q: "~goro ", a: "~około", hint: "Dla czasu" },
            { q: "Asa ", a: "Rano", hint: "" },
            { q: "Shougo ", a: "Południe", hint: "pora dnia" },
            { q: "Hiru ", a: "Środek Dnia", hint: "" },
            { q: "Yuugata/Ban ", a: "Wieczór", hint: "Ban może oznaczać późniejszy wieczór." },
            { q: "Yoru ", a: "Noc", hint: "" },
            { q: "Mayonaka ", a: "Północ", hint: "" },
            { q: "Mainichi ", a: "Każdego Dnia", hint: "" },
            { q: "Maiban ", a: "Każdego Wieczora", hint: "" },
            { q: "Shuu ", a: "Tydzień", hint: "" },
            { q: "Kesa ", a: "Tego Ranka", hint: "" },
            { q: "Konshuu ", a: "Tego Tygodnia", hint: "" },
            { q: "Kongetsu ", a: "Tego Miesiąca", hint: "" },
            { q: "Kotoshi ", a: "Ten Rok", hint: "" },
            { q: "Konban ", a: "Tego Wieczoru", hint: "" },
            { q: "Kon'ya ", a: "Tej nocy", hint: "" },
            { q: "Ototoshi ", a: "Dwa lata temu", hint: "" },
            { q: "Ototoi ", a: "Przedwczoraj", hint: "" },
            { q: "Kyou ", a: "Dzisiaj", hint: "" },
            { q: "Kinou ", a: "Wczoraj", hint: "" },
            { q: "Ashita ", a: "Jutro", hint: "" },
            { q: "Asatte ", a: "Pojutrze", hint: "" },
            { q: "Senshuu ", a: "Zeszły Tydzień", hint: "" },
            { q: "Sengetsu ", a: "Zeszły Miesiąc", hint: "" },
            { q: "Kyounen ", a: "Zeszły Rok", hint: "" },
            { q: "Raishuu", a: "Następny Tydzień", hint: "" },
            { q: "Raigetsu ", a: "Następny Miesiąc", hint: "" },
            { q: "Rainen ", a: "Następny Rok", hint: "" },
            { q: "Mae no Hi", a: "Dzień przed...", hint: "" },
            { q: "Tsugi no Hi", a: "Dzień po...", hint: "" },
            { q: "Itsumo いｓつも", a: "Zawsze", hint: "" },
            { q: "Yoku よく", a: "Często", hint: "" },
            { q: "Tokidoki ときどき", a: "Czasami", hint: "" },
            { q: "Taitei たいてい", a: "Przeważnie", hint: "" },
            { q: "Amari あまり", a: "Nie często", hint: "" },
            { q: "Zenzen ぜんぜん", a: "Absolutnie/Wcale/Nigdy", hint: "Z negatywnym czasownik jest to 'Nigdy' lub 'Wcale'." }
        ]
    },
    {
        id: "suuji",
        name: "Suuji すうじ",
        activeColor: "#ffa600",
        cards: [
            { q: "Zero/Rei ゼロ/零", a: "0", hint: "" },
            { q: "Ichi 一", a: "1", hint: "" },
            { q: "Ni 二", a: "2", hint: "" },
            { q: "San 三", a: "3", hint: "" },
            { q: "Shi/Yon 四", a: "4", hint: "" },
            { q: "Go 五", a: "5", hint: "" },
            { q: "Roku 六", a: "6", hint: "" },
            { q: "Nana/Shichi 七", a: "7", hint: "" },
            { q: "Hachi 八", a: "8", hint: "" },
            { q: "Kyuu 九", a: "9", hint: "" },
            { q: "Juu 十", a: "10", hint: "" },
            { q: "Hyaku 百", a: "100", hint: "Nie trzeba dopisywać ichi do pojedynczego Hyaku." },
            { q: "Sen 千", a: "1000", hint: "Nie trzeba dopisywać ichi do pojedynczego Sen." },
            { q: "Ichiman 一万", a: "10 000", hint: "Trzeba dopisywać ichi do pojedynczego Man!" },
            { q: "~ban ～ばん", a: "...numer", hint: "" },
        ]
    },
    {
        id: "gakkou",
        name: "Gakkou がっこう",
        activeColor: "#3eafdb",
        cards: [
            { q: "Gakkou がっこう", a: "Szkoła", hint: "" },
            { q: "Shougakkou しょうがっこう", a: "Szkoła Podstawowa", hint: "" },
            { q: "Chuugakkou ちゅうがっこう", a: "Szkoła Gimnazjalna", hint: "" },
            { q: "Koukou こうこう", a: "Liceum/Szkoła Średnia", hint: "" },
            { q: "Daigaku だいがく", a: "Uniwersytet/Studia", hint: "" },
            { q: "Gakusei がくせい", a: "Uczeń", hint: "" },
            { q: "Daigakusei だいがくせい", a: "Student", hint: "" },
            { q: "Ryuugakusei りゅうがくせい", a: "Uczeń z wymiany", hint: "" },
            { q: "~san ～さん", a: "Pan/Pani", hint: "" },
            { q: "Sensei せんせい", a: "Nauczyciel", hint: "" },
            { q: "Tomodachi ともだち", a: "Przyjaciel", hint: "" },
            { q: "Senkou せんこう", a: "Kierunek", hint: "Na studiach kierunek studiów. Specjalność studencka." },
            { q: "Namae/Na なまえ/な", a: "Imię", hint: "" },
            { q: "Bangou ばんごう", a: "Numer", hint: "Ogólnie Numer" },
            { q: "Gakkou no Kamoku がっこうのかもく", a: "Przedmioty Szkolne", hint: "" },
            { q: "Kokugo こくご", a: "Język Japoński", hint: "Ale tylko jako przedmiot szkolny." },
            { q: "Suugaku すうがく", a: "Matematyka", hint: "" },
            { q: "Shakai しゃかい", a: "Nauki Społeczne", hint: "" },
            { q: "Rika りか", a: "Nauki Przyrodnicze", hint: "" },
            { q: "Taiiku たいいく", a: "WF", hint: "" },
            { q: "Ongaku おんがく", a: "Muzyka", hint: "" },
            { q: "Bijutsu びじゅつ", a: "Plastyka", hint: "" },
            { q: "Konpyuuta コンピューター", a: "Informatyka", hint: "" },
            { q: "Butsuri ぶつり", a: "Fizyka", hint: "" },
            { q: "Seibutsu せいぶつ", a: "Biologia", hint: "" },
            { q: "Chiri ちり", a: "Geografia", hint: "" },
            { q: "Kagaku かがく", a: "Chemia/Nauka", hint: "Nauka ogólnie jako rzeczownik." },
            { q: "Keizai けいざい", a: "Ekonomia", hint: "" },
            { q: "Seiji せいじ", a: "Polityka/Prawo", hint: "Jako kierunek na studiach." },
            { q: "Rekishi れきし", a: "Historia", hint: "" },
            { q: "Bungaku ぶんがく", a: "Literatura", hint: "" },
            { q: "Bijinesu ビジネス", a: "Biznes", hint: "Szkolny Przedmiot" },
            { q: "Hon ほん", a: "Książka", hint: "" },
            { q: "Nooto ノート", a: "Zeszyt", hint: "" },
            { q: "Jisho じしょ", a: "Słownik", hint: "" },
            { q: "Pen/Boorupen ペン/ボールペン", a: "Długopis", hint: "" },
            { q: "Enpitsu エンピツ", a: "Ołówek", hint: "" },
            { q: "Kokuban こくばん", a: "Czarna Tablica", hint: "Kredowa" },
            { q: "Chooku チョーク", a: "Kreda", hint: "Do Tablicy" },
            { q: "Keshigomu けしゴム", a: "Gumka", hint: "" },
            { q: "Denki でんき", a: "Prąd, Elektryczność, Światło", hint: "Używane też do lamp na suficie i w codziennym użytku by mówić o włączaniu lub wyłączaniu światła." },
        ]
    },
    {
        id: "shigoto",
        name: "Shigoto しごと",
        activeColor: "#3eafdb",
        cards: [
            { q: "Shigoto しごと", a: "Praca", hint: "Jako profesja, miejsce pracy, angielskie 'Occupation'." },
            { q: "Isha いしゃ", a: "Doktor", hint: "" },
            { q: "Haisha はいしゃ", a: "Dentysta", hint: "" },
            { q: "Kaishain かいしゃいん", a: "Pracownik Biura", hint: "" },
            { q: "Shufu しゅふ", a: "Gospodyni", hint: "Jest to tłumaczenie z 'Housewife'." },
            { q: "Daigakuinsei だいがくいんせい", a: "Student", hint: "Chodzi o studenta który już graduował." },
            { q: "Bengoshi べんごし", a: "Prawnik", hint: "" },
            { q: "Weetaa/Weetoresu ウェーター/ウェートレス", a: "Kelner/ka", hint: "" },
            { q: "Hoorusutaffu ホールスタッフ", a: "Obsługa Witająca", hint: "" }
        ]
    },
    {
        id: "kazoku",
        name: "Kazoku かぞく",
        activeColor: "#3eafdb",
        cards: [
            { q: "Kazoku かぞく", a: "Rodzina", hint: "" },
            { q: "Haha はは", a: "Mama", hint: "Twoja własna mama. Z twojej rodziny. Formalne." },
            { q: "Chichi ちち", a: "Tata", hint: "Twój własny ojciec. Z twojej rodziny. Formalne." },
            { q: "Ane あね", a: "Starsza Siostra", hint: "Z twojej rodziny. Formalne." },
            { q: "Ani あに", a: "Starszy Brat", hint: "Z twojej rodziny. Formalne." },
            { q: "Imouto いもうと", a: "Młodsza Siostra", hint: "" },
            { q: "Otouto おとうと", a: "Młodszy Brat", hint: "" },
            { q: "Okaasan おかあさん", a: "Mama", hint: "Ogólnie. Cudza mama." },
            { q: "Otoosan おとおさん", a: "Tata", hint: "Ogólnie. Cudzy tata." },
            { q: "Oneesan おねえさん", a: "Starsza Siostra", hint: "Ogólnie. Cudza Starsza Siostra." },
            { q: "Oniisan おにいさん", a: "Starszy Brat", hint: "Ogólnie. Cudzy Starszy Brat." }
        ]
    },
    {
        id: "resutoran",
        name: "Resutoran れすとらん",
        activeColor: "#f25dff",
        cards: [
            { q: "Resutoran レストラン", a: "Restauracja", hint: "" },
            { q: "Kyakuseki きゃくせき", a: "Jadalnia/Sala Jadalna", hint: "W restauracjach przeważnie." },
            { q: "Reji レジ", a: "Kasa/Bar", hint: "Jako miejsce z kasą fiskalną." },
            { q: "Kauntaa カウンター", a: "Kasa", hint: "Fiskalna." },
            { q: "Okyaku-sama おきゃくさま", a: "Klient", hint: "" },
            { q: "Sara さら", a: "Talerz", hint: "Formalnie mówimy 'Osara'." },
            { q: "Shokki しょっき", a: "Zastawa", hint: "Wszystkie naczynia przygotowane na stole." },
            { q: "Owan おわん", a: "Miseczka na Ryż lub Zupę", hint: "" },
            { q: "Ohashi おはし", a: "Pałeczki", hint: "Te którymi jemy." },
            { q: "Ochoko おちょこ", a: "Kieliszek na Sake", hint: "" },
            { q: "Okaikei おかいけい", a: "Rachunek", hint: "" },
            { q: "Menyuu メニュー", a: "Menu", hint: "" },
            { q: "Torei とれい", a: "Taca", hint: "Do noszenia rzeczy." },
            { q: "Oshibori おしぼり", a: "Ręcznik", hint: "Specjalny dawany przed posiłkiem." },
            { q: "Napukin ナプキン", a: "Serwetki", hint: "" },
            { q: "Kaado Riidaa カードリーダー", a: "Czytnik Kart", hint: "Do płacenia." },
            { q: "Gohan ごはん", a: "Posiłek", hint: "Ogólnie" },
            { q: "Asagohan あさごはん", a: "Śniadanie", hint: "" },
            { q: "Hirugohan ひるごはん", a: "Obiad", hint: "" },
            { q: "Bangohan ばんごはん", a: "Kolacja", hint: "" }
        ]
    },
    {
        id: "kaimono",
        name: "Kaimono 買い物",
        activeColor: "#f25dff",
        cards: [
            { q: "Mise みせ", a: "Sklep", hint: "Ogólnie." },
            { q: "Suupaa スーパー", a: "Supermarket", hint: "" },
            { q: "Depaato デパート", a: "Dom Towarowy", hint: "" },
            { q: "Ten'in てんいん", a: "Pracownik Sklepu", hint: "Formalnie. Pracownik." },
            { q: "Konbini コンビニ", a: "Kiosk", hint: "Angielskie 'Convinient Store'." },
            { q: "Hanbai-in はんばいいん", a: "Sprzedawca", hint: "Osoba obsługująca kasę. Kasjer." },
            { q: "[Sklep] no Hito 「みせ」の人", a: "Osoba pracująca w danym sklepie", hint: "Można też mówić 'no ten'in'. Nigdy nie mówić 'Mise no ten'in'." },
            { q: "~en 円", a: "Yen", hint: "Japońska Waluta. Lubię mówić na polską walutę ~kin czyli dosłownie złoto." },
            { q: "Saifu さいふ", a: "Portfel", hint: "" },
            { q: "Tokei とけい", a: "Zegar", hint: "Zegarek na ręke także." }
        ]
    },
    {
        id: "machi",
        name: "Machi 町",
        activeColor: "#f25dff",
        cards: [
            { q: "Toshi とし", a: "Duże Miasto", hint: "" },
            { q: "Shi し", a: "Duże Miasto", hint: "Końcówka administracyjna dla Osaka i Kyoto" },
            { q: "Machi 町", a: "Miasto", hint: "" },
            { q: "Muraむら", a: "Wioska", hint: "" },
            { q: "Tokai とかい", a: "Miasto", hint: "W sensie przeciwnym do Wioski." },
            { q: "Ku 区", a: "Dzielnica", hint: "Tokijska dzielnica." },
            { q: "Todoufuken 都道府県", a: "Prefektury Japońskie", hint: "To, Do, Fu i Ken. Jak końcówki. Do niezależnie należy do Hokkaido." },
            { q: "~ken ～けん", a: "...końcówka dla prefektury.", hint: "" },
            { q: "~fu ～ふ", a: "...końcówka dla prefektury.", hint: "Osaka i Kyoto." },
            { q: "~to ～と", a: "...końcówka dla prefektury i miasta jako jedno.", hint: "Tylko dla Tokyo." },
            { q: "Ginkou ぎんこう", a: "Bank", hint: "" },
            { q: "Toshokan としょかん", a: "Biblioteka", hint: "" },
            { q: "Yuubinkyoku ゆうびんきょく", a: "Poczta", hint: "" },
            { q: "Kafee カフェ", a: "Kawiarnia", hint: "" },
            { q: "Kissaten きっさてん", a: "Kawiarnia Tradycyjna", hint: "Tradycyjna, bardziej sklep kawowy, desery i tak dalej." },
            { q: "Shinbun しんぶん", a: "Gazeta", hint: "" },
            { q: "Kasa かさ", a: "Parasol", hint: "" },
            { q: "Kaban かばん", a: "Torba", hint: "Do noszenia przy ramieniu albo sklepowa, plecak." },
            { q: "Jitensha じてんしゃ", a: "Rower", hint: "" },
            { q: "Ie いえ", a: "Dom", hint: "" },
            { q: "Uchi うち", a: "Dom", hint: "Miejsce zamieszkania osoby." },
            { q: "Eigakan えいがかん", a: "Kino", hint: "" },
        ]
    },
    {
        id: "tabemono",
        name: "Tabemono たべもの",
        activeColor: "#0e7b22",
        cards: [
            { q: "Teishoku ていしょく", a: "Japoński zestaw z jedzeniem", hint: "Taca z miseczkami, zupa i różne inne dania jak ryż i dodatki." },
            { q: "Tabemono たべもの", a: "Jedzenie", hint: "" },
            { q: "Nomimono のみもの", a: "Napoje", hint: "Picie" },
            { q: "Supagettei スパゲッテイ", a: "Spagetti", hint: "" },
            { q: "Karee カレー", a: "Curry", hint: "Kary" },
            { q: "Soba そば", a: "Gryczany makaron japoński", hint: "" },
            { q: "Udon うどん", a: "Gruby japoński makaron", hint: "" },
            { q: "Sandoicchi サンドイッチ", a: "Kanapki", hint: "" },
            { q: "Aisukuriimu アイスクリーム", a: "Lody", hint: "" },
            { q: "Raamen ラーメン", a: "Ramen", hint: "" },
            { q: "Hanbaagaa ハンバーガー", a: "Hamburger", hint: "" },
            { q: "Ocha おちゃ", a: "Herbata", hint: "Zielona." },
            { q: "Kocha こちゃ", a: "Herbata", hint: "Każda oprócz zielonej." },
            { q: "Koora コーラ", a: "Coca Cola", hint: "" },
            { q: "Sarada サラダ", a: "Sałatka", hint: "" },
            { q: "Koohii コーヒー", a: "Kawa", hint: "" },
            { q: "Juusu ジュース", a: "Sok", hint: "" },
            { q: "Miruku ミルク", a: "Mleko", hint: "" },
            { q: "Gyuunyuu ぎゅうにゅう", a: "Mleko", hint: "Od krowy, każde jest od krowy ale na sklepach na pułkach w kartonie to już miruku." },
            { q: "Mizu 水", a: "Woda", hint: "" },
            { q: "Tansansui 炭酸水", a: "Woda Gazowana", hint: "Można mówić ソーダ" },
        ]
    }
];

const groupsDatabase = [
    {
        label: "Strona 1",
        categoryIds: ["hiragana", "katakana", "aisatsu", "kuni", "jikan", 'gakkou', 'shigoto', 'kazoku', 'daimeishi', 'gimonshi', 'doushi1', 'particles']
    },
    {
        label: "Strona 2",
        categoryIds: ["suuji", "resutoran", "kaimono", "machi", "dore", 'tabemono', 'jikan2']
    }
];

let activeCategories = [];
let poolOfCards = [];     
let currentCard = null;  
let isFlipped = false;   
let currentMouseSide = ""; 
let goodCount = 0;         
let badCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    const categoriesContainer = document.getElementById("categories-selection-container");
    const groupsContainer = document.getElementById("groups-container");
    const practiceContainer = document.getElementById("practice-container");
    const flashcardText = document.getElementById("flashcard-text");
    const flashcardHint = document.getElementById("flashcard-hint");
    const flashcardBox = document.querySelector(".flashcard-box");
    
    const practiceBtn = document.getElementById("practice-btn");
    const categoriesBtn = document.getElementById("categories-btn"); 

    const counterGoodEl = document.getElementById("counter-good");
    const counterRemainingEl = document.getElementById("counter-remaining");
    const counterBadEl = document.getElementById("counter-bad");

    
    function renderCategories() {
        categoriesContainer.innerHTML = "";
        flashcardsDatabase.forEach(category => {
            const btn = document.createElement("button");
            btn.classList.add("category-toggle-btn");
            btn.innerText = category.name;
            btn.dataset.id = category.id;
            btn.style.setProperty('--chosen-color', category.activeColor);

            if (activeCategories.includes(category.id)) {
                btn.classList.add("active");
            }

            btn.addEventListener("click", () => {
                toggleCategory(category.id, btn);
            });

            categoriesContainer.appendChild(btn);
        });
    }

    function toggleCategory(id, buttonElement) {
        if (activeCategories.includes(id)) {
            activeCategories = activeCategories.filter(activeId => activeId !== id);
            buttonElement.classList.remove("active");
        } else {
            activeCategories.push(id);
            buttonElement.classList.add("active");
        }
    }

    groupsContainer.innerHTML = "";
    groupsDatabase.forEach(group => {
        const groupBtn = document.createElement("button");
        groupBtn.classList.add("group-select-btn");
        groupBtn.innerText = group.label;

        groupBtn.addEventListener("click", () => {
            const allSelected = group.categoryIds.every(id => activeCategories.includes(id));

            if (allSelected) {
                activeCategories = activeCategories.filter(id => !group.categoryIds.includes(id));
            } else {
                group.categoryIds.forEach(id => {
                    if (!activeCategories.includes(id)) {
                        activeCategories.push(id);
                    }
                });
            }

            renderCategories();
        });

        groupsContainer.appendChild(groupBtn);
    });

    renderCategories();

    

    
    function wylosujNastepnaFiszke() {
        if (poolOfCards.length === 0) {
            categoriesBtn.click();
            return;
        }

        const randomIndex = Math.floor(Math.random() * poolOfCards.length);
        currentCard = poolOfCards[randomIndex];
        isFlipped = false;

        flashcardBox.classList.remove("flipped", "hover-left", "hover-right");
        currentMouseSide = "";
        
        flashcardText.innerText = currentCard.q;
        flashcardHint.innerText = ""; 

        counterRemainingEl.innerText = `Fiszki: ${poolOfCards.length}`;
    }

    
    practiceBtn.addEventListener("click", () => {
        if (activeCategories.length === 0) {
            alert("Najpierw musisz wybrać przynajmniej jedną kategorię!");
            return;
        }

        practiceBtn.disabled = true;
        
        
        goodCount = 0;
        badCount = 0;
        if(counterGoodEl) counterGoodEl.innerText = `Dobrze: ${goodCount}`;
        if(counterBadEl) counterBadEl.innerText = `Źle: ${badCount}`; 

        poolOfCards = [];
        flashcardsDatabase.forEach(category => {
            if (activeCategories.includes(category.id)) {
                poolOfCards = poolOfCards.concat(category.cards);
            }
        });

        categoriesContainer.classList.add("hidden");
        document.querySelector(".bulk-selection-section").classList.add("hidden");
        practiceContainer.classList.remove("hidden");

        wylosujNastepnaFiszke();
    });

    
    flashcardBox.addEventListener("click", () => {
        if (!currentCard) return; 

        if (!isFlipped) {
            
            flashcardText.innerText = currentCard.a; 
            flashcardHint.innerText = currentCard.hint || "";
            isFlipped = true;
            flashcardBox.classList.add("flipped");
        } else {
            
            if (currentMouseSide === "left") {
                
                poolOfCards = poolOfCards.filter(card => card !== currentCard);
                goodCount++;
                if(counterGoodEl) counterGoodEl.innerText = `Dobrze: ${goodCount}`;
                wylosujNastepnaFiszke();
            } else if (currentMouseSide === "right") {
                
                badCount++;
                if(counterBadEl) counterBadEl.innerText = `Źle: ${badCount}`;
                
                wylosujNastepnaFiszke();
            }
        }
    });

    
    flashcardBox.addEventListener("mousemove", (e) => {
        if (!isFlipped) return; 

        const rect = flashcardBox.getBoundingClientRect();
        const mouseX = e.clientX - rect.left; 
        const halfWidth = rect.width / 2;

        if (mouseX < halfWidth) {
            flashcardBox.classList.add("hover-left");
            flashcardBox.classList.remove("hover-right");
            currentMouseSide = "left";
        } else {
            flashcardBox.classList.add("hover-right");
            flashcardBox.classList.remove("hover-left");
            currentMouseSide = "right";
        }
    });

    flashcardBox.addEventListener("mouseleave", () => {
        flashcardBox.classList.remove("hover-left", "hover-right");
        currentMouseSide = "";
    });

    categoriesBtn.addEventListener("click", () => {
        practiceContainer.classList.add("hidden");
        categoriesContainer.classList.remove("hidden");
        document.querySelector(".bulk-selection-section").classList.remove("hidden");
        
        currentCard = null;
        isFlipped = false;
        poolOfCards = [];
        flashcardBox.classList.remove("flipped", "hover-left", "hover-right");
        
        practiceBtn.disabled = false;
    });
});