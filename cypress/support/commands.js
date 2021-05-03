// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getBoardID', (boardName) => {
  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      Accept: 'application/json'
    }
  }).then((response => {
    cy.wrap(response.body).each(board => {
      // cy.task('log', board);
      //expect(cy.wrap(board)).to.not.equal(undefined);
      if (cy.wrap(board['name']) != undefined)
      {
        cy.task('log', true);
        cy.task('log', boardName);
        cy.task('log', board['name']);
        cy.task('log', cy.wrap(board['name']));

        //expect(boardName.to.equal(cy.wrap(board['name'])));
        expect(cy.wrap(JSON.stringify(board['name']))).to.equal(boardName);
      }
    //  // else {
    //     cy.task('log', `Board Name: ${boardName} not in board: ${board['name']}`);  
    //   }
    });
  }));

}); 

Cypress.Commands.add('getBoardID', (boardName) => {
  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      Accept: 'application/json'
    }
  }).then((response => {
    cy.wrap(response.body).each(board => {
      // cy.task('log', board);
      //expect(cy.wrap(board)).to.not.equal(undefined);
      if (cy.wrap(board['name']) != undefined)
      {
        cy.task('log', true);
        cy.task('log', boardName);
        cy.task('log', board['name']);
        cy.task('log', cy.wrap(board['name']));

        //expect(boardName.to.equal(cy.wrap(board['name'])));
        expect(cy.wrap(JSON.stringify(board['name']))).to.equal(boardName);
      }
    //  // else {
    //     cy.task('log', `Board Name: ${boardName} not in board: ${board['name']}`);  
    //   }
    });
  }));

}); 