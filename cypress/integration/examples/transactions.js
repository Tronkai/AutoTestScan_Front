describe('blockchain/transactions',function (){
    it('交易页面', function () {
        cy.visit('https://tronscan.org/#/blockchain/transactions')
        cy.wait(1000)
        cy.request('https://apilist.tronscan.org/api/transaction/statistics').its('body').as('trans').then(function (){
            cy.wait(1000)
            cy.log(this.trans)
            expect(this.trans.lastDayTxCount).is.not.equals('')
            expect(this.trans.lastDayTxAmount).is.not.equals('')
            expect(this.trans.trc20Count).is.not.equals('')
            expect(this.trans.txAmount).is.not.equals('')
        })
        cy.request('https://apilist.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&start_timestamp=1529856000000&end_timestamp=1606983249079')
            .its('body').as('star0').then(function (){
                cy.log(this.star0.data.length)
                expect(this.star0.data.length).equals(20)

        })
        cy.request('https://apilist.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=9980&start_timestamp=1529856000000&end_timestamp=1607063784617')
            .its('body').as('star500').then(function (){
                cy.log(this.star500.data.length)
                expect(this.star500.data.length).equals(20)
        })
        // cy.get('#txcont > .representatives-data > :nth-child(1) > .num > :nth-child(1) > span').invoke('text').then(transNum =>{
        //     expect(transNum).is.not.empty
        //     expect(transNum).is.not.equals('NaN')
        // })
        // cy.get(':nth-child(1) > .num > :nth-child(1) > :nth-child(1) > span').invoke('text').then(transPrice =>{
        //     expect(transPrice).is.not.empty
        //     expect(transPrice).is.not.equals('NaN')
        // })

    })
})