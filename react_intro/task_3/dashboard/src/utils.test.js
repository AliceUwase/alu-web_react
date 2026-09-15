import { getFooterCopy, getFullYear, getLatestNotification} from './utils';

test(
    'getFullYear returns the current year', () => {
        const currentYear = new Date().getFullYear();

        expect(getFullYear()).toBe(currentYear);
    }
);


test(
    'getFooterCopy returns the correct string', () => {
    expect(getFooterCopy(true)).toBe(' Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test(
    'getLatestNotification return the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    }
);