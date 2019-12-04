import FirestoreService from "./firestore-service";

export default class MealsService extends FirestoreService {
    getMeals(filters) {
        const withFilters = collection => { 
            let wrappedCollection = collection;
            if (filters.maxPriceFilter !== null) {
                wrappedCollection = wrappedCollection.where('price', '<=', filters.maxPriceFilter);
            }
            if (filters.minPriceFilter !== null) {
                wrappedCollection = wrappedCollection.where('price', '>=', filters.minPriceFilter)
            }
            return wrappedCollection;
        };
        return this.fetchCollection('meals', withFilters);
    }
}