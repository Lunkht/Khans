// =====================================================
// === EXTENDED LANGUAGES DATA LOADING ===
// =====================================================
async function loadExtendedLanguages() {
  try {
    const response = await fetch('data/languages_extended.json');
    if (response.ok) {
      const data = await response.json();
      extendedLanguages = data;
      // Assign flags
      const flagMap = {
        101: '🇨🇮', 102: '🇨🇮', 103: '🇨🇮', 104: '🇨🇮', 105: '🇨🇮',
        106: '🇨🇮', 107: '🇨🇮', 108: '🇨🇮', 109: '🇨🇮', 110: '🇨🇮',
        111: '🇬🇳', 112: '🇬🇳', 113: '🇬🇳', 114: '🇬🇳', 115: '🇬🇳', 116: '🇬🇳',
        117: '🇧🇫', 118: '🇧🇫', 119: '🇧🇫', 120: '🇧🇫', 121: '🇧🇫', 122: '🇧🇫', 123: '🇧🇫', 124: '🇧🇫',
        125: '🇧🇯', 126: '🇳🇪', 127: '🇹🇬', 128: '🇹🇬', 129: '🇧🇯', 130: '🇹🇬'
      };
      Object.assign(languageFlags, flagMap);
      // Add to coreLanguages for fusion/propros/comparison
      data.forEach(lang => {
        if (!coreLanguages.find(l => l.id === lang.id)) {
          coreLanguages.push(lang);
        }
      });
      console.log('Loaded extended languages:', data.length);
    }
  } catch (e) {
    console.warn('Extended languages not loaded:', e.message);
  }
}

// =====================================================
// === ALPHABET CREATOR ALGORITHM ===
// =====================================================

const SCRIPTS = {
  latin: { name: 'Latin', desc: 'Alphabet latin standard + extensions africaines' },
  nko: { name: 'N\'Ko', desc: 'Écriture ouest-africaine (Manding)' },
  arabic: { name: 'Arabe (Ajami)', desc: 'Adaptation de l\'alphabet arabe' },
  gegez: { name: 'Gé\'ez', desc: 'Syllabaire éthiopien' },
  tifinagh: { name: 'Tifinagh', desc: 'Alphabet berbère traditionnel' },
  osmanya: { name: 'Osmanya', desc: 'Écriture somalie' },
  adlam: { name: 'Adlam', desc: 'Écriture moderne peule' },
  vai: { name: 'Vaï', desc: 'Syllabaire libérien' },
  bamum: { name: 'Bamum', desc: 'Écriture camerounaise' }
};

// Common consonant-vowel patterns for African languages
const AFRICAN_PHONEME_PATTERNS = {
  vowels: ['a', 'e', 'ɛ', 'i', 'o', 'ɔ', 'u', 'ə', 'ɨ', 'ʊ', 'ɑ', 'æ'],
  consonants: ['p', 'b', 't', 'd', 'k', 'g', 'kp', 'gb', 'm', 'n', 'ɲ', 'ŋ',
    'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'h', 'l', 'r', 'w', 'j',
    'ch', 'mb', 'nd', 'ng', 'nk', 'nt', 'ny', 'nz', 
    'ɓ', 'ɗ', 'ts', 'dz', 'ʔ', 'gw', 'kw']
};

function extractCharacterFrequency(text) {
  const freq = {};
  for (const ch of text.toLowerCase()) {
    if (/[a-z\u00E0-\u024F\u0250-\u02AF\u0300-\u036F\u1DC0-\u1DFF]/.test(ch) || ch === ' ') {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  }
  return freq;
}

function extractNgrams(text, n) {
  const words = text.toLowerCase().split(/\s+/);
  const ngrams = {};
  for (const word of words) {
    for (let i = 0; i <= word.length - n; i++) {
      const ng = word.substring(i, i + n);
      ngrams[ng] = (ngrams[ng] || 0) + 1;
    }
  }
  return ngrams;
}

function getScriptRecommendation(language) {
  const region = (language.region || '').toLowerCase();
  const family = (language.family || '').toLowerCase();
  const countries = (language.countries || []).join(' ').toLowerCase();

  // Default recommendations
  let recommendations = ['latin'];

  // Sahel / West Africa Manding
  if (countries.includes('mali') || countries.includes('guinea') || 
      countries.includes("cote d'ivoire") || countries.includes('burkina')) {
    if (family.includes('mande')) {
      recommendations.push('nko');
    }
  }

  // Fula / Pular regions
  if (language.name.toLowerCase().includes('ful') || language.name.toLowerCase().includes('pular') ||
      language.name.toLowerCase().includes('peul')) {
    recommendations.push('adlam');
  }

  // North Africa / Berber
  if (family.includes('berber') || countries.includes('morocco') || countries.includes('algeria')) {
    recommendations.push('tifinagh');
  }

  // Horn of Africa
  if (countries.includes('ethiopia') || countries.includes('eritrea')) {
    if (family.includes('semitic') || family.includes('cushitic')) {
      recommendations.push('gegez');
    }
  }

  // Arabic influenced
  if (family.includes('semitic') || countries.includes('egypt') || 
      countries.includes('sudan') || countries.includes('mauritania')) {
    recommendations.push('arabic');
  }

  // Somalia
  if (countries.includes('somalia')) {
    recommendations.push('osmanya');
  }

  // West Africa / Liberia
  if (countries.includes('liberia') || countries.includes('sierra leone')) {
    if (family.includes('mande')) {
      recommendations.push('vai');
    }
  }

  return recommendations;
}

function buildPhonemeInventory(language) {
  const keys = ['hello', 'water', 'mother', 'one', 'two', 'three', 'sun', 'moon', 'fire',
    'earth', 'man', 'woman', 'eat', 'sleep', 'big', 'good', 'house', 'tree', 'fish'];
  
  let allText = '';
  const wordSet = new Set();
  keys.forEach(k => {
    if (language[k] && typeof language[k] === 'string') {
      const word = language[k].toLowerCase().trim();
      allText += word + ' ';
      wordSet.add(word);
    }
  });

  // Character frequency
  const charFreq = extractCharacterFrequency(allText);
  const sortedChars = Object.entries(charFreq)
    .filter(([ch]) => ch !== ' ')
    .sort((a, b) => b[1] - a[1]);

  // Detect phonemes via bigrams + single chars
  const bigrams = extractNgrams(allText, 2);
  const sortedBigrams = Object.entries(bigrams)
    .filter(([bg]) => !bg.includes(' '))
    .sort((a, b) => b[1] - a[1]);

  // Detect common syllable patterns
  const words = Array.from(wordSet);
  const syllablePatterns = {};
  words.forEach(w => {
    const parts = w.split(/[-\s]/);
    parts.forEach(p => {
      if (p.length >= 2) {
        // Detect CV patterns
        const cvMatch = p.match(/^([bcdfghjklmnpqrstvwxz])([aeiouáàâãéèêíìîóòôõúùûɛɔɨʊɓɗ])/i);
        if (cvMatch) {
          const pat = cvMatch[0];
          syllablePatterns[pat] = (syllablePatterns[pat] || 0) + 1;
        }
      }
    });
  });

  return {
    charFrequency: sortedChars,
    bigramFrequency: sortedBigrams.slice(0, 15),
    totalChars: sortedChars.reduce((sum, [, c]) => sum + c, 0),
    uniqueChars: sortedChars.length,
    words: words,
    wordCount: words.length,
    syllablePatterns: Object.entries(syllablePatterns).sort((a, b) => b[1] - a[1]).slice(0, 10)
  };
}

function proposeGraphemeToPhoneme(language, phonemeData) {
  const mappings = [];
  const seen = new Set();

  phonemeData.charFrequency.forEach(([ch, freq]) => {
    if (seen.has(ch) || ch === ' ') return;
    seen.add(ch);

    const pct = ((freq / phonemeData.totalChars) * 100).toFixed(1);
    
    // Determine phoneme class
    let type = 'consonne';
    if (/[aeiouɛɔəɨʊɑæàáâãéèêíìîóòôõúùû]/.test(ch)) {
      type = 'voyelle';
    } else if (/[0-9]/.test(ch)) {
      type = 'nombre';
    } else {
      type = 'consonne';
    }

    // Find example word
    let example = '';
    for (const w of phonemeData.words) {
      if (w.includes(ch)) {
        example = w;
        break;
      }
    }

    mappings.push({
      grapheme: ch,
      type: type,
      frequency: pct + '%',
      example: example,
      notes: type === 'voyelle' ? 'Voyelle orale' : 'Consonne'
    });
  });

  return {
    graphemeCount: mappings.length,
    mappings: mappings,
    suggestedScript: getScriptRecommendation(language)
  };
}

function generateAlphabet(language) {
  const phonemeData = buildPhonemeInventory(language);
  const graphemeInfo = proposeGraphemeToPhoneme(language, phonemeData);
  const scriptRecs = getScriptRecommendation(language);

  // Latin alphabet proposal
  const latinAlphabet = graphemeInfo.mappings.map(m => ({
    char: m.grapheme,
    name: getCharacterName(m.grapheme),
    type: m.type,
    example: m.example,
    notes: m.type === 'voyelle' ? 'Voyelle' : 'Consonne'
  }));

  // Generate a proposed writing system description
  const vowels = latinAlphabet.filter(c => c.type === 'voyelle');
  const consonants = latinAlphabet.filter(c => c.type === 'consonne');

  return {
    language: language.name,
    iso: language.iso,
    currentScript: language.script || 'Non défini',
    recommendedScripts: scriptRecs.map(s => SCRIPTS[s] || { name: s, desc: '' }),
    phonemeAnalysis: {
      totalChars: phonemeData.totalChars,
      uniqueChars: phonemeData.uniqueChars,
      wordCount: phonemeData.wordCount,
      topBigrams: phonemeData.bigramFrequency.slice(0, 8),
      syllablePatterns: phonemeData.syllablePatterns.slice(0, 6)
    },
    alphabet: {
      vowels: vowels.map(v => ({ ...v, name: getCharacterName(v.char) })),
      consonants: consonants.map(c => ({ ...c, name: getCharacterName(c.char) })),
      total: vowels.length + consonants.length
    },
    graphemeDetails: graphemeInfo,
    hasData: phonemeData.wordCount > 0
  };
}

function getCharacterName(ch) {
  const names = {
    'a': 'a', 'b': 'bé', 'c': 'cé', 'd': 'dé', 'e': 'e', 'f': 'fe', 'g': 'gué',
    'h': 'ache', 'i': 'i', 'j': 'ji', 'k': 'ka', 'l': 'le', 'm': 'me', 'n': 'ne',
    'o': 'o', 'p': 'pé', 'q': 'qu', 'r': 're', 's': 'se', 't': 'té', 'u': 'u',
    'v': 'vé', 'w': 'double vé', 'x': 'ixe', 'y': 'i grec', 'z': 'zède',
    'ɛ': 'epsilon', 'ɔ': 'open o', 'ə': 'schwa', 'ɨ': 'i barré', 'ʊ': 'upsilon',
    'ŋ': 'eng', 'ɲ': 'n palatal', 'ʃ': 'ech', 'ʒ': 'ezh',
    'à': 'a accent grave', 'á': 'a accent aigu', 'â': 'a circonflexe',
    'é': 'e accent aigu', 'è': 'e accent grave', 'ê': 'e circonflexe',
    'ì': 'i accent grave', 'í': 'i accent aigu', 'î': 'i circonflexe',
    'ó': 'o accent aigu', 'ò': 'o accent grave', 'ô': 'o circonflexe',
    'ù': 'u accent grave', 'ú': 'u accent aigu', 'û': 'u circonflexe',
    'ã': 'a tilde', 'õ': 'o tilde', 'ñ': 'n tilde',
    'ɓ': 'b hameçon', 'ɗ': 'd hameçon', 'ƙ': 'k hameçon', 'ƴ': 'y hameçon',
    'kp': 'kp', 'gb': 'gb', 'mb': 'mb', 'nd': 'nd', 'ng': 'ng', 'nk': 'nk',
    'nt': 'nt', 'ny': 'ny', 'nz': 'nz', 'gw': 'gw', 'kw': 'kw', 'ts': 'ts', 'dz': 'dz'
  };
  return names[ch] || ch;
}

// UI function: display alphabet proposal
function renderAlphabetProposal(result, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!result.hasData) {
    container.innerHTML = `
      <div class="text-center py-8 text-zinc-400">
        <i class="fa-solid fa-font text-4xl mb-3 opacity-30"></i>
        <div class="text-sm">Données lexicales insuffisantes pour proposer un alphabet</div>
        <div class="text-xs mt-1">Ajoutez des mots à la langue pour l'analyse phonémique</div>
      </div>`;
    return;
  }

  const { alphabet, phonemeAnalysis, recommendedScripts, currentScript, language } = result;

  // Build vowel table
  let vowelHTML = '';
  alphabet.vowels.forEach(v => {
    vowelHTML += `
      <div class="bg-zinc-800/50 rounded-xl px-3 py-2 text-center">
        <div class="text-xl font-bold text-zinc-200">${v.char}</div>
        <div class="text-[10px] text-zinc-400">${v.name}</div>
        <div class="text-[10px] text-zinc-500">${v.example || '—'}</div>
      </div>`;
  });

  // Build consonant table
  let consHTML = '';
  alphabet.consonants.forEach(c => {
    consHTML += `
      <div class="bg-zinc-800/50 rounded-xl px-3 py-2 text-center">
        <div class="text-xl font-bold text-zinc-200">${c.char}</div>
        <div class="text-[10px] text-zinc-400">${c.name}</div>
        <div class="text-[10px] text-zinc-500">${c.example || '—'}</div>
      </div>`;
  });

  // Script recommendations
  let scriptHTML = '';
  recommendedScripts.forEach(s => {
    scriptHTML += `<span class="px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-xl text-xs">${s.name}</span>`;
  });

  // Bigram / syllable patterns
  let bigramHTML = '';
  phonemeAnalysis.topBigrams.forEach(([bg, cnt]) => {
    bigramHTML += `<span class="px-2 py-0.5 bg-zinc-800 rounded text-xs font-mono">${bg}</span>`;
  });

  let syllableHTML = '';
  phonemeAnalysis.syllablePatterns.forEach(([pat, cnt]) => {
    syllableHTML += `<span class="px-2 py-0.5 bg-zinc-800 rounded text-xs font-mono">${pat}</span>`;
  });

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
      <div class="min-w-0">
        <div class="text-zinc-300 text-xs sm:text-sm font-medium flex items-center gap-2">
          <i class="fa-solid fa-font"></i> PROPOSITION D'ALPHABET
        </div>
        <div class="text-xl sm:text-2xl font-semibold">${language}</div>
        <div class="font-mono text-xs mt-0.5 text-zinc-400">${result.iso} • Écriture actuelle: ${currentScript}</div>
      </div>
      <div class="text-left sm:text-right shrink-0">
        <div class="text-[10px] text-zinc-400">Scripts recommandés</div>
        <div class="flex flex-wrap gap-1 mt-1">${scriptHTML}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
      <div class="bg-zinc-900 border border-zinc-700/40 rounded-2xl p-3">
        <div class="text-[10px] uppercase tracking-widest mb-2 text-zinc-400">Statistiques phonémiques</div>
        <div class="grid grid-cols-3 gap-2 text-center text-xs">
          <div><span class="text-zinc-400">Caractères</span><br><span class="text-lg font-bold">${phonemeAnalysis.totalChars}</span></div>
          <div><span class="text-zinc-400">Uniques</span><br><span class="text-lg font-bold">${phonemeAnalysis.uniqueChars}</span></div>
          <div><span class="text-zinc-400">Mots</span><br><span class="text-lg font-bold">${phonemeAnalysis.wordCount}</span></div>
        </div>
        <div class="mt-2">
          <div class="text-[10px] text-zinc-400 mb-1">Bigrammes fréquents</div>
          <div class="flex flex-wrap gap-1">${bigramHTML}</div>
        </div>
        <div class="mt-2">
          <div class="text-[10px] text-zinc-400 mb-1">Syllabes CV courantes</div>
          <div class="flex flex-wrap gap-1">${syllableHTML}</div>
        </div>
      </div>

      <div class="bg-zinc-900 border border-zinc-700/40 rounded-2xl p-3">
        <div class="text-[10px] uppercase tracking-widest mb-2 text-zinc-400">Alphabet proposé (${alphabet.total} lettres)</div>
        <div class="mb-2">
          <div class="text-[10px] text-zinc-400 mb-1">Voyelles (${alphabet.vowels.length})</div>
          <div class="grid grid-cols-4 sm:grid-cols-5 gap-1">${vowelHTML}</div>
        </div>
        <div>
          <div class="text-[10px] text-zinc-400 mb-1">Consonnes (${alphabet.consonants.length})</div>
          <div class="grid grid-cols-4 sm:grid-cols-5 gap-1">${consHTML}</div>
        </div>
      </div>
    </div>

    <div class="text-xs text-zinc-500 text-center">
      Proposition générée par analyse phonémique automatique sur ${phonemeAnalysis.wordCount} mots du lexique de base.
    </div>
  `;
}

function performAlphabetAnalysis(languageId) {
  const lang = coreLanguages.find(l => l.id === languageId);
  if (!lang) {
    const container = document.getElementById('alphabet-result');
    if (container) container.innerHTML = `<div class="text-center text-zinc-400 py-8">Langue non trouvée</div>`;
    return;
  }

  const container = document.getElementById('alphabet-result');
  if (!container) return;

  container.innerHTML = `<div class="text-center py-8 text-zinc-300"><i class="fa-solid fa-font fa-spin mr-2"></i> Analyse phonémique en cours...</div>`;

  setTimeout(() => {
    const result = generateAlphabet(lang);
    renderAlphabetProposal(result, 'alphabet-result');
  }, 300);
}
