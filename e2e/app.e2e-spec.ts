import { YoFitnessPage } from './app.po';

describe('yo-fitness App', function() {
  let page: YoFitnessPage;

  beforeEach(() => {
    page = new YoFitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
