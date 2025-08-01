import{test, expect} from '@playwright/test'

test('Selectors Demo', async({page}) =>{
    await page.goto('https://www.saucedemo.com/v1/');
    
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('id=password').fill('secret_sauce');
    await page.locator('#login-button').click();
})