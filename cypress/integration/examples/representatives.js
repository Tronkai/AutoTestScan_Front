describe('representatives', () => {
    it('超级代表', () => {
        cy.visit('https://tronscan.org/#/sr/representatives')
        // cy.intercept('GET', '/pagewitness', (req) => {
        //     expect(req.body).to.include('Acme Company')
        // })
        cy.request('https://apilist.tronscan.org/api/pagewitness?witnesstype=1').its('body').as('witness1').then(function () {
            expect(this.witness1.total).equal(27)
            expect(this.witness1.total).equal(this.witness1.data.length)
            for (witness of this.witness1.data) {
                expect(witness.realTimeVotes).to.be.greaterThan(100000000)
                expect(witness.changeVotes).to.be.greaterThan(0)
                expect(witness.address).to.match(/^T[a-zA-Z1-9]{33}/)
                expect(witness.name).to.not.equal('')

            }

        })
    })
    it('超级代表合伙人', () => {
        cy.visit('https://tronscan.org/#/sr/representatives')

        cy.request('https://apilist.tronscan.org/api/pagewitness?witnesstype=2&start=0&limit=20').its('body').as('witness2').then(function () {
            for (witness of this.witness2.data) {
                expect(witness.address).to.match(/^T[a-zA-Z1-9]{33}/)
                expect(witness.name).to.not.equal('')

            }

        })
    })

    it('超级代表候选人', () => {
        cy.visit('https://tronscan.org/#/sr/representatives')

        cy.request('https://apilist.tronscan.org/api/pagewitness?witnesstype=3&start=0&limit=20').its('body').as('witness3').then(function () {
            for (witness of this.witness3.data) {
                expect(witness.address).to.match(/^T[a-zA-Z1-9]{33}/)
                expect(witness.name).to.not.equal('')


            }

        })
    })
})
