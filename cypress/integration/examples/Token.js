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
    it('通证概览,BTT与WBTT价格对比', function () {
        cy.visit('https://tronscan.org/#/tokens/list')
        cy.wait(1000)
        cy.get('div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div').invoke('text').then( price => {
            cy.wait(600)
            assert.exists(price.slice(0,1), ' is not null or undefined')
            assert.isNotNaN(price.slice(0,1), ' is not NaN')
            cy.request('https://apilist.tronscan.org/api/tokens/overview?start=0&limit=20&order=desc&filter=all&sort=marketcap&order_current=descend').its('body').as('btt1').then(function () {
                cy.log('price.slice(0, 5)*1=====',parseFloat(price.slice(0, 5)))
                if (price.slice(0,1) != 0){
                 expect(parseFloat((this.btt1.tokens[1].gain* 100).toFixed(2))).to.equals(parseFloat(price.slice(0, 5)))
                }
            })
            cy.get('div > table > tbody > tr:nth-child(6) > td:nth-child(4) > div').invoke('text').then(pri => {
                assert.exists(pri, ' is not null or undefined')
                assert.isNotNaN(pri, ' is not NaN')
            })
        })

    })

    it('通证概览,Trx与WTrx价格对比', function () {
        cy.visit('https://tronscan.org/#/tokens/list')
        cy.wait(1000)
        cy.get('div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div').invoke('text').then( price =>{
            cy.wait(600)
            assert.exists(price, ' is not null or undefined')
            cy.request('https://apilist.tronscan.org/api/token/price?token=trx').its('body').as('token1').then(function () {
                expect(Math.abs(parseFloat(this.token1.percent_change_24h.slice(0,6)).toFixed(2))).to.equal(parseFloat(price.slice(1,5)))
            })
            cy.get('.currentCurrencyMobile > span').invoke('text').then(pri => {
                assert.exists(pri, ' is not null or undefined')
                expect(pri.slice(1,7)).to.equal(price)
            })
        })
        cy.get('[data-row-key="0"] > :nth-child(2) > .table-imgtext > :nth-child(2) > h5 > div > a').click()
        cy.wait(600)
        //列表中的转账数文案
        cy.get(':nth-child(1) > :nth-child(5) > [style="width: calc(100% - 150px);"] > div > span').invoke('text').then(tranfer =>{
            assert.exists(tranfer.slice(0,-4), ' is not null or undefined')
            assert.isNotNaN(tranfer.slice(0,-4), ' is not NaN')
            //total中的转账数
        })
        //发行量
        cy.get(':nth-child(2) > [style="width: calc(100% - 150px);"] > div > :nth-child(1)').invoke('text').then(issue =>{
            assert.exists(issue, ' is not null or undefined')
            assert.isNotNaN(issue, ' is not NaN')
        })
         //流通量
        cy.get(':nth-child(3) > [style="width: calc(100% - 150px);"] > div').invoke('text').then(circulation =>{
            assert.exists(circulation.slice(0,-4), ' is not null or undefined')
            assert.isNotNaN(circulation.slice(0,-4), ' is not NaN')
        })
        //持有者
        cy.get(':nth-child(4) > [style="width: calc(100% - 150px);"] > div > :nth-child(1)').invoke('text').then(user =>{
            assert.exists(user.slice(0,-2), ' is not null or undefined')
            assert.isNotNaN(user.slice(0,-2), ' is not NaN')
        })
        //转账数
        cy.get(':nth-child(1) > :nth-child(5) > [style="width: calc(100% - 150px);"] > div > span').invoke('text').then(tranfer =>{
            assert.exists(tranfer.slice(0,-4), ' is not null or undefined')
            assert.isNotNaN(tranfer.slice(0,-4), ' is not NaN')
        })
        //价格
        cy.get(':nth-child(6) > [style="width: calc(100% - 150px);"] > :nth-child(1) > .d-flex').invoke('text').then(price =>{
            assert.exists(price.slice(0,8), ' is not null or undefined')
            assert.isNotNaN(price.slice(0,8), ' is not NaN')
        })
        //流通市值/总市值
        cy.get(':nth-child(7) > [style="width: calc(100% - 150px);"] > div > :nth-child(1) > span').invoke('text').then(circprice =>{
            assert.exists(circprice, ' is not null or undefined')
            assert.isNotNaN(circprice, ' is not NaN')
        })
        cy.get(':nth-child(7) > [style="width: calc(100% - 150px);"] > div > :nth-child(2) > span').invoke('text').then(totalprice =>{
            assert.exists(totalprice, ' is not null or undefined')
            assert.isNotNaN(totalprice, ' is not NaN')
        })
    })

    it('通证概览-加Vip通证',function (){
        cy.visit('https://debug.tronscan.org/#/tokens/list')
        cy.request('https://debugapilist.tronscan.org/api/tokens/overview?start=0&limit=20&order=desc&filter=all&sort=marketcap&order_current=descend')
            .its('body').as('tokenVip').then(function (){
            cy.log(this.tokenVip.tokens[0].tokenType)
            for(let i in arr){
                for(let j in this.tokenVip.tokens){
                    if(arr[i] == this.tokenVip.tokens[j].contractAddress || arr[i] == this.tokenVip.tokens[j].tokenId){
                        assert.equal(this.tokenVip.tokens[j].vip,true,"token简称:"+this.tokenVip.tokens[j].abbr
                            +" id:"+(this.tokenVip.tokens[j].contractAddress ||this.tokenVip.tokens[j].tokenId))
                    }
                }
            }

        })
    })

    it('首页-热门通证加Vip',function (){
        cy.visit('https://debug.tronscan.org/#/searchmore')
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