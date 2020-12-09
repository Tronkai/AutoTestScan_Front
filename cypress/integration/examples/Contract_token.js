describe('contract/address',function() {
    var arr=[
        "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",
        "TKfjV9RNKJJCqPvBtK8L7Knykh7DNWvnYt",
        "TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9",
        "THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF",
        "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
        "TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7",
        "TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT",
        "TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9",
        "TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9",
        "TDyvndWuvX5xTBwHPYJi7J3Yq8pq8yh62h",
        "TKttnV3FSY1iEoAwB4N52WK2DxdV94KpSd",
        "TVgAYofpQku5G4zenXnvxhbZxpzzrk8WVK",

    ]

    it('合约概览-加Vip通证',function (){
        let contractAddress;
        for(contractAddress of arr){
            cy.visit('https://debug.tronscan.org/#/contract/' + contractAddress)
            cy.wait(500)
            cy.log('https://debugapilist.tronscan.org/api/contract?contract=' + contractAddress)
            cy.request('https://debugapilist.tronscan.org/api/contract?contract=' + contractAddress)
                .its('body').as('body').then(function (){
                    let status = this.body.data[0].tokenInfo.vip
                    expect(true).equal(status)
                    expect(this.body.data[0].tokenInfo.tokenId).to.not.empty
                    expect(this.body.data[0].tokenInfo.tokenAbbr).to.not.empty
                    expect(this.body.data[0].tokenInfo.tokenName).to.not.empty
                    expect(this.body.data[0].tokenInfo.tokenType).to.not.empty
                    expect(this.body.data[0].tokenInfo.tokenLogo).to.not.empty
            })
        }
    })
    it('合约TRC20转账-加Vip通证',function (){
        let contractAddress;
        cy.visit('https://debug.tronscan.org/#/contract/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t/transfers')
        cy.request('https://debugapilist.tronscan.org/api/token_trc20/transfers?limit=20&start=0&sort=-timestamp&count=true&relatedAddress=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&confirm=')
            .its('body').as('body').then(function (){
                let token_transfers_arry = this.body.token_transfers
                for(token_transfers of token_transfers_arry){
                    let tokenId = token_transfers.tokenInfo.tokenId
                    let status = token_transfers.tokenInfo.vip
                    if(arr.includes(tokenId)){
                        expect(true).equal(status)
                        expect(token_transfers.tokenInfo.tokenId).to.not.empty
                        expect(token_transfers.tokenInfo.tokenAbbr).to.not.empty
                        expect(token_transfers.tokenInfo.tokenName).to.not.empty
                        expect(token_transfers.tokenInfo.tokenType).to.not.empty
                        expect(token_transfers.tokenInfo.tokenLogo).to.not.empty
                    }else{
                        expect(false).equal(status)
                    }
                }
        })
    })
})