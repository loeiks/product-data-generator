function toGreeklish(text) {
  if (!text) return "";

  const grCaps = stringToSet('ΑΆΒΓΔΕΈΖΗΉΘΙΊΪΚΛΜΝΞΟΌΠΡΣΤΥΎΫΦΧΨΩΏ');
  const grLetters = 'αάβγδεέζηήθιίϊΐκλμνξοόπρσςτυύϋΰφχψωώ';
  const engLetters = 'aavgdeezii.iiiiklmnxooprsstyyyyf..oo';

  let replacements = [
    { greek: 'αι', greeklish: 'ai' },
    { greek: 'αί', greeklish: 'ai' },
    { greek: 'οι', greeklish: 'oi' },
    { greek: 'οί', greeklish: 'oi' },
    { greek: 'ου', greeklish: 'ou' },
    { greek: 'ού', greeklish: 'ou' },
    { greek: 'ei', greeklish: 'ei' }, // Catching potential pre-existing latin
    { greek: 'ει', greeklish: 'ei' },
    { greek: 'εί', greeklish: 'ei' },
    { greek: 'αυ', fivi: 1 },
    { greek: 'αύ', fivi: 1 },
    { greek: 'ευ', fivi: 1 },
    { greek: 'εύ', fivi: 1 },
    { greek: 'ηυ', fivi: 1 },
    { greek: 'ηύ', fivi: 1 },
    { greek: 'ντ', greeklish: 'nt' },
    { greek: 'μπ', bi: 1 },
    { greek: 'τσ', greeklish: 'ts' },
    { greek: 'τς', greeklish: 'ts' },
    { greek: 'τζ', greeklish: 'tz' },
    { greek: 'γγ', greeklish: 'ng' },
    { greek: 'γκ', greeklish: 'gk' },
    { greek: 'θ', greeklish: 'th' },
    { greek: 'χ', greeklish: 'ch' },
    { greek: 'ψ', greeklish: 'ps' },
    { greek: 'γχ', greeklish: 'nch' },
    { greek: 'γξ', greeklish: 'nx' },
  ];

  // Map objects for quick lookup
  let replacementMap = {};
  replacements.forEach(r => replacementMap[r.greek] = r);

  // Add single letter replacements
  for (let i = 0; i < grLetters.length; i++) {
    let char = grLetters.charAt(i);
    if (!replacementMap[char]) {
      let r = { greek: char, greeklish: engLetters.charAt(i) };
      replacements.push(r);
      replacementMap[char] = r;
    }
  }

  // Create Regex expression sorted by length (longest matches first)
  const expression = new RegExp(
    replacements.map(r => r.greek).sort((a, b) => b.length - a.length).join('|'), 
    'gi'
  );

  const greekSet = stringToSet(grLetters);
  const viSet = stringToSet('αάβγδεέζηλιμνορυω');

  return text.replace(expression, function ($0, index) {
    const key = $0.toLowerCase();
    const replacement = replacementMap[key];

    if (!replacement) return $0;

    let result = "";
    if (replacement.bi) {
      // Logic for 'mp' vs 'b'
      const isInternal = (greekSet[text.charAt(index - 1)?.toLowerCase()] && greekSet[text.charAt(index + 2)?.toLowerCase()]);
      result = isInternal ? 'mp' : 'b';
    } else if (replacement.fivi) {
      // Logic for 'av/af', 'ev/ef'
      const c1 = replacementMap[key.charAt(0)].greeklish;
      const c2 = viSet[text.charAt(index + 2)?.toLowerCase()] ? 'v' : 'f';
      result = c1 + c2;
    } else {
      result = replacement.greeklish;
    }

    return fixCase(result, $0, text, index);
  });

  function fixCase(translated, original, fullText, index) {
    if (grCaps[original.charAt(0)]) {
      // Check if the whole word or next char is uppercase
      const nextChar = fullText.charAt(index + 1);
      if (original.length > 1 && grCaps[original.charAt(1)] || (nextChar && grCaps[nextChar])) {
        return translated.toUpperCase();
      } else {
        return translated.charAt(0).toUpperCase() + translated.substr(1);
      }
    }
    return translated;
  }

  function stringToSet(s) {
    let o = {};
    for (let i = 0; i < s.length; i++) o[s.charAt(i)] = 1;
    return o;
  }
}

// --- CLI HANDLING ---
// process.argv[2] grabs the first argument passed in the terminal
const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Please provide text as an argument. Example: node script.js 'Καλημέρα'");
} else {
  console.log(toGreeklish(input));
}