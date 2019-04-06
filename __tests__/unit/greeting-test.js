import { shallowMount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

test('Greeting', () => {
    const wrapper = shallowMount(Greeting)
    wrapper.setData({name: 'hoge'})
    expect(wrapper.find('h4').text()).toBe('Hello, hoge!')
})