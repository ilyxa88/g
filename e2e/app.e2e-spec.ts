import { Guileo2Page } from './app.po';

describe('guileo2 App', function() {
  let page: Guileo2Page;

  beforeEach(() => {
    page = new Guileo2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
