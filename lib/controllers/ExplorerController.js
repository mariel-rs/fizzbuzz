const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);

        return explorersInMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const usernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return usernamesInMission;
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const totalExplorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);

        return totalExplorersInMission;
    }
}

module.exports = ExplorerController;