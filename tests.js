test("Example", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");
  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-2");
  assert.propEqual(convertRomanToInteger("x"), {value: 10, message: '', result: true}, "TC-3");
  assert.propEqual(convertRomanToInteger("C"), {value: 100, message: '', result: true}, "TC-4");
  assert.propEqual(convertRomanToInteger("M"), {value: 1000, message: '', result: true}, "TC-5");
  assert.propEqual(convertRomanToInteger("MMMMMMMMM"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-6");
  assert.propEqual(convertRomanToInteger("IIIIIIIIIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-7");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-8");
  
  assert.propEqual(convertIntegerToRoman(1), {value: 'I', message: '', result: true}, "TC-9");
  assert.propEqual(convertIntegerToRoman(10), {value: 'X', message: '', result: true}, "TC-10");
  assert.propEqual(convertIntegerToRoman(100), {value: 'C', message: '', result: true}, "TC-11");
  assert.propEqual(convertIntegerToRoman(1000), {value: 'M', message: '', result: true}, "TC-12");
  assert.propEqual(convertIntegerToRoman(10000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-13");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-14");
  assert.propEqual(convertIntegerToRoman(3999), {value: 'MMMCMXCIX', message: '', result: true}, "TC-15");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-16");
  assert.propEqual(convertIntegerToRoman(-1), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-17");  
});
