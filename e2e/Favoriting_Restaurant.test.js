const assert = require('assert')
Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/Favorited')
})

Scenario('showing empty Favorited Restaurant', ({ I }) => {
  I.see('You haven\'t favorite any restaurants yet 😔', '.emptySign')
})
Scenario('Favoriting one restaurant', async ({ I }) => {
  I.see('You haven\'t favorite any restaurants yet 😔', '.emptySign')
  I.amOnPage('/')

  I.seeElement('.post-item__title')
  const firstRestaurant = locate('.post-item__title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/Favorited')
  I.seeElement('restaurant-item')
  const likedRestaurantTitle = (await I.grabTextFrom('.post-item__title')).trim()
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})
