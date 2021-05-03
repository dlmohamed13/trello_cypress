/// <reference types="cypress" />

describe('User Should be to sucessfully perform list operations', () => {
  
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
      cy.visit('http://localhost:3000/board/' + res.body.id);
    });
  });

  it('Should be able to create a task', () => {});

  it('Should be able to delete a task ', () => {});

  it('Should be to edit task name', () => {});

  it('Should be able to mark task as completed', () => {});

  it('Should be able unmark task as completed', () => {});

});
