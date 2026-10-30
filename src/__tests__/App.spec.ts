import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { appleProducts } from '@/data/products'

describe('App', () => {
  it('muestra el catálogo de productos Apple', () => {
    const wrapper = mount(App)

    expect(wrapper.get('h1').text()).toBe('Descubre nuestra colección.')
    expect(wrapper.findAll('.product-card')).toHaveLength(appleProducts.length)
    expect(wrapper.text()).toContain('iPhone 14 Pro')
  })
})
