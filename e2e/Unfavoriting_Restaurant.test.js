Feature('Unfavoriting Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/')
})

Scenario('Unfavoriting one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.post-item__title')
  const firstRestaurant = locate('.post-item__title a').first()
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/')

  I.amOnPage('/#/Favorited')
  I.seeElement('restaurant-item')

  I.seeElement('.post-item__title')
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/')

  I.amOnPage('/#/Favorited')
  I.see('You haven\'t favorite any restaurants yet 😔', '.emptySign')
})
