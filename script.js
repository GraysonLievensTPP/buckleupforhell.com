document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', function() {
        document.getElementById('message').textContent = "Your journey through hell begins now!";
        initLightningOut();
    });
});

function initLightningOut() {
    $Lightning.use("c:LightningOutApp", function() {
        $Lightning.createComponent("c:LightningOutAuraComponent",
        {
            flowName: "Case_Create_Case_Website_Inputs"
        },
        "lightning-container",
        function(cmp) {
            console.log("Flow component created successfully");
        });
    }, 'https://protectionplus--staging.sandbox.lightning.force.com');
}