import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
  let pipe: ShortenPipe;

  beforeEach(() => {
    pipe = new ShortenPipe();
  });

  it('should shorten long text', () => {
    const longText = 'A'.repeat(150);
    expect(pipe.transform(longText, 100)).toBe('A'.repeat(100) + '...');
  });

  it('should return original text if shorter than limit', () => {
    expect(pipe.transform('Hello', 10)).toBe('Hello');
  });

  it('should return empty string for null or undefined', () => {
    expect(pipe.transform(undefined as any)).toBe('');
    expect(pipe.transform(null as any)).toBe('');
  });
});
