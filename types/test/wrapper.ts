import { mount } from '../'
import { normalOptions, functionalOptions, Normal, ClassComponent } from './resources'

/**
 * Tests for BaseWrapper API
 */
let wrapper = mount<Normal>(normalOptions)

let bool: boolean = wrapper.contains('.foo')
bool = wrapper.contains(normalOptions)
bool = wrapper.contains(ClassComponent)

bool = wrapper.exists()

bool = wrapper.hasAttribute('foo', 'bar')
bool = wrapper.hasClass('foo-class')
bool = wrapper.hasProp('checked', true)
bool = wrapper.hasStyle('color', 'red')

bool = wrapper.is(normalOptions)
bool = wrapper.isEmpty()
bool = wrapper.isVueInstance()

wrapper.update()
wrapper.setData({ foo: 'bar' })
wrapper.setProps({ checked: true })
wrapper.trigger('mousedown.enter', {
  preventDefault: true
})

/**
 * Tests for Wrapper API
 */
wrapper.vm.foo
wrapper.vm.$emit('event', 'arg')

let el: HTMLElement = wrapper.element

bool = wrapper.options.attachedToDocument

let found = wrapper.find('.foo')
found = wrapper.find(normalOptions)
found = wrapper.find(functionalOptions)
found = wrapper.find<ClassComponent>(ClassComponent)

let array = wrapper.findAll('.bar')
array = wrapper.findAll(normalOptions)
array = wrapper.findAll(functionalOptions)
array = wrapper.findAll<ClassComponent>(ClassComponent)

let str: string = wrapper.html()
str = wrapper.text()
str = wrapper.name()

/**
 * Tests for WrapperArray API
 */
let num: number = array.length
found = array.at(1)
