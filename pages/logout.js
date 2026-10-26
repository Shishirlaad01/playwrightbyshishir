class logout{
    constructor (page)
    {
        this.page=page
        this.menu=page.locator('span.oxd-userdropdown-tab')
        this.logoutbutton=page.getByRole('menuitem', { name: /Logout/i })
    
    }
 
    async logoutaction()
    {
        await this.menu.click()
        await this.logoutbutton.click()
    }
}
module.exports=logout;