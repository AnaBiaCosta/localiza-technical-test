/* eslint-disable import/no-anonymous-default-export */
class RocketApiService {
    async fetchRocketsPaginated(page, limit) {
        const res = await fetch(`api/rockets?page=${page}&limit=${limit}`);
        if (!res.ok) throw new Error("Error to find rockets paginated");
        return res.json();
    }

    async fetchRockets() {
        const res = await fetch(`${process.env.SPACEX_DOMAIN_API}/rockets`);
        if (!res.ok) throw new Error("Error to find rockets");
        return res.json();
    }

    async fetchRocketDetails(id) {
        const res = await fetch(`${process.env.SPACEX_DOMAIN_API}/rockets/${id}`);
        if (!res.ok) throw new Error("Error to find rocket details");
        return res.json();
    }
}

export default new RocketApiService();
