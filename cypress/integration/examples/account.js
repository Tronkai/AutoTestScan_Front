describe('tokens/list',function() {
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
    it('账户-通证余额token加Vip通证',function (){
        cy.visit('https://debug.tronscan.org/#/address/TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb')
        cy.request('https://debugapilist.tronscan.org/api/account?address=TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb')
            .its('body').as('trctoken').then(function (){
            for(let i in arr){
                for(let j in this.trctoken.trc20token_balances){
                    if(arr[i] == this.trctoken.trc20token_balances[j].tokenId){
                        assert.equal(this.trctoken.trc20token_balances[j].vip,true,"token简称:"+this.trctoken.trc20token_balances[j].tokenAbbr
                            +" id:"+this.trctoken.trc20token_balances[j].tokenId)
                    }
                }
                for(let j in this.trctoken.tokens){
                    if(arr[i] == this.trctoken.tokens[j].tokenId){
                        assert.equal(this.trctoken.tokens[j].vip,true,"token简称:"+this.trctoken.tokens[j].tokenAbbr
                            +" id:"+this.trctoken.tokens[j].tokenId)
                    }
                }
                for(let j in this.trctoken.tokenBalances){
                    if(arr[i] == this.trctoken.tokenBalances[j].tokenId){
                        assert.equal(this.trctoken.tokenBalances[j].vip,true,"token简称:"+this.trctoken.tokenBalances[j].tokenAbbr
                            +" id:"+this.trctoken.tokenBalances[j].tokenId)
                    }
                }
                for(let j in this.trctoken.balances){
                    if(arr[i] == this.trctoken.balances[j].tokenId){
                        assert.equal(this.trctoken.balances[j].vip,true,"token简称:"+this.trctoken.balances[j].tokenAbbr
                            +" id:"+this.trctoken.balances[j].tokenId)
                    }
                }
            }

        })
    })

     it('账户-交易页面',function (){
        cy.visit('https://debug.tronscan.org/#/blockchain/accounts')
        cy.wait(600)
        cy.get('div > table > tbody > tr:nth-child(3) > td:nth-child(2) > div').click()
         cy.wait(600)
         cy.get('table > tbody > tr:nth-child(4) > td > ul > li > div > div > span:nth-child(3)').invoke('text').then(price =>{
             assert.exists(price, price +'is not null or undefined')
         })
         cy.get('table > tbody > tr:nth-child(6) > td > a > span > span').invoke('text').then(totalCount =>{
             cy.log(parseFloat(totalCount.replace(/\D/g, '')))
             assert.exists(totalCount, totalCount +'is not null or undefined')
             cy.request('https://debugapilist.tronscan.org/api/account?address=TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb')
                 .its('body').as('balanceAmount').then(function (){
                 cy.log(parseFloat(this.balanceAmount.totalTransactionCount))
                 assert.equal(parseFloat(this.balanceAmount.totalTransactionCount),parseFloat(totalCount.replace(/\D/g, '')),"vals equal")
             })
             cy.request('https://debugapilist.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=0&address=TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb')
                 .its('body').as('tokendata').then(function (){
                 cy.log(parseFloat(this.tokendata.total))
                 assert.equal(parseFloat(this.tokendata.total),parseFloat(totalCount.replace(/\D/g, '')),"vals equal")
                 for(let i in arr) {
                     for (let j in this.tokendata.data) {
                         if (arr[i] == this.tokendata.data[j].tokenInfo.tokenId) {
                             assert.equal(this.tokendata.data[j].tokenInfo.vip, true, "token简称:" + this.tokendata.data[j].tokenInfo.tokenAbbr
                                 + " id:" + this.tokendata.data[j].tokenInfo.tokenId)
                         }
                         assert.isNotNaN(this.tokendata.data[j].amount, this.tokendata.data[j].amount+' is not NaN')
                         assert.exists(this.tokendata.data[j].amount, this.tokendata.data[j].amount +'is not null or undefined')
                     }
                 }
             })
             //最后一页数据
             cy.get('div.card-header.list-style-body__header > ul > li:nth-child(2) > a > span > span').click()
             cy.get('.ant-pagination-item-24 > a').click()
             cy.wait(600)
             cy.request('https://debugapilist.tronscan.org/api/transaction?sort=-timestamp&count=true&limit=20&start=460&address=TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb')
                 .its('body').as('tokendatalast').then(function (){
                 cy.log(parseFloat(this.tokendatalast.total))
                 assert.equal(parseFloat(this.tokendatalast.total),parseFloat(totalCount.replace(/\D/g, '')),"vals equal")
                 for(let i in arr) {
                     for (let j in this.tokendatalast.data) {
                         if (arr[i] == this.tokendatalast.data[j].tokenInfo.tokenId)  {
                             assert.equal(this.tokendatalast.data[j].tokenInfo.vip, true, "token简称:" + this.tokendatalast.data[j].tokenInfo.tokenAbbr
                                 + " id:" + this.tokendatalast.data[j].tokenInfo.tokenId)
                         }
                         assert.isNotNaN(this.tokendatalast.data[j].amount, this.tokendatalast.data[j].amount+' is not NaN')
                         assert.exists(this.tokendatalast.data[j].amount, this.tokendatalast.data[j].amount +'is not null or undefined')
                     }
                 }
             })
         })

        })
    it('账户-转账页面',function (){
        cy.visit('https://debug.tronscan.org/#/blockchain/accounts')
        cy.get('div > table > tbody > tr:nth-child(3) > td:nth-child(2) > div').click()
        cy.wait(600)
        cy.get('div.card-header.list-style-body__header > ul > li:nth-child(3) > a > span > span').click()
        cy.wait(600)
        cy.get(' div > div.row.mb-3.mt-3 > div > div > div > span > span:nth-child(2)').invoke('text').then(totalCount =>{
            cy.request('https://debugapilist.tronscan.org/api/transfer?sort=-timestamp&count=true&limit=20&start=0&address=TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb')
                .its('body').as('tokendata').then(function (){
                assert.equal(parseFloat(this.tokendata.total),parseFloat(totalCount.replace(/\D/g, '')),"total equal")
                for(let i in arr) {
                    for (let j in this.tokendata.data) {
                        if (arr[i] == this.tokendata.data[j].tokenInfo.tokenId)  {
                            assert.equal(this.tokendata.data[j].tokenInfo.vip, true, "token简称:" + this.tokendata.data[j].tokenInfo.tokenAbbr
                                + " id:" + this.tokendata.data[j].tokenInfo.tokenId)
                        }
                         assert.isNotNaN(this.tokendata.data[j].amount, this.tokendata.data[j].amount+' is not NaN')
                         assert.exists(this.tokendata.data[j].amount, this.tokendata.data[j].amount +'is not null or undefined')
                    }
                }
            })
        })
    })
})