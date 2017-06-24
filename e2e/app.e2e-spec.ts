import { AirbnbPage } from './app.po';

describe('airbnb App', () => {
  let page: AirbnbPage;

  beforeEach(() => {
    page = new AirbnbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
