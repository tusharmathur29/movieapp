import { browser, element, by } from 'protractor';

export class MyRecommendationsPage {
    navigateTo() {
        // Navigate to the home page of the app
        return browser.get('/my-recommendations');
    }

    getActiveMenuText() {
        // Get the home page active menu text reference
        return element(by.css('.current-menu-item a')).getText();
    }

    getDisplayedSectionCount() {
        return element.all(by.css('section')).count();
    }

    getFirstSectionTitle() {
        return element.all(by.css('section .panel-title')).get(0).getText();
    }

    getSecondSectionTitle() {
        return element.all(by.css('section .panel-title')).get(1).getText();
    }

    getTextFieldFromSearchSection() {
        return element.all(by.css('section')).get(0).element(by.id('search-text-field'));
    }

    getButtonFromSearchSection() {
        return element.all(by.css('section')).get(0).element(by.id('search-button'));
    }
}
