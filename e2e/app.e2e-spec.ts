import { LeagueClubPage } from './app.po';

describe('league-club App', () => {
  let page: LeagueClubPage;

  beforeEach(() => {
    page = new LeagueClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
