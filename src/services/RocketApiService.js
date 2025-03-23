class RocketApiService {
    async fetchRocketsPaginated(page, limit) {
        const res = await fetch(`http://localhost:3000/api/rockets?page=${page}&limit=${limit}`);
        if (!res.ok) throw new Error("Error to find rockets paginated");
        return res.json();
    }

    async fetchRockets() {
        const res = await fetch('https://api.spacexdata.com/v4/rockets');
        if (!res.ok) throw new Error("Error to find rockets");
        return res.json();
    }

    async fetchRocketDetails(id) {
        const res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
        if (!res.ok) throw new Error("Error to find rocket details");
        return res.json();
    }
}

export default new RocketApiService();
