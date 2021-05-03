/// <reference types="cypress" />
let faker = require('faker');

describe('User Should be to sucessfully perform account operations', () => {
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
    cy.visit('/');
  });

  it('Should be able to create a new account', () => {
    let email = faker.internet.email();
    cy.get('[data-cy=login-menu]').click();
    cy.xpath('//a[text()="Sign up here"]').click();
    cy.get('[data-cy=signup-email]').type(email);
    cy.get('[data-cy=signup-password]').type('password');
    cy.get('[data-cy=signup]').click();
    cy.get('[data-cy=logged-user]').should('contain.text', email);
  });

  it('Should be able to log in with new account ', () => {
    let email = faker.internet.email();
    let password = 'password';
    cy.request({
      method: 'POST',
      url: '/signup',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      },
      body: {'email': email, 'password': password }
    });
    cy.get('[data-cy=login-menu]').click();
    cy.get('[data-cy=login-email]').type(email);
    cy.get('[data-cy=login-password]').type(password);
    cy.get('[data-cy=login]').click();
    
  });

  it('Should recieve new account email', () => {
    let email = faker.name.firstName() + faker.name.lastName() + '@mailhog.com';
    console.log(email);
    cy.get('[data-cy=login-menu]').click({force: true});
    cy.xpath('//a[text()="Sign up here"]').click();
    cy.get('[data-cy=signup-email]').type(email);
    cy.get('[data-cy=signup-password]').type('password');
    cy.get('[data-cy=welcome-email-checkbox]').click();
    cy.get('[data-cy=signup]').click();
    cy.get('[data-cy=logged-user]').should('contain.text', email);
    //TODO Make this less racey 
    cy.wait(500);
    cy.request({
      method: 'GET',
      url: 'localhost:8025/api/v2/messages',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    }).then( (res) => {
      let message = 'Your account was successfully created!';
      expect(email).to.contain(res.body.items[0].To[0].Mailbox);
      expect(email).to.contain(res.body.items[0].To[0].Domain);
      expect(res.body.items[0].Content.Body).to.contain(message);
    });
  });

});
