describe('Fitur Login OrangeHRM', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('TC01 - Login with valid credentials', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('h6', 'Dashboard').should('be.visible')
  })

  it('TC02 - Login with invalid username', () => {
    cy.get('input[name="username"]').type('invalid user');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('p', 'Invalid credentials').should('be.visible')
  })  

    it('TC03 - Login with invalid password', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('invalid password');
    cy.get('button[type="submit"]').click();
    cy.contains('p', 'Invalid credentials').should('be.visible')
  })

    it('TC04 - Login with username empty', () => {
    //cy.get('input[name="username"]').type('');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('span', 'Required').should('be.visible')
  })

    it('TC05 - Login with password empty', () => {
    cy.get('input[name="username"]').type('Admin');
    //cy.get('input[name="password"]').type('');
    cy.get('button[type="submit"]').click();
    cy.contains('span', 'Required').should('be.visible')
  })

})