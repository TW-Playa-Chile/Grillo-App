describe('Profile management', () => {
  it('can add a profile, by name', async () => {
    await browser.waitForExist('~Enter habit button');
    await browser.click('~Enter habit button');
    await browser.waitForExist('~Add habit button');
    await browser.click('~Add habit button');
  });
});
