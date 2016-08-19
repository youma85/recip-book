import { RecipBookPage } from './app.po';

describe('recip-book App', function() {
  let page: RecipBookPage;

  beforeEach(() => {
    page = new RecipBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
