import {
  createModule, mutation, action, extractVuexModule,
} from 'vuex-class-component';

const VuexModule = createModule({
  // namespaced: 'userStore',
  strict: false,
});

export default class UserStore extends VuexModule {
  public loggedIn = false;

  @mutation mutationTest() {
    console.log('mutationTest');
  }

  @action async login() {
    this.loggedIn = true;
    this.mutationTest();
    this.actionTest();
  }

  /** Authenticates the logged-in player. */
  @action async actionTest(): Promise<any> {
    console.log('actionTest');
  }
}
