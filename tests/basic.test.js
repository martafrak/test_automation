import { Selector } from 'testcafe'

//prettier-ignore
fixture `Getting started with TestCafe documentation`
    .page `https://devexpress.github.io/testcafe/`
    .before(async t => {
        //test setup example: runDatabase, seedTestData etc.
        //we can also use beforeEach, after and afterEach ('after' for cleaning data or logging)
    })
    .beforeEach(async t => {
        //change speed for all tests in file
        await t.setTestSpeed(1)
    })
test('search testcontroller', async t => {
    //change speed for 1 test: 1 - default speed, 0.1 is helpfull for debugging
    //await t.setTestSpeed(1)
    //await t.wait(4000)
    await t.click('#search-icon')
    await t.typeText('#search', "testcontroller")
    await t.pressKey('enter')   
    
    await t.expect(Selector('.post-content').innerText).contains("A test controller object exposes the test API's methods.")
})
