describe('blockchain/transfers',function (){
    let arr=[
        "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",
        "TKfjV9RNKJJCqPvBtK8L7Knykh7DNWvnYt",
        "TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9",
        "THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF",
        "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
        "1002000",
        "TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7",
        "TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT",
        "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9",
        "TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9",
        "TDyvndWuvX5xTBwHPYJi7J3Yq8pq8yh62h",
        "TKttnV3FSY1iEoAwB4N52WK2DxdV94KpSd",
        "TVgAYofpQku5G4zenXnvxhbZxpzzrk8WVK",

    ]
    it('转账页面',function (){
        cy.visit('https://tronscan.org/#/blockchain/transfers')
        cy.wait(1000)
        cy.request('https://apilist.tronscan.org/api/transfer/statistics').its('body').as('trans').then(function (){
            cy.wait(1000)
            cy.log(this.trans)
            expect(this.trans.lastDayTransfersCount).is.not.equals('')
            expect(this.trans.lastDayTransfersAmount).is.not.equals('')
            expect(this.trans.transfersCount).is.not.equals('')
            expect(this.trans.transfersAmount).is.not.equals('')
        })
        //TRX&TRC20转账
        cy.request('https://apilist.tronscan.org/api/transfer?sort=-timestamp&count=true&limit=20&start=0&start_timestamp=1529856000000&end_timestamp=1607581831391')
            .its('body').as('star0').then(function (){
             cy.log(this.star0.data[0])
             expect(this.star0.data.length).equals(20)
            for(let i in arr) {
                for (let j in this.star0.data) {
                    if (arr[i] == this.star0.data[j].tokenInfo.tokenId) {
                        assert.equal(this.star0.data[j].tokenInfo.vip, true, "token简称:" + this.star0.data[j].tokenInfo.tokenAbbr
                            + " id:" + this.star0.data[j].tokenInfo.tokenId)
                    }
                    assert.isNotNaN(this.star0.data[j].amount, this.star0.data[j].tokenInfo.tokenAbbr+' is not NaN')
                    assert.exists(this.star0.data[j].amount, this.star0.data[j].tokenInfo.tokenAbbr +' is not null or undefined')
                }
            }

        })
        cy.request('https://apilist.tronscan.org/api/transfer?sort=-timestamp&count=true&limit=20&start=9980&start_timestamp=1529856000000&end_timestamp=1607581831391')
            .its('body').as('star500').then(function (){
            cy.log(this.star500.data.length)
            expect(this.star500.data.length).equals(20)
            for(let i in arr) {
                for (let j in this.star500.data) {
                    if (arr[i] == this.star500.data[j].tokenInfo.tokenId) {
                        assert.equal(this.star500.data[j].tokenInfo.vip, true, "token简称:" + this.star500.token_transfers[j].tokenInfo.tokenAbbr
                            + " id:" + this.star500.data[j].tokenInfo.tokenId)
                    }
                    assert.isNotNaN(this.star500.data[j].amount, this.star500.data[j].tokenInfo.tokenAbbr+' is not NaN')
                    assert.exists(this.star500.data[j].amount, this.star500.data[j].tokenInfo.tokenAbbr +' is not null or undefined')
                }
            }
        })

        //TRC20转账
        cy.get('.ant-radio-button-wrapper-checked > span:nth-child(2) > span').click()
        cy.request('https://apilist.tronscan.org/api/token_trc20/transfers?sort=-timestamp&limit=20&start=0&start_timestamp=1529856000000&end_timestamp=1607581831391')
            .its('body').as('TRC20star0').then(function (){
            for(let i in arr) {
                for (let j in this.TRC20star0.token_transfers) {
                    if (arr[i] == this.TRC20star0.token_transfers[j].tokenInfo.tokenId) {
                        assert.equal(this.TRC20star0.token_transfers[j].tokenInfo.vip, true, "token简称:" + this.TRC20star0.token_transfers[j].tokenInfo.tokenAbbr
                            + " id:" + this.TRC20star0.token_transfers[j].tokenInfo.tokenId)
                    }
                    assert.isNotNaN(this.TRC20star0.token_transfers[j].quant, this.TRC20star0.token_transfers[j].tokenInfo.tokenAbbr+' is not NaN')
                    assert.exists(this.TRC20star0.token_transfers[j].quant, this.TRC20star0.token_transfers[j].tokenInfo.tokenAbbr +' is not null or undefined')
                }
            }
        })

        cy.request('https://apilist.tronscan.org/api/transfer?sort=-timestamp&count=true&limit=20&start=9980&start_timestamp=1529856000000&end_timestamp=1607581831391')
            .its('body').as('TRC20star500').then(function (){
            for(let i in arr) {
                for (let j in this.TRC20star500.token_transfers) {
                    if (arr[i] == this.TRC20star500.token_transfers[j].tokenInfo.tokenId) {
                        assert.equal(this.TRC20star500.token_transfers[j].tokenInfo.vip, true, "token简称:" + this.TRC20star500.token_transfers[j].tokenInfo.tokenAbbr
                            + " id:" + this.TRC20star500.token_transfers[j].tokenInfo.tokenId)
                    }
                    assert.isNotNaN(this.TRC20star500.token_transfers[j].quant, this.TRC20star500.token_transfers[j].tokenInfo.tokenAbbr+' is not NaN')
                    assert.exists(this.TRC20star500.token_transfers[j].quant, this.TRC20star500.token_transfers[j].tokenInfo.tokenAbbr +' is not null or undefined')
                }
            }
        })
    })
})