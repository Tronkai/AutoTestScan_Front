describe('blockchain/blocks',function (){
    it('区块页面', function () {
        cy.visit('https://debug.tronscan.org/#/blockchain/blocks')
        cy.wait(1000)
        cy.get(' div.list-header.d-none.d-md-block > div > span:nth-child(5)').invoke('text').then(totalCount => {
            cy.request('https://debugapilist.tronscan.org/api/block?sort=-number&limit=20&count=true&start=0&start_timestamp=&end_timestamp=')
                .its('body').as('blacks').then(function () {
                cy.wait(1000)
                assert.equal(parseFloat(this.blacks.total),parseFloat(totalCount.replace(/\D/g, '')),"total equal")
                assert.exists(this.blacks.data.length, ' is not null or undefined')
                for (let j in this.blacks.data) {
                    assert.isNotNaN(this.blacks.data[j].number, ' is not NaN')
                    assert.exists(this.blacks.data[j].number, ' is not null or undefined')
                    //witnessName
                    assert.isNotNaN(this.blacks.data[j].witnessName, ' is not NaN')
                    assert.exists(this.blacks.data[j].witnessName, ' is not null or undefined')
                    //size
                    assert.isNotNaN(this.blacks.data[j].size, ' is not NaN')
                    assert.exists(this.blacks.data[j].size, ' is not null or undefined')
                    //timestamp
                    assert.isNotNaN(this.blacks.data[j].timestamp, ' is not NaN')
                    assert.exists(this.blacks.data[j].timestamp, ' is not null or undefined')
                    //nrOfTrx
                    assert.isNotNaN(this.blacks.data[j].nrOfTrx, ' is not NaN')
                    assert.exists(this.blacks.data[j].nrOfTrx, ' is not null or undefined')
                }
            })
        })

    })
})