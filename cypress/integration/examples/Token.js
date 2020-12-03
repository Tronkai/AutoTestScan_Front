describe('tokens/list',function() {
    it('通证概览,BTT与WBTT价格对比', function () {
        cy.visit('https://tronscan.io/#/tokens/list')
        cy.get('div > table > tbody > tr:nth-child(2) > td:nth-child(4) > div').invoke('text').then( price => {
            expect(price.slice(0,1)).is.not.empty
            expect(price.slice(0,1)).is.not.equals('NaN')
            cy.request('https://apilist.tronscan.io/api/tokens/overview?start=0&limit=20&order=desc&filter=all&sort=marketcap&order_current=descend').its('body').as('btt1').then(function () {
                cy.log(this.btt1.tokens[1].gain)
                // expect(this.token1.total).equal(this.token1.data.length)
                if (price.slice(0,1) != 0){
                expect(Number(this.btt1.tokens[1].gain.toFixed(4)) * 100).to.equals(price.slice(0, 5)*1)
                }
            })
            cy.get('div > table > tbody > tr:nth-child(6) > td:nth-child(4) > div').invoke('text').then(pri => {
                expect(pri).is.not.empty
                expect(pri).to.equal(price)
            })
        })

    })

    it('通证概览,Trx与WTrx价格对比', function () {
        cy.visit('https://tronscan.io/#/tokens/list')
        cy.get('div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div').invoke('text').then( price =>{
            cy.wait(300)
            expect(price).is.not.empty
            cy.request('https://apilist.tronscan.io/api/token/price?token=trx').its('body').as('token1').then(function () {
                cy.log(this.token1)
                // expect(this.token1.total).equal(this.token1.data.length)
                expect(Number(this.token1.percent_change_24h.slice(0,6)).toFixed(2)).to.equal(price.slice(1,5))

            })
            cy.get('.currentCurrencyMobile > span').invoke('text').then(pri => {
                expect(pri).is.not.empty
                expect(pri.slice(1,7)).to.equal(price)
            })
        })
        cy.get('[data-row-key="0"] > :nth-child(2) > .table-imgtext > :nth-child(2) > h5 > div > a').click()
        cy.wait(600)
        //列表中的转账数文案
        cy.get(':nth-child(1) > :nth-child(5) > [style="width: calc(100% - 150px);"] > div > span').invoke('text').then(tranfer =>{
            expect(tranfer.slice(0,-4)).is.not.empty
            expect(tranfer.slice(0,-4)).is.not.equals('NaN')
            //total中的转账数
        })
        //发行量
        cy.get(':nth-child(2) > [style="width: calc(100% - 150px);"] > div > :nth-child(1)').invoke('text').then(issue =>{
            expect(issue).is.not.empty
            expect(issue).is.not.equals('NaN')
        })
         //流通量
        cy.get(':nth-child(3) > [style="width: calc(100% - 150px);"] > div').invoke('text').then(circulation =>{
            expect(circulation.slice(0,-4)).is.not.empty
            expect(circulation.slice(0,-4)).is.not.equals('NaN')
        })
        //持有者
        cy.get(':nth-child(4) > [style="width: calc(100% - 150px);"] > div > :nth-child(1)').invoke('text').then(user =>{
            expect(user.slice(0,-2)).is.not.empty
            expect(user.slice(0,-2)).is.not.equals('NaN')
        })
        //转账数
        cy.get(':nth-child(1) > :nth-child(5) > [style="width: calc(100% - 150px);"] > div > span').invoke('text').then(tranfer =>{
            expect(tranfer.slice(0,-4)).is.not.empty
            expect(tranfer.slice(0,-4)).is.not.equals('NaN')
        })
        //价格
        cy.get(':nth-child(6) > [style="width: calc(100% - 150px);"] > :nth-child(1) > .d-flex').invoke('text').then(price =>{
            expect(price.slice(0,8)).is.not.empty
            expect(price.slice(0,8)).is.not.equals('NaN')
        })
        //流通市值/总市值
        cy.get(':nth-child(7) > [style="width: calc(100% - 150px);"] > div > :nth-child(1) > span').invoke('text').then(circprice =>{
            expect(circprice).is.not.empty
            expect(circprice).is.not.equals('NaN')
        })
        cy.get(':nth-child(7) > [style="width: calc(100% - 150px);"] > div > :nth-child(2) > span').invoke('text').then(totalprice =>{
            expect(totalprice).is.not.empty
            expect(totalprice).is.not.equals('NaN')
        })
    })


})