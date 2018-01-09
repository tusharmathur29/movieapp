import { browser, element, by } from 'protractor';

export class DashboardPage {
    navigateTo() {
        // Navigate to the home page of the app
        return browser.get('/');
    }

    getActiveMenuText() {
        // Get the home page active menu text reference
        return element(by.css('.current-menu-item a')).getText();
    }

    getDisplayedSectionCount() {
        return element.all(by.css('section')).count();
    }

    getFirstSectionTitle() {
        return element.all(by.css('section .panel-title .section-maintitle')).get(0).getText();
    }

    getSecondSectionTitle() {
        return element.all(by.css('section .panel-title .section-maintitle')).get(1).getText();
    }

    getThirdSectionTitle() {
        return element.all(by.css('section .panel-title .section-maintitle')).get(2).getText();
    }
}
