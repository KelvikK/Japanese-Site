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
    <h3 style="--title-color: #00973f; --title-bg: #b2e6c8;">Podstawy</h3>
    <a href="jap_greetings.html" style="--title-color: #00973f;">Aisatsu あいさつ</a>
    <a href="jap_dialog1.html" style="--title-color: #00973f;">Kaiwa かいわ</a>
    <a href="jap_pronouns.html" style="--title-color: #00973f;">Daimeishi 代名詞</a>
    <a href="jap_questions.html" style="--title-color: #00973f;">Gimonshi 疑問詞</a>
    <h3 style="--title-color: #74e249; --title-bg: #d1e7c8;">Kraj, Narodowość, Języki</h3>
    <a href="jap_countryVocabulary.html" style="--title-color: #74e249;">Kuni くに</a>
    <a href="jap_countryPerson.html" style="--title-color: #74e249;">Kokuseki 国籍</a>
    <h3 style="--title-color: #d6d300; --title-bg: #e9e8c9;">Daty i Czas</h3>
    <a href="jap_timeVocabulary.html" style="--title-color: #d6d300;">Tango たんご</a>
    <a href="jap_timeSufix.html" style="--title-color: #d6d300;">Setsubiji せつびじ</a>
    <h3 style="--title-color: #3eafdb; --title-bg: #a9c7d3;">Szkoła, Praca, Rodzina</h3>
    <a href="jap_schoolVocabulary.html" style="--title-color: #3eafdb;">Gakkou 学校</a>
    <a href="jap_workVocabulary.html" style="--title-color: #3eafdb;">Shigoto しごと</a>
    <a href="jap_familyVocabulary.html" style="--title-color: #3eafdb;">Kazoku かぞく</a>
    <hr>
</aside>
`;

// Find the placeholder in the HTML and inject the sidebar content
document.getElementById("sidebar-placeholder").innerHTML = sidebarContent;