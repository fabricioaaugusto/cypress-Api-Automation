/// <reference types ="Cypress" />

describe('Get API User Tests', () => {

    it('get users by tests Go Rest.com', () => {
        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'authorization' : "Bearer "
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })

    it('get users assert name user', () => {
        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/60',
            headers : {
                'authorization' : "Bearer "
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Gemini Gill')
        })
    })

})
