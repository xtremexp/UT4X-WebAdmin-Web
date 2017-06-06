import { UT4WebAdminHttpPage } from './app.po';

describe('ut4-web-admin-http App', () => {
  let page: UT4WebAdminHttpPage;

  beforeEach(() => {
    page = new UT4WebAdminHttpPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
