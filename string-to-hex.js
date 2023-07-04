module.exports = function(RED) {
    function StringToHexNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = Buffer.from(msg.payload, "hex");
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-to-hex",StringToHexNode);
}