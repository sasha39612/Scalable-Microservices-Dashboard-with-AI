import { logger } from '../../src/logging/logger';

describe('Logger', () => {
  it('should have info, warn, error methods', () => {
    expect(typeof logger.info).toBe('function');
    expect(typeof logger.warn).toBe('function');
    expect(typeof logger.error).toBe('function');
  });
});
