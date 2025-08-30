describe('Fitur Login OrangeHRM', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('TC01 - Login with valid credentials', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'). as ('login')
    cy.get('button[type="submit"]').click();
    cy.wait('@login').then((intercept) => expect(intercept.response.statusCode).to.equal(200));
    //cy.contains('h6', 'Dashboard').should('be.visible')
  })

  it('TC02 - Login with invalid username', () => {
    cy.get('input[name="username"]').type('invalid user');
    cy.get('input[name="password"]').type('admin123');
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'). as ('InvalidUsername')
    cy.get('button[type="submit"]').click();
    cy.wait('@InvalidUsername').then((intercept) => expect(intercept.response.statusCode).to.equal(302));
    //cy.contains('p', 'Invalid credentials').should('be.visible')
  })  

    it('TC03 - Login with invalid password', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('invalid password');
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'). as ('InvalidPassword')
    cy.get('button[type="submit"]').click();
    cy.wait('@InvalidPassword').then((intercept) => expect(intercept.response.statusCode).to.equal(302));
    //cy.contains('p', 'Invalid credentials').should('be.visible')
  })

})