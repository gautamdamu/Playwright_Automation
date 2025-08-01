export class LoginPage {

  constructor(page) {

    this.page = page;
    this.username_textbox = page.locator('//input[@id="username"]');
    this.password_textbox = page.locator('//input[@id="password"]');
    this.login_button = page.locator('//button[@type="submit"]');
  }

  async gotoLoginPage(){
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password){
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}
