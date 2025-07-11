const input = document.getElementById('inputCode');
const output = document.getElementById('outputCode');
const inputCount = document.getElementById('inputCount');
const outputCount = document.getElementById('outputCount');
let currentLevel = 'advanced';

const obfuscationOptions = {
  basic: { compact: true, selfDefending: false },
  standard: { compact: true, controlFlowFlattening: true, stringArray: true },
  advanced: {
    compact: true,
    controlFlowFlattening: true,
    deadCodeInjection: true,
    stringArray: true,
    rotateStringArray: true,
    stringArrayEncoding: ['rc4'],
    selfDefending: true
  }
};

function setLevel(level) {
  currentLevel = level;
  ['basic', 'standard', 'advanced'].forEach(lvl => {
    document.getElementById(`level-${lvl}`).classList.remove('active');
  });
  document.getElementById(`level-${level}`).classList.add('active');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function updateCounters() {
  inputCount.textContent = `Original Code (${input.value.length} chars)`;
  outputCount.textContent = `Obfuscated Code (${output.value.length} chars)`;
}

function obfuscateCode() {
  try {
    const obfuscated = JavaScriptObfuscator.obfuscate(input.value, obfuscationOptions[currentLevel]).getObfuscatedCode();
    output.value = obfuscated;
    updateCounters();
  } catch (e) {
    output.value = '// ❌ Error obfuscating code:\n' + e.message;
  }
}

function copyOutput() {
  navigator.clipboard.writeText(output.value);
  alert('✅ Copied!');
}

function exportJS() {
  const blob = new Blob([output.value], { type: 'application/javascript' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'dawens-obfuscated.js';
  link.click();
}

function clearAll() {
  input.value = '';
  output.value = '';
  updateCounters();
}

input.addEventListener('input', updateCounters);
