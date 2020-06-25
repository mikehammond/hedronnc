import Vue from 'vue'
import Buefy from 'buefy'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { application } from '../data'
import ApplicationCard from '@/components/ApplicationCard.vue'

Vue.use(Buefy)

describe('ApplicationCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ApplicationCard, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        application,
        link: `/applications/${application.id}/view`
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
