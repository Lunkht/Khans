// Khans - Complete JavaScript for African Languages Explorer + Similarity Algorithm
// === CORE DATA: 26 languages with RICH lexical data (expanded for better fusion) ===
const coreLanguages = [  { id: 1, name: "Swahili", iso: "sw", family: "Niger-Congo", subfamily: "Bantu", region: "East Africa", countries: ["Tanzania", "Kenya", "Uganda", "DRC", "Rwanda"], speakers: 200000000, script: "Latin",     hello: "Jambo", water: "Maji", mother: "Mama", one: "Moja", two: "Mbili", three: "Tatu",     sun: "Jua", moon: "Mwezi", fire: "Moto", earth: "Ardhi", man: "Mwanaume", woman: "Mwanamke",     eat: "Kula", sleep: "Lala", big: "Kubwa", good: "Nzuri", house: "Nyumba", tree: "Mti", fish: "Samaki" },    { id: 2, name: "Hausa", iso: "ha", family: "Afroasiatic", subfamily: "Chadic", region: "West Africa", countries: ["Nigeria", "Niger"], speakers: 80000000, script: "Latin",     hello: "Sannu", water: "Ruwa", mother: "Uwa", one: "Daya", two: "Biyu", three: "Uku",     sun: "Rana", moon: "Wata", fire: "Wuta", earth: "Ƙasa", man: "Mutum", woman: "Mace",     eat: "Ci", sleep: "Kwana", big: "Babba", good: "Da kyau", house: "Gida", tree: "Itace", fish: "Kifi" },    { id: 3, name: "Yoruba", iso: "yo", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Africa", countries: ["Nigeria", "Benin"], speakers: 50000000, script: "Latin",     hello: "Ẹnlẹ", water: "Omi", mother: "Ìyá", one: "Ọkan", two: "Èjì", three: "Ẹta",     sun: "Oòrùn", moon: "Òṣùpá", fire: "Iná", earth: "Ilẹ̀", man: "Ọkùnrin", woman: "Obìnrin",     eat: "Jẹ", sleep: "Sùn", big: "Ńlá", good: "Dára", house: "Ilé", tree: "Igi", fish: "Ẹja" },    { id: 4, name: "Igbo", iso: "ig", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Africa", countries: ["Nigeria"], speakers: 30000000, script: "Latin",     hello: "Kedu", water: "Mmiri", mother: "Nne", one: "Otu", two: "Abụọ", three: "Atọ",     sun: "Anyanwụ", moon: "Ọnwa", fire: "Ọkụ", earth: "Ala", man: "Nwoke", woman: "Nwanyị",     eat: "Rie", sleep: "Rahụ", big: "Ukwu", good: "Mma", house: "Ụlọ", tree: "Osisi", fish: "Azụ" },    { id: 5, name: "Amharic", iso: "am", family: "Afroasiatic", subfamily: "Semitic", region: "East Africa", countries: ["Ethiopia"], speakers: 57000000, script: "Ge'ez",     hello: "Selam", water: "Waha", mother: "Inat", one: "And", two: "Hulet", three: "Sost",     sun: "Tsehay", moon: "Wär", fire: "Isat", earth: "Meda", man: "Wänd", woman: "Set",     eat: "Bela", sleep: "Tenya", big: "Tələq", good: "Təru", house: "Bet", tree: "Zaf", fish: "Asa" },    { id: 6, name: "Oromo", iso: "om", family: "Afroasiatic", subfamily: "Cushitic", region: "East Africa", countries: ["Ethiopia", "Kenya"], speakers: 40000000, script: "Latin",     hello: "Akkam", water: "Bishaan", mother: "Haaɗa", one: "Tokko", two: "Lama", three: "Sadii",     sun: "Aduu", moon: "Ji'a", fire: "Ibida", earth: "Lafa", man: "Dhiira", woman: "Dubartii",     eat: "Nyaadhu", sleep: "Rafuu", big: "Guddaa", good: "Gaarii", house: "Mana", tree: "Muka", fish: "Qurxummii" },    { id: 7, name: "Zulu", iso: "zu", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Africa", countries: ["South Africa"], speakers: 28000000, script: "Latin",     hello: "Sawubona", water: "Amanzi", mother: "Umama", one: "Kunye", two: "Kubili", three: "Kuthathu",     sun: "Ilanga", moon: "Inyanga", fire: "Umlilo", earth: "Umhlaba", man: "Indoda", woman: "Owesifazane",     eat: "Ukudla", sleep: "Ukulala", big: "Omkhulu", good: "Kuhle", house: "Indlu", tree: "Isihlahla", fish: "Inhlanzi" },    { id: 8, name: "Xhosa", iso: "xh", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Africa", countries: ["South Africa"], speakers: 19000000, script: "Latin",     hello: "Molo", water: "Amanzi", mother: "Umama", one: "Kunye", two: "Kubini", three: "Kuthathu",     sun: "Ilanga", moon: "Inyanga", fire: "Umlilo", earth: "Umhlaba", man: "Indoda", woman: "Umfazi",     eat: "Ukudla", sleep: "Ukulala", big: "Omkhulu", good: "Kuhle", house: "Indlu", tree: "Umthi", fish: "Intlanzi" },    { id: 9, name: "Arabic", iso: "ar", family: "Afroasiatic", subfamily: "Semitic", region: "North Africa", countries: ["Morocco", "Algeria", "Egypt", "Tunisia"], speakers: 300000000, script: "Arabic",     hello: "Marhaba", water: "Ma", mother: "Umm", one: "Wahid", two: "Ithnan", three: "Thalatha",     sun: "Shams", moon: "Qamar", fire: "Nar", earth: "Ard", man: "Rajul", woman: "Imra'a",     eat: "Akala", sleep: "Naam", big: "Kabir", good: "Jayyid", house: "Bayt", tree: "Shajara", fish: "Samak" },    { id: 10, name: "Berber", iso: "ber", family: "Afroasiatic", subfamily: "Berber", region: "North Africa", countries: ["Morocco", "Algeria"], speakers: 15000000, script: "Tifinagh",     hello: "Azul", water: "Aman", mother: "Imma", one: "Yiwen", two: "Sin", three: "Krad",     sun: "Tafukt", moon: "Ayyur", fire: "Timsi", earth: "Akal", man: "Argaz", woman: "Tamɣart",     eat: "Cč", sleep: "Gen", big: "Ameqqran", good: "Iḥeḍḍen", house: "Taddart", tree: "Asekkur", fish: "Aslem" },    { id: 11, name: "Somali", iso: "so", family: "Afroasiatic", subfamily: "Cushitic", region: "Horn of Africa", countries: ["Somalia", "Ethiopia"], speakers: 22000000, script: "Latin",     hello: "Salaam", water: "Biyo", mother: "Hooyo", one: "Kow", two: "Laba", three: "Saddex",     sun: "Qorrax", moon: "Dayax", fire: "Dab", earth: "Dhul", man: "Nin", woman: "Naag",     eat: "Cun", sleep: "Hurdo", big: "Weyn", good: "Wacan", house: "Guri", tree: "Geed", fish: "Kalluun" },    { id: 12, name: "Kinyarwanda", iso: "rw", family: "Niger-Congo", subfamily: "Bantu", region: "East Africa", countries: ["Rwanda"], speakers: 15000000, script: "Latin",     hello: "Muraho", water: "Amazi", mother: "Mama", one: "Rimwe", two: "Kabiri", three: "Gatatu",     sun: "Izuba", moon: "Ukwezi", fire: "Umuriro", earth: "Isi", man: "Umugabo", woman: "Umugore",     eat: "Kurya", sleep: "Gusinzira", big: "Kinini", good: "Byiza", house: "Inzu", tree: "Igiti", fish: "Amasa" },    { id: 13, name: "Lingala", iso: "ln", family: "Niger-Congo", subfamily: "Bantu", region: "Central Africa", countries: ["DRC", "Congo"], speakers: 45000000, script: "Latin",     hello: "Mbote", water: "Mai", mother: "Mama", one: "Moko", two: "Mibale", three: "Misato",     sun: "Mɔ́tɔ", moon: "Sánzá", fire: "Mɔ́tɔ", earth: "Mabelé", man: "Mobáli", woman: "Mwásí",     eat: "Kolíya", sleep: "Kolála", big: "Monɛ́nɛ", good: "Malámu", house: "Ndáko", tree: "Nzeté", fish: "Nsá" },    { id: 14, name: "Bambara", iso: "bm", family: "Niger-Congo", subfamily: "Mande", region: "West Africa", countries: ["Mali"], speakers: 15000000, script: "Latin",     hello: "I ni ce", water: "Ji", mother: "Ba", one: "Kelen", two: "Fila", three: "Saba",     sun: "Tile", moon: "Kalo", fire: "Ta", earth: "Dugu", man: "Cɛ", woman: "Musow",     eat: "Dɔn", sleep: "Sini", big: "Kɔrɔ", good: "Ɲuman", house: "Sɔ", tree: "Yiri", fish: "Jɛgɛ" },    { id: 15, name: "Wolof", iso: "wo", family: "Niger-Congo", subfamily: "Atlantic", region: "West Africa", countries: ["Senegal"], speakers: 10000000, script: "Latin",     hello: "Salaam", water: "Ndox", mother: "Yaay", one: "Benn", two: "Ñaar", three: "Ñett",     sun: "Jant", moon: "Weer", fire: "Sax", earth: "Suuf", man: "Góor", woman: "Jigéen",     eat: "Lekk", sleep: "Nelaw", big: "Mag", good: "Baax", house: "Kër", tree: "Genn", fish: "Jën" },    { id: 16, name: "Fula", iso: "ff", family: "Niger-Congo", subfamily: "Atlantic", region: "West Africa", countries: ["Senegal", "Guinea", "Mali"], speakers: 40000000, script: "Latin",     hello: "Salaam", water: "Ndiyam", mother: "Neene", one: "Gooto", two: "Didi", three: "Tati",     sun: "Naange", moon: "Lewru", fire: "Huɓɓo", earth: "Leydi", man: "Gorko", woman: "Debbo",     eat: "Ñaamde", sleep: "Joodde", big: "Mawɗo", good: "Moƴƴi", house: "Suudu", tree: "Lekki", fish: "Liiñ" },    { id: 17, name: "Shona", iso: "sn", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Africa", countries: ["Zimbabwe"], speakers: 12000000, script: "Latin",     hello: "Mhoro", water: "Mvura", mother: "Amai", one: "Poshi", two: "Piri", three: "Tatu",     sun: "Zuva", moon: "Mwedzi", fire: "Moto", earth: "Nyika", man: "Murume", woman: "Mukadzi",     eat: "Kudya", sleep: "Kurara", big: "Hukuru", good: "Kakanaka", house: "Imba", tree: "Muti", fish: "Hove" },    { id: 18, name: "Setswana", iso: "tn", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Africa", countries: ["Botswana", "South Africa"], speakers: 14000000, script: "Latin",     hello: "Dumela", water: "Metsi", mother: "Mma", one: "Nngwe", two: "Pedi", three: "Tharo",     sun: "Letsatsi", moon: "Ngwedi", fire: "Molelo", earth: "Lefatshe", man: "Monna", woman: "Mosadi",     eat: "Go ja", sleep: "Go robala", big: "Kgolo", good: "Botle", house: "Ntlo", tree: "Sefate", fish: "Tlhapi" },    { id: 19, name: "Afrikaans", iso: "af", family: "Indo-European", subfamily: "Germanic", region: "Southern Africa", countries: ["South Africa"], speakers: 17000000, script: "Latin",     hello: "Hallo", water: "Water", mother: "Ma", one: "Een", two: "Twee", three: "Drie",     sun: "Son", moon: "Maan", fire: "Vuur", earth: "Aarde", man: "Man", woman: "Vrou",     eat: "Eet", sleep: "Slaap", big: "Groot", good: "Goed", house: "Huis", tree: "Boom", fish: "Vis" },    { id: 20, name: "Malagasy", iso: "mg", family: "Austronesian", subfamily: "Malayo-Polynesian", region: "Madagascar", countries: ["Madagascar"], speakers: 25000000, script: "Latin",     hello: "Salama", water: "Rano", mother: "Neny", one: "Iray", two: "Roa", three: "Telo",     sun: "Masoandro", moon: "Volana", fire: "Afo", earth: "Tany", man: "Lehilahy", woman: "Vehivavy",     eat: "Mihinana", sleep: "Matory", big: "Lehibe", good: "Tsara", house: "Trano", tree: "Hazo", fish: "Trondro" },    { id: 21, name: "Tigrinya", iso: "ti", family: "Afroasiatic", subfamily: "Semitic", region: "Horn of Africa", countries: ["Eritrea", "Ethiopia"], speakers: 9000000, script: "Ge'ez",     hello: "Selam", water: "May", mother: "Adey", one: "Hade", two: "Kelete", three: "Seleste",     sun: "Tsehay", moon: "Wärhi", fire: "Isat", earth: "Meda", man: "Säb", woman: "Set",     eat: "Bela", sleep: "Tenya", big: "Abay", good: "Təru", house: "Bet", tree: "Zaf", fish: "Asa" },    { id: 22, name: "Kikongo", iso: "kg", family: "Niger-Congo", subfamily: "Bantu", region: "Central Africa", countries: ["DRC", "Angola"], speakers: 12000000, script: "Latin",     hello: "Mbote", water: "Maza", mother: "Mama", one: "Mosi", two: "Zole", three: "Tatu",     sun: "Ntangu", moon: "Ngonda", fire: "Tia", earth: "Nsi", man: "Muntu", woman: "Mukazi",     eat: "Kudia", sleep: "Kulala", big: "Nene", good: "Mbote", house: "Nzo", tree: "Nti", fish: "Nsangu" },    { id: 23, name: "Akan", iso: "ak", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Africa", countries: ["Ghana"], speakers: 20000000, script: "Latin",     hello: "Agoo", water: "Nsuo", mother: "Maame", one: "Baako", two: "Abien", three: "Abiasa",     sun: "Awia", moon: "Ɔsram", fire: "Ogya", earth: "Asase", man: "Barima", woman: "Ɔbaa",     eat: "Didi", sleep: "Da", big: "Kɛseɛ", good: "Papa", house: "Dan", tree: "Dua", fish: "Nsuo" },    { id: 24, name: "Ewe", iso: "ee", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Africa", countries: ["Ghana", "Togo"], speakers: 7000000, script: "Latin",     hello: "Woezɔ", water: "Tsi", mother: "Nɔ", one: "Ɖeka", two: "Eve", three: "Etɔ",     sun: "Ŋdɔ", moon: "Ɖa", fire: "Dzo", earth: "Anyigba", man: "Ŋutsu", woman: "Nyɔnu",     eat: "Ɖu", sleep: "Dɔ", big: "Lolo", good: "Nyui", house: "Xɔ", tree: "Atí", fish: "Aɖaŋ" },    { id: 25, name: "Sango", iso: "sg", family: "Niger-Congo", subfamily: "Ubangian", region: "Central Africa", countries: ["Central African Republic"], speakers: 5000000, script: "Latin",     hello: "Bara", water: "Ngû", mother: "Mâ", one: "Oko", two: "Use", three: "Otâ",     sun: "Ndangba", moon: "Ngû", fire: "Wâ", earth: "Ndo", man: "Kôli", woman: "Wâlî",     eat: "Kâ", sleep: "Dâ", big: "Kû", good: "Nî", house: "Dâ", tree: "Ngû", fish: "Kâ" },    { id: 26, name: "Khoekhoe", iso: "naq", family: "Khoe-Kwadi", subfamily: "Khoisan", region: "Southern Africa", countries: ["Namibia"], speakers: 200000, script: "Latin",     hello: "ǃGâi", water: "ǀÂb", mother: "ǁGûn", one: "ǀGui", two: "ǀGam", three: "ǀNona",     sun: "ǀÂb", moon: "ǃGâi", fire: "ǂÂi", earth: "ǁÂu", man: "ǀGâi", woman: "ǁGûn",     eat: "ǀÂu", sleep: "ǃGâi", big: "ǀGâi", good: "ǂÂi", house: "ǁÂu", tree: "ǀÂb", fish: "ǃGâi" }];
// Flag emojis for each language (based on primary country)
const languageFlags = {  1: "🇹🇿", 2: "🇳🇬", 3: "🇳🇬", 4: "🇳🇬",  5: "🇪🇹", 6: "🇪🇹", 7: "🇿🇦", 8: "🇿🇦",  9: "🇪🇬", 10: "🇲🇦", 11: "🇸🇴", 12: "🇷🇼",  13: "🇨🇩", 14: "🇲🇱", 15: "🇸🇳", 16: "🇸🇳",  17: "🇿🇼", 18: "🇧🇼", 19: "🇿🇦", 20: "🇲🇬",  21: "🇪🇷", 22: "🇨🇩", 23: "🇬🇭", 24: "🇬🇭",  25: "🇨🇫", 26: "🇳🇦"};
// Full dataset (subset loaded from JSON for demo, but we use full file)
let fullLanguages = []; let extendedLanguages = [];
// === UTILITY: Levenshtein Distance ===
function levenshtein(a, b) {  if (!a || !b) return 100;  a = a.toLowerCase().replace(/[^a-zà-ÿ]/g, '');  b = b.toLowerCase().replace(/[^a-zà-ÿ]/g, '');  if (a === b) return 0;
    const matrix = [];  for (let i = 0; i <= b.length; i++) matrix[i] = [i];  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;    for (let i = 1; i <= b.length; i++) {    for (let j = 1; j <= a.length; j++) {      const cost = a[j - 1] === b[i - 1] ? 0 : 1;      matrix[i][j] = Math.min(        matrix[i - 1][j] + 1,        matrix[i][j - 1] + 1,        matrix[i - 1][j - 1] + cost      );    }  }
  return matrix[b.length][a.length];}
// === Similarity Algorithm (Core of Khans) ===
function calculateSimilarity(lang1, lang2) {  if (lang1.id === lang2.id) return 100;
  const keys = ['hello', 'water', 'mother', 'one', 'two', 'three', 'sun', 'moon', 'fire', 'earth', 'man', 'woman', 'eat', 'sleep', 'big', 'good', 'house', 'tree', 'fish'];
  let totalSim = 0;
  let matched = 0;  keys.forEach(key => {    const w1 = (lang1[key] || '').toLowerCase();
    const w2 = (lang2[key] || '').toLowerCase();    if (!w1 || !w2) return;
    const dist = levenshtein(w1, w2);
    const maxLen = Math.max(w1.length, w2.length);
    const levSim = maxLen === 0 ? 0 : (1 - dist / maxLen) * 100;
    // Bonus if exact match
    const exactBonus = (w1 === w2) ? 40 : 0;        totalSim += (levSim * 0.65 + exactBonus);    matched++;  });
  let avgLexSim = matched > 0 ? totalSim / matched : 0;
  // Family bonus
  let familyBonus = 0;  if (lang1.family === lang2.family) {    familyBonus = 22;    if (lang1.subfamily === lang2.subfamily) familyBonus = 35;  }
  // Region bonus
  let regionBonus = 0;  if (lang1.region === lang2.region) regionBonus = 12;
  // Final score (capped)
  let score = Math.min(100, Math.round(avgLexSim * 0.7 + familyBonus + regionBonus));
  // Adjust for very close languages
  if (lang1.family === lang2.family && score < 45) score = Math.max(score, 48);
  return Math.max(0, Math.min(100, score));}
// =====================================================// === NEW: PROBABILITY + FUSION ALGORITHM (User Priority) ===// =====================================================/** * Calculate the PROBABILITY that two (or more) languages can be successfully fused. * Returns a probabilistic model instead of a deterministic score. */
function calculateFusionProbability(languages) {  if (!languages || languages.length < 2) return { probability: 0, confidence: 0, details: {} };
  let totalScore = 0;
  let pairCount = 0;
  let familyMatches = 0;
  let regionMatches = 0;
  let lexMatches = 0;
  const keys = ['hello', 'water', 'mother', 'one', 'two', 'three', 'sun', 'moon', 'fire', 'earth', 'man', 'woman', 'eat', 'sleep', 'big', 'good', 'house', 'tree', 'fish'];  for (let i = 0; i < languages.length; i++) {    for (let j = i + 1; j < languages.length; j++) {      const l1 = languages[i];
      const l2 = languages[j];
      const sim = calculateSimilarity(l1, l2);      totalScore += sim;      pairCount++;
      // Family coherence
      if (l1.family === l2.family) familyMatches++;      if (l1.region === l2.region) regionMatches++;
      // Lexical overlap count
      let shared = 0;      keys.forEach(k => {        if (l1[k] && l2[k] && levenshtein(l1[k], l2[k]) < 4) shared++;      });      lexMatches += shared;    }  }
  const avgSim = totalScore / pairCount;
  const familyCoherence = familyMatches / pairCount;
  const regionCoherence = regionMatches / pairCount;
  const avgLexOverlap = (lexMatches / (pairCount * keys.length)) * 100;
  // Probabilistic model (Bayesian-inspired weighted)  // Base probability from similarity
  let baseProb = (avgSim / 100) * 0.55;
  // Boost from coherence
  baseProb += familyCoherence * 0.22;  baseProb += regionCoherence * 0.12;  baseProb += (avgLexOverlap / 100) * 0.11;
  // Penalize if languages are too distant
  if (avgSim < 35) baseProb *= 0.6;
  // Cap and convert to probability
  let probability = Math.max(5, Math.min(96, Math.round(baseProb * 100)));
  // Confidence (how reliable is this probability?)
  let dataQuality = Math.min(1, (pairCount * 0.4) + (avgLexOverlap / 80));
  let confidence = Math.round(dataQuality * 85 + (familyCoherence * 15));
  return {    probability,    confidence: Math.min(95, confidence),    avgSimilarity: Math.round(avgSim),    familyCoherence: Math.round(familyCoherence * 100),    lexOverlap: Math.round(avgLexOverlap),    numPairs: pairCount,    details: {      base: Math.round(baseProb * 100),      familyBoost: Math.round(familyCoherence * 22),      regionBoost: Math.round(regionCoherence * 12)    }  };}
/** * Probabilistic word fusion + smarter hybridization (African phonetic bias) */
function probabilisticWordFusion(words, languages) {  if (words.length === 0) return "—";  if (words.length === 1) return words[0];
  const validWords = words.filter(w => w && w.trim());  if (validWords.length === 0) return "—";  if (validWords.length === 1) return validWords[0];
  const unique = [...new Set(validWords.map(w => w.toLowerCase()))];  if (unique.length === 1) return validWords[0];
  const avgLen = validWords.reduce((a, b) => a + b.length, 0) / validWords.length;
  // Score with African-language phonetic preferences
  const scores = validWords.map(word => {    let score = 45;    if (word.length < avgLen) score += 28;
                    // shorter often more "core"
                    if (/[aeiou]$/i.test(word)) score += 12;
                  // open vowel ending (very common)
                  if (/[mn]$/i.test(word)) score += 8;
                      // nasal ending bias
                      if (/[kg]/i.test(word)) score += 6;
                       // velar sounds common
                       if (word.length <= 3) score += 10;
                        // very short words
                        return score;  });
  let total = scores.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;
  let chosen = validWords[0];  for (let i = 0; i < validWords.length; i++) {    rand -= scores[i];    if (rand <= 0) { chosen = validWords[i]; break; }  }
  // Hybridization (higher chance when languages are different)
  const dist = levenshtein(validWords[0], validWords[1] || validWords[0]);
  const hybridChance = Math.min(0.38, dist / 8);  if (dist > 1 && Math.random() < hybridChance) {    const w1 = validWords[0];
    const w2 = validWords[1] || validWords[0];
        // Smart hybrid strategies
        let hybrid = "";    if (w1.length > 2 && w2.length > 2) {      const mid1 = Math.ceil(w1.length / 2);
      const mid2 = Math.floor(w2.length / 2);      hybrid = w1.slice(0, mid1) + w2.slice(mid2);    }
  else {      hybrid = w1.slice(0, 2) + w2.slice(-2);    }
    // Clean up
    hybrid = hybrid.replace(/([aeiou])\1+/gi, "$1");
 // reduce repeated vowels
 if (hybrid.length > 8) hybrid = hybrid.slice(0, 7);    chosen = hybrid.charAt(0).toUpperCase() + hybrid.slice(1).toLowerCase();  }
  return chosen;}
/** * THE FUSION ENGINE — the core new feature * Merges multiple languages into one "fused" language with probability. */
function fuseLanguages(languages) {  if (!languages || languages.length < 2) {    return { error: "Il faut au moins 2 langues pour fusionner" };  }
  const probResult = calculateFusionProbability(languages);
  const keys = ['hello', 'water', 'mother', 'one', 'two', 'three', 'sun', 'moon', 'fire', 'earth', 'man', 'woman', 'eat', 'sleep', 'big', 'good', 'house', 'tree', 'fish'];
  // === Generate fused lexicon probabilistically ===
const fusedLexicon = {};  keys.forEach(key => {    const allWords = languages.map(l => l[key]).filter(Boolean);    fusedLexicon[key] = probabilisticWordFusion(allWords, languages);  });
  // === Create a smart fused name ===
const nameParts = languages.map(l => l.name.split(' ')[0]);
  let fusedName;  if (languages.length === 2) {    fusedName = `${nameParts[0].slice(0, 4)}-${nameParts[1].slice(0, 4)}`;  }
  else {    fusedName = nameParts.slice(0, 3).join('-') + (languages.length > 3 ? '+' : '');  }  fusedName = fusedName.charAt(0).toUpperCase() + fusedName.slice(1) + " (Fusion)";
  // === Determine the "family" of the fusion ===
const families = [...new Set(languages.map(l => l.family))];
  const fusedFamily = families.length === 1 ? families[0] : "Mixed / Proto-" + families[0];
  const regions = [...new Set(languages.map(l => l.region))];
  const fusedRegion = regions.length === 1 ? regions[0] : "Pan-African (fused)";
  // === Build the final fused language object ===
const fusedLang = {    id: "fused-" + Date.now(),    name: fusedName,    iso: "fus" + Math.floor(Math.random() * 900 + 100),    family: fusedFamily,    subfamily: "Fused",    region: fusedRegion,    countries: [...new Set(languages.flatMap(l => l.countries))].slice(0, 5),    speakers: Math.round(languages.reduce((sum, l) => sum + (l.speakers || 0), 0) * 0.6), // realistic reduction
    script: "Latin (proposed)",    ...fusedLexicon,    _meta: {      sourceLanguages: languages.map(l => ({ id: l.id, name: l.name, iso: l.iso })),      fusionProbability: probResult.probability,      confidence: probResult.confidence,      algorithmVersion: "v2.0-probabilistic-fusion"    }  };
  return {    fused: fusedLang,    probability: probResult,    sourceLanguages: languages  };}
/** * Helper: Generate multiple fusion suggestions (for UI) */
function generateFusionSuggestions(languages) {  const results = [];
  // Main fusion
  results.push(fuseLanguages(languages));
  // If only 2 languages, also try with slight variations (simulated)
  if (languages.length === 2) {
    // We can simulate a second "more conservative" fusion
    const conservative = { ...fuseLanguages(languages) };
    if (conservative.fused) {
      conservative.fused.name = conservative.fused.name.replace("(Fusion)", "(Conservative Fusion)");
      conservative.probability.probability = Math.max(40, conservative.probability.probability - 12);
    }
    results.push(conservative);
  }
  return results;
}
// === Load Full Languages Dataset ===
async function loadFullLanguages() {
  try {
    const response = await fetch('../data/languages_full.json');
    if (response.ok) {
      fullLanguages = await response.json();
      console.log('Loaded full dataset:', fullLanguages.length);
    }
  else {
    // Fallback to core
    fullLanguages = coreLanguages.map(l => ({
      name: l.name,
      iso: l.iso,
      country: l.countries[0] || "Various",
      country_code: "XX"
    }));
  }
} catch (e) {
  console.warn('Using fallback language list');
  fullLanguages = coreLanguages.map(l => ({
    name: l.name,
    iso: l.iso,
    country: l.countries[0] || "Various",
    country_code: "XX"
  }));
}}
// === RENDER LANGUAGES GRID ===
let currentDisplayCount = 10;
function renderLanguages(langs = coreLanguages) {  const grid = document.getElementById('languages-grid');  grid.innerHTML = '';
  const toShow = langs.slice(0, currentDisplayCount);  toShow.forEach(lang => {    const card = document.createElement('div');    card.className = `lang-card bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-3xl p-4 cursor-pointer flex flex-col min-w-0`;
        const speakerStr = lang.speakers ?       (lang.speakers >= 1000000 ? Math.round(lang.speakers/1000000) + 'M' : (lang.speakers/1000) + 'k') : '—';
    const flag = languageFlags[lang.id] || '🌍';    card.innerHTML = `      <div class="flex justify-between items-start">        <div>          <div class="font-semibold text-lg leading-tight flex items-center gap-x-1.5 min-w-0">            <span class="shrink-0">${flag}</span> <span class="truncate">${lang.name}</span>          </div>          <div class="flex items-center gap-x-2 mt-1 min-w-0">            <span class="font-mono text-xs text-zinc-400 bg-zinc-950 px-2 py-px rounded-xl shrink-0">${lang.iso}</span>            <span class="text-[10px] px-1.5 py-px rounded-xl bg-zinc-800 text-zinc-400 truncate">${lang.family}</span>          </div>        </div>        <div class="text-right">          <div class="text-xs text-zinc-400">${speakerStr}</div>        </div>      </div>      <div class="mt-auto pt-4 flex items-center justify-between text-xs">        <div class="flex items-center gap-x-1.5 text-zinc-400">          <i class="fa-solid fa-globe text-xs"></i>          <span class="font-medium truncate">${lang.region}</span>        </div>                <div onclick="event.stopImmediatePropagation(); showLanguageDetail(${lang.id});"              class="text-zinc-400 hover:text-white px-2 py-1 transition-colors text-xs flex items-center gap-x-1">          <span>voir</span> <i class="fa-solid fa-arrow-right text-xs"></i>        </div>      </div>    `;    card.onclick = () => showLanguageDetail(lang.id);    grid.appendChild(card);  });
  // Update button text
  const btn = document.getElementById('show-more-text');  if (btn) btn.textContent = (toShow.length >= langs.length) ? "Toutes les langues affichées" : "Afficher plus de langues";}
function filterLanguages() {  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const family = document.getElementById('family-filter').value;
  const region = document.getElementById('region-filter').value;
  const filtered = coreLanguages.filter(lang => {    const matchSearch = !search || lang.name.toLowerCase().includes(search) || lang.iso.includes(search);
    const matchFamily = !family || lang.family === family;
    const matchRegion = !region || lang.region === region;    return matchSearch && matchFamily && matchRegion;  });  currentDisplayCount = 10;  renderLanguages(filtered);}
function showMoreLanguages() {  currentDisplayCount += 10;
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const family = document.getElementById('family-filter').value;
  const region = document.getElementById('region-filter').value;
  let filtered = coreLanguages;  if (search || family || region) {    filtered = coreLanguages.filter(lang => {      const matchSearch = !search || lang.name.toLowerCase().includes(search);
      const matchFamily = !family || lang.family === family;
      const matchRegion = !region || lang.region === region;      return matchSearch && matchFamily && matchRegion;    });  }  renderLanguages(filtered);}
// === LANGUAGE MODAL ===
let currentLangId = null;
function showLanguageDetail(id) {  const lang = coreLanguages.find(l => l.id === id);  if (!lang) return;  currentLangId = id;  document.getElementById('modal-lang-name').textContent = lang.name;  document.getElementById('modal-lang-iso').textContent = lang.iso.toUpperCase();  document.getElementById('modal-lang-family').textContent = lang.family;  document.getElementById('modal-lang-region').textContent = lang.region;  document.getElementById('modal-lang-countries').textContent = lang.countries.join(', ');  document.getElementById('modal-lang-speakers').textContent = lang.speakers ? (lang.speakers / 1000000).toFixed(0) + ' millions' : '—';  document.getElementById('modal-lang-script').textContent = lang.script;
  // Rich Lexicon (19 words)
  const lexiconDiv = document.getElementById('modal-lexicon');  lexiconDiv.innerHTML = `    <div class="grid grid-cols-2 gap-2 text-sm">      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Eau</span><br><span class="font-medium">${lang.water}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Mère</span><br><span class="font-medium">${lang.mother}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Un / Deux</span><br><span class="font-medium">${lang.one} / ${lang.two}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Trois</span><br><span class="font-medium">${lang.three}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Soleil</span><br><span class="font-medium">${lang.sun || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Lune</span><br><span class="font-medium">${lang.moon || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Feu</span><br><span class="font-medium">${lang.fire || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Terre</span><br><span class="font-medium">${lang.earth || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Homme / Femme</span><br><span class="font-medium">${lang.man || '—'} / ${lang.woman || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Manger</span><br><span class="font-medium">${lang.eat || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Dormir</span><br><span class="font-medium">${lang.sleep || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Grand / Bon</span><br><span class="font-medium">${lang.big || '—'} / ${lang.good || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Maison</span><br><span class="font-medium">${lang.house || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Arbre</span><br><span class="font-medium">${lang.tree || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5"><span class="text-zinc-400 text-xs">Poisson</span><br><span class="font-medium">${lang.fish || '—'}</span></div>      <div class="bg-zinc-950 rounded-2xl p-2.5 col-span-2"><span class="text-zinc-400 text-xs">Bonjour</span><br><span class="font-medium">${lang.hello}</span></div>    </div>  `;  document.getElementById('lang-modal').classList.remove('hidden');  document.getElementById('lang-modal').classList.add('flex');}
function hideLangModal() {  const modal = document.getElementById('lang-modal');  modal.classList.add('hidden');  modal.classList.remove('flex');}
function compareWithLanguage() {  hideLangModal();
  // scroll to comparison tool
  document.getElementById('similarites').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
  const lang = coreLanguages.find(l => l.id === currentLangId);    if (!lang) return;
    const select1 = document.getElementById('compare-lang1');
    // Set the first select to this lang
    for (let i = 0; i < select1.options.length; i++) {      if (select1.options[i].value == lang.id) {        select1.selectedIndex = i;        break;      }    }    compareSelectedLanguages();  }, 600);}
// === COMPARISON TOOL ===
function populateCompareSelects() {  const sel1 = document.getElementById('compare-lang1');
  const sel2 = document.getElementById('compare-lang2');  sel1.innerHTML = '';  sel2.innerHTML = '';  coreLanguages.forEach(lang => {    const opt1 = new Option(lang.name + ' (' + lang.iso + ')', lang.id);
    const opt2 = new Option(lang.name + ' (' + lang.iso + ')', lang.id);    sel1.appendChild(opt1);    sel2.appendChild(opt2);  });
  // Default selection
  sel1.value = 1;  sel2.value = 7;
 // Swahili vs Zulu
  compareSelectedLanguages();}
function compareSelectedLanguages() {  const id1 = parseInt(document.getElementById('compare-lang1').value);
  const id2 = parseInt(document.getElementById('compare-lang2').value);    if (id1 === id2) {    document.getElementById('comparison-result').innerHTML = `<div class="text-center text-sm text-amber-300 py-3">Veuillez sélectionner deux langues différentes.</div>`;    return;  }
  const lang1 = coreLanguages.find(l => l.id === id1);
  const lang2 = coreLanguages.find(l => l.id === id2);
  const score = calculateSimilarity(lang1, lang2);
  let color = 'text-white';
  let label = 'Très proches';  if (score < 45) { color = 'text-zinc-400'; label = 'Liens faibles'; }  else if (score < 65) { color = 'text-zinc-300'; label = 'Similitudes modérées'; }
  const html = `    <div class="flex justify-between items-center mb-2">      <div class="font-medium">${lang1.name} ↔ ${lang2.name}</div>      <div class="text-right">        <span class="text-3xl font-bold ${color}">${score}</span>        <span class="text-xs text-zinc-400">/100</span>      </div>    </div>        <div class="mb-3">      <div class="h-2 bg-zinc-800 rounded-full overflow-hidden">        <div class="similarity-bar" style="width: ${score}%"></div>      </div>    </div>    <div class="text-xs">      <span class="font-medium ${color}">${label}</span>      <div class="mt-1.5 grid grid-cols-3 gap-2">        <div class="bg-zinc-900 p-2 rounded-2xl">          <div class="text-[10px] text-zinc-400">Eau</div>          <div class="font-medium">${lang1.water} — ${lang2.water}</div>        </div>        <div class="bg-zinc-900 p-2 rounded-2xl">          <div class="text-[10px] text-zinc-400">Mère</div>          <div class="font-medium">${lang1.mother} — ${lang2.mother}</div>        </div>        <div class="bg-zinc-900 p-2 rounded-2xl">          <div class="text-[10px] text-zinc-400">Un / Deux</div>          <div class="font-medium">${lang1.one} — ${lang2.two}</div>        </div>      </div>    </div>  `;  document.getElementById('comparison-result').innerHTML = html;}
// === TOP SIMILARITIES ===
function renderTopSimilarities() {  const container = document.getElementById('top-similarities');  container.innerHTML = '';
  const pairs = [];  for (let i = 0; i < coreLanguages.length; i++) {    for (let j = i + 1; j < coreLanguages.length; j++) {      const score = calculateSimilarity(coreLanguages[i], coreLanguages[j]);      if (score > 50) {        pairs.push({ l1: coreLanguages[i], l2: coreLanguages[j], score });      }    }  }
  // Sort by score
  pairs.sort((a, b) => b.score - a.score);
  const top = pairs.slice(0, 6);  top.forEach(pair => {    const div = document.createElement('div');    div.className = 'bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-2xl px-4 py-3 flex items-center justify-between text-sm cursor-pointer';    div.innerHTML = `      <div class="flex items-center gap-x-3">        <div class="font-medium">${pair.l1.name}</div>        <i class="fa-solid fa-arrow-right text-xs text-zinc-400"></i>        <div class="font-medium">${pair.l2.name}</div>      </div>      <div class="flex items-center gap-x-3">        <div class="font-mono font-bold text-xl ${pair.score > 75 ? 'text-zinc-300' : 'text-zinc-400'}">${pair.score}</div>        <div onclick="event.stopImmediatePropagation(); quickCompare(${pair.l1.id}, ${pair.l2.id})" class="text-xs px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-2xl">Comparer</div>      </div>    `;    div.onclick = () => {      document.getElementById('compare-lang1').value = pair.l1.id;      document.getElementById('compare-lang2').value = pair.l2.id;      compareSelectedLanguages();      document.getElementById('similarites').scrollIntoView({ behavior: "smooth" });    };    container.appendChild(div);  });}
function quickCompare(id1, id2) {  document.getElementById('compare-lang1').value = id1;  document.getElementById('compare-lang2').value = id2;  compareSelectedLanguages();  document.getElementById('similarites').scrollIntoView({ behavior: "smooth" });}
// === DEMO RECALCULATE ===
function runSimilarityDemo() {  const container = document.getElementById('top-similarities');  container.innerHTML = `<div class="text-center py-6 text-sm text-zinc-300"><i class="fa-solid fa-sync fa-spin mr-2"></i> Recalcul des similarités...</div>`;  setTimeout(() => {    renderTopSimilarities();  }, 900);}
// === ALGORITHM DETAILS MODAL ===
function showAlgorithmDetails() {  const modalHTML = `    <div onclick="this.remove()" class="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4">      <div onclick="event.stopImmediatePropagation()" class="bg-zinc-900 max-w-2xl w-full rounded-3xl border border-zinc-700 overflow-hidden">        <div class="p-6">          <div class="flex justify-between">            <div>              <div class="font-semibold">Algorithme de reconnaissance de similitudes</div>              <div class="text-xs text-zinc-400">Implémentation en JavaScript (client-side)</div>            </div>            <button onclick="event.target.closest('.fixed').remove()" class="text-xl text-zinc-400 hover:text-white">&times;</button>          </div>          <div class="mt-6 text-sm">            <div class="font-medium mb-2">1. Similarité lexicale (Levenshtein)</div>            <div class="font-mono bg-zinc-950 p-3 rounded-2xl text-xs">              levSim(word1, word2) = 1 - (distance / maxLen)            </div>                        <div class="mt-5 font-medium mb-2">2. Score final</div>            <div class="font-mono bg-zinc-950 p-3 rounded-2xl text-xs">              score = (0.70 × avgLexSim) + familyBonus + regionBonus<br>              familyBonus = 22–35 (selon famille + sous-famille)<br>              regionBonus = 12            </div>                        <div class="mt-4 text-xs text-zinc-400">              L'algorithme est simplifié pour le web mais reproduit les principes classiques de la linguistique historique (comparative method).            </div>          </div>        </div>        <div class="bg-zinc-950 px-6 py-4 text-xs flex justify-between items-center border-t border-zinc-800">          <div>Version : v1.2 • 2026</div>          <div onclick="event.target.closest('.fixed').remove()" class="cursor-pointer px-3 py-1 text-zinc-300">Fermer</div>        </div>      </div>    </div>`;  document.body.insertAdjacentHTML('beforeend', modalHTML);}
// === DOWNLOAD FUNCTIONS ===
function downloadJSON() {  const data = JSON.stringify(coreLanguages, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');  a.href = url;  a.download = 'afrilang_core_lexicon.json';  document.body.appendChild(a);  a.click();  document.body.removeChild(a);}
function downloadCSV() {  let csv = 'id,name,iso,family,region,speakers,water,mother,one,two,three\n';  coreLanguages.forEach(l => {    csv += `${l.id},"${l.name}",${l.iso},${l.family},${l.region},${l.speakers},"${l.water}","${l.mother}","${l.one}","${l.two}","${l.three}"\n`;  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');  a.href = url;  a.download = 'afrilang_languages.csv';  document.body.appendChild(a);  a.click();  document.body.removeChild(a);}
// === ADD LANGUAGE MODAL (Demo) ===
function showAddLanguageModal() {  const modal = document.createElement('div');  modal.className = 'fixed inset-0 bg-black/70 z-[200] flex items-center justify-center p-4';  modal.innerHTML = `    <div onclick="event.stopImmediatePropagation()" class="bg-zinc-900 border border-zinc-700 w-full max-w-md rounded-3xl p-6">      <div class="flex justify-between mb-4">        <div class="font-semibold">Ajouter une nouvelle langue</div>        <button onclick="this.closest('.fixed').remove()" class="text-zinc-400">&times;</button>      </div>            <div class="space-y-3 text-sm">        <div>          <label class="block text-xs text-zinc-400 mb-1">Nom de la langue</label>          <input id="new-name" value="Wolof (nouveau)" class="w-full bg-zinc-950 border border-zinc-700 px-4 py-2.5 rounded-2xl">        </div>        <div class="grid grid-cols-2 gap-3">          <div>            <label class="block text-xs text-zinc-400 mb-1">Code ISO</label>            <input id="new-iso" value="wo2" class="w-full bg-zinc-950 border border-zinc-700 px-4 py-2.5 rounded-2xl">          </div>          <div>            <label class="block text-xs text-zinc-400 mb-1">Famille</label>            <input id="new-family" value="Niger-Congo" class="w-full bg-zinc-950 border border-zinc-700 px-4 py-2.5 rounded-2xl">          </div>        </div>        <div class="text-[10px] text-zinc-300">Cette fonctionnalité est une démonstration. Dans une vraie version, les données seraient validées et ajoutées à la base.</div>      </div>            <div class="mt-6 flex gap-x-3">        <button onclick="addNewLanguage(this)" class="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-3xl py-3 text-sm font-medium">Ajouter à la liste</button>        <button onclick="this.closest('.fixed').remove()" class="flex-1 border border-zinc-700 hover:bg-zinc-800 rounded-3xl py-3 text-sm">Annuler</button>      </div>    </div>  `;  document.body.appendChild(modal);}
function addNewLanguage(btn) {  const name = document.getElementById('new-name').value || 'Nouvelle langue';
  const iso = document.getElementById('new-iso').value || 'xxx';
  const family = document.getElementById('new-family').value || 'Niger-Congo';
  const newLang = {    id: Date.now(),    name: name,    iso: iso,    family: family,    subfamily: "—",    region: "À définir",    countries: ["À déterminer"],    speakers: 0,    script: "Latin",    hello: "—",    water: "—",    mother: "—",    one: "—",    two: "—",    three: "—"  };  coreLanguages.unshift(newLang);
    // Refresh grid
    document.querySelector('#languages-grid').innerHTML = '';  currentDisplayCount = 10;  renderLanguages(coreLanguages);
    // Refresh compare selects
    populateCompareSelects();    btn.closest('.fixed').remove();
    // Show success toast
    const toast = document.createElement('div');  toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 text-zinc-300 px-5 py-2 rounded-3xl text-sm flex items-center gap-x-2';  toast.innerHTML = `<i class="fa-solid fa-check"></i> <span>Langue ajoutée avec succès !</span>`;  document.body.appendChild(toast);  setTimeout(() => toast.remove(), 2400);}
// === INITIALIZATION ===
async function init() { await loadFullLanguages(); await loadExtendedLanguages(); populateAlphabetSelector();
  // Render languages
  renderLanguages(coreLanguages);
  // Populate comparison tool
  populateCompareSelects();
  // Render top similarities
  renderTopSimilarities();
  // === NEW: Populate the fusion selector ===
  populateFusionSelector();
  // Search & filters
  const searchInput = document.getElementById('search-input');
  const familyFilter = document.getElementById('family-filter');
  const regionFilter = document.getElementById('region-filter');
  // Keyboard shortcut
  document.addEventListener('keydown', function(e) {
  if (e.key === "/" && document.activeElement.tagName === "BODY") {      e.preventDefault();      searchInput.focus();    }  });
  // Initial message
  console.log('%c[Khans] Site + Algorithme de Fusion Probabiliste initialisés avec succès (v2.0).', 'color:#166534');}
// =====================================================// === FUSION UI FUNCTIONS (New Priority Feature) ===// =====================================================
let selectedForFusion = [];
function populateFusionSelector() {  const listContainer = document.getElementById('fusion-dropdown-list');  if (!listContainer) return;  listContainer.innerHTML = '';  coreLanguages.forEach(lang => {    const flag = languageFlags[lang.id] || '🌍';
    const row = document.createElement('div');    row.className = `flex items-center justify-between px-3 py-[7px] rounded-xl hover:bg-zinc-800 active:bg-zinc-950 cursor-pointer text-sm`;        row.innerHTML = `      <div class="flex items-center gap-x-3">        <input type="checkbox" id="fus-${lang.id}" class="accent-zinc-300 w-3.5 h-3.5 pointer-events-none">        <span class="text-lg leading-none">${flag}</span>        <label for="fus-${lang.id}" class="font-medium cursor-pointer text-zinc-200">${lang.name}</label>        <span class="text-[10px] font-mono text-zinc-500">${lang.iso}</span>      </div>      <span class="text-xs text-zinc-500">${lang.family.split(' ')[0]}</span>    `;
    const checkbox = row.querySelector('input');
        // Click on row toggles checkbox
        row.onclick = (e) => {
        if (e.target.tagName === 'INPUT') return;      checkbox.checked = !checkbox.checked;      handleFusionCheckboxChange(checkbox, lang.id);    };    checkbox.onchange = () => {      handleFusionCheckboxChange(checkbox, lang.id);    };    listContainer.appendChild(row);  });
  // Initial sync of UI
  updateFusionSelectedUI();}
function handleFusionCheckboxChange(checkbox, langId) {  if (checkbox.checked) {    if (!selectedForFusion.includes(langId)) {      selectedForFusion.push(langId);    }  }
  else {    selectedForFusion = selectedForFusion.filter(id => id !== langId);  }
  // Enforce max 4
  if (selectedForFusion.length > 4) {    const last = selectedForFusion.pop();
    const lastCb = document.getElementById('fus-' + last);    if (lastCb) lastCb.checked = false;  }  updateFusionSelectedUI();}
function updateFusionSelectedUI() {  const label = document.getElementById('fusion-dropdown-label');
  const pillsContainer = document.getElementById('fusion-selected-pills');
  const chevron = document.getElementById('fusion-chevron');  if (!label || !pillsContainer) return;
  const selectedLangs = coreLanguages.filter(l => selectedForFusion.includes(l.id));  if (selectedLangs.length === 0) {    label.textContent = 'Sélectionner 2 à 4 langues...';    label.classList.add('text-zinc-300');    label.classList.remove('text-white');  }
  else {    label.innerHTML = `${selectedLangs.length} sélectionnée${selectedLangs.length > 1 ? 's' : ''} <span class="text-zinc-500 text-xs">(${selectedLangs.map(l => l.name.split(' ')[0]).join(', ')})</span>`;    label.classList.remove('text-zinc-300');    label.classList.add('text-white');  }
  // Pills
  pillsContainer.innerHTML = '';
  selectedLangs.forEach(lang => {
  const flag = languageFlags[lang.id] || '🌍';
    const pill = document.createElement('div');    pill.className = `inline-flex items-center gap-x-1.5 px-2.5 py-1 bg-zinc-800 border border-zinc-700 rounded-2xl text-xs`;    pill.innerHTML = `      <span>${flag}</span>      <span class="font-medium">${lang.name}</span>      <button onclick="removeFromFusionSelection(${lang.id}); event.stopImmediatePropagation();"               class="ml-0.5 text-zinc-400 hover:text-white w-3 h-3 flex items-center justify-center">×</button>    `;    pillsContainer.appendChild(pill);  });}
function toggleFusionDropdown(e) {  if (e) e.stopImmediatePropagation();
  const list = document.getElementById('fusion-dropdown-list');
  const chevron = document.getElementById('fusion-chevron');  if (!list) return;
  const isHidden = list.classList.contains('hidden');
    // Close all other dropdowns if needed (simple)
  document.querySelectorAll('#fusion-dropdown-list').forEach(el => {
    if (el !== list) el.classList.add('hidden');  });  if (isHidden) {    list.classList.remove('hidden');    list.classList.add('block');    if (chevron) chevron.style.transform = 'rotate(180deg)';  }
  else {    list.classList.add('hidden');    list.classList.remove('block');    if (chevron) chevron.style.transform = '';  }
  // Close on outside click
  const closeOnOutside = (ev) => {    if (!list.contains(ev.target) && ev.target.id !== 'fusion-dropdown-btn') {      list.classList.add('hidden');      list.classList.remove('block');      if (chevron) chevron.style.transform = '';      document.removeEventListener('click', closeOnOutside);    }  };  setTimeout(() => {    document.addEventListener('click', closeOnOutside, { once: true });  }, 10);}
function removeFromFusionSelection(langId) {  selectedForFusion = selectedForFusion.filter(id => id !== langId);
  const cb = document.getElementById('fus-' + langId);  if (cb) cb.checked = false;  updateFusionSelectedUI();}
function selectAllForFusion() {  selectedForFusion = [];
  const list = document.getElementById('fusion-dropdown-list');  if (!list) return;
  const checkboxes = list.querySelectorAll('input[type="checkbox"]');  checkboxes.forEach((cb, i) => {    if (i < 4) {      cb.checked = true;
      const id = parseInt(cb.id.replace('fus-', ''));      if (!selectedForFusion.includes(id)) selectedForFusion.push(id);    }
  else {      cb.checked = false;    }  });  updateFusionSelectedUI();}
function clearFusionSelection() {  selectedForFusion = [];
  const list = document.getElementById('fusion-dropdown-list');  if (list) {    list.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);  }  updateFusionSelectedUI();}
function performFusion() {  const resultBox = document.getElementById('fusion-result');  if (!resultBox) return;
  const selectedLangs = coreLanguages.filter(l => selectedForFusion.includes(l.id));  if (selectedLangs.length < 2) {    resultBox.innerHTML = `      <div class="text-center text-zinc-400 py-8">        <i class="fa-solid fa-exclamation-triangle text-2xl mb-2"></i><br>        Veuillez sélectionner au moins <strong>2 langues</strong>.      </div>`;    return;  }
  // Run the real fusion algorithm
  const fusionResults = generateFusionSuggestions(selectedLangs);
  const mainFusion = fusionResults[0];
  const prob = mainFusion.probability;
  const fused = mainFusion.fused;
  let html = `    <div class="flex justify-between items-start mb-4">      <div>        <div class="text-zinc-300 text-sm font-medium">LANGUE FUSIONNÉE CRÉÉE</div>        <div class="text-3xl font-semibold tracking-tight">${fused.name}</div>        <div class="font-mono text-xs mt-0.5 text-zinc-400">${fused.iso} • ${fused.family}</div>      </div>            <div class="text-right">        <div class="text-xs text-zinc-400">Probabilité de succès</div>        <div class="text-5xl font-bold ${prob.probability > 75 ? 'text-zinc-400' : prob.probability > 55 ? 'text-zinc-400' : 'text-zinc-400'}">${prob.probability}<span class="text-base align-super">%</span></div>        <div class="text-xs">Confiance : ${prob.confidence}%</div>      </div>    </div>    <div class="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 mb-4">      <div class="text-xs uppercase tracking-widest mb-2 text-zinc-400">Lexique fusionné (19 mots — probabiliste)</div>      <div class="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-1.5 text-[13px]">        <div><span class="text-zinc-400 text-[10px]">Eau</span><br><strong>${fused.water}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Mère</span><br><strong>${fused.mother}</strong></div>        <div><span class="text-zinc-400 text-[10px]">1 / 2</span><br><strong>${fused.one} / ${fused.two}</strong></div>        <div><span class="text-zinc-400 text-[10px]">3</span><br><strong>${fused.three}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Soleil</span><br><strong>${fused.sun || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Lune</span><br><strong>${fused.moon || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Feu</span><br><strong>${fused.fire || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Terre</span><br><strong>${fused.earth || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Homme</span><br><strong>${fused.man || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Femme</span><br><strong>${fused.woman || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Manger</span><br><strong>${fused.eat || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Dormir</span><br><strong>${fused.sleep || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Grand</span><br><strong>${fused.big || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Bon</span><br><strong>${fused.good || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Maison</span><br><strong>${fused.house || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Arbre</span><br><strong>${fused.tree || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Poisson</span><br><strong>${fused.fish || '—'}</strong></div>        <div><span class="text-zinc-400 text-[10px]">Bonjour</span><br><strong>${fused.hello}</strong></div>      </div>    </div>    <div class="text-xs grid grid-cols-2 gap-3">      <div class="bg-zinc-900 rounded-2xl p-3">        <div class="font-medium mb-1">Langues sources</div>        <div class="text-zinc-300">${selectedLangs.map(l => l.name).join(' + ')}</div>      </div>      <div class="bg-zinc-900 rounded-2xl p-3">        <div>Similarité moyenne : <span class="font-medium">${prob.avgSimilarity}%</span></div>        <div>Coherence familiale : <span class="font-medium">${prob.familyCoherence}%</span></div>        <div>Chevauchement lexical : <span class="font-medium">${prob.lexOverlap}%</span></div>      </div>    </div>    <div class="mt-4 flex gap-2">      <button onclick="addFusedLanguageToList(${fused.id})"               class="flex-1 py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl font-medium">Ajouter au catalogue</button>      <button onclick="regenerateFusion()"               class="flex-1 py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl">🔄 Regénérer (probabiliste)</button>      <button onclick="performFusion()"               class="flex-1 py-2 text-xs border border-zinc-700 hover:bg-zinc-800 rounded-3xl">Nouvelle sélection</button>    </div>  `;  resultBox.innerHTML = html;
  // Store last fused for adding
  window.lastFusedLanguage = fused;
  window.lastFusionSources = selectedLangs;}
function regenerateFusion() {  if (!window.lastFusionSources || window.lastFusionSources.length < 2) {    performFusion();    return;  }
    const resultBox = document.getElementById('fusion-result');  resultBox.innerHTML = `<div class="text-center py-8 text-zinc-300"><i class="fa-solid fa-sync fa-spin mr-2"></i> Regénération probabiliste...</div>`;    setTimeout(() => {    const newResult = generateFusionSuggestions(window.lastFusionSources)[0];
    const prob = newResult.probability;
    const fused = newResult.fused;
        let html = `      <div class="flex justify-between items-start mb-4">        <div>          <div class="text-zinc-300 text-sm font-medium">LANGUE FUSIONNÉE (régénérée)</div>          <div class="text-3xl font-semibold tracking-tight">${fused.name}</div>          <div class="font-mono text-xs mt-0.5 text-zinc-400">${fused.iso} • ${fused.family}</div>        </div>        <div class="text-right">          <div class="text-xs text-zinc-400">Probabilité</div>          <div class="text-5xl font-bold ${prob.probability > 75 ? 'text-zinc-400' : prob.probability > 55 ? 'text-zinc-400' : 'text-zinc-400'}">${prob.probability}<span class="text-base align-super">%</span></div>          <div class="text-xs">Confiance : ${prob.confidence}%</div>        </div>      </div>      <div class="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 mb-4">        <div class="text-xs uppercase tracking-widest mb-2 text-zinc-400">Lexique fusionné (19 mots — probabiliste)</div>        <div class="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-1.5 text-[13px]">          <div><span class="text-zinc-400 text-[10px]">Eau</span><br><strong>${fused.water}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Mère</span><br><strong>${fused.mother}</strong></div>          <div><span class="text-zinc-400 text-[10px]">1 / 2</span><br><strong>${fused.one} / ${fused.two}</strong></div>          <div><span class="text-zinc-400 text-[10px]">3</span><br><strong>${fused.three}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Soleil</span><br><strong>${fused.sun || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Lune</span><br><strong>${fused.moon || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Feu</span><br><strong>${fused.fire || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Terre</span><br><strong>${fused.earth || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Homme</span><br><strong>${fused.man || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Femme</span><br><strong>${fused.woman || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Manger</span><br><strong>${fused.eat || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Dormir</span><br><strong>${fused.sleep || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Grand</span><br><strong>${fused.big || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Bon</span><br><strong>${fused.good || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Maison</span><br><strong>${fused.house || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Arbre</span><br><strong>${fused.tree || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Poisson</span><br><strong>${fused.fish || '—'}</strong></div>          <div><span class="text-zinc-400 text-[10px]">Bonjour</span><br><strong>${fused.hello}</strong></div>        </div>      </div>      <div class="text-xs grid grid-cols-2 gap-3">        <div class="bg-zinc-900 rounded-2xl p-3">          <div class="font-medium mb-1">Langues sources</div>          <div class="text-zinc-300">${window.lastFusionSources.map(l => l.name).join(' + ')}</div>        </div>        <div class="bg-zinc-900 rounded-2xl p-3">          <div>Similarité : <span class="font-medium">${prob.avgSimilarity}%</span></div>          <div>Cohérence familiale : <span class="font-medium">${prob.familyCoherence}%</span></div>        </div>      </div>      <div class="mt-4 flex gap-2">        <button onclick="addFusedLanguageToList(${fused.id})" class="flex-1 py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl font-medium">Ajouter au catalogue</button>        <button onclick="regenerateFusion()" class="flex-1 py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl">🔄 Regénérer</button>        <button onclick="performFusion()" class="flex-1 py-2 text-xs border border-zinc-700 hover:bg-zinc-800 rounded-3xl">Nouvelle sélection</button>      </div>    `;        resultBox.innerHTML = html;
    window.lastFusedLanguage = fused;  }, 420);}
// =====================================================// === NEW BUILDER: Propros Construction Algorithm (v3.0) ===// === Construit une proto-langue "propros" par reconstruction cognatique ===// === à partir de toutes les langues des pays non-anglophones / non-arabophones ===// =====================================================
const ANGLOPHONE_COUNTRIES = [  "United States", "United Kingdom", "Canada", "Australia", "New Zealand", "Ireland",  "South Africa", "Nigeria", "Ghana", "Kenya", "Uganda", "Zambia", "Zimbabwe",  "Botswana", "Malawi", "Sierra Leone", "Liberia", "Gambia", "South Sudan",  "Tanzania", "Lesotho", "Eswatini", "Mauritius"];
const ARABOPHONE_COUNTRIES = [  "Algeria", "Egypt", "Libya", "Morocco", "Sudan", "Tunisia", "Mauritania",  "Somalia", "Djibouti", "Comoros",  "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates", "Qatar", "Bahrain",  "Kuwait", "Jordan", "Lebanon", "Syria", "Iraq", "Palestine"];
function isExcludedProprosCountry(country) {  const c = country.trim().toLowerCase();
  return ANGLOPHONE_COUNTRIES.some(ac => ac.toLowerCase() === c) ||         ARABOPHONE_COUNTRIES.some(ac => ac.toLowerCase() === c);}
function getProprosFoundation() {  const fullCount = fullLanguages.length;  if (fullCount === 0) {    return { full: [], core: coreLanguages, totalFull: 0, totalCore: coreLanguages.length };  }
  // Filter FULL dataset by country exclusion
  const includedFull = fullLanguages.filter(e => !isExcludedProprosCountry(e.country));
  const excludedFull = fullLanguages.filter(e => isExcludedProprosCountry(e.country));
  // Unique languages from full dataset
  const uniqueIncluded = [...new Map(includedFull.map(e => [e.name, e])).values()];
  const uniqueExcluded = [...new Map(excludedFull.map(e => [e.name, e])).values()];
  // Cross-reference with core 26 languages for word data
  const coreIncluded = coreLanguages.filter(lang =>    lang.countries.some(c => !isExcludedProprosCountry(c))  );
  const coreExcluded = coreLanguages.filter(lang =>    lang.countries.every(c => isExcludedProprosCountry(c))  );
  return {    allIncluded: uniqueIncluded,    allExcluded: uniqueExcluded,    coreIncluded,    coreExcluded,    totalFull,    totalIncluded: uniqueIncluded.length,    totalExcluded: uniqueExcluded.length,    coreIncludedCount: coreIncluded.length,    coreExcludedCount: coreExcluded.length  };}
function proprosWordBuild(words) {  const valid = [...new Set(    words.filter(w => w && w.trim())      .map(w => w.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))  )];  if (valid.length === 0) return "—";  if (valid.length === 1) return valid[0].charAt(0).toUpperCase() + valid[0].slice(1);
  const clusters = [];
  const used = new Set();  for (let i = 0; i < valid.length; i++) {    if (used.has(i)) continue;
    const cluster = [valid[i]];    used.add(i);    for (let j = i + 1; j < valid.length; j++) {      if (used.has(j)) continue;
      const isCognate = cluster.some(cw => {        const dist = levenshtein(cw, valid[j]);        return dist <= Math.max(2, Math.floor(Math.min(cw.length, valid[j].length) / 2));      });      if (isCognate) { cluster.push(valid[j]); used.add(j); }    }    clusters.push(cluster);  }  clusters.sort((a, b) => b.length - a.length);
  const bestCluster = clusters[0];
  let result;  if (bestCluster.length >= 2) {    const lengths = bestCluster.map(w => w.length).sort((a, b) => a - b);
    const medianLen = lengths[Math.floor(lengths.length / 2)];
    let proto = '';    for (let pos = 0; pos < medianLen; pos++) {      const freq = {};      bestCluster.forEach(w => { if (pos < w.length) freq[w[pos]] = (freq[w[pos]] || 0) + 1; });
      let bestChar = '', bestCount = 0;      for (const [c, count] of Object.entries(freq)) {        if (count > bestCount) { bestChar = c; bestCount = count; }      }      proto += bestChar;    }    proto = proto.replace(/([aeiouà-ü])\1+/gi, '$1');    if (proto.length > 8) proto = proto.slice(0, 7);    result = proto;  }
  else {    const lengths = valid.map(w => w.length).sort((a, b) => a - b);
    const medianLen = lengths[Math.floor(lengths.length / 2)];
    const scored = valid.map(w => {      let score = 50;
      const lenDiff = Math.abs(w.length - medianLen);      if (lenDiff <= 1) score += 25;      else if (w.length > 8) score -= 10;      if (/[aeiou]$/i.test(w)) score += 8;      if (/^[^aeiou][aeiou]/i.test(w)) score += 5;      if (w.length <= 3) score += 10;      return { word: w, score };    });    scored.sort((a, b) => b.score - a.score);    result = scored[0].word;  }
  return result.charAt(0).toUpperCase() + result.slice(1);}
function buildProprosLanguage() {  const foundation = getProprosFoundation();
  const coreIncluded = foundation.coreIncluded;  if (coreIncluded.length < 2) {    return { error: "Pas assez de langues sources après filtrage." };  }
  const keys = ['hello', 'water', 'mother', 'one', 'two', 'three', 'sun', 'moon', 'fire', 'earth', 'man', 'woman', 'eat', 'sleep', 'big', 'good', 'house', 'tree', 'fish'];
  // === LEXICON from core languages with word data ===
const lexicon = {};  keys.forEach(key => {    const langWords = coreIncluded.map(l => l[key]).filter(Boolean);    lexicon[key] = proprosWordBuild(langWords);  });
  // === AGGREGATION ===
const regions = [...new Set(coreIncluded.map(l => l.region))];
  const families = [...new Set(coreIncluded.map(l => l.family))];
  const allCountries = [...new Set(coreIncluded.flatMap(l => l.countries))];
  const totalSpeakers = coreIncluded.reduce((s, l) => s + (l.speakers || 0), 0);
  // === NAMING using full dataset ===
const regParts = [...new Set(regions.map(r => r.split(' ')[0].slice(0, 3)))].slice(0, 2).join('');
  const famPrefix = families.length === 1 ? families[0].split('-')[0].slice(0, 4) : "Pan";
  const langName = `Propros-${famPrefix}${regParts}`;
  const excludedNames = foundation.coreExcluded.map(l => l.name);
  const proprosLang = {    id: "propros-" + Date.now(),    name: langName,    iso: "prp",    family: families.length === 1 ? families[0] : "Proto-" + families.join('/'),    subfamily: "Propros (reconstruit)",    region: regions.length === 1 ? regions[0] : "Pan-African (propros)",    countries: allCountries.slice(0, 5),    speakers: Math.round(totalSpeakers * 0.25),    script: "Latin (proposé)",    ...lexicon,    _meta: {      fullDatasetTotal: foundation.totalFull,      fullDatasetIncluded: foundation.totalIncluded,      fullDatasetExcluded: foundation.totalExcluded,      sourceCount: coreIncluded.length,      excludedCount: foundation.coreExcluded.length,      sourceLanguages: coreIncluded.map(l => ({ id: l.id, name: l.name })),      excludedLanguages: foundation.coreExcluded.map(l => ({ id: l.id, name: l.name })),      algorithm: "v3.0-propros-builder",      method: "full-dataset country filter + cognate clustering + position-wise reconstruction"    }  };
  return {    language: proprosLang,    foundation,    coreIncluded,    metrics: {      fullTotal: foundation.totalFull,      fullIncluded: foundation.totalIncluded,      fullExcluded: foundation.totalExcluded,      coreIncluded: coreIncluded.length,      coreExcluded: foundation.coreExcluded.length,      sourceNames: coreIncluded.map(l => l.name),      excludedNames,      regions,      families,      totalSpeakers    }  };}
function performProprosBuild() {  const resultBox = document.getElementById('propros-result');  if (!resultBox) { console.error('propros-result not found'); return; }  resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });  if (!fullLanguages || fullLanguages.length === 0) {    resultBox.innerHTML = `<div class="text-center text-zinc-300 py-8">⚠ Données complètes non chargées.</div>`;    return;  }  resultBox.innerHTML = `<div class="text-center py-8 text-zinc-300"><i class="fa-solid fa-flask fa-spin mr-2"></i> Analyse de ${fullLanguages.length} associations langue-pays...</div>`;  setTimeout(() => {    try {      const buildResult = buildProprosLanguage();      if (buildResult.error) {        resultBox.innerHTML = `<div class="text-center text-zinc-300 py-8">${buildResult.error}</div>`;        return;      }
      const lang = buildResult.language;
      const metrics = buildResult.metrics;
      let lexiconHTML = '';
      const keys = ['hello', 'water', 'mother', 'one', 'two', 'three', 'sun', 'moon', 'fire', 'earth', 'man', 'woman', 'eat', 'sleep', 'big', 'good', 'house', 'tree', 'fish'];
      const labels = ['Bonjour', 'Eau', 'Mère', 'Un', 'Deux', 'Trois', 'Soleil', 'Lune', 'Feu', 'Terre', 'Homme', 'Femme', 'Manger', 'Dormir', 'Grand', 'Bon', 'Maison', 'Arbre', 'Poisson'];      keys.forEach((k, i) => {        lexiconHTML += `<div class="bg-zinc-800/50 rounded-xl px-3 py-2"><span class="text-zinc-400 text-[10px] block">${labels[i]}</span><span class="font-medium text-sm">${lang[k] || '—'}</span></div>`;      });
      const html = `        <div class="flex items-start justify-between gap-4 mb-4 flex-wrap">          <div class="min-w-0">            <div class="text-zinc-300 text-sm font-medium flex items-center gap-2">              <i class="fa-solid fa-flask"></i> PROPROS LANGUE RECONSTRUITE            </div>            <div class="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight break-words">${lang.name}</div>            <div class="font-mono text-xs mt-0.5 text-zinc-400">${lang.iso} • ${lang.family}</div>          </div>          <div class="text-right shrink-0">            <div class="text-xs text-zinc-400">Associations analysées</div>            <div class="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-400">${metrics.fullTotal}<span class="text-xs sm:text-base align-super text-zinc-400"> entrées</span></div>          </div>        </div>        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs">          <div class="bg-zinc-900 rounded-2xl p-3 text-center">            <span class="text-zinc-400">Inclus (full)</span><br><span class="text-lg font-bold text-zinc-400">${metrics.fullIncluded}</span><br><span class="text-[10px] text-zinc-500">langues uniques</span>          </div>          <div class="bg-zinc-900 rounded-2xl p-3 text-center">            <span class="text-zinc-400">Exclus (full)</span><br><span class="text-lg font-bold text-zinc-400">${metrics.fullExcluded}</span><br><span class="text-[10px] text-zinc-500">langues</span>          </div>          <div class="bg-zinc-900 rounded-2xl p-3 text-center">            <span class="text-zinc-400">Core inclus</span><br><span class="text-lg font-bold text-zinc-400">${metrics.coreIncluded}</span><br><span class="text-[10px] text-zinc-500">avec lexique</span>          </div>          <div class="bg-zinc-900 rounded-2xl p-3 text-center">            <span class="text-zinc-400">Core exclus</span><br><span class="text-lg font-bold text-zinc-400">${metrics.coreExcluded}</span><br><span class="text-[10px] text-zinc-500">sans données</span>          </div>        </div>        <div class="bg-zinc-900 border border-zinc-700/40 rounded-2xl p-3 sm:p-4 mb-4">          <div class="font-medium text-xs mb-2">Lexique reconstruit (19 mots)</div>          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2">            ${lexiconHTML}          </div>        </div>        <div class="text-xs grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">          <div class="bg-zinc-900 rounded-2xl p-2.5 sm:p-3">            <div class="font-medium mb-1 text-xs">Sources (${metrics.coreIncluded})</div>            <div class="text-zinc-300 text-[10px] sm:text-[11px] break-words">${metrics.sourceNames.join(', ')}</div>          </div>          <div class="bg-zinc-900 rounded-2xl p-2.5 sm:p-3">            <div class="font-medium mb-1 text-xs">Exclues (${metrics.coreExcluded})</div>            <div class="text-zinc-300 text-[10px] sm:text-[11px] break-words">${metrics.excludedNames.length > 0 ? metrics.excludedNames.join(', ') : 'aucune'}</div>          </div>        </div>        <div class="mt-4 flex flex-col sm:flex-row gap-2">          <button onclick="addFusedLanguageToList('${lang.id}')"                  class="w-full sm:flex-1 py-2.5 sm:py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl font-medium">Ajouter au catalogue</button>          <button onclick="performProprosBuild()"                  class="w-full sm:flex-1 py-2.5 sm:py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl">🔄 Reconstruire</button>        </div>      `;      resultBox.innerHTML = html;
      window.lastFusedLanguage = lang;      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });    } catch (e) {      console.error('Propros build error:', e);      resultBox.innerHTML = `<div class="text-center text-zinc-400 py-8">⚠ Erreur: ${e.message}</div>`;    }  }, 300);}
function performProprosBuild() {  const resultBox = document.getElementById('propros-result');  if (!resultBox) return;  resultBox.innerHTML = `<div class="text-center py-8 text-zinc-300"><i class="fa-solid fa-flask fa-spin mr-2"></i> Reconstruction propros en cours...</div>`;  setTimeout(() => {    const buildResult = buildProprosLanguage();    if (buildResult.error) {      resultBox.innerHTML = `<div class="text-center text-zinc-300 py-8">${buildResult.error}</div>`;      return;    }
    const lang = buildResult.language;
    const metrics = buildResult.metrics;
    // Build lexicon grid HTML
    let lexiconHTML = '';
    const keys = ['hello', 'water', 'mother', 'one', 'two', 'three', 'sun', 'moon', 'fire', 'earth', 'man', 'woman', 'eat', 'sleep', 'big', 'good', 'house', 'tree', 'fish'];
    const labels = ['Bonjour', 'Eau', 'Mère', 'Un', 'Deux', 'Trois', 'Soleil', 'Lune', 'Feu', 'Terre', 'Homme', 'Femme', 'Manger', 'Dormir', 'Grand', 'Bon', 'Maison', 'Arbre', 'Poisson'];    keys.forEach((k, i) => {      lexiconHTML += `<div class="bg-zinc-800/50 rounded-xl px-3 py-2"><span class="text-zinc-400 text-[10px] block">${labels[i]}</span><span class="font-medium text-sm">${lang[k] || '—'}</span></div>`;    });
    const html = `      <div class="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">        <div class="min-w-0">          <div class="text-zinc-300 text-xs sm:text-sm font-medium flex items-center gap-2">            <i class="fa-solid fa-flask"></i> PROPROS LANGUE RECONSTRUITE          </div>          <div class="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight break-words">${lang.name}</div>          <div class="font-mono text-xs mt-0.5 text-zinc-400">${lang.iso} • ${lang.family}</div>          <div class="text-[10px] text-zinc-500 mt-1">Algorithme v3.0 • Reconstruction par clusters cognatiques</div>        </div>        <div class="text-left sm:text-right shrink-0">          <div class="text-[10px] sm:text-xs text-zinc-400">Langues sources</div>          <div class="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-400">${metrics.sourceCount}<span class="text-xs sm:text-base align-super text-zinc-400">/${coreLanguages.length}</span></div>          <div class="text-[10px] sm:text-xs text-zinc-300">${metrics.excludedCount} exclues</div>        </div>      </div>      <div class="bg-zinc-900 border border-zinc-700/40 rounded-2xl p-3 sm:p-4 mb-4">        <div class="text-[10px] sm:text-xs uppercase tracking-widest mb-2 text-zinc-400/80">Lexique propros reconstruit (19 mots)</div>        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2">          ${lexiconHTML}        </div>      </div>      <div class="text-xs grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">        <div class="bg-zinc-900 rounded-2xl p-2.5 sm:p-3">          <div class="font-medium mb-1 text-xs">Langues sources (${metrics.sourceCount})</div>          <div class="text-zinc-300 text-[10px] sm:text-[11px] break-words">${metrics.sourceNames.join(', ')}</div>        </div>        <div class="bg-zinc-900 rounded-2xl p-2.5 sm:p-3">          <div class="font-medium mb-1 text-xs">Exclues (${metrics.excludedCount})</div>          <div class="text-zinc-300 text-[10px] sm:text-[11px] break-words">${metrics.excludedNames.length > 0 ? metrics.excludedNames.join(', ') : 'aucune'}</div>        </div>      </div>      <div class="mt-3 text-xs grid grid-cols-3 gap-1.5 sm:gap-2">        <div class="bg-zinc-900 rounded-xl p-2 text-center">          <span class="text-zinc-400 text-[10px] sm:text-xs">Régions</span><br><span class="font-medium text-sm sm:text-base">${metrics.regions.length}</span>        </div>        <div class="bg-zinc-900 rounded-xl p-2 text-center">          <span class="text-zinc-400 text-[10px] sm:text-xs">Familles</span><br><span class="font-medium text-sm sm:text-base">${metrics.families.length}</span>        </div>        <div class="bg-zinc-900 rounded-xl p-2 text-center">          <span class="text-zinc-400 text-[10px] sm:text-xs">Locuteurs</span><br><span class="font-medium text-sm sm:text-base">${(totalSpeakers = metrics.totalSpeakers) >= 1000000 ? Math.round(totalSpeakers / 1000000) + 'M' : Math.round(totalSpeakers / 1000) + 'k'}</span>        </div>      </div>      <div class="mt-4 flex flex-col sm:flex-row gap-2">        <button onclick="addFusedLanguageToList('${lang.id}')"                class="w-full sm:flex-1 py-2.5 sm:py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl font-medium">Ajouter au catalogue</button>        <button onclick="performProprosBuild()"                class="w-full sm:flex-1 py-2.5 sm:py-2 text-xs bg-zinc-800 hover:bg-zinc-700 rounded-3xl">🔄 Reconstruire</button>      </div>    `;    resultBox.innerHTML = html;
    window.lastFusedLanguage = lang;
    // Scroll to result
    setTimeout(() => {
      document.getElementById('propros-section').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }, 500);
}
function addFusedLanguageToList(fusedId) {  if (!window.lastFusedLanguage) return;
  const fused = window.lastFusedLanguage;  coreLanguages.unshift(fused);  renderLanguages(coreLanguages);  populateCompareSelects();  populateFusionSelector();
  const targetBox = (fused.name && fused.name.includes('Propros'))    ? document.getElementById('propros-result')    : document.getElementById('fusion-result');  if (targetBox) {    targetBox.innerHTML += `      <div class="mt-4 text-center text-xs bg-zinc-800/70 text-zinc-300 py-2 rounded-2xl">        ✅ Langue "${fused.name}" ajoutée au catalogue !      </div>    `;  }  setTimeout(() => {    document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });  }, 800);}
// Boot the app
window.onload = init;



