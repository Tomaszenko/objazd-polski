import { ObjazdPolskiPage } from './app.po';

describe('objazd-polski App', () => {
  let page: ObjazdPolskiPage;

  beforeEach(() => {
    page = new ObjazdPolskiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
