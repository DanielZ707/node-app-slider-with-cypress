describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation Test', function () {
  it('Allows user to navigate through slides using next and previous buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('not.contain', 'Italy');
    cy.get('.swiper-button-prev').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'Italy');
  });
});

describe('Swiper Gallery Slide Descriptions Test', function () {
  it('Verifies that the title and description of each slide are displayed correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-next').click();
    cy.wait(1000);
    cy.get('.swiper-slide-active').should('contain', 'France');
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    });
  });

describe('Responsive Swiper Gallery Test', function () {
  const devices = [
    {name: 'Desktop', width: 1920, height: 1080},
    {name: 'Tablet', width: 768, height: 1024},
    {name: 'Phone', width: 375, height: 667},
  ];

  devices.forEach(device => {
    it(`Verifies gallery on ${device.name}`, function () {
      cy.viewport(device.width, device.height);
      cy.visit('http://localhost:3000');
      cy.get('.swiper-slide-active').should('contain', 'Italy');
      cy.get('.swiper-slide-active').should('contain', 'Rome');
      cy.get('.swiper-button-next').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
      cy.get('.swiper-slide-active').should('contain', 'London');
      cy.get('.swiper-button-next').click();
      cy.wait(1000);
      cy.get('.swiper-slide-active').should('contain', 'France');
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    });
  });
});

describe('Gallery Display Test with Opacity', function() {
  it('Checks if all gallery elements are present and checks opacity for non-visible elements', function() {
    
    cy.visit('http://localhost:3000');

    cy.get('.swiper').should('be.visible');

    cy.get('.swiper-slide').should('have.length.at.least', 3);

    cy.get('.swiper-slide-active').should('be.visible');
    
    cy.get('.swiper-button-prev').should('be.visible').should('not.be.disabled');
    cy.get('.swiper-button-next').should('be.visible').should('not.be.disabled');
  });
});