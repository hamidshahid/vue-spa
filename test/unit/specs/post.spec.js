import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  function createComponent () {
    const PostConstructor = Vue.extend(Post)
    const comp = new PostConstructor({
      propsData: {
        link: 'http://www.pluralsight.com'
      }
    }).$mount()
    return comp
  }
  it('should render the link', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralsight.com')
  })
  it('should relfect changed href', (done) => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.pluralsight.com')
    console.log('Verfieid that link is pluralsight')

    comp.link = 'http://www.google.com'
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal('http://www.google.com')
    })
    done()
    console.log('Verfieid that link is google')
  })
})
