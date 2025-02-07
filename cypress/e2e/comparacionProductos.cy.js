/// <reference types="cypress" />

describe('Test de web para challenge QA Automation', () => {

    const { url, cod} = require('../fixtures/data');
    before(() => {
        cy.log("Bienvenido a Fravega!");
        cy.visit(url);
    
      });
    it('test', () => {
      // Esperar dinámicamente hasta que el campo esté disponible
      // Ingresa el código postal
      // Espera hasta 15 segundos si es necesario
      cy.get('#header-geo-location-form-postal-number', { timeout: 15000 }) 
        .should('be.visible') 
        .type(cod); 
      cy.wait(1000)
      cy.get('.sc-bOQTJJ > .sc-fUBkdm').click()

      //realizar busqueda de un producto en especial y seleccionar 4 de ellos para compararlos
      cy.get(".sc-ejfMa-d > .sc-dkmUuB > .sc-sLsrZ").should('be.visible').type("heladera {enter} ")
      cy.get(":nth-child(2) > .sc-f0dec281-2 > .sc-95e993ee-3 > .sc-beb4c7ef-0 > .sc-287a2403-2 > .sc-287a2403-1", { timeout: 15000 }).click()
      cy.get(":nth-child(3) > .sc-f0dec281-2 > .sc-95e993ee-3 > .sc-beb4c7ef-0 > .sc-287a2403-2 > .sc-287a2403-1").click()
      cy.get(":nth-child(4) > .sc-f0dec281-2 > .sc-95e993ee-3 > .sc-beb4c7ef-0 > .sc-287a2403-2 > .sc-287a2403-1").click()
      cy.get(":nth-child(5) > .sc-f0dec281-2 > .sc-95e993ee-3 > .sc-beb4c7ef-0 > .sc-287a2403-2 > .sc-287a2403-1").click()
      
      cy.get(".sc-d62d1820-0").click()
      cy.screenshot("Comparacion de productos")
    });
  });
