import ApiService from './index';

const LINKEDIN_API = 'https://api.linkedin.com';
const ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const OPTIONS = {
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0'
    },
};

export const GithubService = {
    async getUser() {
        const { data } = await ApiService.get(`${LINKEDIN_API}/v2/me`, ...OPTIONS);
        return data;
    },
};