import { MomentUtils } from '../../../src/utils';

describe('Validate moment utilities', () => {
    it('format display date', () => {
        const date = MomentUtils.display(Date.now());
        expect(typeof date).toBe('string');
    });
});