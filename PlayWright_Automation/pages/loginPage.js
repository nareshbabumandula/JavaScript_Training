class LoginPage{

    constructor(page){
        this.page=page;

        // Locators
        this.username='#user-name';
        this.password='#password';
        this.loginButton='#login-button';
        this.errorMessage = '//h3[@data-test="error"]'
        this.productsTitle = '//span[@class="title"]'
        this.menu = '#react-burger-menu-btn';
        this.logout = '#logout_sidebar_link';
    }

    // page actions
    async navigateTo(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(txtusername, txtpassword){
        await this.page.fill(this.username, txtusername);
        await this.page.fill(this.password, txtpassword);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
    
    async verifyProductsPage() {
        return await this.page.textContent(this.productsTitle);
    }
        
    async verifyLogout(){
        console.log("verifyLogout is invoked..!")
        await this.page.click(this.menu);
        await this.page.click(this.logout);
    }
}

export default LoginPage;