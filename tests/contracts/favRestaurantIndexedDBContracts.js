const itActsAsFavRestaurantIndexedDBModel = (FavoriteRestaurantIndexedDB) => {
  it('should return the restaurant that has been added', async () => {
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 1 })
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 2 })
    expect(await FavoriteRestaurantIndexedDB.getRestaurant(1)).toEqual({ id: 1 })
    expect(await FavoriteRestaurantIndexedDB.getRestaurant(2)).toEqual({ id: 2 })
    expect(await FavoriteRestaurantIndexedDB.getRestaurant(3)).toEqual(undefined)
  })
  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    FavoriteRestaurantIndexedDB.putRestaurant({ aProperty: 'property' })
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([])
  })
  it('can return all of the restaurants that have been added', async () => {
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 1 })
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 2 })
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }])
  })
  it('should remove favorite restaurant', async () => {
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 1 })
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 2 })
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 3 })
    await FavoriteRestaurantIndexedDB.deleteRestaurant(1)
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }])
  })
  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 1 })
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 2 })
    FavoriteRestaurantIndexedDB.putRestaurant({ id: 3 })
    await FavoriteRestaurantIndexedDB.deleteRestaurant(4)
    expect(await FavoriteRestaurantIndexedDB.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })
}
export { itActsAsFavRestaurantIndexedDBModel }
