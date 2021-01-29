import ApiService from './index';

const GITHUB_API = 'https://api.github.com';
const USER = 'jotacemarin';

export const GithubService = {
    async getUser() {
        const { data } = await ApiService.get(`${GITHUB_API}/users/${USER}`);
        return data;
    },
    async getRepos() {
        const { data } = await ApiService.get(`${GITHUB_API}/users/${USER}/repos`);
        return data;
    },
    async getFollowers() {
        const { data } = await ApiService.get(`${GITHUB_API}/users/${USER}/followers`);
        return data;
    },
};