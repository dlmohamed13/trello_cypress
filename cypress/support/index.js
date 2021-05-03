// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { Runnable } from 'mocha';

const addcontext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, Runnable) => {
  if (test.state === 'failed') {
    const screenshot = `${Cypress.config('screenshotsFolder')}/${
      Cypress.spec.name
    }/${Runnable.parent.title} -- ${test.title} (failed).png`;
    const video = `${Cypress.config('videosFolder')}/${Cypress.spec.name}.mp4`;
    cy.log(video);
    addcontext({ test }, screenshot);
    addcontext({ test }, video);
  }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');

