/// <reference types="cypress" />


describe("Positive Tests",()=>{

    beforeEach("",()=>{
        cy.visit("/");
    })

    it("Verify Homepage should be visible",()=>{
        
        //header is visible of the Homepage
        cy.contains("qa.code-quiz.dev").should("be.visible");
    })

    it("Verify both Username and Password areas are visible",()=>{

        //Username area is visible
        cy.get("input[placeholder='Enter Username']").should("be.visible");
        
        //Password area is visible
        cy.get("input[placeholder='password']").should("be.visible");
    })

    it("Verify Login button is visible",()=>{

        //Login button is visible
        cy.get(".sc-bZQynM").should("be.visible");
    })

    it("Verify Forgot Password? button is visible",()=>{

        //Forgot Password? button is visible
        cy.contains("Forgot Password?").should("be.visible");
    })

    it("Verify Contact Admin message is visible",()=>{

        //Contact Admin message is visible
        cy.get(".sc-ifAKCX div").should("be.visible");
    })

    it("Verify Login button redirects the user to the User's Information page",()=>{
        
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']").type(data.username);//entering username
            cy.get("input[placeholder='password']").type(data.password);//entering password
            cy.get(".sc-bZQynM").click();//clicking login button

            //Welcome message is visible including user's name
            cy.contains("Hello "+ data.name).should("be.visible");
        })

        
    })

    it("Verify user's Name, Favourite Fruit, Favourite Movie, Favourite Number fields and actual data are visible in User's Informations page",()=>{
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']").type(data.username);//entering username
            cy.get("input[placeholder='password']").type(data.password);//entering password
            cy.get(".sc-bZQynM").click();//clicking login button

            //user's Name, Favourite Fruit, Favourite Movie, Favourite Number fields are visible
            cy.contains("Name").should("be.visible");//Name
            cy.contains("Favourite Fruit").should("be.visible");//Favourite fruit
            cy.contains("Favourite Movie").should("be.visible");//Favourite movie
            cy.contains("Favourite Number").should("be.visible");//Favourite number


            //User's actual data are visible in user's information page
            cy.contains(data.name).should("be.visible");//Name
            cy.contains(data.favouriteFruit).should("be.visible");//Favourite fruit
            cy.contains(data.favouriteMovie).should("be.visible");//Favourite movie
            cy.contains(data.favouriteNumber).should("be.visible");//Favourite number

        })
    })

    it("Verify Logout button is visible",()=>{
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']").type(data.username);//entering username
            cy.get("input[placeholder='password']").type(data.password);//entering password
            cy.get(".sc-bZQynM").click();//clicking login button

           //Logout button is visible
           cy.get(".fqCnAP").should("be.visible");

        })
    })

    it("Verify Logout button redirects the user to the Homepage",()=>{
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']").type(data.username);//entering username
            cy.get("input[placeholder='password']").type(data.password);//entering password
            cy.get(".sc-bZQynM").click();//clicking login button

           
           cy.get(".fqCnAP").click();//click logout button

           cy.contains("qa.code-quiz.dev").should("be.visible");//redirected to homepage

        })
    })


    

})