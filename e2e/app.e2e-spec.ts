import { AngularPostBasicsPage } from './app.po';

describe('angular-post-basics App', () => {
  let page: AngularPostBasicsPage;

  beforeEach(() => {
    page = new AngularPostBasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
