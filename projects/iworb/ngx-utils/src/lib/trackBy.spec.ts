import { trackBy } from './trackBy';

describe('trackBy', () => {
  const trackByUndefined = trackBy(undefined);
  const trackByNull = trackBy(null);
  const trackById = trackBy('id');
  const trackByFoo = trackBy('foo');
  const obj = {
    undefined: 'undefined',
    null: 'null',
    id: 'id'
  };

  it('should return function to track by undefined', () => {
    expect(trackByUndefined(obj)).toBe('undefined');
  });

  it('should return function to track by null', () => {
    expect(trackByNull(obj)).toBe('null');
  });

  it('should return function to track by existing field', () => {
    expect(trackById(obj)).toBe('id');
  });

  it('should return function to track by not existing field, which returns false', () => {
    expect(trackByFoo(obj)).toBeFalse();
  });
});
