const test = require('ava')
const OpenProps = require('../dist/open-props.cjs')
const OPtokens = require('../open-props.tokens.json')

test('Should have an all included import', t => {
  t.is(Object.keys(OpenProps).length, 351)
})

test('Import should have animations', async t => {
  t.assert(Object.keys(OpenProps).includes('--animation-fade-in'))
})

test('Import should have sizes', async t => {
  t.assert(Object.keys(OpenProps).includes('--size-5'))
})

test('Import should have colors', async t => {
  t.assert(Object.keys(OpenProps).includes('--orange-0'))
})

test('JSON Import should have colors', async t => {
  t.is(Object.keys(OPtokens).length, 274)
  t.assert(Object.keys(OPtokens).includes('--orange-0'))
})