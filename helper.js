import { t } from 'testcafe'

export async function login(username, password) {
    await t.click('.login')
    await t.typeText('#email', username, {paste: true})
    await t. typeText('#passwd', password, {paste: true})
    await t.click('#SubmitLogin')
}