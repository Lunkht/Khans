// Khans - Complete JavaScript for Khansn Languages Explorer + Similarity Algorithm

// === CORE DATA: 26 languages with lexical data for similarity algorithm ===
const coreLanguages = [
  { id: 1, name: "Swahili", iso: "sw", family: "Niger-Congo", subfamily: "Bantu", region: "East Khans", countries: ["Tanzania", "Kenya", "Uganda", "DRC", "Rwanda"], speakers: 200000000, script: "Latin", hello: "Jambo", water: "Maji", mother: "Mama", one: "Moja", two: "Mbili", three: "Tatu" },
  { id: 2, name: "Hausa", iso: "ha", family: "Afroasiatic", subfamily: "Chadic", region: "West Khans", countries: ["Nigeria", "Niger"], speakers: 80000000, script: "Latin", hello: "Sannu", water: "Ruwa", mother: "Uwa", one: "Daya", two: "Biyu", three: "Uku" },
  { id: 3, name: "Yoruba", iso: "yo", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Khans", countries: ["Nigeria", "Benin"], speakers: 50000000, script: "Latin", hello: "Ẹnlẹ", water: "Omi", mother: "Ìyá", one: "Ọkan", two: "Èjì", three: "Ẹta" },
  { id: 4, name: "Igbo", iso: "ig", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Khans", countries: ["Nigeria"], speakers: 30000000, script: "Latin", hello: "Kedu", water: "Mmiri", mother: "Nne", one: "Otu", two: "Abụọ", three: "Atọ" },
  { id: 5, name: "Amharic", iso: "am", family: "Afroasiatic", subfamily: "Semitic", region: "East Khans", countries: ["Ethiopia"], speakers: 57000000, script: "Ge'ez", hello: "Selam", water: "Waha", mother: "Inat", one: "And", two: "Hulet", three: "Sost" },
  { id: 6, name: "Oromo", iso: "om", family: "Afroasiatic", subfamily: "Cushitic", region: "East Khans", countries: ["Ethiopia", "Kenya"], speakers: 40000000, script: "Latin", hello: "Akkam", water: "Bishaan", mother: "Haaɗa", one: "Tokko", two: "Lama", three: "Sadii" },
  { id: 7, name: "Zulu", iso: "zu", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Khans", countries: ["South Khans"], speakers: 28000000, script: "Latin", hello: "Sawubona", water: "Amanzi", mother: "Umama", one: "Kunye", two: "Kubili", three: "Kuthathu" },
  { id: 8, name: "Xhosa", iso: "xh", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Khans", countries: ["South Khans"], speakers: 19000000, script: "Latin", hello: "Molo", water: "Amanzi", mother: "Umama", one: "Kunye", two: "Kubini", three: "Kuthathu" },
  { id: 9, name: "Arabic", iso: "ar", family: "Afroasiatic", subfamily: "Semitic", region: "North Khans", countries: ["Morocco", "Algeria", "Egypt", "Tunisia"], speakers: 300000000, script: "Arabic", hello: "Marhaba", water: "Ma", mother: "Umm", one: "Wahid", two: "Ithnan", three: "Thalatha" },
  { id: 10, name: "Berber", iso: "ber", family: "Afroasiatic", subfamily: "Berber", region: "North Khans", countries: ["Morocco", "Algeria"], speakers: 15000000, script: "Tifinagh", hello: "Azul", water: "Aman", mother: "Imma", one: "Yiwen", two: "Sin", three: "Krad" },
  { id: 11, name: "Somali", iso: "so", family: "Afroasiatic", subfamily: "Cushitic", region: "Horn of Khans", countries: ["Somalia", "Ethiopia"], speakers: 22000000, script: "Latin", hello: "Salaam", water: "Biyo", mother: "Hooyo", one: "Kow", two: "Laba", three: "Saddex" },
  { id: 12, name: "Kinyarwanda", iso: "rw", family: "Niger-Congo", subfamily: "Bantu", region: "East Khans", countries: ["Rwanda"], speakers: 15000000, script: "Latin", hello: "Muraho", water: "Amazi", mother: "Mama", one: "Rimwe", two: "Kabiri", three: "Gatatu" },
  { id: 13, name: "Lingala", iso: "ln", family: "Niger-Congo", subfamily: "Bantu", region: "Central Khans", countries: ["DRC", "Congo"], speakers: 45000000, script: "Latin", hello: "Mbote", water: "Mai", mother: "Mama", one: "Moko", two: "Mibale", three: "Misato" },
  { id: 14, name: "Bambara", iso: "bm", family: "Niger-Congo", subfamily: "Mande", region: "West Khans", countries: ["Mali"], speakers: 15000000, script: "Latin", hello: "I ni ce", water: "Ji", mother: "Ba", one: "Kelen", two: "Fila", three: "Saba" },
  { id: 15, name: "Wolof", iso: "wo", family: "Niger-Congo", subfamily: "Atlantic", region: "West Khans", countries: ["Senegal"], speakers: 10000000, script: "Latin", hello: "Salaam", water: "Ndox", mother: "Yaay", one: "Benn", two: "Ñaar", three: "Ñett" },
  { id: 16, name: "Fula", iso: "ff", family: "Niger-Congo", subfamily: "Atlantic", region: "West Khans", countries: ["Senegal", "Guinea", "Mali"], speakers: 40000000, script: "Latin", hello: "Salaam", water: "Ndiyam", mother: "Neene", one: "Gooto", two: "Didi", three: "Tati" },
  { id: 17, name: "Shona", iso: "sn", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Khans", countries: ["Zimbabwe"], speakers: 12000000, script: "Latin", hello: "Mhoro", water: "Mvura", mother: "Amai", one: "Poshi", two: "Piri", three: "Tatu" },
  { id: 18, name: "Setswana", iso: "tn", family: "Niger-Congo", subfamily: "Bantu", region: "Southern Khans", countries: ["Botswana", "South Khans"], speakers: 14000000, script: "Latin", hello: "Dumela", water: "Metsi", mother: "Mma", one: "Nngwe", two: "Pedi", three: "Tharo" },
  { id: 19, name: "Afrikaans", iso: "af", family: "Indo-European", subfamily: "Germanic", region: "Southern Khans", countries: ["South Khans"], speakers: 17000000, script: "Latin", hello: "Hallo", water: "Water", mother: "Ma", one: "Een", two: "Twee", three: "Drie" },
  { id: 20, name: "Malagasy", iso: "mg", family: "Austronesian", subfamily: "Malayo-Polynesian", region: "Madagascar", countries: ["Madagascar"], speakers: 25000000, script: "Latin", hello: "Salama", water: "Rano", mother: "Neny", one: "Iray", two: "Roa", three: "Telo" },
  { id: 21, name: "Tigrinya", iso: "ti", family: "Afroasiatic", subfamily: "Semitic", region: "Horn of Khans", countries: ["Eritrea", "Ethiopia"], speakers: 9000000, script: "Ge'ez", hello: "Selam", water: "May", mother: "Adey", one: "Hade", two: "Kelete", three: "Seleste" },
  { id: 22, name: "Kikongo", iso: "kg", family: "Niger-Congo", subfamily: "Bantu", region: "Central Khans", countries: ["DRC", "Angola"], speakers: 12000000, script: "Latin", hello: "Mbote", water: "Maza", mother: "Mama", one: "Mosi", two: "Zole", three: "Tatu" },
  { id: 23, name: "Akan", iso: "ak", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Khans", countries: ["Ghana"], speakers: 20000000, script: "Latin", hello: "Agoo", water: "Nsuo", mother: "Maame", one: "Baako", two: "Abien", three: "Abiasa" },
  { id: 24, name: "Ewe", iso: "ee", family: "Niger-Congo", subfamily: "Volta-Niger", region: "West Khans", countries: ["Ghana", "Togo"], speakers: 7000000, script: "Latin", hello: "Woezɔ", water: "Tsi", mother: "Nɔ", one: "Ɖeka", two: "Eve", three: "Etɔ" },
  { id: 25, name: "Sango", iso: "sg", family: "Niger-Congo", subfamily: "Ubangian", region: "Central Khans", countries: ["Central Khansn Republic"], speakers: 5000000, script: "Latin", hello: "Bara", water: "Ngû", mother: "Mâ", one: "Oko", two: "Use", three: "Otâ" },
  { id: 26, name: "Khoekhoe", iso: "naq", family: "Khoe-Kwadi", subfamily: "Khoisan", region: "Southern Khans", countries: ["Namibia"], speakers: 200000, script: "Latin", hello: "ǃGâi", water: "ǀÂb", mother: "ǁGûn", one: "ǀGui", two: "ǀGam", three: "ǀNona" }
];

// Full dataset (subset loaded from JSON for demo, but we use full file)
let fullLanguages = [];

// === UTILITY: Levenshtein Distance ===
function levenshtein(a, b) {
  if (!a || !b) return 100;
  a = a.toLowerCase().replace(/[^a-zà-ÿ]/g, '');
  b = b.toLowerCase().replace(/[^a-zà-ÿ]/g, '');
  if (a === b) return 0;
  
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[b.length][a.length];
}

// === Similarity Algorithm (Core of Khans) ===
function calculateSimilarity(lang1, lang2) {
  if (lang1.id === lang2.id) return 100;

  const keys = ['hello', 'water', 'mother', 'one', 'two', 'three'];
  let totalSim = 0;
  let matched = 0;

  keys.forEach(key => {
    const w1 = (lang1[key] || '').toLowerCase();
    const w2 = (lang2[key] || '').toLowerCase();
    if (!w1 || !w2) return;

    const dist = levenshtein(w1, w2);
    const maxLen = Math.max(w1.length, w2.length);
    const levSim = maxLen === 0 ? 0 : (1 - dist / maxLen) * 100;

    // Bonus if exact match
    const exactBonus = (w1 === w2) ? 40 : 0;
    
    totalSim += (levSim * 0.65 + exactBonus);
    matched++;
  });

  let avgLexSim = matched > 0 ? totalSim / matched : 0;

  // Family bonus
  let familyBonus = 0;
  if (lang1.family === lang2.family) {
    familyBonus = 22;
    if (lang1.subfamily === lang2.subfamily) familyBonus = 35;
  }

  // Region bonus
  let regionBonus = 0;
  if (lang1.region === lang2.region) regionBonus = 12;

  // Final score (capped)
  let score = Math.min(100, Math.round(avgLexSim * 0.7 + familyBonus + regionBonus));

  // Adjust for very close languages
  if (lang1.family === lang2.family && score < 45) score = Math.max(score, 48);

  return Math.max(0, Math.min(100, score));
}

// === Load Full Languages Dataset ===
async function loadFullLanguages() {
  try {
    const response = await fetch('data/languages_full.json');
    if (response.ok) {
      fullLanguages = await response.json();
      console.log('Loaded full dataset:', fullLanguages.length);
    } else {
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
  }
}

// === RENDER LANGUAGES GRID ===
let currentDisplayCount = 18;

function renderLanguages(langs = coreLanguages) {
  const grid = document.getElementById('languages-grid');
  grid.innerHTML = '';

  const toShow = langs.slice(0, currentDisplayCount);

  toShow.forEach(lang => {
    const card = document.createElement('div');
    card.className = `lang-card bg-zinc-900 border border-zinc-800 hover:border-zinc-600/40 rounded-3xl p-4 cursor-pointer flex flex-col`;
    
    const speakerStr = lang.speakers ? 
      (lang.speakers >= 1000000 ? Math.round(lang.speakers/1000000) + 'M' : (lang.speakers/1000) + 'k') : '—';

    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div>
          <div class="font-semibold text-lg leading-tight">${lang.name}</div>
          <div class="flex items-center gap-x-2 mt-1">
            <span class="font-mono text-xs text-zinc-300 bg-zinc-950 px-2 py-px rounded-xl">${lang.iso}</span>
            <span class="text-[10px] px-1.5 py-px rounded-xl bg-zinc-800 text-zinc-400">${lang.family}</span>
          </div>
        </div>
        <div class="text-right">
          <div class="text-xs text-zinc-400">${speakerStr}</div>
        </div>
      </div>

      <div class="mt-auto pt-4 flex items-center justify-between text-xs">
        <div class="flex items-center gap-x-1.5 text-zinc-400">
          <i class="fa-solid fa-globe text-xs"></i>
          <span class="font-medium">${lang.region}</span>
        </div>
        
        <div onclick="event.stopImmediatePropagation(); showLanguageDetail(${lang.id});" 
             class="text-zinc-300 hover:text-white px-2 py-1 transition-colors text-xs flex items-center gap-x-1">
          <span>voir</span> <i class="fa-solid fa-arrow-right text-xs"></i>
        </div>
      </div>
    `;

    card.onclick = () => showLanguageDetail(lang.id);
    grid.appendChild(card);
  });

  // Update button text
  const btn = document.getElementById('show-more-text');
  if (btn) btn.textContent = (toShow.length >= langs.length) ? "Toutes les langues affichées" : "Afficher plus de langues";
}

function filterLanguages() {
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const family = document.getElementById('family-filter').value;
  const region = document.getElementById('region-filter').value;

  const filtered = coreLanguages.filter(lang => {
    const matchSearch = !search || lang.name.toLowerCase().includes(search) || lang.iso.includes(search);
    const matchFamily = !family || lang.family === family;
    const matchRegion = !region || lang.region === region;
    return matchSearch && matchFamily && matchRegion;
  });

  currentDisplayCount = 18;
  renderLanguages(filtered);
}

function showMoreLanguages() {
  currentDisplayCount += 18;
  const search = document.getElementById('search-input').value.toLowerCase().trim();
  const family = document.getElementById('family-filter').value;
  const region = document.getElementById('region-filter').value;

  let filtered = coreLanguages;
  if (search || family || region) {
    filtered = coreLanguages.filter(lang => {
      const matchSearch = !search || lang.name.toLowerCase().includes(search);
      const matchFamily = !family || lang.family === family;
      const matchRegion = !region || lang.region === region;
      return matchSearch && matchFamily && matchRegion;
    });
  }

  renderLanguages(filtered);
}

// === LANGUAGE MODAL ===
let currentLangId = null;

function showLanguageDetail(id) {
  const lang = coreLanguages.find(l => l.id === id);
  if (!lang) return;

  currentLangId = id;

  document.getElementById('modal-lang-name').textContent = lang.name;
  document.getElementById('modal-lang-iso').textContent = lang.iso.toUpperCase();
  document.getElementById('modal-lang-family').textContent = lang.family;
  document.getElementById('modal-lang-region').textContent = lang.region;
  document.getElementById('modal-lang-countries').textContent = lang.countries.join(', ');
  document.getElementById('modal-lang-speakers').textContent = lang.speakers ? (lang.speakers / 1000000).toFixed(0) + ' millions' : '—';
  document.getElementById('modal-lang-script').textContent = lang.script;

  // Lexicon
  const lexiconDiv = document.getElementById('modal-lexicon');
  lexiconDiv.innerHTML = `
    <div class="flex justify-between bg-zinc-950 rounded-2xl p-3">
      <div><span class="text-zinc-400">Eau</span><br><span class="font-medium word-comparison">${lang.water}</span></div>
      <div class="text-right"><span class="text-zinc-400">Mère</span><br><span class="font-medium word-comparison">${lang.mother}</span></div>
    </div>
    <div class="flex justify-between bg-zinc-950 rounded-2xl p-3">
      <div><span class="text-zinc-400">Un</span><br><span class="font-medium word-comparison">${lang.one}</span></div>
      <div class="text-right"><span class="text-zinc-400">Deux</span><br><span class="font-medium word-comparison">${lang.two}</span></div>
    </div>
    <div class="col-span-2 flex justify-between bg-zinc-950 rounded-2xl p-3">
      <div><span class="text-zinc-400">Trois</span><br><span class="font-medium word-comparison">${lang.three}</span></div>
      <div class="text-right"><span class="text-zinc-400">Bonjour</span><br><span class="font-medium word-comparison">${lang.hello}</span></div>
    </div>
  `;

  document.getElementById('lang-modal').classList.remove('hidden');
  document.getElementById('lang-modal').classList.add('flex');
}

function hideLangModal() {
  const modal = document.getElementById('lang-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function compareWithLanguage() {
  hideLangModal();
  // scroll to comparison tool
  document.getElementById('similarites').scrollIntoView({ behavior: 'smooth' });
  
  setTimeout(() => {
    const lang = coreLanguages.find(l => l.id === currentLangId);
    if (!lang) return;

    const select1 = document.getElementById('compare-lang1');
    // Set the first select to this lang
    for (let i = 0; i < select1.options.length; i++) {
      if (select1.options[i].value == lang.id) {
        select1.selectedIndex = i;
        break;
      }
    }
    compareSelectedLanguages();
  }, 600);
}

// === COMPARISON TOOL ===
function populateCompareSelects() {
  const sel1 = document.getElementById('compare-lang1');
  const sel2 = document.getElementById('compare-lang2');
  sel1.innerHTML = '';
  sel2.innerHTML = '';

  coreLanguages.forEach(lang => {
    const opt1 = new Option(lang.name + ' (' + lang.iso + ')', lang.id);
    const opt2 = new Option(lang.name + ' (' + lang.iso + ')', lang.id);
    sel1.appendChild(opt1);
    sel2.appendChild(opt2);
  });

  // Default selection
  sel1.value = 1;
  sel2.value = 7; // Swahili vs Zulu
  compareSelectedLanguages();
}

function compareSelectedLanguages() {
  const id1 = parseInt(document.getElementById('compare-lang1').value);
  const id2 = parseInt(document.getElementById('compare-lang2').value);
  
  if (id1 === id2) {
    document.getElementById('comparison-result').innerHTML = `<div class="text-center text-sm text-zinc-400 py-3">Veuillez sélectionner deux langues différentes.</div>`;
    return;
  }

  const lang1 = coreLanguages.find(l => l.id === id1);
  const lang2 = coreLanguages.find(l => l.id === id2);

  const score = calculateSimilarity(lang1, lang2);

  let color = 'text-zinc-400';
  let label = 'Très proches';
  if (score < 45) { color = 'text-zinc-400'; label = 'Liens faibles'; }
  else if (score < 65) { color = 'text-zinc-400'; label = 'Similitudes modérées'; }

  const html = `
    <div class="flex justify-between items-center mb-2">
      <div class="font-medium">${lang1.name} ↔ ${lang2.name}</div>
      <div class="text-right">
        <span class="text-3xl font-bold ${color}">${score}</span>
        <span class="text-xs text-zinc-400">/100</span>
      </div>
    </div>
    
    <div class="mb-3">
      <div class="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div class="similarity-bar" style="width: ${score}%"></div>
      </div>
    </div>

    <div class="text-xs">
      <span class="font-medium ${color}">${label}</span>
      <div class="mt-1.5 grid grid-cols-3 gap-2">
        <div class="bg-zinc-900 p-2 rounded-2xl">
          <div class="text-[10px] text-zinc-400">Eau</div>
          <div class="font-medium">${lang1.water} — ${lang2.water}</div>
        </div>
        <div class="bg-zinc-900 p-2 rounded-2xl">
          <div class="text-[10px] text-zinc-400">Mère</div>
          <div class="font-medium">${lang1.mother} — ${lang2.mother}</div>
        </div>
        <div class="bg-zinc-900 p-2 rounded-2xl">
          <div class="text-[10px] text-zinc-400">Un / Deux</div>
          <div class="font-medium">${lang1.one} — ${lang2.two}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('comparison-result').innerHTML = html;
}

// === TOP SIMILARITIES ===
function renderTopSimilarities() {
  const container = document.getElementById('top-similarities');
  container.innerHTML = '';

  const pairs = [];
  for (let i = 0; i < coreLanguages.length; i++) {
    for (let j = i + 1; j < coreLanguages.length; j++) {
      const score = calculateSimilarity(coreLanguages[i], coreLanguages[j]);
      if (score > 50) {
        pairs.push({ l1: coreLanguages[i], l2: coreLanguages[j], score });
      }
    }
  }

  // Sort by score
  pairs.sort((a, b) => b.score - a.score);
  const top = pairs.slice(0, 6);

  top.forEach(pair => {
    const div = document.createElement('div');
    div.className = 'bg-zinc-900 border border-zinc-800 hover:border-zinc-900 rounded-2xl px-4 py-3 flex items-center justify-between text-sm cursor-pointer';
    div.innerHTML = `
      <div class="flex items-center gap-x-3">
        <div class="font-medium">${pair.l1.name}</div>
        <i class="fa-solid fa-arrow-right text-xs text-zinc-400"></i>
        <div class="font-medium">${pair.l2.name}</div>
      </div>
      <div class="flex items-center gap-x-3">
        <div class="font-mono font-bold text-xl ${pair.score > 75 ? 'text-zinc-300' : 'text-zinc-400'}">${pair.score}</div>
        <div onclick="event.stopImmediatePropagation(); quickCompare(${pair.l1.id}, ${pair.l2.id})" class="text-xs px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-2xl">Comparer</div>
      </div>
    `;
    div.onclick = () => {
      document.getElementById('compare-lang1').value = pair.l1.id;
      document.getElementById('compare-lang2').value = pair.l2.id;
      compareSelectedLanguages();
      document.getElementById('similarites').scrollIntoView({ behavior: "smooth" });
    };
    container.appendChild(div);
  });
}

function quickCompare(id1, id2) {
  document.getElementById('compare-lang1').value = id1;
  document.getElementById('compare-lang2').value = id2;
  compareSelectedLanguages();
  document.getElementById('similarites').scrollIntoView({ behavior: "smooth" });
}

// === DEMO RECALCULATE ===
function runSimilarityDemo() {
  const container = document.getElementById('top-similarities');
  container.innerHTML = `<div class="text-center py-6 text-sm text-zinc-300"><i class="fa-solid fa-sync fa-spin mr-2"></i> Recalcul des similarités...</div>`;

  setTimeout(() => {
    renderTopSimilarities();
  }, 900);
}

// === ALGORITHM DETAILS MODAL ===
function showAlgorithmDetails() {
  const modalHTML = `
    <div onclick="this.remove()" class="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4">
      <div onclick="event.stopImmediatePropagation()" class="bg-zinc-900 max-w-2xl w-full rounded-3xl border border-zinc-700 overflow-hidden">
        <div class="p-6">
          <div class="flex justify-between">
            <div>
              <div class="font-semibold">Algorithme de reconnaissance de similitudes</div>
              <div class="text-xs text-zinc-400">Implémentation en JavaScript (client-side)</div>
            </div>
            <button onclick="event.target.closest('.fixed').remove()" class="text-xl text-zinc-400 hover:text-white">&times;</button>
          </div>

          <div class="mt-6 text-sm">
            <div class="font-medium mb-2">1. Similarité lexicale (Levenshtein)</div>
            <div class="font-mono bg-zinc-950 p-3 rounded-2xl text-xs">
              levSim(word1, word2) = 1 - (distance / maxLen)
            </div>
            
            <div class="mt-5 font-medium mb-2">2. Score final</div>
            <div class="font-mono bg-zinc-950 p-3 rounded-2xl text-xs">
              score = (0.70 × avgLexSim) + familyBonus + regionBonus<br>
              familyBonus = 22–35 (selon famille + sous-famille)<br>
              regionBonus = 12
            </div>
            
            <div class="mt-4 text-xs text-zinc-400">
              L'algorithme est simplifié pour le web mais reproduit les principes classiques de la linguistique historique (comparative method).
            </div>
          </div>
        </div>
        <div class="bg-zinc-950 px-6 py-4 text-xs flex justify-between items-center border-t border-zinc-800">
          <div>Version : v1.2 • 2026</div>
          <div onclick="event.target.closest('.fixed').remove()" class="cursor-pointer px-3 py-1 text-zinc-300">Fermer</div>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// === DOWNLOAD FUNCTIONS ===
function downloadJSON() {
  const data = JSON.stringify(coreLanguages, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'afrilang_core_lexicon.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadCSV() {
  let csv = 'id,name,iso,family,region,speakers,water,mother,one,two,three\n';
  coreLanguages.forEach(l => {
    csv += `${l.id},"${l.name}",${l.iso},${l.family},${l.region},${l.speakers},"${l.water}","${l.mother}","${l.one}","${l.two}","${l.three}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'afrilang_languages.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// === ADD LANGUAGE MODAL (Demo) ===
function showAddLanguageModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/70 z-[200] flex items-center justify-center p-4';
  modal.innerHTML = `
    <div onclick="event.stopImmediatePropagation()" class="bg-zinc-900 border border-zinc-700 w-full max-w-md rounded-3xl p-6">
      <div class="flex justify-between mb-4">
        <div class="font-semibold">Ajouter une nouvelle langue</div>
        <button onclick="this.closest('.fixed').remove()" class="text-zinc-400">&times;</button>
      </div>
      
      <div class="space-y-3 text-sm">
        <div>
          <label class="block text-xs text-zinc-400 mb-1">Nom de la langue</label>
          <input id="new-name" value="Wolof (nouveau)" class="w-full bg-zinc-950 border border-zinc-700 px-4 py-2.5 rounded-2xl">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Code ISO</label>
            <input id="new-iso" value="wo2" class="w-full bg-zinc-950 border border-zinc-700 px-4 py-2.5 rounded-2xl">
          </div>
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Famille</label>
            <input id="new-family" value="Niger-Congo" class="w-full bg-zinc-950 border border-zinc-700 px-4 py-2.5 rounded-2xl">
          </div>
        </div>
        <div class="text-[10px] text-zinc-300">Cette fonctionnalité est une démonstration. Dans une vraie version, les données seraient validées et ajoutées à la base.</div>
      </div>
      
      <div class="mt-6 flex gap-x-3">
        <button onclick="addNewLanguage(this)" class="flex-1 bg-zinc-600 hover:bg-zinc-700 text-white rounded-3xl py-3 text-sm font-medium">Ajouter à la liste</button>
        <button onclick="this.closest('.fixed').remove()" class="flex-1 border border-zinc-700 hover:bg-zinc-800 rounded-3xl py-3 text-sm">Annuler</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function addNewLanguage(btn) {
  const name = document.getElementById('new-name').value || 'Nouvelle langue';
  const iso = document.getElementById('new-iso').value || 'xxx';
  const family = document.getElementById('new-family').value || 'Niger-Congo';

  const newLang = {
    id: Date.now(),
    name: name,
    iso: iso,
    family: family,
    subfamily: "—",
    region: "À définir",
    countries: ["À déterminer"],
    speakers: 0,
    script: "Latin",
    hello: "—",
    water: "—",
    mother: "—",
    one: "—",
    two: "—",
    three: "—"
  };

  coreLanguages.unshift(newLang);
  
  // Refresh grid
  document.querySelector('#languages-grid').innerHTML = '';
  currentDisplayCount = 18;
  renderLanguages(coreLanguages);
  
  // Refresh compare selects
  populateCompareSelects();
  
  btn.closest('.fixed').remove();
  
  // Show success toast
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-700 text-zinc-300 px-5 py-2 rounded-3xl text-sm flex items-center gap-x-2';
  toast.innerHTML = `<i class="fa-solid fa-check"></i> <span>Langue ajoutée avec succès !</span>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}

// === INITIALIZATION ===
async function init() {
  await loadFullLanguages();

  // Render languages
  renderLanguages(coreLanguages);

  // Populate comparison tool
  populateCompareSelects();

  // Render top similarities
  renderTopSimilarities();

  // Search & filters
  const searchInput = document.getElementById('search-input');
  const familyFilter = document.getElementById('family-filter');
  const regionFilter = document.getElementById('region-filter');

  // Keyboard shortcut
  document.addEventListener('keydown', function(e) {
    if (e.key === "/" && document.activeElement.tagName === "BODY") {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Initial message
  console.log('%c[Khans] Site et algorithme de similarité initialisés avec succès.', 'color:#27272a');
}

// Boot the app
window.onload = init;