var firstList = {
    first: '- {rootSaluton}{endNoun}{endAccusative}! → Hello!',
    second: '- {rootBona}{endAdjective}{endAccusative} {rootMateno}{endNoun}{endAccusative}! → Good morning!',
    third: '- {rootBona}{endAdjective}{endAccusative} {prepositionPost}{rootTago}{rootMeza}{endNoun}{endAccusative}! → Good afternoon!',
    fourth: '- {rootBona}{endAdjective}{endAccusative} {rootNokto}{endNoun}{endAccusative} → Good night!',
    fifth: '- {pronounI}{endAdjective} {rootNomo}{endNoun} {rootEsti}{endPresent} {userName} → My name is {userName}',
    sixth: '- {questionCorrelative}|{endInfinitive}{modeCorrelative} {pronounYou} {rootFarto}{endPresent} → How are you?',
    seventh: '- {pronounI} {rootFarto}{endPresent} {rootBona}{endAdverb}, {conjunctionKaj} {pronounYou}? → I\'m fine, and you?',
    eigth: '- {pronounI} |rt_sxati|{endPresent} |rt_spekti|{endInfinitive} {articleLa} |rt_stelo|{endNoun}{endPlural}{endAccusative} {prepositionEn} {articleLa} {rootCielo}{endNoun} → I like to watch the stars in the sky.'
}

var tableColumns = ["Letter", "Name", "Symbol", "Pronunciation"];
var tableData = [
    ["A - a", "a", "/a/", 'sounds like the a in father'],
    ["B - b", "b{endNoun}", "/b/", "sounds like the b in bank"],
    ["C - c", "c{endNoun}", "/ʦ/", "sounds like the ts in rats"],
    ["|CH_UP| - |CH_LW|", "|CH_LW|{endNoun}", "/ʧ/", "sounds like the ch in church"],
    ["D - d", "d{endNoun}", "/d/", "sounds like the d in dad"],
    ["E - e", "e", "/e/", "sounds like the e in pet"],
    ["F - f", "f{endNoun}", "/f/", "sounds like the f in fat"],
    ["G - g", "g{endNoun}", "/g/", "sounds the the g in get"],
    ["|Y_UP| - |Y_LW|", "|Y_LW|{endNoun}", "/ʤ/", "sounds like the g in gem"],
    ["H - h", "h{endNoun}", "/h/", "sounds like the h in horse"],
    ["|HX_UP| - |HX_LW|", "|HX_LW|{endNoun}", "/x", "sounds like the german ch in bach"],
    ["I - i", "i", "/i/", "sounds like the e in me."],
    ["{iEspecial} - {iEspecial}", "{iEspecial}{endNoun}", "/j/", "sounds like the y in yet"],
    ["|JX_UP| - |JX_LW|", "|JX_LW|{endNoun}", "/ʒ/", "sounds like the s in pleasure"],
    ["K - k", "k{endNoun}", "/k/", "sounds like the k in kid"],
    ["L - l", "l{endNoun}", "/l/", "sounds like the l in bill"],
    ["M - m", "m{endNoun}", "/m/", "sounds like the m in mat"],
    ["N - n", "n{endNoun}", "/n/", "sounds like the n in nut"],
    ["O - o", "o", "/o/", "sounds like the o in note"],
    ["P - p", "p{endNoun}", "/p/", "sounds like the p in push"],
    ["R - r", "r{endNoun}", "/ɾ/", "sounds with a very slight burr"],
    ["S - s", "s{endNoun}", "/s/", "sounds like the s in sing"],
    ["|SH_UP| - |SH_LW|", "|SH_LW|{endNoun}", "/ʃ/", "sounds like the sh in ship"],
    ["T - t", "t{endNoun}", "/t/", "sounds like the t in take"],
    ["U - u", "u", "/u/", "sounds like the oo in boot"],
    ["{uEspecial}-{uEspecial}", "{uEspecial}{endNoun}", "/w/", "sounds like the w in crow"],
    ["V - v", "v{endNoun}", "/v/", "sounds like the v in cave"],
    ["Z - z", "z{endNoun}", "/z/", "sounds like the z in zoom"]
    ];

export var text = {
    firstParagraph: '{languageName} Is a language created by cipheak.com and {userName}. It was created the {creationDate}. The main characteristic of {languageName} is that its grammar is regular. It means, that if you make the choose to learn it, It won’t be take more that 2 months if you decide to dedicate 2 daily hours. During you learn {languageName} you are going to find that it has roots from other languages. {languageName} is a language that is going to help you to learn any other language easily. What is the key? {languageName} is based on the grammar structure of the international language Esperanto. ',
    secondParagraph: 'If you are the owner of {languageName} you have the right to use the cipheak translator. If you don’t have the secret key of {languageName} sorry, you have to learn it by this manual. Or simply you can create your own language with us going to cipheak.com',
    thirdParagraph: 'So, let’s learn {languageName}! It will be a funny process.',
    fourParagraph: '{languageName} is so easy to learn compared to native languages. Why? Because its grammar is reagular and you can keep in mind that it is just about four general topics. If you can learn a language in an easy-way your brain is going to be ready to learn another language easily too. Take a look to the next spaces on the cartesian plane:',
    fiveParagraph: 'Those are the biggest grammar topics in {languageName}. Just four biggest topics! We are going to help you understand each of them and you are going to enjoy learning it. There are some other grammar topics, of course, but they are smaller topics. ',
    sixParagraph: '{languageName} has 28 letters. 5 vowels (a, e, i, o, u), two special semivowels ({iEspecial}, {uEspecial}) and 21 consonants. Each consonant has its own sound. Never a consonant of {languageName} is going to sound like another {languageName} consonat.',
    sevenParagraph: 'Let’s learn the alphabet with its pronunciation.',
    eigthParagraph: '{languageName} is so easy to pronounce. You just have to keep in mind three rules. The first one you already know: The alphabet. Notice that most of the letters are easy to understand. Just focus on those ones who are properly of {languageName}. So, in addition to the alphabet, you have to learn the rule about the tonic accent and the rules about the diacritic accents.',
    nineParagraph: 'Every word in {languageName} has an accent in its {FP_SYLL} syllable. Every vowel counts as one syllable and we are going to make the accent on the {FP_SYLL}. Thus:',
    tenParagraph: '{rootRano}{endNoun} => {syllabler} => Frog\t {rootTomato}{endNoun} =>{syllabler} => Tomato\t {rootLiteraturo}{endNoun} => {syllabler} => Literature\t {rootHistorio}{endNoun} => {syllabler} => History',
    elevenParagraph: 'Do you remember that on the {languageName}’s alphabet we mentioned two special semivowels: {iEspecial}, {uEspecial}?. They will help us to create diphthongs. A diphthong is a sound that contains the sound of two vowels, that two-vowel sound is part of one syllable. In {languageName} every plural substantivo, as you eill see, is created by the termination {endPlural}, that’s a two-vowel sound in one syllable. Take care, a diphthong doesn’t mean that the accent is going to be on the diphthong. The accent will be anyway on the {FP_SYLL}:',
    twelveParagraph: '{rootGlaso}{endNoun}{endPlural} => {syllabler} => Glasses\t{rootMonto}{endNoun}{endPlural} => {syllabler} => Mountains\t{rootIdioto}{endNoun}{endPlural} => {syllabler} => Idiots\t{rootPersono}{endNoun}{endPlural} => {syllabler} => Persons\t',
    treceParagraph: 'To each vowel corresponds a syllable. You are going to find some word in {languageName} that have two vowels together. That’s a hiatus and they are part of two different syllables:',
    diezcuatroParagraph: '|hiatus_1|{endNoun} => {syllabler} => |hiatus1|.trans(“root_lang”, “en”)\t|hiatus_2|{endNoun} => {syllabler} => |hiatus2|.trans(“root_lang”, “en”)\t|hiatus_3|{endNoun} => {syllabler} => |hiatus3|.trans(“root_lang”, “en”)\t|hiatus_4|{endNoun} => {syllabler} => |hiatus4|.trans(“root_lang”, “en)',
    diezcincoParagraph: 'Try to keep clear these three rules to pronounce while reading in {languageName}. As an advice, if you find one the new consonants of {languageName}, think about its pronounciation, after that, search the {FP_SYLL} making the accent on it and, on the last point of the process, identify if there are diphthongs or hiatus. Remember to make the accent always on the {FP_SYLL}.',
    firstTitle: 'SOME USEFUL PHRASES',
    secondTitle: 'WHY YOU SHOULD CONSIDER LEARNING YOUR {languageName} LANGUAGE?',
    thirdTitle: 'THE ALPHABET',
    fourTitle: 'HOW TO PROFESSIONALLY READ IN {languageName} ',
    fiveTitle: 'TONIC ACCENT',
    sixTitle: 'DIACRITIC ACCENTS',
    sevenTitle: 'Diphthongs',
    eigthTitle: 'Hiatus',
    firstList: firstList,
    column: tableColumns,
    data: tableData
}
