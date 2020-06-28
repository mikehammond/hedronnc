import Buefy from 'buefy'
import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import { application, step, task } from '../data'
import ApplicationCard from '@/components/ApplicationCard.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

describe('ApplicationCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ApplicationCard, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        application,
        link: `/applications/${application.id}/view`
      },
      computed: {
        steps: () => ([step]),
        tasks: () => ([task]),
        progress: () => 54
      },
      localVue
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
