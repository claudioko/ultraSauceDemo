import '../support/commands';
import userData from '../fixtures/userData.json';
import urls from '../fixtures/urls.json';

const standardUser = Cypress.env('standardUser');
const problemUser = Cypress.env('problemUser');


describe('template spec', () => {
  afterEach(() => {
    
  });

  it ('1. Following the sauce demo site requirements, create a test to validate the E2E flow of the standard user defined as below:', () => {

    //Visit saucedemo.com and confirm the user lands on the login screen.
    cy.visit('/');
    cy.url().should('include', urls.baseUrl);

    //Login using standard_user and confirm the user lands on the product list screen.
    cy.login(standardUser.userName, standardUser.password);
    cy.url().should('include', urls.productListUrl);

    //Filter by Price (low to high) and click Add to cart for the first item; confirm that the Remove button appears, and the number 1 appears on the cart icon.
    cy.getByData('product_sort_container').select('lohi');
    cy.get('.inventory_list button:first').click();
    cy.get('span.shopping_cart_badge').invoke('text').should('eq', '1');

    //Click on the title of the second item and confirm the user lands on the product detail screen.
    cy.get('.inventory_list .inventory_item').eq(1).find('.inventory_item_name').click();
        
    cy.url().should('include', urls.productPageUrl);
    
    //Click Add to cart button and confirm the Remove button, and the number 2 appears on the Cart icon.
    cy.get('.inventory_details_desc_container button:first').click();


    cy.get('.inventory_details_desc_container button:first').invoke('text').should('eq', 'Remove');
    cy.get('span.shopping_cart_badge').invoke('text').should('eq', '2');

    //Click on the Cart icon and confirm the 2 items on the Your cart screen are correct
    cy.get('.shopping_cart_link').click();

    //Click on the Checkout button and should land on the 'Checkout: Your information' screen.
    cy.getByData('checkout').click();
    cy.url().should('include', urls.checkOutStepOneUrl);

    //Enter all the fields on the 'Checkout: Your information' screen, click the Continue button, and confirm landed on the 'Checkout: review' screen.
    cy.getByData('firstName').type(userData.firstName);
    cy.getByData('lastName').type(userData.lastName);
    cy.getByData('postalCode').type(userData.postalCode);
    cy.getByData('continue').click();
    cy.url().should('include',urls.checkOutStepTwoUrl);

    //Confirm the two items and the total price match, then click the Finish button.
    cy.getByData('finish').click();
    
    //Should land on 'Checkout: Complete!' screen and click the Back Home button.
    cy.url().should('include',urls.checkOutCompleteUrl);
    cy.getByData('back-to-products').click();

    //Should land on the product list screen, click on the hamburger and click Logout.
    cy.url().should('include', urls.productListUrl);
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  })

  it ('2. Following the sauce demo site requirements, create a test to validate the E2E flow of the problem user defined as below:', () => {

    //Visit saucedemo.com and confirm the user lands on the login screen.
    cy.visit('/');
    cy.url().should('include', urls.baseUrl);

    //Login using problem_user and confirm the user lands on the product list page.
    cy.login(problemUser.userName, problemUser.password);
    cy.url().should('include', urls.productListUrl);
    
    //Filter by 'Price (low to high)' and confirm the filter text did not change, and it is 'Name (A to Z).'
    cy.getByData('product_sort_container').select('lohi');
    cy.get('.select_container .active_option').should('have.text','Name (A to Z)');

    //Click Add to cart button for every item on the product list; confirm the Remove button only appears for three items and the number 3 appears on the cart icon.
    cy.get('.inventory_list .inventory_item').each(($item) => {
      cy.wrap($item).find('button:contains("Add to cart")').click()
    })

    cy.get('span.shopping_cart_badge').invoke('text').should('eq', '3');

    //Click on the Cart icon and confirm the 3 items on the Your cart screen are correct.
    cy.get('.shopping_cart_link').click();


    //Click on the Checkout button and should land on the 'Checkout: Your information' screen.
    cy.getByData('checkout').click();
    cy.url().should('include', urls.checkOutStepOneUrl);

    //The user can't enter all the fields on the 'Checkout: Your information' screen and Should display an error message.
    cy.getByData('firstName').type(userData.firstName);
    cy.getByData('lastName').type(userData.lastName);
    cy.getByData('postalCode').type(userData.postalCode);
    cy.getByData('continue').click();
    cy.getByData('error').invoke('text').should('eq','Error: Last Name is required');

    //Click on the hamburger and click on Reset App State, then click Logout.
    cy.get('#react-burger-menu-btn').click();
    cy.get('#reset_sidebar_link').click();



  })
})