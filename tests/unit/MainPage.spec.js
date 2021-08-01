import { shallowMount } from '@vue/test-utils'
import MainPage from '@/pages/MainPage.vue'

describe('MainPage.vue', () => {
  let wrapper;
 beforeEach(()=>{
   wrapper = shallowMount(MainPage, {
      methods:{ getWeather: ()=>{}}
   })
 })
   
  it("renders", () => {
    })
    expect(wrapper.exists()).toBe(true);
  })
