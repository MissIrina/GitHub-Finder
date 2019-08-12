class Github {
  constructor() {
    this.client_id = '43e48be89d6be3c157cc';
    this.client_secret = 'e677e36d79ffca14ab64318871f4854a23ea7303';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}