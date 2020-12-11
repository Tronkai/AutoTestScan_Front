describe('data/bestdata/contract', () => {
    it('最佳数据-合约能量消耗-小时', () => {
        cy.visit('https://tronscan.org/#/data/bestdata/contract')
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
        cy.request('https://apilist.tronscan.io/api/block/latest').its('body').as('lastnumber').then(function () {
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=1').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[3].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    })
    it('最佳数据-合约能量消耗-天', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=2').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[3].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约能量消耗-周', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=3').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[3].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约调用账户数-小时', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=1').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[1].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约调用账户数-天', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=2').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[1].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约调用账户数-周', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=3').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[1].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约调用次数-小时', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=1').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[2].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约调用次数-天', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=2').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[2].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约调用次数-周', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=3').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[2].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })

    it('最佳数据-合约手续费消耗-小时', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=1').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[4].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约手续费消耗-天', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=2').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[4].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
    it('最佳数据-合约手续费消耗-周', () => {
        // cy.get(':nth-child(27) > :nth-child(5)').scrollIntoView().should('be.visible')
            cy.request('https://apilist.tronscan.org/api/top10?type=11,12,13,16,17&time=3').its('body').as('top_hour').then(function () {
                var array=[];
                for (data of this.top_hour[4].data) {
                    expect(data.percentage).to.be.greaterThan(0)
                    array.push(data.percentage)
                }
                for (var i = 0;i<array.length;i++){
                    if (i + 1 == array.length){
                        break
                    }
                    expect(true).equal(array[i]>=array[i+1])
                }
            })
        })
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
    it('最佳数据-通证加V标识',function (){
        cy.visit('https://debug.tronscan.org/#/data/bestdata/token')
        cy.request('https://debugapilist.tronscan.org/api/top10?type=7,8,9,10&time=1')
            .its('body').as('dataVip').then(function (){
            for(let i in arr) {
                for (let j in this.dataVip[0].data) {
                    if (arr[i] == this.dataVip[0].data[j].token_id)  {
                        assert.equal(this.dataVip[0].data[j].vip, true, "token简称:" + this.dataVip[0].data[j].abbr
                            + " id:" + this.dataVip[0].data[j].token_id)
                    }
                    assert.isNotNaN(this.dataVip[0].data[j].holders, this.dataVip[0].data[j].abbr+' is not NaN')
                    assert.exists(this.dataVip[0].data[j].holders, this.dataVip[0].data[j].abbr +' is not null or undefined')
                }

                for (let j in this.dataVip[1].data) {
                    if (arr[i] == this.dataVip[1].data[j].token_id)  {
                        assert.equal(this.dataVip[1].data[j].vip, true, "token简称:" + this.dataVip[1].data[j].abbr
                            + " id:" + this.dataVip[1].data[j].token_id)
                    }
                    assert.isNotNaN(this.dataVip[1].data[j].address_number, this.dataVip[1].data[j].abbr+' is not NaN')
                    assert.exists(this.dataVip[1].data[j].address_number, this.dataVip[1].data[j].abbr +' is not null or undefined')
                }

                for (let j in this.dataVip[2].data) {
                    if (arr[i] == this.dataVip[2].data[j].token_id)  {
                        assert.equal(this.dataVip[2].data[j].vip, true, "token简称:" + this.dataVip[2].data[j].abbr
                            + " id:" + this.dataVip[2].data[j].token_id)
                    }
                    assert.isNotNaN(this.dataVip[2].data[j].transaction_number, this.dataVip[2].data[j].abbr+' is not NaN')
                    assert.exists(this.dataVip[2].data[j].transaction_number, this.dataVip[2].data[j].abbr +' is not null or undefined')
                }

                for (let j in this.dataVip[3].data) {
                    if (arr[i] == this.dataVip[3].data[j].token_id)  {
                        assert.equal(this.dataVip[3].data[j].vip, true, "token简称:" + this.dataVip[3].data[j].abbr
                            + " id:" + this.dataVip[3].data[j].token_id)
                    }
                    assert.isNotNaN(this.dataVip[3].data[j].amount, this.dataVip[3].data[j].abbr+' is not NaN')
                    assert.exists(this.dataVip[3].data[j].amount, this.dataVip[3].data[j].abbr +' is not null or undefined')
                }
            }
        })

    })
    })
