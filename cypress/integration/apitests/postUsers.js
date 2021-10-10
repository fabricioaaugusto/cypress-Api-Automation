/// <reference types ="Cypress" />



describe('tests post user resqusts', () => {
let accessToken = '48cae876d5d9286d0d32ea6f001e3f172e80dcd55258b7cb5744e44d9b7d3c97'
    
    it('create user test', () => { 
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization':  'Bearer ' + accessToken
            },
            body: {
                "name": "fafatoPu",
                "email": "cyteste112@gusikowski.org",
                "gender": "female",
                "status": "active"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('name', 'fafatoPu')
            expect(res.body.data).has.property('email', 'cyteste112@gusikowski.org')
            expect(res.body.data).has.property('gender', 'female')
            expect(res.body.data).has.property('status', 'active')
        })
    })
})