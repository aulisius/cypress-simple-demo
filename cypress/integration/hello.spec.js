describe("Mocha based constructs", () => {
    context("Testing website", () => {
        before(() => {
            cy.visit("/")
        })

        it("shows my name", () => {
            cy.contains("Faizaan")
        })

        it("contains proper link for ResellerClub", () => {
            cy.get(`a[href="https://india.resellerclub.com/"]`).should("exist")
        })

        it("stores snapshot of contact links", () => {
            cy.get(':nth-child(6)').snapshot()
        })
    })
})