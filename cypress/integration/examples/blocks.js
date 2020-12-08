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
       cy.get(' div > table > tbody > tr:nth-child(1) > td.ant_table.table-first-padding > a').click()
        cy.get('div.table-responsive > table > tbody > tr:nth-child(5) > td').invoke('text').then(tranfCount => {
            cy.request('https://debugapilist.tronscan.org/api/block?sort=-number&limit=20&count=true&start=0&start_timestamp=&end_timestamp=')
                .its('body').as('transferblacks').then(function () {
                assert.equal(parseFloat(this.transferblacks.total),parseFloat(totalCount.slice(0,-4)),"total equal")
                assert.exists(this.transferblacks.data.length, ' is not null or undefined')
                for(let i in arr) {
                    for (let j in this.transferblacks.data) {
                        if (arr[i] == this.transferblacks.data[j].tokenInfo.tokenId)  {
                            assert.equal(this.transferblacks.data[j].tokenInfo.vip, true, "token简称:" + this.transferblacks.data[j].tokenInfo.tokenAbbr
                                + " id:" + this.transferblacks.data[j].tokenInfo.tokenId)
                        }
                        assert.isNotNaN(this.transferblacks.data[j].hash, this.transferblacks.data[j].tokenInfo.tokenAbbr+' is not NaN')
                        assert.exists(this.transferblacks.data[j].hash, this.transferblacks.data[j].tokenInfo.tokenAbbr +' is not null or undefined')
                    }
                }
                assert.isNotNaN(this.transferblacks.data[j].timestamp, ' is not NaN')
                assert.exists(this.transferblacks.data[j].timestamp, ' is not null or undefined')
            })
        })
        //区块转账
        cy.get('div.card-header.list-style-body__header > ul > li:nth-child(2) > a > span > span').click()
            cy.request('https://debugapilist.tronscan.org/api/block?sort=-number&limit=20&count=true&start=0&start_timestamp=&end_timestamp=')
                .its('body').as('transactionblacks').then(function () {
                assert.exists(this.transactionblacks.data.length, ' is not null or undefined')
                for(let i in arr) {
                    for (let j in this.transactionblacks.data) {
                        if (arr[i] == this.transactionblacks.data[j].tokenInfo.tokenId)  {
                            assert.equal(this.transactionblacks.data[j].tokenInfo.vip, true, "token简称:" + this.transactionblacks.data[j].tokenInfo.tokenAbbr
                                + " id:" + this.transactionblacks.data[j].tokenInfo.tokenId)
                        }
                        assert.isNotNaN(this.transactionblacks.data[j].amount, this.transactionblacks.data[j].tokenInfo.tokenAbbr+' is not NaN')
                        assert.exists(this.transactionblacks.data[j].amount, this.transactionblacks.data[j].tokenInfo.tokenAbbr +' is not null or undefined')
                    }
                }
                assert.isNotNaN(this.transactionblacks.data[j].timestamp, ' is not NaN')
                assert.exists(this.transactionblacks.data[j].timestamp, ' is not null or undefined')
            })

    })
})