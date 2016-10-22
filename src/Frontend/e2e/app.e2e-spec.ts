import { AspNetCoreAngular2CliPage } from './app.po';

describe('asp-net-core-angular2-cli App', function() {
  let page: AspNetCoreAngular2CliPage;

  beforeEach(() => {
    page = new AspNetCoreAngular2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
