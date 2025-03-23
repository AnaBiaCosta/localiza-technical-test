import RocketApiService from "@/services/RocketApiService";

class RocketsDatabase {
  constructor() {
    if (!RocketsDatabase.instance) {
      this.rocketsDB = [];
      RocketsDatabase.instance = this;
    }
    return RocketsDatabase.instance;
  }

  async initializeDB() {
    if (this.rocketsDB.length > 0) return;

    console.log("🔄 Buscando dados da SpaceX...");
    const rockets = await RocketApiService.fetchRockets();

    while (this.rocketsDB.length < 50) {
      this.rocketsDB.push(
        ...rockets.map((rocket) => ({
          localId: `${rocket.id}-${this.rocketsDB.length}`,
          ...rocket,
        }))
      );
    }

    console.log(
      "✅ Banco de dados carregado com",
      this.rocketsDB.length,
      "itens"
    );
  }

  getPaginatedRockets(page, limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return {
      page,
      limit,
      total: this.rocketsDB.length,
      totalPages: Math.ceil(this.rocketsDB.length / limit),
      data: this.rocketsDB.slice(startIndex, endIndex),
    };
  }
}

const instance = new RocketsDatabase();
Object.freeze(instance);
export default instance;
