/// <reference types="cypress" />

describe('Test de web para challenge QA Automation', () => {

  before('Ingresar a la web',() => {
    cy.log("Bienvenido a Fravega!");
    cy.visit('https://www.fravega.com');

  })

  it('test', () => {

    // Esperar dinámicamente hasta que el campo esté disponible
    // Ingresa el código postal
    cy.get('#header-geo-location-form-postal-number', { timeout: 15000 }) 
      .should('be.visible') 
      .type("5008"); 
    cy.wait(5000)
    cy.get('.sc-bOQTJJ > .sc-fUBkdm').click()
    //Agregar al carrito el primer producto
    cy.get(':nth-child(2) > [data-testid="home-categorias-destacadas-element"] > a > .sc-etVdmn > .sc-hqpNSm > .sc-dAEZTx').click()
    cy.wait(3000)
    cy.get(":nth-child(1) > .sc-f0dec281-2").click()
    cy.wait(3000)
    cy.get(".sc-56271133-3 > .sc-2628e4d4-7 > .sc-2628e4d4-10 > .sc-2ec5050c-1 > .sc-2ec5050c-0").click()
    //Agregar al carrito el segundo producto
    cy.get(".sc-ejfMa-d > .sc-dkmUuB > .sc-sLsrZ").should('be.visible').type("microondas {enter} ")
    cy.wait(2000)
    cy.get('[href="/p/microondas-atma-digital-con-grill-900w-23lts-matdgb23cn-110148/"]').click();
    cy.get(".sc-56271133-3 > .sc-2628e4d4-7 > .sc-2628e4d4-10 > .sc-2ec5050c-1 > .sc-2ec5050c-0").click()
    
    //Ir al carrito de compras

      cy.get(".sc-dQEtJz > .sc-hTUWRQ").type("{pageup}")
      cy.get(".sc-dQEtJz > .sc-hTUWRQ").click()
      cy.wait(5000)
      cy.get(".sc-eoVZPG").click({ force: true })
      cy.screenshot("Precio total de compras")
  })

 
});