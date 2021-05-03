/// <reference types="cypress" />

const faker = require('faker');

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
  
  beforeEach('Adding Test Board', () => {
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
        url: '/api/lists'
      })
      cy.visit('http://localhost:3000/board/' + res.body.id);
    });
    
  });

  it('Should be able to create a list', () => {
    cy.get('[data-cy=add-list]').click();
    cy.get('[data-cy=add-list-input]').type(faker.name.jobDescriptor() + ' Test List {enter}');
    cy.get('[data-cy=list]').should('be.visible');
  });

  // Need to specify board by ID, cannot parse string 
  it('Should be able to delete lists ', () => {
    cy.get('[data-cy=add-list]').click();
    cy.get('[data-cy=add-list-input]').type(faker.name.jobDescriptor() + ' Test List {enter}');
    cy.get('[data-cy=list]').should('be.visible');
    cy.get('[data-cy=list] > .dropdown').click({multiple: true, force: true});
    cy.get('[data-cy=list] > .dropdown > #myDropdown > .delete').click({multiple: true, force: true});
    //Will switch to using list ids once we get into APIS 
    cy.get('[data-cy=list-name]').should('not.exist');
  });

  //Will have to verify with api/visual validation 
  it('Should be to edit list name', () => {
    cy.get('[data-cy=add-list]').click();
    cy.get('[data-cy=add-list-input]').type(faker.name.jobDescriptor() + ' Test List {enter}');
    cy.get('[data-cy=list]').should('be.visible');
    cy.get('[data-cy=list-name]').clear();
    cy.get('[data-cy=list-name]').type('New List Name {enter}');
    cy.get('[data-cy=list-name]').should('contain.value', 'New List Name');
  
  });

  it('Should be able to add tasks to a list', () => {
    cy.get('[data-cy=add-list]').click();
    cy.get('[data-cy=add-list-input]').type(faker.name.jobDescriptor() + ' Test List {enter}');
    cy.get('[data-cy=list]').should('be.visible');
    cy.get('[data-cy=new-task]').click();
    cy.get('[data-cy=task-input]').type(faker.name.jobDescriptor() + ' Test Task {enter}'); 
    cy.get('[data-cy=task]').should('be.visible');
    //cy.log(cy.get('.Task_title').);

  });

});
