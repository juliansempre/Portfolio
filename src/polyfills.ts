/***************************************************************************************************
 * BROWSER POLYFILLS
 */

// This file includes polyfills needed by Angular and is loaded before the app.
// You can add your own extra polyfills to this file.

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */
// Importando bibliotecas para emular módulos Node.js no navegador
(window as any).global = window;
import 'crypto-browserify';
import 'stream-browserify';
import 'util';
import 'buffer';
