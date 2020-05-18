import { observable, action, computed } from 'mobx';

class BirdStore {
    // property
    @observable birds = []; // Observable is the data that we want to keep track of. Here, birds is a property.
    @action addBird = (bird) => { // action is a function where you change the value of the property.
        this.birds.push(bird);
    }
    @computed get birdCount() { // This will help in performing calculations and sync those with component that is displaying it
        return this.birds.length;
    }
}
const store = new BirdStore(); // single instance - will be used in entire app instead of creating copies
export default store;