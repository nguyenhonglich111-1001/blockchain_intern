contract throughabi{

    constructor(){

    }
    bytes4 private constant transferSelector = bytes4(keccak256(bytes("transfer(address,uint256)")));
    bytes4 private constant transferFromSelector = bytes4(keccak256(bytes("transferFrom(address,address,uint256)")));

    function getSelector(string  calldata _func) external pure returns (bytes4) {
        return bytes4(keccak256(bytes(_func)));
    }
    
    function transferThroughABI(address _contract, address _to, uint256 _value) public returns(uint256,uint256){
        bytes memory data = abi.encodeWithSelector(transferSelector,_to,_value);

        (bool success, bytes memory returnData) = address(_contract).call(data);

        if (success) {
            if (returnData.length == 64)
                return abi.decode(returnData, (uint256, uint256));
            if (returnData.length == 32)
                return (abi.decode(returnData, (uint256)), 0);
        }
        return (0, 0);
    }
    
    function transferFromThroughABI(address _contract, address _from, address _to, uint256 _value) public returns(uint256,uint256){
        bytes memory data = abi.encodeWithSelector(transferFromSelector,_from,_to,_value);

        (bool success, bytes memory returnData) = address(_contract).call(data);

        if (success) {
            if (returnData.length == 64)
                return abi.decode(returnData, (uint256, uint256));
            if (returnData.length == 32)
                return (abi.decode(returnData, (uint256)), 0);
        }
        return (0, 0);
    }
}