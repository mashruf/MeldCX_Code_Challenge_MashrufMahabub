/// <reference types="cypress" />

describe("Negative Tests",()=>{
    beforeEach("",()=>{
        cy.visit("/");
    })

    it("Verify error message is shown while user try to login keeping username empty",()=>{
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']");
            cy.get("input[placeholder='password']").type(data.password);//entering password
            cy.get(".sc-bZQynM").click();//clicking login button

            //Error message for not entering username
            cy.contains("Username can't be empty").should("be.visible");

        })
    })

    it("Verify error message is shown while user try to login keeping password empty",()=>{
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']").type(data.username);//entering username
            cy.get("input[placeholder='password']");
            cy.get(".sc-bZQynM").click();//clicking login button

            //Error message for not entering password
            cy.contains("Password can't be empty").should("be.visible");

        })
    })

    it("Verify error message is shown while user try to login keeping username and password empty",()=>{
        
        cy.get("input[placeholder='Enter Username']");
        cy.get("input[placeholder='password']");
        cy.get(".sc-bZQynM").click();//clicking login button

        //Error message for keeping username and password empty
        cy.contains("Enter username and password").should("be.visible");

    })

     it("Verify error message is shown while user try to login using wrong password",()=>{
        
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']").type(data.username);//entering username
            cy.get("input[placeholder='password']").type("1234");//entering password
            cy.get(".sc-bZQynM").click();//clicking login button

            ////Error message for entering wrong password
            cy.contains("Wrong username or password").should("be.visible");
        })

        
    })

    it("Verify error message is shown while user try to login using wrong username",()=>{
        
        cy.fixture("MeldCX_Account").then((data)=>{
            cy.get("input[placeholder='Enter Username']").type("John");//entering username
            cy.get("input[placeholder='password']").type(data.password);//entering password
            cy.get(".sc-bZQynM").click();//clicking login button

            ////Error message for entering wrong username
            cy.contains("Wrong username or password").should("be.visible");
        })

        
    })
})