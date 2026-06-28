if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.onload = function() {
    window.scrollTo(0, 0);
};

const sidebarContent = `
<aside class="navbar-sidebar">
    <h2>NAWIGACJA DOKUMENTACJI</h2>

    <h3 style="--title-color: #91e4ff; --title-bg: #ebfaff;">Alfabety</h3>
    <a href="jap_hiragana.html" style="--title-color: #73dcff;">Hiragana ひらがな</a>
    <a href="jap_katakana.html" style="--title-color: #73dcff;">Katakana カタカナ</a>
    <a href="jap_kanji.html" style="--title-color: #73dcff;">Kanji 漢字</a>
    <h3 style="--title-color: #00973f; --title-bg: #b2e6c8;">Podstawy JLPTN5</h3>
    <a href="jap_greetings.html" style="--title-color: #00973f;">Aisatsu あいさつ</a>
    <a href="jap_dialog1.html" style="--title-color: #00973f;">Kaiwa かいわ</a>
    <a href="jap_pronouns.html" style="--title-color: #00973f;">Daimeishi 代名詞</a>
    <a href="jap_questions.html" style="--title-color: #00973f;">Gimonshi 疑問詞</a>
    <a href="jap_dialogues.html" style="--title-color: #00973f;">Zdania i Frazy JLPTN5</a>
    <h3 style="--title-color: #ff1212; --title-bg: #ffc8c8;">Gramatyka JLPTN5</h3>
    <a href="jap_desu.html" style="--title-color: #ff1212;">Desu です</a>
    <a href="jap_jisaifun.html" style="--title-color: #ff1212;">Jikan じかん / Toshi とし</a>
    <a href="jap_pointing.html" style="--title-color: #ff1212;">Dore, Sono, Doko どれ、どの、どこ</a>
    <a href="jap_verbs1.html" style="--title-color: #ff1212;">Doushi ごだん、いちだん、ふきそく</a>
    <h3 style="--title-color: #464646; --title-bg: #e0e0e0;">Partykuły</h3>
    <a href="jap_particlesWA.html" style="--title-color: #3300CC;">WA は</a>
    <a href="jap_particlesKA.html" style="--title-color: #55006e;">KA か</a>
    <a href="jap_particlesNO.html" style="--title-color: #6fffe0;">NO の</a>
    <a href="jap_particlesMO.html" style="--title-color: #a700a7;">MO も</a>
    <a href="jap_particlesYONE.html" style="--title-color: #c5b7e1;">YO よ i NE ね</a>
    <h3 style="--title-color: #74e249; --title-bg: #d1e7c8;">Kraj, Narodowość, Języki</h3>
    <a href="jap_countryVocabulary.html" style="--title-color: #74e249;">Kuni くに</a>
    <a href="jap_countryPerson.html" style="--title-color: #74e249;">Kokuseki 国籍</a>
    <h3 style="--title-color: #d6d300; --title-bg: #e9e8c9;">Daty i Czas</h3>
    <a href="jap_timeVocabulary.html" style="--title-color: #d6d300;">Tango たんご</a>
    <a href="jap_timeSufix.html" style="--title-color: #d6d300;">Setsubiji せつびじ</a>
    <a href="jap_timeDayMonth.html" style="--title-color: #d6d300;">Hi to Tsuki 日と月</a>
    <a href="jap_timeAdverbs.html" style="--title-color: #d6d300;">Częstotliwość</a>
    <h3 style="--title-color: #ffa600; --title-bg: #ffedcb;">Liczby i Liczenie</h3>
    <a href="jap_numbers100.html" style="--title-color: #ffa600;">Suuji Hyaku すうじ百</a>
    <a href="jap_numbers.html" style="--title-color: #ffa600;">Liczenie</a>
    <h3 style="--title-color: #3eafdb; --title-bg: #a9c7d3;">Szkoła, Praca, Rodzina</h3>
    <a href="jap_schoolVocabulary.html" style="--title-color: #3eafdb;">Gakkou 学校</a>
    <a href="jap_workVocabulary.html" style="--title-color: #3eafdb;">Shigoto しごと</a>
    <a href="jap_familyVocabulary.html" style="--title-color: #3eafdb;">Kazoku かぞく</a>
    <h3 style="--title-color: #f25dff; --title-bg: #fef0ff;">Restauracja, Sklep, Miasto</h3>
    <a href="jap_restaurantVocabulary.html" style="--title-color: #f25dff;">Resutoran レストラン</a>
    <a href="jap_shoppingVocabulary.html" style="--title-color: #f25dff;">Kaimono 買い物</a>
    <a href="jap_machiVocabulary.html" style="--title-color: #f25dff;">Machi 町</a>
    <h3 style="--title-color: #0e7b22; --title-bg: #b7f2c6;">Jedzenie, Warzywa i Owoce, Zwierzęta</h3>
    <a href="jap_foodVocabulary.html" style="--title-color: #0e7b22;">Tabemono たべもの</a>
    <hr>
</aside>
`;

document.getElementById("sidebar-placeholder").innerHTML = sidebarContent;