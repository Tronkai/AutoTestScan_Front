describe('tokens/list',function() {
    it('通证概览', function () {
        cy.visit('https://tronscan.io/#/tokens/list')
        cy.get('[data-row-key="0"] > :nth-child(4) > .col-red').invoke('text').then( price =>{
            expect(price).is.not.empty
            cy.request('https://apilist.tronscan.io/api/token/price?token=trx').its('body').as('token1').then(function () {
                cy.log(this.token1)
                // expect(this.token1.total).equal(this.token1.data.length)
                expect(this.token1.percent_change_24h.slice(0,4)).to.equal(price.slice(0,4))

            })
            cy.get('.redPrice > span').invoke('text').then(pri => {
                expect(pri).is.not.empty
                expect(pri.slice(1,7)).to.equal(price)
            })
            })

    })
})