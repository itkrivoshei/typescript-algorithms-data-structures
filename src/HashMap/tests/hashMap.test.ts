import { HashMap, HashSet } from '../hashMap';

describe('HashMap', () => {
  let hashMap: HashMap<number>;

  beforeEach(() => {
    hashMap = new HashMap<number>();
  });

  test('should set and get a key-value pair', () => {
    hashMap.set('testKey', 1);
    expect(hashMap.get('testKey')).toBe(1);
  });

  test('should overwrite existing value with same key', () => {
    hashMap.set('testKey', 1);
    hashMap.set('testKey', 2);
    expect(hashMap.get('testKey')).toBe(2);
  });

  test('should return null for non-existent key', () => {
    expect(hashMap.get('nonExistentKey')).toBeNull();
  });

  test('should check presence of a key with has()', () => {
    hashMap.set('testKey', 1);
    expect(hashMap.has('testKey')).toBe(true);
    expect(hashMap.has('nonExistentKey')).toBe(false);
  });

  test('should keep existing values accessible after resize', () => {
    const resizedMap = new HashMap<number>(4);

    Array.from({ length: 12 }, (_, index) => {
      resizedMap.set(`key-${index}`, index);
    });

    expect(resizedMap.length()).toBe(12);
    expect(resizedMap.get('key-0')).toBe(0);
    expect(resizedMap.get('key-11')).toBe(11);
  });

  test('should remove a key-value pair', () => {
    hashMap.set('testKey', 1);
    const result = hashMap.remove('testKey');
    expect(result).toBe(true);
    expect(hashMap.has('testKey')).toBe(false);
  });

  test('should return false when removing non-existent key', () => {
    expect(hashMap.remove('nonExistentKey')).toBe(false);
  });

  test('should clear all key-value pairs', () => {
    hashMap.set('testKey1', 1);
    hashMap.set('testKey2', 2);
    hashMap.clear();
    expect(hashMap.length()).toBe(0);
  });

  test('should return all keys', () => {
    hashMap.set('testKey1', 1);
    hashMap.set('testKey2', 2);
    expect(hashMap.keys()).toEqual(expect.arrayContaining(['testKey1', 'testKey2']));
  });

  test('should return all values', () => {
    hashMap.set('testKey1', 1);
    hashMap.set('testKey2', 2);
    expect(hashMap.values()).toEqual(expect.arrayContaining([1, 2]));
  });

  test('should return all entries', () => {
    hashMap.set('testKey1', 1);
    hashMap.set('testKey2', 2);
    expect(hashMap.entries()).toEqual(
      expect.arrayContaining([
        ['testKey1', 1],
        ['testKey2', 2],
      ])
    );
  });
});

describe('HashSet', () => {
  let hashSet: HashSet;

  beforeEach(() => {
    hashSet = new HashSet();
  });

  test('should add and check the existence of a key', () => {
    hashSet.add('testKey');
    expect(hashSet.has('testKey')).toBe(true);
  });

  test('should remove a key', () => {
    hashSet.add('testKey');
    const result = hashSet.remove('testKey');
    expect(result).toBe(true);
    expect(hashSet.has('testKey')).toBe(false);
  });

  test('should clear all keys', () => {
    hashSet.add('testKey1');
    hashSet.add('testKey2');
    hashSet.clear();
    expect(hashSet.length()).toBe(0);
  });

  test('should return all keys', () => {
    hashSet.add('testKey1');
    hashSet.add('testKey2');
    expect(hashSet.values()).toEqual(expect.arrayContaining(['testKey1', 'testKey2']));
  });
});
