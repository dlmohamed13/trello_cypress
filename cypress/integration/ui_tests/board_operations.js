/// <reference types="cypress" />

describe('User Should be to sucessfully perform board operations', () => {

  let locators = {};
  locators.boardTitle = '[data-cy=board-title]';
  locators.createBoard = '[data-cy=create-board]';
  locators.newBoardInput = '[data-cy=new-board-input]';
  locators.newBoardSave = '[data-cy=new-board-create]';
  locators.boardOptions = '[data-cy=board-options] > .options';
  locators.boardItem = '.board_item';
  
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
    cy.visit('/');
  });

  it('Should be able to create a board', () => {
    cy.get(locators.createBoard).click();
    cy.get(locators.newBoardInput).type('test board');
    cy.get(locators.newBoardSave).click();
    cy.get(locators.boardTitle).should('have.value', 'test board');
  });

  //Needs Test Data for Board To Edit 
  it('Should be able to edit board names', () => {
    cy.get(locators.createBoard).click();
    cy.get(locators.newBoardInput).type('edit board');
    cy.get(locators.newBoardSave).click();
    cy.get(locators.boardTitle).should('have.value', 'edit board');
    cy.get(locators.boardTitle).click();
    cy.get(locators.boardTitle).clear();
    cy.get(locators.boardTitle).type('New Board Name');
    cy.get(locators.boardTitle).type('{enter}');
    cy.get(locators.boardTitle).should('have.value', 'New Board Name');
  });

  //Needs Test Data for Board To Delete  
  it('Should be able to delete a board ', () => {
    cy.get(locators.createBoard).click();
    cy.get(locators.newBoardInput).type('Board to Delete');
    cy.get(locators.newBoardSave).click();
    cy.get(locators.boardTitle).should('have.value', 'Board to Delete');
    cy.get(locators.boardOptions).click();
    cy.get('[data-cy=board-options] > #myDropdown > .delete').click();
    cy.get(locators.boardItem).should('not.have.value', 'Board to Delete');
  });

  it('Should be able to favorite a board ', () => {
    cy.get(locators.createBoard).click();
    cy.get(locators.newBoardInput).type('Favorite Board');
    cy.get(locators.newBoardSave).click();
    cy.get(locators.boardTitle).should('have.value', 'Favorite Board');
    cy.visit('/');
    cy.contains('Favorite Board').parent().trigger('mouseover').children('[data-cy=star]').click();
    cy.contains('My Starred').next('.board').children(locators.boardItem).children('h1.board_title').should('have.value', 'Favorite Board');
  });

  it('Should be able to add a list to a board ', () => {
    cy.get(locators.createBoard).click();
    cy.get(locators.newBoardInput).type('test board');
    cy.get(locators.newBoardSave).click();
    cy.get(locators.boardTitle).should('have.value', 'test board');
    cy.get('[data-cy=add-list]').click();
    cy.get('[data-cy=add-list-input]').type('Test List {enter}');
    cy.get('[data-cy=list]').should('be.visible');
  });

});
