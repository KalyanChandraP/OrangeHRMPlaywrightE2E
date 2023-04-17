import { test ,Page } from "@playwright/test";


export class LoginPageLocators{
    orangeHRMLogo : string  =  "img[src*='ohrm_branding.png']";
    loginLogo : string = "//h5[text()='Login']";
    userName = "//label[text()='Username']";
    password = "//label[text()='Password']";
    usernameTextBox = "[name='username']";
    passwordTextBox = "[name='password']";
    loginButton =  "//button[text()=' Login ']";
    forgotPasswordLink = "//p[text()='Forgot your password? ']";
    resetPasswordTitle = "//h6[text()='Reset Password']";
    usernameResetPage = "//label[text()='Username']";
    usernameTextBoxResetPage = "[name='username']"
    resetPasswordButton = "//button[text()=' Reset Password ']";
    cancelButton = "//button[text()=' Cancel ']";
}

