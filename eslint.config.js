const js = require('@eslint/js');
const globals = require('globals');

// Flat config for the plugin source. The gulp `eslint` task lints src/js only.
// The source is a UMD/IIFE jQuery plugin that runs in the browser and exposes
// a handful of third-party globals (jQuery, jsPDF, html2canvas).
module.exports = [
  {
    files: ['src/js/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        module: 'readonly',
        require: 'readonly',
        jQuery: 'readonly',
        html2canvas: 'readonly',
        jsPDF: 'readonly'
      }
    },
    rules: {
      // `undefined` is passed as the last factory arg on purpose; don't flag
      // unused function arguments, but keep catching genuinely unused vars.
      'no-unused-vars': ['error', { args: 'none' }]
    }
  }
];
