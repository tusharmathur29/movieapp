import { DashboardPage } from './dashboard.po';
import { MyRecommendationsPage } from './myrecommendations.po';

describe('Dashboard Page tests', function () {

    it('should highlight dashboard menu item on dashboard page', () => {
        const page = new DashboardPage();
        page.navigateTo();
        expect(page.getActiveMenuText()).toEqual('DASHBOARD');
    });

    it('should display 3 sections on dashboard page', () => {
        const page = new DashboardPage();
        page.navigateTo();
        expect(page.getDisplayedSectionCount()).toEqual(3);
    });

    it('should have the first section title as Forthcoming Movies on dashboard page', () => {
        const page = new DashboardPage();
        page.navigateTo();
        expect(page.getFirstSectionTitle()).toEqual('Forthcoming Movies');
    });

    it('should have the second section title as Trending Movies on dashboard page', () => {
        const page = new DashboardPage();
        page.navigateTo();
        expect(page.getSecondSectionTitle()).toEqual('Trending Movies');
    });

    it('should have the third section title as Recommended Movies on dashboard page', () => {
        const page = new DashboardPage();
        page.navigateTo();
        expect(page.getThirdSectionTitle()).toEqual('Recommended Movies');
    });

    it('should highlight Recommendations menu item on My Recommendation Page', () => {
        const page = new MyRecommendationsPage();
        page.navigateTo();
        expect(page.getActiveMenuText()).toEqual('RECOMMENDATIONS');
    });

    it('should display 2 sections on My Recommendation Page', () => {
        const page = new MyRecommendationsPage();
        page.navigateTo();
        expect(page.getDisplayedSectionCount()).toEqual(2);
    });

    it('should have the first section title as Search Movies on My Recommendation Page', () => {
        const page = new MyRecommendationsPage();
        page.navigateTo();
        expect(page.getFirstSectionTitle()).toEqual('Search Movies');
    });

    it('should have search text field in search section on My Recommendation Page', () => {
        const page = new MyRecommendationsPage();
        page.navigateTo();
        expect(page.getTextFieldFromSearchSection()).toBeDefined();
    });

    it('should have search button in search section on My Recommendation Page', () => {
        const page = new MyRecommendationsPage();
        page.navigateTo();
        expect(page.getButtonFromSearchSection()).toBeDefined();
    });

    it('should have the second section title as My Recommendations on My Recommendation Page', () => {
        const page = new MyRecommendationsPage();
        page.navigateTo();
        expect(page.getSecondSectionTitle()).toEqual('My Recommendations');
    });

});
