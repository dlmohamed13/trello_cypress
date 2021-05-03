/// <reference types="cypress" />

describe('User Should be to sucessfully perform task operations', () => {
  
  before('Setting State', () => {
    cy.request({
      method: 'POST',
      url: '/reset',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    });
  });
  
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: '/boards',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      },
      body: {'name': 'List Board'}
    }).then((res) => {
      cy.request({
        method: 'POST',
        url: '/api/lists',
        headers: {
          'Accept': 'application/json, text/plain, */*'
        },
        body: {'boardId': res.body.id, 'title': 'New List '}
      });
      cy.visit('/board/' + res.body.id);
      //+ res.body.id
    });
  });

  it('Should be able to create a task', () => {
    cy.get('[data-cy=new-task]').click();
    cy.get('[data-cy=task-input]').type('Some Task {enter}');
    
  });

  it('Should be able to mark task as completed and not completed', () => {
    cy.get('[data-cy=new-task]').click();
    cy.get('[data-cy=task-input]').type('Some Task {enter}');
    cy.get('[data-cy=task-done]').click();
    cy.get('.Task_title.completed').should('be.visible');
    cy.get('[data-cy=task-done]').click();
    cy.get('.Task_title.completed').should('not.exist');
  });
});
