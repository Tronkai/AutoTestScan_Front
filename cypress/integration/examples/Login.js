describe('连接钱包', () => {
    it('导入私钥钱包', () => {
        cy.visit('https://tronscan.org/#/walletconnect/importWallet')
        cy.get('.ant-input').type('01')
        cy.waitUntil(() => cy.get('.ant-btn')).click()
        cy.get('.ant-btn').click()
        cy.get('.nav-static > .nav-link').invoke('text').then( address => {
            expect("TMVQGm1qAQYVdetCeGRRkTWYYrLXuHK2HC").to.equal(address)
        })
        cy.get('.nav-static > .nav-link').click()
        })
})
