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
            cy.log(this.trctoken.trc20token_balances[0].tokenType)
            for(let i in arr){
                for(let j in this.trctoken.trc20token_balances){
                    if(arr[i] == this.trctoken.trc20token_balances[j].tokenId){
                        assert.equal(this.trctoken.trc20token_balances[j].vip,true,"token简称:"+this.trctoken.trc20token_balances[j].tokenAbbr
                            +" id:"+this.trctoken.trc20token_balances[j].tokenId)
                    }
                }
                // cy.log(this.trc20token.tokens[0].tokenType)
                for(let j in this.trctoken.tokens){
                    if(arr[i] == this.trctoken.tokens[j].tokenId){
                        assert.equal(this.trctoken.tokens[j].vip,true,"token简称:"+this.trctoken.tokens[j].tokenAbbr
                            +" id:"+this.trctoken.tokens[j].tokenId)
                    }
                }
                // cy.log(this.trc20token.tokenBalances[0].tokenType)
                for(let j in this.trctoken.tokenBalances){
                    if(arr[i] == this.trctoken.tokenBalances[j].tokenId){
                        assert.equal(this.trctoken.tokenBalances[j].vip,true,"token简称:"+this.trctoken.tokenBalances[j].tokenAbbr
                            +" id:"+this.trctoken.tokenBalances[j].tokenId)
                    }
                }
                // cy.log(this.trc20token.balances[0].tokenType)
                for(let j in this.trctoken.balances){
                    if(arr[i] == this.trctoken.balances[j].tokenId){
                        assert.equal(this.trctoken.balances[j].vip,true,"token简称:"+this.trctoken.balances[j].tokenAbbr
                            +" id:"+this.trctoken.balances[j].tokenId)
                    }
                }
            }

        })
    })

     it('账户页面',function (){
        cy.visit('https://debug.tronscan.org/#/address/TWd4WrZ9wn84f5x1hZhL4DHvk738ns5jwb')
        cy.request('https://debugapilist.tronscan.org/api/search/hot')
            .its('body').as('hotVip').then(function (){
            cy.log(this.hotVip.hot_tokens[0].tokenType)
            for(let i in arr){
                for(let j in this.hotVip.hot_tokens){
                    if(arr[i] == this.hotVip.hot_tokens[j].id){
                        assert.equal(this.hotVip.hot_tokens[j].vip_token,true,"token简称:"+this.hotVip.hot_tokens[j].abbr
                            +" id:"+this.hotVip.hot_tokens[j].id)
                    }
                }
            }

        })
     })
})