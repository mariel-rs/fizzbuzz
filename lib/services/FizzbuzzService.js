class FizzbuzzService{

    static applyValidationInExplorer(explorer){

        // Initialize trick field with score
        explorer.trick = explorer.score;

        // Logic
        if(explorer.score % 3 == 0){
            explorer.trick = "FIZZ";

            if(explorer.score % 5 == 0){
                explorer.trick = "FIZZBUZZ";
            }
        }
        else if(explorer.score % 5 == 0){
            explorer.trick = "BUZZ";
        }
        return explorer;
    }
}

module.exports = FizzbuzzService;