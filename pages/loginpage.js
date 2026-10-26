class Loginpage {
    constructor(page) 
    {
        this.page=page
        this.username= page.getByRole('textbox', { name: /Username/i });
        this.password= page.locator('[name="password"]');  
        this.loginbutton= page.getByRole('button', { name: /Login/i });   
        
    }

    async logintoapp(){
        await this.username.fill('Admin')
        await this.password.fill('admin123')
        await this.loginbutton.click()
    }

}
module.exports=Loginpage;