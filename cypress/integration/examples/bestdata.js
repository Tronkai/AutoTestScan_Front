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
    })
