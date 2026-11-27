import { test } from 'node:test'
import assert from 'node:assert/strict'
import { RULES, validate } from '../rules.js'
test('입력 검증: 문자열·공백·경계·trim', () => {
  for (const x of [null,42,{},[], '   ']) assert.ok(validate(x).error)
  assert.equal(validate(' 가나 ').text,'가나')
  assert.ok(validate('a'.repeat(RULES.maxLength+1)).error)
  assert.equal(validate('a'.repeat(RULES.maxLength)).text.length,RULES.maxLength)
  assert.ok(validate('a'.repeat(RULES.minLength-1)).error)
})
test('002 최대 20자: 한글·영문 경계 (0 거절, 최소·20 성공, 21 거절)', () => {
  assert.equal(RULES.maxLength,20)
  for (const ch of ['가','a']) {
    assert.ok(validate('').error)
    assert.equal(validate(ch.repeat(RULES.minLength)).text,ch.repeat(RULES.minLength)) // 003에서 최소 2자로 변경
    assert.equal(validate(ch.repeat(20)).text.length,20)
    assert.ok(validate(ch.repeat(21)).error)
    assert.equal(validate('  '+ch.repeat(20)+'  ').text.length,20)
  }
})
test('003 최소 길이: 1자 거절, 2자·20자 성공, 21자 거절 (한글·영문)', () => {
  assert.deepEqual(RULES, { minLength: 2, maxLength: 20 })
  for (const ch of ['가','a']) {
    assert.ok(validate(ch).error)
    assert.ok(validate(`  ${ch}  `).error)
    assert.equal(validate(ch.repeat(2)).text, ch.repeat(2))
    assert.equal(validate(` ${ch.repeat(20)} `).text, ch.repeat(20))
    assert.ok(validate(ch.repeat(21)).error)
  }
  assert.ok(validate('').error)
  assert.ok(validate(undefined).error)
})
