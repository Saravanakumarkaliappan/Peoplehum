export class login{
    weblocators={
        userName:'input[type="email"]',
        password:'input[type="password"]',
        login:'.btn > .ng-binding',
        clcokOut:'.user-clock-in-button-wrapper > .btn > :nth-child(2)',
        clockIN:'',
        profileVisit:'.hidden-lg > .user-info-section > .user-name',
        editProfile:'professional-info > .card-common-section > :nth-child(1) > .card-section-title > .ph-icon-wrapper',
        experience:':nth-child(2) > .col-sm-6 > .form-group > .form-control',
        applyButton:'.btn-primary > :nth-child(2)',
        clickGoalIcon:'.hidden-lg > quick-action-forms > .quick-action-forms-container > .quick-actions-list > :nth-child(4) > .action-label',
        goaltittle:'.modal-body > :nth-child(3) > .form-control',
        description:':nth-child(4) > .form-control',
        startDate:':nth-child(5) > :nth-child(1) > .form-group > .form-control'
        select2Nd
       // dueDate:':nth-child(5) > :nth-child(2) > .form-group > .form-control'

     }
    openURl(){

            cy.visit(Cypress.env('URL'))
    }   
    enterUserName(user){

        cy.get(this.weblocators.userName).type(user)
    }
    enterPassword(pass){

        cy.get(this.weblocators.password).type(pass)
    }
    click(login){

        cy.get(this.weblocators.login).click()
    }
    clockot(out){
        cy.get(this.weblocators.clcokOut).click()
    }
    clockin(ins){
        cy.get(this.weblocators.clockIN).click()
    }
    profileVisit1(provi){
        cy.get(this.weblocators.profileVisit).click()
    }
    editProfile(clickedit){
        cy.get(this.weblocators.editProfile).click()

    }
    changeexperience(change){
        cy.get(this.weblocators.experience).clear().type(change)
        cy.get(this.weblocators.applyButton).click()
    }
    createGoal(goalName,description,startDate){
        cy.get(this.weblocators.clickGoalIcon).click()
        cy.get(this.weblocators.goaltittle).type(goalName)
        cy.get(this.weblocators.description).type(description)
        cy.get(this.weblocators.startDate).type(startDate)
       // cy.get(this.weblocators.dueDate).type
    }
    

}

