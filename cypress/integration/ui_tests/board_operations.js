/// <reference types="cypress" />

describe('User Should be to sucessfully perform board operations', () => {

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
    cy.visit('http://localhost:3000');
  });

  it('Should be able to create a board', () => {
    cy.get('[data-cy=create-board]').click();
    cy.get('[data-cy=new-board-input]').type('test board');
    cy.get('[data-cy=new-board-create]').click();
    cy.get('[data-cy=board-title]').should('have.value', 'test board');
  });

  //Needs Test Data for Board To Edit 
  it('Should be able to edit board names', () => {
    cy.get('[data-cy=create-board]').click();
    cy.get('[data-cy=new-board-input]').type('edit board');
    cy.get('[data-cy=new-board-create]').click();
    cy.get('[data-cy=board-title]').should('have.value', 'edit board');
    cy.get('[data-cy=board-title]').click();
    cy.get('[data-cy=board-title]').clear();
    cy.get('[data-cy=board-title]').type('New Board Name');
    cy.get('[data-cy=board-title]').type('{enter}');
    cy.get('[data-cy=board-title]').should('have.value', 'New Board Name');
  });

  //Needs Test Data for Board To Delete  
  it('Should be able to delete a board ', () => {
    cy.get('[data-cy=create-board]').click();
    cy.get('[data-cy=new-board-input]').type('Board to Delete');
    cy.get('[data-cy=new-board-create]').click();
    cy.get('[data-cy=board-title]').should('have.value', 'Board to Delete');
    cy.get('[data-cy=board-options] > .options').click();
    cy.get('[data-cy=board-options] > #myDropdown > .delete').click();
    cy.get('.board_item').should('not.have.value', 'Board to Delete');
  });

  it('Should be able to favorite a board ', () => {
    cy.get('[data-cy=create-board]').click();
    cy.get('[data-cy=new-board-input]').type('Favorite Board');
    cy.get('[data-cy=new-board-create]').click();
    cy.get('[data-cy=board-title]').should('have.value', 'Favorite Board');
    cy.visit('/');
    cy.contains('Favorite Board').parent().trigger('mouseover').children('[data-cy=star]').click();
    cy.contains('My Starred').next('.board').children('.board_item').children('h1.board_title').should('have.value', 'Favorite Board');
  });

  it.only('Should be able to add a list to a board ', () => {
    cy.get('[data-cy=create-board]').click();
    cy.get('[data-cy=new-board-input]').type('test board');
    cy.get('[data-cy=new-board-create]').click();
    cy.get('[data-cy=board-title]').should('have.value', 'test board');
    cy.get('[data-cy=add-list]').click();
    cy.get('[data-cy=add-list-input]').type('Test List {enter}');
    cy.get('[data-cy=list]').should('be.visible');
  });

});
