class ExplorerService{

    static filterByMission(explorers, mission){

        const result = explorers.filter((exp) => exp.mission == mission);

        return result;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const result = explorers.filter((exp) => exp.mission == mission).length;
        
        return result;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const result = explorers.filter((exp) => exp.mission == mission);
        const usernames = result.map((exp) => exp.githubUsername);
        
        return usernames;
    }
}

module.exports = ExplorerService;