describe('Tronscan首页', () => {
    it('上边栏数据校验!', () => {
        cy.visit('https://tronscan.org')
        cy.get(':nth-child(1) > :nth-child(1) > .hash-body > .text-left > .produced-by > .ml-2').click()
        let a
        cy.get('.table > tbody > :nth-child(3) > td').invoke('text').then(value => {
            a = value
            cy.url().should('include','/block/'+a)
            cy.url().should('include','/block/'+a)
            cy.url().should('include','/block/'+a)
            cy.url().should('include','/block/'+a)

        })
    })
})